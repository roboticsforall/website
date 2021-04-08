import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import RFANavbar from "./components/RFANavbar";
// import RFACard from "./components/RFACard";
import RFAMeetingRecords from "./components/RFAMeetingRecords";

export default class App extends React.Component{

  render() {
    return (
      <Container fluid>
        <Row> {/* Structure of webpage will follow grid layout => row, column, container */}
          <Container>
              <header>
                  <RFANavbar/>
              </header>
          </Container>
        </Row>
        <RFAMeetingRecords/>

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
