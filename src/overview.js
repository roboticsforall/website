import React from 'react';
import './overview.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Image} from 'react-bootstrap'; //Col, CardDeck,
import RFANavbar from "./components/RFANavbar";
import RFACard from "./components/RFACard";
//import RFAAffOrgs from "./components/About/RFAAffOrgs";
//import headerBlobYellow from "./media/HeaderBlobs/yellow.png";


export default class App extends React.Component {
  render() {
    return (
      <Container fluid style = {{backgroundColor: 'yellow'}}>
        <Row> {/* Structure of webpage will follow grid layout => row, column, container */}
          <Container>
              <header>
                  <RFANavbar></RFANavbar>
              </header>
          </Container>
        </Row>
        <Row> {/* Structure of webpage will follow grid layout => row, column, container */}
          <Container fluid style = {{backgroundColor: 'white'}}>
              <p>Volunteer with Robotics for All</p>
              <p>Volunteer with us to teach or develop your skills as a business development intern!</p>
          </Container>
        </Row>
        <Container>
          <Row>
              <h2 class = "vol_intern_positions">VOLUNTEER  POSTIONS</h2>
              <p>Robotics for All is run through the support of volunteers like you! Apply today to become a volunteer teacher or business development intern. Volunteer with us virtually from anywhere in the world! Descriptions of our positions are below:</p>
              <RFACard title = {"ONLINE TEACHER"}> <Image src="logo.svg" alt = "logo"></Image></RFACard>
              <RFACard title = {"BUSINESS DEVELOPMENT INTERN"}></RFACard>
          </Row>
          </Container>
          <Container fluid style = {{backgroundColor: 'white'}}>
          <Row>
            <h2 class = "teach_positions">TEACHER POSITIONS</h2>
            <p>Becoming a teacher is an amazing opportunity open to all volunteers. Join us and teach K-8th grade students coding, CAD, robotics, and so much more.</p>
            <break></break>
            <p>View our teacher positions:</p>
            <RFACard title = {"Lead Instructor"}></RFACard>
            <RFACard title = {"Teacher Assistant Instructor"}></RFACard>
          </Row>
        </Container>
        <Container>
          <Row>
            <h2 class = "vol_intern_positions">BUSINESS INTERN POSITIONS</h2>
            <p>Become a business development intern and help with curriculum, publicity, grant writing and much more. Learn valuable skills in business and STEM and meet volunteers from all over the world.</p>
            <break></break>
            <p>View our business development intern positions:</p>
            <RFACard title = {"General Business Development Intern"}></RFACard>
            <RFACard title = {"Publicity Business Development Intern"}></RFACard>
          </Row>
        </Container>
        
      </Container>
    );
  }
}
