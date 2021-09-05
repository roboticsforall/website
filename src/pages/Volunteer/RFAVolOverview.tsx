import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TeacherToby from "@/media/TobyImages/teacher toby.webp";
import InternToby from "@/media/TobyImages/publicity intern.webp";
import TAToby from "@/media/TobyImages/TA.webp";
import { RFAVolOverviewImg } from "@/components/RFAVolOverviewImg";
import { RFAVolOverviewCard } from "@/components/RFAVolOverviewCard";
import headerBlobOrange from "@/media/HeaderBlobs/orange.png";
import { RFAVolOverviewHeader } from "@/components/RFAVolOverviewHeader";

import { ColorThemes } from "../../colors";

export const RFAVolOverview: React.FC = () => {
  const positionsTitle: React.CSSProperties = {
    fontFamily: "Oswald-Medium",
    fontSize: "5.5vmax",
    color: ColorThemes.mainOrange,
    textAlign: "center",
    letterSpacing: "0.1em",
  };
  const positionsDescription: React.CSSProperties = {
    fontFamily: "BeVietnam-SemiBold",
    fontSize: "1.3vmax",
    color: ColorThemes.black,
  };

  return (
    <>
      <RFAVolOverviewHeader
        headerTextColor={ColorThemes.mainOrange}
        image={headerBlobOrange}
        title={"Volunteer with Robotics for All"}
        description={
          "Volunteer with us to teach or develop your skills as a business development intern!"
        }
      />
      <br />
      <br />
      <Container>
        <Row>
          <h2 style={positionsTitle}>VOLUNTEER POSTIONS</h2>
          <p style={positionsDescription}>
            Robotics for All is run through the support of volunteers like you!
            Apply today to become a volunteer teacher or business development
            intern. Volunteer with us virtually from anywhere in the world!
          </p>
        </Row>
        <Row>
          <Col sm className="d-flex justify-content-center">
            <RFAVolOverviewImg
              image={TeacherToby}
              color={ColorThemes.darkGreen}
              title={"Lead Instructor"}
            />
          </Col>
          <Col sm className="d-flex justify-content-center">
            <RFAVolOverviewImg
              image={TAToby}
              color={ColorThemes.darkOrange}
              title={"Teacher Assistant"}
            />
          </Col>
          <Col sm className="d-flex justify-content-center">
            <RFAVolOverviewImg
              image={InternToby}
              color = {ColorThemes.darkBlue}
              title={"Publicity Volunteer"}
            />
          </Col>
        </Row>
        <br></br>
        <Col>
          <RFAVolOverviewCard
            applyLink="/volunteer/volunteerapp"
            learnMoreLink="/volunteer/teacherpos"
            backgroundcolor={ColorThemes.lightGreen}
            buttonColor = {ColorThemes.darkGreen}
            title={"Lead Instructor"}
            description={
              "Lead Instructors are in charge of managing and teaching computer science or CAD classes to 3-15 students."
            }
            buttonfloat={"right"}
            cardfloat={"left"}
            arrowLocation={"4.6vmax"}
          ></RFAVolOverviewCard>
          <br></br>
          <RFAVolOverviewCard
            applyLink="/volunteer/volunteerapp"
            learnMoreLink="/volunteer/teacherpos"
            backgroundcolor={ColorThemes.lightOrange}
            buttonColor={ColorThemes.mainOrange}
            title={"Teacher Assistant"}
            description={
              "Teacher’s Assistants help Lead Instructors in teaching computer science or CAD classes, often using breakout rooms to teach smaller sections."
            }
            buttonfloat={"right"}
            cardfloat={"left"}
            arrowLocation={"26vmax"}
          ></RFAVolOverviewCard>
          <br></br>
          <RFAVolOverviewCard
            applyLink="/volunteer/volunteerapp"
            learnMoreLink="/volunteer/publicitypos"
            backgroundcolor={ColorThemes.lightBlue}
            buttonColor={ColorThemes.darkBlue}
            title={"Publicity Intern"}
            description={
              "Publicity Interns help our publicity team to make awesome new visuals, giving you the great branding on this website!"
            }
            buttonfloat={"left"}
            cardfloat={"right"}
            arrowLocation={"47vmax"}
          ></RFAVolOverviewCard>
        </Col>
        <br/>
        <br/>

      </Container>
    </>
  );
};
