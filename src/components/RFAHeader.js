import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RFAHeader(props){
  
    return (
        <Row style = {{backgroundImage: `url(${props.image})`}} className = "header-blobs">
          <Container className = "align-self-end">
            <Col className = "border mb-6 w-100">
              <Row className = "justify-content-center">
                <h1 style = {{color: props.headerTextColor}} className = "text-center header-size page-header">{props.title}</h1>
              </Row>
              <Row className = "justify-content-center">
                <p className = "text-center header-description-size page-header-description">{props.description}</p>
              </Row>
            </Col>
          </Container>
        </Row>
    );
}
