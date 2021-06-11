import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'; //Col,
//import RFANavbar from "../RFANavbar";
import TeacherToby from "../../media/TobyImages/teacher toby.webp";
import BusinessToby from "../../media/TobyImages/toby business.webp";
import InternToby from "../../media/TobyImages/publicity intern.webp";
import TAToby from "../../media/TobyImages/TA.webp";
import RFAVolOverviewImg from "../RFAVolOverviewImg";
import RFAVolOverviewCard from "../RFAVolOverviewCard";
import YellowHeaderBlob from "../../media/HeaderBlobs/yellow.png";
import RFAVolOverviewHeader from "../RFAVolOverviewHeader";

//import RFAAffOrgs from "./components/About/RFAAffOrgs";
//import headerBlobYellow from "./media/HeaderBlobs/yellow.png";


export default function RFAVolOverview(props) {
  const positionsTitle = {
    fontFamily: 'Oswald',
    fontSize: "5.5vmax",
    color: "#fa8d1f",
    textAlign: "center",
    letterSpacing: "6px",
  }
  const positionsDescription = {
    fontFamily: 'BeVietnam-SemiBold',
    fontSize: "1.3vmax",
    color: "black",
  }
  const positions = {
    // marginLeft: "auto",
    // marginRight: "auto",
    // width: "120vh",
    // textAlign: "center",
  }
  return (
    <>
      <RFAVolOverviewHeader headerTextColor={"#fa8d1f"} image={YellowHeaderBlob} title={"Volunteer with Robotics for All"} description={"Volunteer with us to teach or develop your skills as a business development intern!"}></RFAVolOverviewHeader>
      <Container>
        <Row>
            <h2 style={positionsTitle}>VOLUNTEER  POSTIONS</h2>
            <p style={positionsDescription}>Robotics for All is run through the support of volunteers like you! Apply today to become a volunteer teacher or business development intern. Volunteer with us virtually from anywhere in the world! Click on the icons below to learn about our positions:</p>
        </Row>
        <Row>
          <Col sm className = "d-flex justify-content-center">
            <RFAVolOverviewImg image={TeacherToby} color={"#248F47"} title={"Lead Instructor"}/>
          </Col>
          <Col sm className = "d-flex justify-content-center">
            <RFAVolOverviewImg image={TAToby} color={"#c06204"} title={"Teacher Assistant"}/>
          </Col> 
          <Col sm className = "d-flex justify-content-center">
            <RFAVolOverviewImg image={InternToby} color={"#006bd6"} title={"Publicity Volunteer"}/>
          </Col>
        </Row>
        <Col>
            <RFAVolOverviewCard backgroundcolor = {"#70db9480"} buttonColor = {"#248F47"} title={"Lead Instructor"} description={"Lead Instructors are in charge of managing and teaching computer science or CAD classes to 3-15 students."} buttonfloat={"right"} cardfloat={"left"} arrowLocation={"4.6vmax"}></RFAVolOverviewCard>
            <RFAVolOverviewCard backgroundcolor={"#fcaf6280"} buttonColor={"#c06204"} title={"Teacher Assistant"} description={"Teacher’s Assistants help Lead Instructors in teaching computer science or CAD classes, often using breakout rooms to teach smaller sections."} buttonfloat={"right"} cardfloat={"left"} arrowLocation={"26vmax"}></RFAVolOverviewCard>
            <RFAVolOverviewCard backgroundcolor={"#70b8ff80"} buttonColor={"#006bd6"} title={"Publicity Intern"} description={"Publicity Interns help our publicity team to make awesome new visuals, giving you the great branding on this website!"} buttonfloat={"left"} cardfloat={"right"} arrowLocation={"47vmax"}></RFAVolOverviewCard>
        </Col>
      </Container>
    </>

  );
}