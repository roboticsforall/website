import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import RFANavbar from "./components/RFANavbar";
import RFAAbtOverview from "./components/About/RFAAbtOverview";

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
        <RFAAbtOverview/>
      </Container>
    );
  }
}