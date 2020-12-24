import React from 'react';
import './overview.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Image, Col, CardDeck} from 'react-bootstrap'; //Col,
import RFANavbar from "./components/RFANavbar";
import RFACard from "./components/RFACard";
//import RFAAffOrgs from "./components/About/RFAAffOrgs";
//import headerBlobYellow from "./media/HeaderBlobs/yellow.png";
import CountUp from 'react-countup';


export default class App extends React.Component {
  render() {
    return (
      <Container fluid style = {{backgroundColor: 'white'}}>
        <Row> {/* Structure of webpage will follow grid layout => row, column, container */}
          <Container>
              <header>
                  <RFANavbar></RFANavbar>
              </header>
          </Container>
        </Row>
        <Row> {/* Structure of webpage will follow grid layout => row, column, container */}
          <Container fluid>
            <Row>
              <div class="header-blobs">
                <div class="header-text">
                  <h1>Volunteer with Robotics for All</h1>
                  <p class="page-header-description">Volunteer with us to teach or develop your skills as a business development intern!</p>
                </div>
              </div>
            </Row>
          </Container>
        </Row>
        <Row>
          <Container>
            <Row>
              <Col>
                <div class="circle1">
                  <div class="circle-text">
                    <h3 class = "stats_title" style={{fontSize:33}}>Work With:</h3>
                    <div class="stats_numbers">
                    <CountUp end={12}></CountUp>
                    </div>
                    <h4 class = "stats_subtext">Levels of</h4>
                    <h4 class = "stats_subtext">Curriculum</h4>
                  </div>
                </div>
              </Col>
              <Col>
                <div class="circle2">
                  <div class="circle-text">
                    <h3 class = "stats_title">Join our:</h3>
                    <div class="stats_numbers">
                    <CountUp end={164}></CountUp>
                    </div>
                    <h4 class = "stats_subtext">Active Volunteers</h4>
                  </div>
                </div>
              </Col>
              <Col>
                <div class="circle3">
                  <div class="circle-text">
                    <h3 class = "stats_title">Support our:</h3>
                    <div class="stats_numbers">
                    <CountUp end={1027}></CountUp>
                    </div>
                    <h4 class = "stats_subtext" style = {{fontSize:25}}>Students Taught</h4>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Row>
        <Row>
          <Container fluid style = {{backgroundColor: " #ffefb1"}}>
            <Row>
              <Container>
                <h2 class = "vol_intern_positions">VOLUNTEER  POSTIONS</h2>
                <p>Robotics for All is run through the support of volunteers like you! Apply today to become a volunteer teacher or business development intern. Volunteer with us virtually from anywhere in the world! Descriptions of our positions are below:</p>
                <CardDeck>
                  <RFACard title = {"ONLINE TEACHER"}><a href="https://raw.githubusercontent.com/DevSandBoxx/RFA_website_design/overview/src/media/teacher%20toby.webp"><img src="https://raw.githubusercontent.com/DevSandBoxx/RFA_website_design/overview/src/media/teacher%20toby.webp"></img></a></RFACard>
                  <RFACard title = {"BUSINESS DEVELOPMENT INTERN"}></RFACard>
                </CardDeck>
              </Container>
          </Row>
        </Container>
        </Row>
        <Row>
          <Container fluid>
            <Row>
              <Container>
                <h2 class = "teach_positions">TEACHER POSITIONS</h2>
                <p>Becoming a teacher is an amazing opportunity open to all volunteers. Join us and teach K-8th grade students coding, CAD, robotics, and so much more.</p>
                <break></break>
                <p>View our teacher positions:</p>
                <CardDeck>
                  <RFACard title = {"Lead Instructor"}></RFACard>
                  <RFACard title = {"Teacher Assistant Instructor"}></RFACard>
                </CardDeck>
              </Container>
          </Row>
        </Container>
        </Row>
        <Row>
        <Container fluid style = {{backgroundColor: "#ffefb1"}}>
          <Row>
            <Container>
              <h2 class = "vol_intern_positions">BUSINESS INTERN POSITIONS</h2>
              <p>Become a business development intern and help with curriculum, publicity, grant writing and much more. Learn valuable skills in business and STEM and meet volunteers from all over the world.</p>
              <break></break>
              <p>View our business development intern positions:</p>
              <CardDeck>
                <RFACard title = {"General Business Development Intern"}></RFACard>
                <RFACard title = {"Publicity Business Development Intern"}></RFACard>
              </CardDeck>
            </Container>
          </Row>
        </Container>
        </Row>
      </Container>
    );
  }
}
