import { useState, useEffect } from 'react'
import './App.css'
import Profile from './components/Profile';
import SearchForm from './components/SearchForm';

function App() {
  const [user, setUser] = useState("andruixxd31");
  const [profilePic, setProfilePic] = useState("https://robohash.org/andruixxd31");

  useEffect(() => {
    const fetchUser = async () => {
        try {
          const url = "https://robohash.org/" + user;
          const response = await fetch(url);
          setProfilePic(response.url)
        } catch (err) {
           console.log(err); 
        }
    }
    fetchUser();
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(e.target.elements.user.value)
  }


  return (
    <>
        <Profile user={user} profilePic={profilePic}/>
        <SearchForm handleSubmit={(e) => handleSubmit(e)}/>
    </>
  )
}

export default App
