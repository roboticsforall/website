import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'; //Col,
//import RFANavbar from "../RFANavbar";
import TeacherToby from "../../media/TobyImages/teacher toby.webp";
import BusinessToby from "../../media/TobyImages/toby business.webp";
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
  const positionsCards = {
    marginLeft: "auto",
    marginRight: "auto",
    width: "1000px",
    textAlign: "center",
  }
  return (
    <div>
      <RFAVolOverviewHeader headerTextColor={"#fa8d1f"} image={YellowHeaderBlob} title={"Volunteer with Robotics for All"} description={"Volunteer with us to teach or develop your skills as a business development intern!"}></RFAVolOverviewHeader>
      <Container fluid style={{ backgroundColor: 'white' }}>
        <Row>
          <Container fluid>
            <Container style={{ width: "950px" }}>
              <h2 style={positionsTitle} class="vol_intern_positions">VOLUNTEER  POSTIONS</h2>
              <p style={positionsDescription}>Robotics for All is run through the support of volunteers like you! Apply today to become a volunteer teacher or business development intern. Volunteer with us virtually from anywhere in the world! Click on the icons below to learn about our positions:</p>
            </Container>
          </Container>
        </Row>
        <Row>
          <Container>
            <Row style={positionsCards}>
              <Col>
                <RFAVolOverviewCard image={TeacherToby} color={"#33cc66"} title={"Lead Instructor"}></RFAVolOverviewCard>
              </Col>
              <Col>
                <RFAVolOverviewCard image={TeacherToby} color={"#fa8d1f"} title={"Teacher Assistant"}></RFAVolOverviewCard>
              </Col>
              <Col>
                <RFAVolOverviewCard image={BusinessToby} color={"#3399ff"} title={"Publicity Volunteer"}></RFAVolOverviewCard>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </div>

  );
}
