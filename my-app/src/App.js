import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Image, Col,} from 'react-bootstrap';
import navbar from "./images/navbar.png";
import homePageImage from "./images/homePageImage.png";
import RFA_Card from "./components/RFA_Card.js";
import RFA_Navbar from "./components/RFA_Navbar.js"

export default class App extends React.Component{

  render() {
    return (
      <Container fluid style = {{backgroundColor: 'yellow'}}>
        <Row> {/* Structure of webpage will follow grid layout => row, column, container */}
          <Container>
              <header>
                  <RFA_Navbar></RFA_Navbar>
              </header>
          </Container>
        </Row>
        <Row> {/* Structure of webpage will follow grid layout => row, column, container */}
          <Container>
              <Image src= {homePageImage} alt = "homePageImage" fluid />
          </Container>
        </Row>
        <Container>
          <Row>
              <RFA_Card title = "Robotics For All" content = "fsfsdfsdsdjsnsjf"></RFA_Card>
              <RFA_Card title = "Robotics For All" content = "fsfsdfsdsdjsnsjf"></RFA_Card>
              <RFA_Card title = "Robotics For All" content = "fsfsdfsdsdjsnsjf"></RFA_Card>
          </Row>
          <Row>
            The hacker is in 
          </Row>
        </Container>
      </Container>
    );
  }
}
