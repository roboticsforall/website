import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TeacherToby from "@/media/TobyImages/Teacher_Toby-320w.png";
import InternToby from "@/media/TobyImages/Intern_Toby-320w.png";
import TAToby from "@/media/TobyImages/TA_Toby-320w.png";
import { VolOverviewCard } from "@/components/Volunteer/VolOverviewCard";
import { VolOverviewStats } from "@/components/Volunteer/VolOverviewStats";
import headerBlob from "@/media/HeaderBlobs/orange.png";

import { Header } from "@/components/Header";

import orgLogisticsJSON from "@/posts/org_logistics.json";

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
                end={orgLogisticsJSON.num_levels_curriculum}
              />
            </Col>
            <Col md>
              <VolOverviewStats
                title={"Join our:"}
                subtext={"Active Volunteers"}
                end={orgLogisticsJSON.num_volunteers}
              />
            </Col>
            <Col md>
              <VolOverviewStats
                title={"Support our:"}
                subtext={"Students Taught"}
                end={orgLogisticsJSON.num_students_taught}
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
              title={"Teachers"}
              description={
                "Lead Instructor and TAs are in charge of teaching the several STEM courses RFA has to offer. Teachers are the backbone of our organization!"
              }
              image={TeacherToby}
              alt="Graphic of teacher"
            />
            <VolOverviewCard
              location="/volunteer/leadershippositions"
              backgroundColor={ColorThemes.lightOrange}
              buttonColor={ColorThemes.darkOrange}
              title={"Leadership Team"}
              description={
                "Leadership members are responsible for running the organization and its various facets."
              }
              image={InternToby}
              alt="Graphic of leadership team member"
            />
            <VolOverviewCard
              location="/volunteer/internoverview"
              backgroundColor={ColorThemes.lightBlue}
              buttonColor={ColorThemes.darkBlue}
              title={"Intern"}
              description={
                "Interns help across the backend of our organization in many ways and provide a vital service to our nonprofit, while gaining valuable business experiences."
              }
              image={TAToby}
              alt="Graphic of TA"
            />
            <VolOverviewCard
              location="/volunteer/curricdevpositions"
              backgroundColor={ColorThemes.lightYellow}
              buttonColor={ColorThemes.darkYellow}
              title={"Curriculum Development"}
              description={
                "Curriculum Developers at Robotics for All are in charge of developing new standardized curricula for our classes."
              }
              image={TAToby}
              alt="Graphic of curriculum developer"
            />
          </Row>
        </Container>
      </section>
    </>
  );
};
