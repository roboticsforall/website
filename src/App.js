import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import RFANavbar from "./components/RFANavbar";
import RFAHomePage from './components/RFAHomePage';
import RFAFooter from "./components/RFAFooter";

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
        <RFAHomePage/>
        <br/>
        <br/>
        <br/>
        <RFAFooter/>
      </Container>
    );
  }
}
