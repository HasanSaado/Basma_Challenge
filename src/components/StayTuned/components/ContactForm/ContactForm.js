// Libraries
import React from 'react';

// Components
import { Form } from 'react-bootstrap';
import Button from '@mui/material/Button';

// Style
import './ContactForm.scss';

function ContactForm() {


  /**
   *
   */
  return (
    <div className="row contactus-form">
      <Form>
        <Form.Control placeholder="Name" />
        <Form.Control placeholder="Email" />
        <Form.Control placeholder="Subject" />
        <Form.Control 
          placeholder="Message" 
          as="textarea" 
          rows={6}
        />
        <div className="col-md-12 form-submit--btn mt-3">
          <Button variant="contained" size="medium">Send Message</Button>
        </div>
      </Form>
    </div>
  );
}

export default ContactForm;
