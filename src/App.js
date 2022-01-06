import { useState, useEffect } from "react";

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
       
        <div className="container">
          
          <h1  key={user.id}>{user.name}</h1>
          <h3> {user.email} </h3>
          
        </div>
      

     ))}

   </div> 
  )
    
}

export default App;
