import React from 'react';
import './App.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.login_portal = props.login_portal

        this.state = {
            loading: false,
            username: "",
            password: ""
        };
    }

    handleUsernameChange = (event) => {
        this.setState(
            { username: event.target.value }
        )
    }
    
    handlePasswordChange = (event) => {
        this.setState(
            { password: event.target.value }
        )
    }

    handleSubmit = (event) => {
        this.setState(
            { loading: true }
        )
        event.preventDefault();
        this.login_portal(this.state.username, this.state.password);
    }

  render(){
      return (
          <div className="Login">
              <h1 className="heading">Login with MCPS Credentials</h1><br/>
              <div className="login-div">
                  <form onSubmit={this.handleSubmit}>
                      <Form.Control size="lg" type="text" value = {this.state.username} onChange={this.handleUsernameChange} placeholder="MCPS ID"/><br/>
                      <Form.Control size="lg" type="password" value = {this.state.password} onChange={this.handlePasswordChange} placeholder="Password"/><br/>
                      <Button type="submit" size="lg" disabled={this.state.loading} className="login-btn" variant="outline-light">{this.state.loading ? 'Logging in…' : 'Login'}</Button>
                  </form>
              </div>
          </div>
        );
  }
}

export default Login;