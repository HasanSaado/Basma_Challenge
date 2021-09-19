// Libraries
import React from 'react';

// Components
import { Title } from './components/Title';
import { ContactUs } from './components/ContactUs';
import { ContactForm } from './components/ContactForm';

// Style
import './StayTuned.scss';

function StayTuned() {

  /**
   *
   */
  return (
    <div className="pricing-section mt-5">
      <div className="container">
        <Title />
      </div>
      <div className="container pt-5">
        <div className="row justify-content-between">
          <div className="col-md-5">
            <ContactUs />
          </div>
          <div className="col-md-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StayTuned;
