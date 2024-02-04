/*
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
*/


import './App.css';
import { BrowserRouter as Routes, Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <Router>
    <div className="App">
      <Home/><nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element ={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;

