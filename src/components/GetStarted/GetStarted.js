// Libraries
import React from 'react';

// Components
import { Container, Row, Col } from 'react-bootstrap';
import { Creative } from './components/Creative';
import { Image } from './components/Image';

// Style
import './GetStarted.scss';

function GetStarted() {

  /**
   *
   */
  return (
    <Container className="getstarted-section">
      <Row>
        <Col className="mx-auto">
          <Creative /> 
        </Col>
        <Col className="text-lg-end text-center">
          <Image />
        </Col>
      </Row>
    </Container>
  );
}

export default GetStarted; 
