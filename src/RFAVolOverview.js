import React from 'react';
import './RFAVOStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Image, Col, CardDeck, Card } from 'react-bootstrap'; //Col,
import RFANavbar from "./components/RFANavbar";
import TeacherToby from "./media/teacher toby.webp";
import BusinessToby from "./media/toby business.webp";
import RFACard from "./components/RFACard";
import CountUp from 'react-countup';

//import RFAAffOrgs from "./components/About/RFAAffOrgs";
//import headerBlobYellow from "./media/HeaderBlobs/yellow.png";


export default class App extends React.Component {
  render() {
    return (
      <Container fluid style={{ backgroundColor: 'white' }}>
        <Row> {/* Structure of webpage will follow grid layout => row, column, container */}
          <Container>
            <header>
              <RFANavbar></RFANavbar>
            </header>
          </Container>
        </Row>
        <Row> {/* Structure of webpage will follow grid layout => row, column, container */}
          <Container id="header-blobs" fluid>
            <div class="stat-circles">
              <Row>
                <Col>
                  <Container id="circle1">
                    <div class="circle-text">
                      <h3 class="stats_title" style={{ fontSize: 33 }}>Work With:</h3>
                      <div class="stats_numbers">
                        <CountUp end={5} start={1} />
                      </div>
                      <h4 class="stats_subtext">Levels of</h4>
                      <h4 class="stats_subtext">Curriculum</h4>
                    </div>
                  </Container>
                </Col>
                <Col>
                  <Container id="circle2">
                    <div class="circle-text">
                      <h3 class="stats_title">Join our:</h3>
                      <div class="stats_numbers">
                        <CountUp end={164} start={1} />
                      </div>
                      <h4 class="stats_subtext">Active Volunteers</h4>
                    </div>
                  </Container>
                </Col>
                <Col>
                  <Container id="circle3">
                    <div class="circle-text">
                      <h3 class="stats_title">Support our:</h3>
                      <div class="stats_numbers">
                        <CountUp end={1027} start={1} />
                      </div>
                      <h4 class="stats_subtext" style={{ fontSize: 25 }}>Students Taught</h4>
                    </div>
                  </Container>
                </Col>
              </Row>
            </div>
            <div class="header-text">
              <h1 style={{ fontSize: 59 }}>Volunteer with Robotics for All</h1>
              <p class="page-header-description">Volunteer with us to teach or develop your skills as a business development intern!</p>
            </div>
          </Container>
        </Row>

        <Row>
          <Container fluid>
            <Container>
              <h2 class="vol_intern_positions">VOLUNTEER  POSTIONS</h2>
              <p>Robotics for All is run through the support of volunteers like you! Apply today to become a volunteer teacher or business development intern. Volunteer with us virtually from anywhere in the world! Hover over the icons below to learn about our positions:</p>
            </Container>
          </Container>
        </Row>

        <Row>
          <Container>

            <Row id="div-positions">
              <Col>
                <Card className="card-positions">
                  <Card.Img variant="top" src={TeacherToby} />
                  <Card.Body>
                    <Card.Title class="card-pos-title" style={{color:"#33cc66"}}>Lead Instructor</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="card-positions">
                  <Card.Img variant="top" src={TeacherToby} />
                  <Card.Body>
                    <Card.Title class="card-pos-title" style={{color: "#fa8d1f"}}>Teacher Assistant</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="card-positions">
                  <Card.Img variant="top" src={BusinessToby} />
                  <Card.Body>
                    <Card.Title class="card-pos-title" style={{color: "#3399ff"}}>Publicity Volunteer</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    );
  }
}