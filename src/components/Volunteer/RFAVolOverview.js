import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'; //Col,
//import RFANavbar from "../RFANavbar";
import TeacherToby from "../../media/TobyImages/teacher toby.webp";
import BusinessToby from "../../media/TobyImages/toby business.webp";
import RFAVolOverviewImg from "../RFAVolOverviewImg";
import RFAVolOverviewCard from "../RFAVolOverviewCard";
import YellowHeaderBlob from "../../media/HeaderBlobs/yellow.png";
import RFAVolOverviewHeader from "../RFAVolOverviewHeader";

//import RFAAffOrgs from "./components/About/RFAAffOrgs";
//import headerBlobYellow from "./media/HeaderBlobs/yellow.png";


export default function RFAVolOverview(props) {
  const positionsTitle = {
    fontFamily: 'Oswald',
    fontSize: "9vh",
    color: "#fa8d1f",
    textAlign: "center",
    letterSpacing: "5px",
  }
  const positionsDescription = {
    fontFamily: 'Be Vietnam',
    fontSize: "2.6vh",
    color: "black",
  }
  const positions = {
    marginLeft: "auto",
    marginRight: "auto",
    width: "120vh",
    textAlign: "center",
  }
  return (
    <div>
      <RFAVolOverviewHeader headerTextColor={"#fa8d1f"} image={YellowHeaderBlob} title={"Volunteer with Robotics for All"} description={"Volunteer with us to teach or develop your skills as a business development intern!"}></RFAVolOverviewHeader>
      <Container fluid style={{ backgroundColor: 'white' }}>
        <Row>
          <Container fluid>
            <Container style={{ width: "120vh" }}>
              <h2 style={positionsTitle} class="vol_intern_positions">VOLUNTEER  POSTIONS</h2>
              <p style={positionsDescription}>Robotics for All is run through the support of volunteers like you! Apply today to become a volunteer teacher or business development intern. Volunteer with us virtually from anywhere in the world! Click on the icons below to learn about our positions:</p>
            </Container>
          </Container>
        </Row>
        <Row>
          <Container>
            <Row style={positions}>
              <Col>
                <RFAVolOverviewImg image={TeacherToby} color={"#248F47"} title={"Lead Instructor"}></RFAVolOverviewImg>
              </Col>
              <Col>
                <RFAVolOverviewImg image={TeacherToby} color={"#c06204"} title={"Teacher Assistant"}></RFAVolOverviewImg>
              </Col>
              <Col>
                <RFAVolOverviewImg image={BusinessToby} color={"#006bd6"} title={"Publicity Volunteer"}></RFAVolOverviewImg>
              </Col>
            </Row>
          </Container>
        </Row>
        <Row>
          <Container>
            <RFAVolOverviewCard backgroundcolor = {"#B7EDC9"} buttonColor = {"#248F47"} title={"Lead Instructor"} description={"Lead Instructors are in charge of managing and teaching computer science or CAD classes to 3-15 students."} buttonfloat={"right"} cardfloat={"left"} buttonPaddingleft={"20px"} arrowLocation={"40px"}></RFAVolOverviewCard>
          </Container>
          <Container>
            <RFAVolOverviewCard backgroundcolor={"#FDD7B0"} buttonColor={"#c06204"} title={"Teacher Assistant"} description={"Teacher’s Assistants help Lead Instructors in teaching computer science or CAD classes, often using breakout rooms to teach smaller sections."} buttonfloat={"right"} cardfloat={"left"} buttonPaddingleft={"20px"} arrowLocation={"390px"}></RFAVolOverviewCard>
          </Container>
          <Container>
            <RFAVolOverviewCard backgroundcolor={"#B7DBFF"} buttonColor={"#006bd6"} title={"Publicity Intern"} description={"Publicity Interns help our publicity team to make awesome new visuals, giving you the great branding on this website!"} buttonfloat={"left"} cardfloat={"right"} buttonPaddingleft={"0px"} arrowLocation={"750px"}></RFAVolOverviewCard>
          </Container>
        </Row>
      </Container>
    </div>

  );
}
