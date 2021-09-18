// Libraries
import React from 'react';

// Components
import { InfoListItem } from './components/InfoListItem';
import { Icon } from './components/Icon';

// Style
import './Info.scss';

function Info() {
  
  /**
   *
   */
  return (
    <div>
      <h2 className="tools-info--title">Work faster with powerful tools.</h2>
      <InfoListItem
        text="Combined with a handful of model sentence structures looks reasonable."
      />
      <InfoListItem
        text="Contrary to popular belief, Lorem Ipsum is not simply random text."
      />
      <InfoListItem
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <InfoListItem
        text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <InfoListItem
        text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <Icon />
    </div>
  );
}

export default Info;
