import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Login';
import Register from './Register';
import HomeHelper from './HomeHelper';
import HomeCustomer from './HomeCustomer';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/helper' component={HomeHelper} />
          <Route path='/customer' component={HomeCustomer} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
