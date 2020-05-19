// home page with login form

import React, { useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Login.css";

const Login = () => {

  const [loggingUser, setLoggingUser] = useState({
    username: '',
    password: ''
  })

  const changeValueHandler = (event) => {
    setLoggingUser({
      ...loggingUser,
      [event.target.name]: event.target.value
    })
  };

  const logUserInHandler = (e) => {
    e.preventDefault();
    console.log(loggingUser)
    // for now it just adds to the json DB
    /*  axios.post('http://localhost:3001/users', loggingUser)
         .then(response => { console.log(response) }) */
  }


  return (
    <div className="login-main">
      <Form style={{ width: '50%' }}>
        <h2>Log in</h2>
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" name="username" placeholder="Enter your username" onChange={changeValueHandler} />
          <Form.Text className="text-muted">
            Enter your username in the exact same form as you registered it.
                      </Form.Text>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" name="password" placeholder="Enter your password" onChange={changeValueHandler} />
        </Form.Group>
        <Button variant="success" type="submit" onClick={logUserInHandler}>
          Submit
                  </Button>
      </Form>
      <Link to={'/register'}>Register</Link>
      <div>
        <img src="logo.jpeg" alt="Logo" />
      </div>
    </div>
  );
}

export default Login;
