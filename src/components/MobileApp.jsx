import React from 'react'
import mobileOne from "../images/mobile-1.png";
import mobileTwo from "../images/mobile-2.png";
import shapeOne from "../images/shape-bg-1.png";
import shapeTwo from "../images/shape-bg-2.png";
import playStore from "../images/playStore.webp";
import appleStore from "../images/appleStore.webp";

const MobileApp = () => {
  return (
    <div className='mobile-app-container'>
        <div className="app-images">
            <img id='mobile-1' src={mobileOne} alt="" />
            <img id='mobile-2' src={mobileTwo} alt="" />
            <img id='shape-bg-1' src={shapeOne} alt="" />
        </div>

        <div className="mobile-app-items">
          <img id='shape-2' src={shapeTwo}/>
            <h3>MOBILE APP</h3>
            <h1>Get the Fastest and Most Secure Banking</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis, suscipit you take action against fraud. See it the Security Center for and Mobile and Online Banking.</p>
            <div className="playStore-appleStore">
              <img src={playStore} alt="" />
              <img src={appleStore} alt="" />
            </div>
        </div>
    </div>
  )
}

export default MobileApp