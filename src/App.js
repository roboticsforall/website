import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import RFANavbar from "./components/RFANavbar";
// import RFACard from "./components/RFACard";
import RFAAddWebpage from './components/RFATemplateWebpage';
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
        <RFAAddWebpage/>
      </Container>
    );
  }
}
