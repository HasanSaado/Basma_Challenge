// Libraries
import React from 'react';

// Components
import NotificationsIcon from '@mui/icons-material/Notifications';
import DraftsIcon from '@mui/icons-material/Drafts';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import { Card, Row, Col } from 'react-bootstrap';

// Style
import './Icon.scss';

function Icon() {

  /**
   *
   */
  return (
    <Row>
      <Col>
        <Card body>
          <NotificationsIcon />
        </Card>
      </Col>
      <Col>
        <Card body>
          <DraftsIcon />
        </Card>
      </Col>
      <Col>
        <Card body>
          <VideoCameraFrontIcon />
        </Card>
      </Col>
    </Row>
  );
}

export default Icon;
