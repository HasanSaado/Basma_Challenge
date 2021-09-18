// Libraries
import React from 'react';

// Components
import { InfoListItem } from './components/InfoListItem';
import Button from '@mui/material/Button';

// Style
import './Info.scss';

function Info() {
  
  /**
   *
   */
  return (
    <div>
      <h2 className="tools-info--title">Share your photos with friends easily</h2>
      <InfoListItem
        icon="layers"
        text="Combined with a handful of model sentence structures looks reasonable."
      />
      <InfoListItem
        icon="brush"
        text="Contrary to popular belief, Lorem Ipsum is not simply random text."
      />
      <InfoListItem
        icon="fire"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <InfoListItem
        icon="cart"
        text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <div className="mt-4">
        <Button variant="contained" size="medium">Learn More</Button>
      </div>
    </div>
  );
}

export default Info;
