// Libraries
import React from 'react';

// Components
import { Container } from 'react-bootstrap';
import { Image } from './components/Image';
import { Info } from './components/Info';

// Style
import './Share.scss';

function Share() {

  /**
   *
   */
  return (
    <div className="share-section">
      <Container>
        <div className="row">
          <div className="col-md-6 justify-content-center d-flex">
            <Info />
          </div>
          <div className="col-md-6">
            <Image />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Share;
