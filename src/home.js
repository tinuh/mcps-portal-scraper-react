import React, {useState} from 'react';
import './App.css';
import Login from "./login";

function Home(){
  const [ShowLogin, setShowLogin] = useState(true);

  function login_portal(username, password) {
    // setTimeout(() => setShowLogin(false), 5000);
    window.open("https://portal.mcpsmd.net");

  }

  return (
      <div className="Home">
          { ShowLogin && <Login login_portal = {login_portal}/>}
      </div>
  );

}

export default Home;
