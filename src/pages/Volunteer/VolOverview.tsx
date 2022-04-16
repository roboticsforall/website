import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TeacherToby from "@/media/TobyImages/Teacher_Toby.png";
import InternToby from "@/media/TobyImages/Intern_Toby.png";
import TAToby from "@/media/TobyImages/TA_Toby.png";
import { VolOverviewImg } from "@/components/Volunteer/VolOverviewImg";
import { VolOverviewCard } from "@/components/Volunteer/VolOverviewCard";
import { VolOverviewStats } from "@/components/Volunteer/VolOverviewStats";
import headerBlob from "@/media/HeaderBlobs/orange.png";

import { Header } from "@/components/Header";

import { ColorThemes } from "../../colors";

export const VolOverview: React.FC = () => {
  const positionsTitle: React.CSSProperties = {
    color: ColorThemes.mainOrange,
    textAlign: "center",
  };
  const positionsDescription: React.CSSProperties = {
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
      <section>
        <Container>
          <Row className="justify-content-around">
            <Col md>
              <VolOverviewStats
                title={"Work With:"}
                subtext={"Levels of Curriculum"}
                end={12}
              />
            </Col>
            <Col md>
              <VolOverviewStats
                title={"Join our:"}
                subtext={"Active Volunteers"}
                end={240}
              />
            </Col>
            <Col md>
              <VolOverviewStats
                title={"Support our:"}
                subtext={"Students Taught"}
                end={1296}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <h2 style={positionsTitle}>VOLUNTEER POSTIONS</h2>
            <p style={positionsDescription}>
              Robotics for All is run through the support of volunteers like
              you! Apply today to become a volunteer teacher or business
              development intern. Volunteer with us virtually from anywhere in
              the world!
            </p>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="g-4">
            <VolOverviewCard
              location="/volunteer/teacherpos"
              backgroundColor={ColorThemes.lightGreen}
              buttonColor={ColorThemes.darkGreen}
              title={"Lead Instructor"}
              description={
                "Lead Instructors are in charge of managing and teaching computer science or CAD classes to 3-15 students."
              }
              image={TeacherToby}
            />
            <VolOverviewCard
              location="/volunteer/teacherpos"
              backgroundColor={ColorThemes.lightOrange}
              buttonColor={ColorThemes.darkOrange}
              title={"Teacher Assistant"}
              description={
                "Teacher’s Assistants help Lead Instructors in teaching computer science or CAD classes, often using breakout rooms to teach smaller sections."
              }
              image={TAToby}
            />
            <VolOverviewCard
              location="/volunteer/internoverview"
              backgroundColor={ColorThemes.lightBlue}
              buttonColor={ColorThemes.darkBlue}
              title={"Intern"}
              description={
                "Interns help across the backend of our organization in many ways and provide a vital service to our nonprofit, while gaining valuable business experiences."
              }
              image={InternToby}
            />
          </Row>
        </Container>
      </section>
    </>
  );
};
