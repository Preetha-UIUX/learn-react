import { useMemo, useState } from "react";
import useFetch from "../../hooks/useFetch";

const MemoExample = () => {
  const { data, loading } = useFetch("https://dummyjson.com/products");
  const [flag, setFlag] = useState(false);

  const filterProductByPrice = (getProduct) => {
    console.log("getProduct", getProduct);

    return getProduct?.length > 0
      ? getProduct.filter((singleProductItem) => singleProductItem.price > 0)
      : [];
  };

  const memoizedValue = useMemo(
    () => filterProductByPrice(data?.products),
    [data?.products]
  );

  if (loading) return <h2>Fetching Product Data! Please Wait...</h2>;

  console.log(data);

  return (
    <div>
      <h2 style={{ color: flag ? "Green" : "#00257A" }}>Use Memo Example</h2>
      <button onClick={() => setFlag(!flag)}>Toggle flag</button>
      <ul>
        {memoizedValue.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MemoExample;
