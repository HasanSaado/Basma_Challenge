// Libraries
import React from 'react';

// Style
import './Step.scss';

function Step(props) {

  /**
   *
   */
  return (
    <div className="w-100">
      <img 
        src={props.img} 
        className="workflow-step--img"
        alt="step-icon"
      />
      <h3 className="workflow-step--title py-3">{props.title}</h3>
      <p className="workflow-step--text">{props.text}</p>
    </div>
  );
}

export default Step;
