import React from 'react';

function CircleDivs({ items }){
    return(
        <div className="circle-div-container">
        {items.map((item, index) => (
        <div className="circle" key={index}>
          <img src={item.imageUrl} alt={`Image ${index + 1}`} />
          <div className="circle-caption">{item.text}</div>
        </div>
      ))}
        </div>
    )
}

export default CircleDivs;