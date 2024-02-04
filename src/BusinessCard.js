import React from 'react';

function BusinessCard({ items }){
    return(
        <div className="business-card-container">
        {items.map((item, index) => (
        <div className="business-card" key={index}>
          <img className="business-image" 
          src={item.imageUrl}
          alt={`Image ${index + 1}`}
          style={{ width: '100px', height: '100px' }} // Adjust the width and height as needed 
          />
          <div className="business-name">{item.name}</div>
          <div className="business-bio">{item.bio}</div>
          <img className="business-check" 
          src={item.checkImageUrl}
          />
          <div className="business-dietary">{item.dietary}</div>
        </div>
      ))}
        </div>
    )
}

export default BusinessCard;