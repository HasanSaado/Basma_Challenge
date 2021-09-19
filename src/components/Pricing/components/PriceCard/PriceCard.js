// Libraries
import React from 'react';

// Components
import Button from '@mui/material/Button';

// Style
import './PriceCard.scss';

function PriceCard(props) {
  
  /**
   *
   */
  return (
    <div className="card text-center p-0 p-md-5 pricing-card position-relative w-100 mb-5 mb-md-0">
      <div className="row justify-content-center">
        <img
          src={props.img}
          className="pricing-card--img"
          alt="price-icon"
        />
      </div>
      <h5 className="text-uppercase py-3 mb-0 pricing-card--title">{props.title}</h5>
      <span className="dollar-sign">$<span className="mb-0 pricing-card--price">{props.price}</span></span>
      <hr />
      <p className="mb-0">{props.detail1}</p>
      <hr />
      <p className="mb-0">{props.detail2}</p>
      <hr />
      <p className="mb-0">{props.detail3}</p>
      <hr />
      <p className="mb-0">{props.detail4}</p>
      <hr />
      <div className="text-center pricing-card--button">
        <Button variant="contained" size="large">Sign Up</Button>
      </div>
    </div>
  );
}

export default PriceCard;
