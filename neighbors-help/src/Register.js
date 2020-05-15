// home page with registration form

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-main">
      <Form style={{ width: "40%" }}>
        <h2>Register</h2>
        <Form.Group controlId="formFirstName">
          <Form.Label>First name:</Form.Label>
          <Form.Control type="text" placeholder="Jane" required />
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Last name:</Form.Label>
          <Form.Control type="text" placeholder="Doe" />
        </Form.Group>

        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" placeholder="janedoe123" required />
          <Form.Text className="text-muted">
            You will need your username to log in. Use only Latin alphabet
            characters and digits.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            required
          />
          <Form.Text className="text-muted">
            You will need your password to log in. Use only Latin alphabet
            characters and digits.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label>Address:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Mannerheimintie 30, Helsinki"
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone:</Form.Label>
          <Form.Control type="text" placeholder="040 123 4567" />
        </Form.Group>

        <div key={"helper-or-customer"} className="mb-3">
          <Form.Check
            inline
            label="I want to help others"
            type="radio"
            id={"helper"}
          />
          <Form.Check
            inline
            label="I need some help"
            type="radio"
            id={"customer"}
          />
        </div>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
      <Link to={"/"}>Log in</Link>
    </div>
  );
};

export default Register;
