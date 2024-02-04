import React from 'react';
import './BusinessDashboard.css'; // Import CSS file for styling

function BusinessDashboard(){
    return (
      <div className="big-container">
          <div className="container-with-img">
        <img src=".\businessDash.png"></img>
        </div>
        <div className = "button-div">
        <button className="my-coolio-button" onClick={() => window.location.href = './BusinessInfo'}>hiiiii</button>
        </div>
      </div>
    )
}

export default BusinessDashboard;