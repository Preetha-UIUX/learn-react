import { useState, useEffect} from "react"

const useFetch = (url, option = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url, { ...option });
      if (!response.ok) throw new Error(response.statusText);
      
      const result = await response.json();
      if(result) {
        setData(result);
        setError(null);
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url])

  return { data, error, loading }
}

export default useFetch
