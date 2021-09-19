// Libraries
import React from 'react';

// Components
import { Form } from 'react-bootstrap';
import Button from '@mui/material/Button';

// Style
import './SubscribeForm.scss';

function SubscribeForm() {

  /**
   *
   */
  return (
    <div className="row">
      <Form>
        <Form.Control type="email" placeholder="Enter your email" />
        <div className="col-md-12 form-submit--btn mt-3">
          <Button variant="contained" size="medium">Get Started</Button>
        </div>
      </Form>
    </div>
  );
}

export default SubscribeForm;
