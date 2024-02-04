import React from 'react';
import './Signup.css'; // Import CSS file for styling

function Signup(){
    return (
        <div className="big-container">
          <div className="container-with-img">
        <img src=".\double-signup-final-final-final.png"></img>
        </div>
        <button className="my-button" onClick={() => window.location.href = './AccountDashboard'}>hi</button>
        <button className="my-button2" onClick={() => window.location.href = './BusinessDashboard'}>hi</button>
      </div>
    )
}

export default Signup;