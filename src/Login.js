// Login.js

import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    console.log('email:', email);
    console.log('password:', password);
    console.log('rememberMe:', rememberMe);
    // Add authentication logic (e.g., API call) here
  };

  return (
    <div className="login-container">
      <div className="rounded-rectangle">
        <div className="login-header">
          <h2>hi, welcome back!</h2>
        </div>

        <img src=".\favicon.png" alt="Login" className="login-image" />

        <div className="login-form">
          <div className="input-group">
            <label>email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter your email"
            />
          </div>

          <div className="input-group">
            <label>password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="enter your password"
            />
            <div className="all-the-forgot-password-container">
            <span className="forgot-password">forgot password?</span>
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe">remember me</label>
            </div>
            </div>
          </div>

          <button onClick={() => window.location.href = './BusinessListing'}>login</button>

          <div className="register-option">
            <p>not registered yet? <span>create an account</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;