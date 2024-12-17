import { useEffect, useState } from "react"


const Users = () => {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchAllUSers = async () => {
        try {
            setLoading(true)
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json();
            console.log(result);
            if(result?.users) {
                setLoading(false)
                setUserList(result?.users)
            } else {
                setLoading(false)
                setUserList([])
            }
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAllUSers();
    }, [])
    console.log('userList',userList);
    
  return (
    <div>
      <h1>All Users list</h1>
      {loading ? (
        <h3>Fectching Users. Please Wait!!!</h3>
    ) : (
        <ul>
            {userList && userList.length > 0 ? (
                userList.map((userItem) => (
                    <li key={userItem.id}>
                        <p>{userItem.firstName} {userItem.lastName}</p>
                    </li>
                ))
            ) : <h1>No users found. Please try again ☹</h1>}
        </ul>
      ) }
    </div>
  )
}

export default Users
