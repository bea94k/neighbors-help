// home page with login form

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-main">
      <Form style={{ width: "50%" }}>
        <h2>Log in</h2>
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" placeholder="Enter your username" />
          <Form.Text className="text-muted">
            Enter your username in the exact same form as you registered it.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      
      <Link to={"/register"}>Register</Link>
      </Form>
      <div>
        <img src="logo.jpeg" alt="Logo" />
      </div>
    </div>
  );
};

export default Login;
