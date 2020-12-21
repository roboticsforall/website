import React from 'react';
import {Container, Row, Image, Col, Card, Button} from "react-bootstrap";
import RFAAffOrgsCard from "../RFAAffOrgsCard";

export default function RFAAffOrgs(props){
    return (
        <Row>
          <Row className = "header-blobs">
            <Container className = "d-flex align-self-end">
              <Row className = "m-5 w-100 justify-content-center">
                <h1 className = "page-header">Check out our Affiliate Organizations!</h1>
                <p className = "page-header-description">Learn more about our affiliate organizations started from members of Robotics for All!</p>
              </Row>
            </Container>
          </Row>
          <Container>
            <RFAAffOrgsCard />
            <RFAAffOrgsCard />
            <RFAAffOrgsCard />
          </Container>
          </Row>
    );
}
