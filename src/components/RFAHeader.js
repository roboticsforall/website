import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

export default function RFAHeader(props){

  console.log(props.image);
    return (
        <Row style = {{backgroundImage: `url(${props.image})`}} className = "header-blobs">
          <Container className = "d-flex align-self-end">
            <Col className = "border mb-6 w-100">
              <Row className = "text-center">
                <h1 style = {{color: props.headerTextColor}} className = "header-size page-header">{props.title}</h1>
              </Row>
              <Row className = "justify-content-center">
                <p className = "header-description-size page-header-description">{props.description}</p>
              </Row>
            </Col>
          </Container>
        </Row>
    );
}
