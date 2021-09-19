// Libraries
import React from 'react';

// Components
import { Description } from './components/Description';
import { SubscribeForm } from './components/SubscribeForm';

// Style
import './Subscribe.scss';

function Subscribe() {
  
  /**
   *
   */
  return (
    <div 
      className="subscribe-section text-center"
      style={{ backgroundImage: "url('/newsletter-background.png')" }}
    >
      <div className="container subscribe-container">
        <Description />
        <SubscribeForm />
      </div>
    </div>
  );
}

export default Subscribe;
