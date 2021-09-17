// Libraries
import React from 'react';

// Components
import Button from '@mui/material/Button';

// Style
import './Creative.scss';

function Creative() {
  
  /**
   *
   */
  return (
    <div className="creative-section">
      <h1 className="creative-header">Creative way to Showcase you App</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget.</p>
      <Button variant="contained" size="medium">Get Started</Button>
    </div>
  );
}

export default Creative;
