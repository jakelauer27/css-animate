import React, { Component } from 'react';
import './styles/app.scss';

class HowToInfo extends Component {
  
  render() {
    return (
      <div className="howto-info info-section">
        <h1 className='title'>CSS Ani<span>Mate</span></h1>
        <p>This is a place for you to learn and experiment with CSS animations.  
          Browse through a library of prebuilt animations and tweak them 
          however you please. Then, when you have found an animation you 
          like, copy the code into your own project using the copy feature. 
        </p> 
        <p>
          If you aren’t familiar with how to use keyframes or the animation 
          property, checkout the keyframes and animation property info 
          sections by clicking the tabs on the top of this popup.
          This app is meant to give an introduction to CSS animations.
          For more detailed info, please visit W3schools or MDN.
        </p>
         <p className='howto-final-line'>Happy <span className='animating-span'>animating</span>!</p>
      </div>
    );
  }
}

export default HowToInfo