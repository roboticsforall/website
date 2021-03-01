import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RFAHeader(props){
  
    const pageHeaderDescription = {
      fontFamily: 'BeVietnam-Medium',
      fontWeight: 600,
      color: "black",
    }
    const pageHeader = {
      fontFamily: "Mazzard-H-Extrabold",
      transform: 'rotate(358deg)',
      color: props.headerTextColor,
    }
    const headerBlob = {
      backgroundSize: "100% 100%",
      height: "45vw",
      width: "100vw",
      backgroundImage: `url(${props.image})`,
    }

    return (
        <Row style = {headerBlob}>
          <Container className = "align-self-end">
            <Col className = "border mb-6 w-100">
              <Row className = "justify-content-center">
                <h1 style = {pageHeader} className = "text-center header-size">{props.title}</h1>
              </Row>
              <Row className = "justify-content-center">
                <p style = {pageHeaderDescription} className = "text-center header-description-size">{props.description}</p>
              </Row>
            </Col>
          </Container>
        </Row>
    );
}
