import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, CardDeck, Image} from 'react-bootstrap';
import RFANavbar from "./components/RFANavbar";
import RFACard from "./components/RFACard";
import RFAAffOrgs from "./components/About/RFAAffOrgs";
import headerBlobYellow from "./media/HeaderBlobs/yellow.png";
export default class App extends React.Component{

  render() {
    return (
      <Container className = "border" fluid>
        <Row> {/* Structure of webpage will follow grid layout => row, column, container */}
          <Container>
              <header>
                  <RFANavbar/>
              </header>
          </Container>
        </Row>
        <RFAAffOrgs/>

        {/* <Container>
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
        </Container> */}
      </Container>
    );
  }
}
