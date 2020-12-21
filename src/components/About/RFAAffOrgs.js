import React from 'react';
import {Container, Row} from "react-bootstrap";
// import {headerBlobYellow} from "../../media/HeaderBlobs/yellow.png";

export default function RFAAffOrgs(props){
    return (
        <Row className = "header-blobs">
          <Container className = "d-flex align-self-end">
            <Row className = "mb-5 w-100 justify-content-center">
              <h1 className = "page-header">Check out our Affiliate Organizations!</h1>
              <p className = "page-header-description">Learn more about our affiliate organizations started from members of Robotics for All!</p>
            </Row>
          </Container>
        </Row>
    );
}
