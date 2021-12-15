
import './App.css';
import UserList from './UserList';
import { useState,useEffect } from 'react';
import axios from 'axios';

function App() {
  const [user, setuser] = useState()

  useEffect(async() => {
    let result = await axios.get("https://jsonplaceholder.typicode.com/users")
    setuser(result.data)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
      <img width='100px' height="100px" src="https://findicons.com/files/icons/1994/vista_style_business_and_data/256/users.png" alt="users" />
        <h1>UserList</h1>
        <UserList user={user}/>
      </header>
    </div>
  );
}

export default App;
