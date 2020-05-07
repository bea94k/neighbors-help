// home page with login form

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            HOME/LOGIN PAGE
            <Link to={'/register'}>Register</Link>
        </div>
    );
}

export default Login;
