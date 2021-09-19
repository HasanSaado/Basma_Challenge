// Libraries
import React from 'react';

// Style
import './AppIcons.scss';

function AppIcons() {
  
  /**
   *
   */
  return (
    <div className="row justify-content-center">
      <div className="col-md-3">
        <img 
          src='/google-play.png' 
          className="mobileapp-icon"
          alt="google-play"
        />
      </div>
      <div className="col-md-3">
        <img 
          src='/app-store.png' 
          className="mobileapp-icon"
          alt="app-store"
        />
      </div>
      <div className="col-md-12 text-center mt-5">
        <p className="mobileapp-devices"><i>* Available on iPhone, iPad and all Android devices</i></p>
      </div>
    </div>
  );
}

export default AppIcons;
