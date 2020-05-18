import React, {useState, useEffect} from 'react';
import './App.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function login_scrape(){
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

function Login() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      login_scrape().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <div className="Login">
      <h1 className = "heading">Login with MCPS Credentials</h1><br />
      <div className="login-div">
          <Form>
            <Form.Control size = "lg" type="text"  placeholder="MCPS ID" /><br />
            <Form.Control size = "lg" type="password" placeholder="Password" /><br />
            <Button size = "lg" disabled={isLoading} onClick={!isLoading ? handleClick : null} className = "login-btn" variant="outline-light">{isLoading ? 'Logging in…' : 'Login'}</Button>
          </Form>
      </div>
    </div>
  );
}

export default Login;