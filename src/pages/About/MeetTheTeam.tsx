import React from "react";
import bmInfoJSON from "@/posts/board_members.json";
import ccInfoJSON from "@/posts/curriculum_committee.json";
import adInfoJSON from "@/posts/assistant_directors.json";
//import pcInfoJSON from "@/posts/pub_committee.json";

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
            {bmInfoJSON.board_members_list.map((info: any, i: number) => (
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
            {adInfoJSON.assistant_directors_list.map((info: any, i: number) => (
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
            {ccInfoJSON.curriculum_committee_list.map(
              (info: any, i: number) => (
                <Col key={i}>
                  <MeetTheTeamCard
                    info={info}
                    backgroundColor={ColorThemes.mainYellow}
                    color={ColorThemes.darkYellow}
                  />
                </Col>
              )
            )}
          </Row>
        </Container>
      </section>
    </section>
  );
};
