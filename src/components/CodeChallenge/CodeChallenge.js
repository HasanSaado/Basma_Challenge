// Libraries
import React from 'react';

// Style
import './CodeChallenge.scss';

// Components
import { Title } from './components/Title';
import { Snippet } from './components/Snippet';
import { Container, Row, Col } from 'react-bootstrap';

function CodeChallenge() {
  
  /**
   *
   */
  return (
    <div className="codechallenge-section">
      <Title />
      <Container className="mt-5 pt-5">
        <div className="row">
          <div className="col-md-4">
            <Snippet
              img='lni lni-hand'
              title='Fully Functional'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat ac turpis eu consectetur. Etiam at varius ipsum.'
            />
          </div>
          <div className="col-md-4">
            <Snippet
              img='lni lni-connectdevelop'
              title='Fully Functional'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat ac turpis eu consectetur. Etiam at varius ipsum.'
            />
          </div>
          <div className="col-md-4">
            <Snippet
              img='lni lni-stop'
              title='Fully Functional'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat ac turpis eu consectetur. Etiam at varius ipsum.'
            />
          </div>
          <div className="col-md-4">
            <Snippet
              img='lni lni-map-marker'
              title='Location Tracking'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat ac turpis eu consectetur. Etiam at varius ipsum.'
            />
          </div>
          <div className="col-md-4">
            <Snippet
              img='lni lni-cogs'
              title='Powerful Settings'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat ac turpis eu consectetur. Etiam at varius ipsum.'
            />
          </div>
          <div className="col-md-4">
            <Snippet
              img='lni lni-world'
              title='Multiple Language'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat ac turpis eu consectetur. Etiam at varius ipsum.'
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CodeChallenge;
