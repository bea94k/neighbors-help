// home page with registration form

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            HOME/REGISTER PAGE
            <Link to={'/'}>Log in</Link>
        </div>
    );
}

export default Register;
