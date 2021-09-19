// Libraries
import React from 'react';

// Components
import { Title } from './components/Title';
import { PriceCard } from './components/PriceCard';

// Style
import './Pricing.scss';

function Pricing() {

  /**
   *
   */
  return (
    <div className="pricing-section">
      <div className="container">
        <Title />
      </div>
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <PriceCard
              img="/bike.png"
              title="Basic"
              price="49"
              detail1="5GB Linux Web Space"
              detail2="5 MySQL Databases"
              detail3="24/7 Tech Support"
              detail4="Daily Backups"
            />
          </div>
          <div className="col-md-4">
            <PriceCard
              img="/motorbike.png"
              title="Pro"
              price="129"
              detail1="10GB Linux Web Space"
              detail2="50 MySQL Databases"
              detail3="Unlimited Email"
              detail4="Daily Backups"
            />
          </div>
        </div>
      </div>
      <div className="row text-center mt-0 pt-0 mt-md-5 pt-md-5 pricing-bottom">
        <span className="pricing-bottom--text">Not sure what to choose?&nbsp;<span className="pricing-contactus">Contact Us</span></span>
      </div>
    </div>
  );
}

export default Pricing;
