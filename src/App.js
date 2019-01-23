import React from 'react';
import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom';
import './styles/app.css';
import Entry from './Components/Entry';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import SignUp from './Components/SignUp';
import Login from './Components/Login';

const App = () => (
  <Router>
    <div>
      <div className="topnav">
        <a><Link to="/">Home</Link></a>
        <a><Link to="/up">Sign-up</Link></a>
        <Login />
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/dash" component={Dashboard} />
      <Route path="/up" component={SignUp} />
      <Route path="/start" component={Entry} />
    </div>
  </Router>
);
export default App;