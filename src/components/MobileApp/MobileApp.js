// Libraries
import React from 'react';

// Components
import { Description } from './components/Description';
import { AppIcons } from './components/AppIcons';

// Style
import './MobileApp.scss';

function MobileApp() {

  /**
   *
   */
  return (
    <div 
      className="mobileapp-section"
      style={{ backgroundImage: "url('/download-bg.jpeg')" }}
    >
      <div className="container">
        <div className="text-center">
          <Description /> 
        </div>
        <AppIcons />
      </div>
    </div>
  );
}

export default MobileApp;
