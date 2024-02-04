import React from 'react';
import './BusinessListing.css';

import BusinessCard from './BusinessCard';

function BusinessListing(){
    const items = [
        { imageUrl: './logo192.png', text: 'Text 1' },
        { imageUrl: './logo192.png', text: 'Text 2' },
        { imageUrl: './logo192.png', text: 'Text 3' },
        { imageUrl: './logo192.png', text: 'Text 4'}
      ];

    const items2 = [
        { imageUrl: './malibu_barbie_cafe.png', name: 'Malibu Barbie Cafe', bio: 'blee blah bloo', checkImageUrl: './check.png', dietary:'Vegan options avaliable'},
        { imageUrl: './malibu_barbie_cafe.png', name: 'Malibu Barbie Cafe', bio: 'blee blah bloo', checkImageUrl: './check.png', dietary:'Vegan options avaliable'},
        { imageUrl: './malibu_barbie_cafe.png', name: 'Malibu Barbie Cafe', bio: 'blee blah bloo', checkImageUrl: './check.png', dietary:'Vegan options avaliable'},
        { imageUrl: './malibu_barbie_cafe.png', name: 'Malibu Barbie Cafe', bio: 'blee blah bloo', checkImageUrl: './check.png', dietary:'Vegan options avaliable'},
        { imageUrl: './malibu_barbie_cafe.png', name: 'Malibu Barbie Cafe', bio: 'blee blah bloo', checkImageUrl: './check.png', dietary:'Vegan options avaliable'},
        { imageUrl: './malibu_barbie_cafe.png', name: 'Malibu Barbie Cafe', bio: 'blee blah bloo', checkImageUrl: './check.png', dietary:'Vegan options avaliable'},
    ];
    
    return(
        <div className = "business-listing-container">

            <div className = "search-bar">
                <img className="search-bar-img" src=".\search_bar_final.png"></img>
                <img className = "barbie-pfp" src=".\barbiePfp.png" style={{border: 'none'}} onClick={() => window.location.href = './AccountDashboard'} ></img>
            </div>

            <div className="circle-categories">
                <div className="circle-1" style={{ width: '125px', height: '125px', borderRadius: '50%', backgroundColor: '#E999AC', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img className="circle1-icon" src="./cafes_icon.png" alt="cafes icon" />
                    <div className='circle-text'>cafes</div>
                </div>

                <div className="circle-2" style={{ width: '125px', height: '125px', borderRadius: '50%', backgroundColor: '#E999AC', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img className="circle2-icon" src="./dessert_icon.png" alt="cafes icon" />
                    <div className='circle-text'>dessert</div>
                </div>

                <div className="circle-3" style={{ width: '125px', height: '125px', borderRadius: '50%', backgroundColor: '#E999AC', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img className="circle3-icon" src="./ice_cream_icon.png" alt="cafes icon" />
                    <div className='circle-text'>ice cream</div>
                </div>

                <div className="circle-4" style={{ width: '125px', height: '125px', borderRadius: '50%', backgroundColor: '#E999AC', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img className="circle4-icon" src="./women_owned_icon.png" alt="cafes icon" />
                    <div className='circle-text'>women owned</div>
                </div>

                <div className="circle-5" style={{ width: '125px', height: '125px', borderRadius: '50%', backgroundColor: '#E999AC', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img className="circle5-icon" src="./lgbt_icon.png" alt="cafes icon" />
                    <div className='circle5-text'>lgbtq+ owned</div>
                </div>

                <div className="circle-6" style={{ width: '125px', height: '125px', borderRadius: '50%', backgroundColor: '#E999AC', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img className="circle5-icon" src="./minorities_icon.png" alt="cafes icon" />
                    <div className='circle5-text'>minority owned</div>
                </div>

        <div className="business-cards">
            <img src=".\business-cards-final.png"></img>

        </div>
        
        <div className="product-page-button">
            <button  onClick={() => window.location.href = './BusinessInfo'}>hi</button>
        </div>

                
</div>
</div>


         



 
    )
}

export default BusinessListing;