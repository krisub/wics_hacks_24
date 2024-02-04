import React from 'react';
import './BusinessListing.css';
import CircleDivs from './CircleDivs';

function BusinessListing(){
    const items = [
        { imageUrl: './logo192.png', text: 'Text 1' },
        { imageUrl: './logo192.png', text: 'Text 2' },
        { imageUrl: './logo192.png', text: 'Text 3' },
        { imageUrl: './logo192.png', text: 'Text 4'}
      ];
    
    return(
        <div className = "business-listing-container">
            <div className = "search-bar">
                <img src=".\searchBar.png"></img>
                <div className = "search-bar-box">search for a local spot</div>
            </div>

            <div className="circle-categories">
               <CircleDivs items={items} />
            </div>


        </div>
    )
}

export default BusinessListing;