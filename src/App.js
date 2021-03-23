import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import RFANavbar from "./components/RFANavbar";
import RFAContact from "./components/Contact/RFAContact";
export default class App extends React.Component {

  render() {
    return (
      <Container fluid>
        <Row> {/* Structure of webpage will follow grid layout => row, column, container */}
          <Container>
            <header>
              <RFANavbar />
            </header>
          </Container>
        </Row>

        <RFAContact email={"info@roboticsforall.net"} telephone={6506659734} address={"P.O. Box 56, Palo Alto, CA 94302"} />

      </Container>

    );
  }
}
