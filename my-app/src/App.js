import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Image, Col,} from 'react-bootstrap';
import navbar from "./images/navbar.png";
import homePageImage from "./images/homePageImage.png";
import Card from "./components/Card.js";

export default class App extends React.Component{

  render() {
    return (
      <Container fluid style = {{backgroundColor: 'yellow'}}>
        <Row> {/* Structure of webpage will follow grid layout => row, column, container */}
          <Container>
              <header>
                <nav>
                  fdfsfsdf
                </nav>
              </header>
          </Container>
        </Row>
        <Row> {/* Structure of webpage will follow grid layout => row, column, container */}
          <Container>
              <Image src= {navbar} alt = "navbar" fluid />
          </Container>
        </Row>
        <Row> {/* Structure of webpage will follow grid layout => row, column, container */}
          <Container>
              <Image src= {homePageImage} alt = "homePageImage" fluid />
          </Container>
        </Row>
        <Row>
          <Col>
            <Card></Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
