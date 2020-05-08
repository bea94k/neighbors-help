// home page with registration form

import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// TO DO: HOW TO ADD isHelper TO DB!


const Register = () => {

    const [newUser, setNewUser] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        address: '',
        phone: '',
        isHelper: ''
    })

    const changeValueHandler = (event) => {
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value
        })
    };

    const addUserHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3005/users', newUser)
            .then(response => { console.log(response.data) })
    }


    return (
        <div>
            <Form style={{ width: '80%' }}>
                <h2>Register</h2>
                <Form.Group controlId="formFirstName">
                    <Form.Label>First name:</Form.Label>
                    <Form.Control type="text" name="firstname" placeholder="Jane" onChange={changeValueHandler} required />
                </Form.Group>

                <Form.Group controlId="formLastName">
                    <Form.Label>Last name:</Form.Label>
                    <Form.Control type="text" name="lastname" placeholder="Doe" onChange={changeValueHandler} />
                </Form.Group>

                <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" name="username" placeholder="janedoe123" onChange={changeValueHandler} required />
                    <Form.Text className="text-muted">
                        You will need your username to log in. Use only Latin alphabet characters and digits.
                      </Form.Text>
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter your password" onChange={changeValueHandler} required />
                    <Form.Text className="text-muted">
                        You will need your password to log in. Use only Latin alphabet characters and digits.
                      </Form.Text>
                </Form.Group>

                <Form.Group controlId="formAddress">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control type="text" name="address" placeholder="Mannerheimintie 30, Helsinki" onChange={changeValueHandler} required />
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label>Phone:</Form.Label>
                    <Form.Control type="text" name="phone" placeholder="040 123 4567" onChange={changeValueHandler} />
                </Form.Group>

                <div key={'helper-or-customer'} className="mb-3">
                    <Form.Check inline label="I want to help others" type='radio' name='isHelper' value='true' id='helper' />
                    <Form.Check inline label="I need some help" type='radio' name='isHelper' value='false' id='customer' />
                </div>

                <Button variant="primary" type="submit" onClick={addUserHandler}>
                    Submit
                  </Button>
            </Form>
            <Link to={'/'}>Log in</Link>
        </div>
    );
}

export default Register;
