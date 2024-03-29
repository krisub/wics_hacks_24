/*
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
*/

import React, { useState } from 'react';

import './Signup.css'; // Create a corresponding CSS file for styling





function Signup() {

  return (

    <div className="signup-container">

        <div className='heading'>


          <h1 className='welcome'>welcome!</h1>
          <p>Please fill in the information to signup below.</p>

        </div>

<div className="the-sections-container">
        <div className="left-section">
          {/* User Signup Fields */}
          <label>name</label>
          <input className = "myInput"
            placeholder="Enter your name"
          />

          <label>email</label>

          <input className = "myInput"
            placeholder="Enter your email"
          />

          <label>password</label>
          <input className = "myInput"
            placeholder="Enter a password"
            type = "password"
          />

          <label>zipcode</label>
          <input className = "myInput"
            placeholder="Enter your zipcode"
          />

          <button className="myaccountsignupbutton" onClick={() => window.location.href = './AccountDashboard'}>sign up as a user</button>
        </div>



        <div className="divider"></div>



        <div className="right-section">

          {/* Business Signup Fields */}

          <label>business name</label>

          <input className = "myInput"

            placeholder="Enter your business name"

          />

          <label>business email</label>

          <input className = "myInput"

            placeholder="Enter your business email"

          />

          <label>password</label>

          <input className = "myInput" type ="password"

            placeholder="Enter a password"

          />

          <label>address</label>

          <input className = "myInput"

            placeholder="Enter your address "

          />

          <button className="mybusinesssignupbutton" onClick={() => window.location.href = './BusinessDashboard'}>sign up as a business</button>

        </div>

        </div>

      </div>

  );

}



export default Signup;