import { useState, useEffect } from "react";
import User from "./component/User"

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async() => {
      const usersFromServer = await fetchUsers();
      setUsers(usersFromServer);
    }
    getUsers();
  }, [])

  const fetchUsers = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = (await res).json();
    return data;
  }


  return (
   <div className="body">
     {users.map((user) => (
       
        <div className="container" key={user.id}>
          <User prop={user} />
          
        </div>
      

     ))}

   </div> 
  )
    
}

export default App;
