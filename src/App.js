import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, CardDeck} from 'react-bootstrap';
import RFANavbar from "./components/RFANavbar";
import RFACard from "./components/RFACard";

export default class App extends React.Component{

  render() {
    return (
      <Container fluid>
        <Container>
          <RFANavbar />
        </Container>
        <Container>
          <Row>
            {
              ["one", "two", "three"].map(element => (
                <Col>
                  Image
                  Text
                </Col>
              ))
            }
          </Row>
        </Container>
        <Container>
          <Row>
            <CardDeck>
              <RFACard />
              <RFACard />
              <RFACard />
              <RFACard />
            </CardDeck>
          </Row>
        </Container>
      </Container>
    );
  }
}
