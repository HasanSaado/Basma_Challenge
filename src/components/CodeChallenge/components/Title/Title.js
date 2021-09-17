// Libraries
import React from 'react';

// Components
import { Container } from 'react-bootstrap';

// Style
import './Title.scss';

function Title() {
  
  /**
   *
   */
  return (
    <Container className="text-center w-50">
      <h1 className="codechallenge-title--header">Code Challenge</h1>
      <hr className="mx-auto codechallenge-title--line" />
      <p className="codechallenge-title--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </Container>
  );
}

export default Title;
