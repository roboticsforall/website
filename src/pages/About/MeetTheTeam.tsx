import React from "react";
import leadership_team from "@/posts/leadership_team.json";

import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { MeetTheTeamCard } from "@/components/About/MeetTheTeamCard";
import { Header } from "@/components/Header";

import { ColorThemes } from "@/colors";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png";

enum Headers {
  First = "EXECUTIVE COMMITTEE",
  Second = "BOARD OF DIRECTORS",
  Third = "CURRICULUM COMMITTEE",
  Fourth = "PUBLICITY COMMITTEE",
}

export const MeetTheTeam: React.FC = () => {
  return (
    <section>
      <Header
        headerTextColor={ColorThemes.mainYellow}
        image={headerBlobYellow}
        title={"Get to Know our Team!"}
        description={"Get to know the faces behind Robotics for All!"}
      />
      <section>
        <h2
          style={{
            color: ColorThemes.mainOrange,
          }}
          className="text-center mb-4"
        >
          {Headers.First}
        </h2>
        <Container>
          <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
            {leadership_team.leadership_team_list
              .filter((person) => person.includes("board_of_directors"))
              .map((info: any, i: number) => (
                <Col key={i}>
                  <MeetTheTeamCard
                    info={info}
                    backgroundColor={ColorThemes.mainYellow}
                    color={ColorThemes.darkYellow}
                  />
                </Col>
              ))}
          </Row>
        </Container>
      </section>

      <section>
        <h2
          style={{
            color: ColorThemes.mainGreen,
          }}
          className="text-center mb-4"
        >
          {Headers.Second}
        </h2>
        <Container>
          <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
            {leadership_team.leadership_team_list
              .filter((person) => person.includes("executive_team"))
              .map((info: any, i: number) => (
                <Col key={i}>
                  <MeetTheTeamCard
                    info={info}
                    backgroundColor={ColorThemes.mainYellow}
                    color={ColorThemes.darkYellow}
                  />
                </Col>
              ))}
          </Row>
        </Container>
      </section>

      <section>
        <h2
          style={{
            color: ColorThemes.mainBlue,
          }}
          className="text-center mb-4"
        >
          {Headers.Third}
        </h2>
        <Container>
          <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
            {leadership_team.leadership_team_list
              .filter((person) => person.includes("other_leadership"))
              .map((info: any, i: number) => (
                <Col key={i}>
                  <MeetTheTeamCard
                    info={info}
                    backgroundColor={ColorThemes.mainYellow}
                    color={ColorThemes.darkYellow}
                  />
                </Col>
              ))}
          </Row>
        </Container>
      </section>
    </section>
  );
};
