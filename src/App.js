import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup'
import BusinessListing from './BusinessListing';

function App() {
  const displayLinks = true;
  return (
    <Router>
      <div className="App">
        <nav style={{display: 'none'}}>
          <ul>
 {/* Conditionally render the Home link based on isLoggedIn state */}
 {false && (
              <li>
                <Link to="/"></Link>
              </li>
            )}
            {/* Conditionally render the Login link based on isLoggedIn state */}
            {false && (
              <li color="#EBACBF">
                <Link to="/businessListing"></Link>
              </li>
            )}

          {false && (
              <li color="#EBACBF">
                <Link to="/login"></Link>
              </li>
            )}

        {false && (
              <li color="#EBACBF">
                <Link to="/signup"></Link>
              </li>
            )}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/businessListing" element={<BusinessListing />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
