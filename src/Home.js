// src/components/Home.js
import React from 'react';
import './Home.css'; // Import CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <div className="treatsi-logo">
        <img src=".\treatsi_logo.png" />
      </div>
      <div className="home-content-container">
        <div className="home-desc">
          <div className="home-desc_text">your one stop shop</div>
        </div>
        <div className="button-container">
          <button className="signup-button">sign up</button>
          <button className="login-button">log in</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
