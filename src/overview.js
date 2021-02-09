import React from 'react';
import './overview.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Image, Col, CardDeck } from 'react-bootstrap'; //Col,
import RFANavbar from "./components/RFANavbar";
import RFACard from "./components/RFACard";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'; //using it to detect if numbers are visible on screen to know when to start counting up
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
              <CardDeck>
                <RFACard title={"Lead Instructor"}><a href="https://raw.githubusercontent.com/DevSandBoxx/RFA_website_design/overview/src/media/teacher%20toby.webp"><img src="https://raw.githubusercontent.com/DevSandBoxx/RFA_website_design/overview/src/media/teacher%20toby.webp"></img></a></RFACard>
                <RFACard title={"Teacher Assistant"}><a href="https://raw.githubusercontent.com/DevSandBoxx/RFA_website_design/overview/src/media/teacher%20toby.webp"><img src="https://raw.githubusercontent.com/DevSandBoxx/RFA_website_design/overview/src/media/teacher%20toby.webp"></img></a></RFACard>
                <RFACard title={"Business Development Intern"}><a href="https://raw.githubusercontent.com/DevSandBoxx/RFA_website_design/overview/src/media/teacher%20toby.webp"><img src="https://raw.githubusercontent.com/DevSandBoxx/RFA_website_design/overview/src/media/teacher%20toby.webp"></img></a></RFACard>
              </CardDeck>
            </Container>
          </Container>
        </Row>


      </Container>
    );
  }
}