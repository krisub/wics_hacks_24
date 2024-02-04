import React from 'react';
import './Login.css'; // Import CSS file for styling

function Login(){
    return (
        <div>
        <h1>heyy baby</h1>
        <div className="button-container">
        <button className="continue-button" onClick={() => window.location.href = './BusinessListing'}>continue</button>
      </div>
      </div>
    )
}

export default Login;