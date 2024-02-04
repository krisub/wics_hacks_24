import React from 'react';
import './AccountDashboard.css'; // Import CSS file for styling

function AccountDashboard(){
    return (
        <div className="big-container">
          <div className="container-with-img">
        <img src=".\account_dashboard.png"></img>
        </div>
        <div className = "button-div">
        <button className="my-cool-button" onClick={() => window.location.href = './BusinessListing'}>hiiiii</button>
        </div>
      </div>
    )
}

export default AccountDashboard;