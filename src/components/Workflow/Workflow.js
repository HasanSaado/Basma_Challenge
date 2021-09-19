// Libraries
import React from 'react';

// Components
import { Title } from './components/Title';
import { Chart } from './components/Chart';

// Style
import './Workflow.scss';

function Workflow() {

  /**
   *
   */
  return (
    <div className="workflow-section">
      <div className="container w-50">
        <Title /> 
      </div>
      <div className="container">
        <Chart />
      </div>
    </div>
  );
}

export default Workflow;
