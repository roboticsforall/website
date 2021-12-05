import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TeacherToby from "@/media/TobyImages/teacher toby.webp";
import InternToby from "@/media/TobyImages/publicity intern.webp";
import TAToby from "@/media/TobyImages/TA.webp";
import { VolOverviewImg } from "@/components/Volunteer/VolOverviewImg";
import { VolOverviewCard } from "@/components/Volunteer/VolOverviewCard";
import { VolOverviewCircle } from "@/components/Volunteer/VolOverviewCircle";
import headerBlob from "@/media/HeaderBlobs/orange.png";

import { Header } from "@/components/Header";

import { ColorThemes } from "../../colors";

export const VolOverview: React.FC = () => {
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
      <Header
        headerTextColor={ColorThemes.mainOrange}
        image={headerBlob}
        title={"Volunteer with Robotics for All"}
        description={
          "Volunteer with us to teach or develop your skills as a business development intern!"
        }
      />
      <br />
      <br />
      <Container>
        <Row className="justify-content-around">
          <Col md>
            <VolOverviewCircle
              title={"Work With:"}
              subtext={"Levels of Curriculum"}
              end={12}
            ></VolOverviewCircle>
          </Col>
          <Col md>
            <VolOverviewCircle
              title={"Join our:"}
              subtext={"Active Volunteers"}
              end={240}
            ></VolOverviewCircle>
          </Col>
          <Col md>
            <VolOverviewCircle
              title={"Support our:"}
              subtext={"Students Taught"}
              end={1296}
            ></VolOverviewCircle>
          </Col>
        </Row>

        <br />
        <br />
        <br />

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
            <VolOverviewImg
              image={TeacherToby}
              color={ColorThemes.darkGreen}
              title={"Lead Instructor"}
            />
          </Col>
          <Col sm className="d-flex justify-content-center">
            <VolOverviewImg
              image={TAToby}
              color={ColorThemes.darkOrange}
              title={"Teacher Assistant"}
            />
          </Col>
          <Col sm className="d-flex justify-content-center">
            <VolOverviewImg
              image={InternToby}
              color={ColorThemes.darkBlue}
              title={"Publicity Volunteer"}
            />
          </Col>
        </Row>
        <br></br>
        <Col>
          <VolOverviewCard
            applyLink="/volunteer/volunteerapp"
            learnMoreLink="/volunteer/teacherpos"
            backgroundcolor={ColorThemes.lightGreen}
            buttonColor={ColorThemes.darkGreen}
            title={"Lead Instructor"}
            description={
              "Lead Instructors are in charge of managing and teaching computer science or CAD classes to 3-15 students."
            }
            buttonfloat={"right"}
            cardfloat={"left"}
          ></VolOverviewCard>
          <br></br>
          <VolOverviewCard
            applyLink="/volunteer/volunteerapp"
            learnMoreLink="/volunteer/teacherpos"
            backgroundcolor={ColorThemes.lightOrange}
            buttonColor={ColorThemes.mainOrange}
            title={"Teacher Assistant"}
            description={
              "Teacher’s Assistants help Lead Instructors in teaching computer science or CAD classes, often using breakout rooms to teach smaller sections."
            }
          ></VolOverviewCard>
          <br></br>
          <VolOverviewCard
            applyLink="/volunteer/volunteerapp"
            learnMoreLink="/volunteer/publicitypos"
            backgroundcolor={ColorThemes.lightBlue}
            buttonColor={ColorThemes.darkBlue}
            title={"Publicity Intern"}
            description={
              "Publicity Interns help our publicity team to make awesome new visuals, giving you the great branding on this website!"
            }
          ></VolOverviewCard>
        </Col>
        <br />
        <br />
      </Container>
    </>
  );
};
