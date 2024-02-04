// src/components/Home.js
import React from 'react';
import './Home.css'; // Import CSS file for styling
import Typewriter from 'typewriter-effect'

function Home() {
  return (
    <div className="home-container">
    <div className="shiftup-container">
      <div className="treatsi-logo">
        <img src=".\treatsi_logo.png" />
      </div>
      <div className="home-content-container">
        <div className="home-desc">
          <div className="home-desc-text">
            <div className="all-text-container">
            <div className="part-one">find a sweet local spot for your next </div>
            <div className="writer"> <Typewriter options={{
                autoStart: true,
                loop: true,
                delay: 15,
                strings: ["date", "hangout", "girls night out"]
            }}/> </div>
            <div className="part-two">and empower local businesses</div>
            </div>
            </div>
        </div>
        <div className="button-container">
          <button className="signup-button">sign up</button>
          <button className="login-button">log in</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
