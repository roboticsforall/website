import React from 'react';
import {Container, Row} from "react-bootstrap";
// import {headerBlobYellow} from "../../media/HeaderBlobs/yellow.png";

export default function RFAAffOrgs(props){
    return (
        <Row className = "header-blobs">
          <Container className = "d-flex align-self-end">
            <Row className = "mb-6 w-100 justify-content-center">
              <h1 className = "page-header">Read more about our work</h1>
              <p className = "page-header-description">Read through our monthly newsletter to learn more about our work!</p>
            </Row>
          </Container>
        </Row>
    );
}
