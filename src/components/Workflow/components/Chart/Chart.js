// Libraries
import React from 'react';

// Components
import { Step } from './components/Step';
import LineIcon from 'react-lineicons';

function Chart() {

  /**
   *
   */
  return (
    <div className="row">
      <div className="col-md-4 text-center">
        <Step
          img="/download.png"
          title="Install the App"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
      <div className="col-md-4 text-center">
        <Step
          img="/settings.png"
          title="Setup your profile"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <LineIcon name="lni lni-chevron-right" />
      </div>
      <div className="col-md-4 text-center">
        <Step
          img="/app.png"
          title="Enjoy the features!"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
}

export default Chart;
