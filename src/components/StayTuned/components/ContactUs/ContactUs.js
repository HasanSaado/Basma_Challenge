// Libraries
import React from 'react';

// Components
import { InfoListItem } from './components/InfoListItem';

// Style
import './ContactUs.scss';

function ContactUs(props) {
  
  /**
   *
   */
  return (
    <div>
      <p className="contactus-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
      <InfoListItem
        icon="home"
        text="Combined with a handful of model sentence structures looks reasonable."
      />
      <InfoListItem
        icon="phone"
        text="Contrary to popular belief, Lorem Ipsum is not simply random text."
      />
      <InfoListItem
        icon="email"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  );
}

export default ContactUs;
