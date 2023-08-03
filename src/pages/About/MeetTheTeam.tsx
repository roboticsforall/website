import React from "react";
import { Header } from "@/components/Header";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png"; // add correct image here
import bmInfoJSON from "@/posts/board_members.json";
import ccInfoJSON from "@/posts/curriculum_committee.json";
import adInfoJSON from "@/posts/assistant_directors.json";
import pcInfoJSON from "@/posts/pub_committee.json";

import { MeetTheTeamCard } from "@/components/About/MeetTheTeamCard";

import Carousel from "react-bootstrap/Carousel";

import { ColorThemes } from "@/colors";

enum Headers {
  First = "EXECUTIVE COMMITTEE",
  Second = "BOARD OF DIRECTORS",
  Third = "CURRICULUM COMMITTEE",
  Fourth = "PUBLICITY COMMITTEE",
}

export const MeetTheTeam: React.FC = () => {
  const yellowRow = {
    backgroundColor: ColorThemes.lightYellow,
  };
  const greenRow = {
    backgroundColor: ColorThemes.lightGreen,
  };
  const blueRow = {
    backgroundColor: ColorThemes.lightBlue,
  };
  const orangeRow = {
    backgroundColor: ColorThemes.lightOrange,
  };
  const header: React.CSSProperties = {
    textAlign: "center",
  };

  return (
    <>
      <Header
        headerTextColor={ColorThemes.mainYellow}
        image={headerBlobYellow}
        title={"Get to Know our Team!"}
        description={"Get to know the faces behind Robotics for All!"}
      />

      <section>
        <h2 style={{ color: ColorThemes.mainOrange, ...header }}>
          {Headers.First}
        </h2>

        <section style={yellowRow}>
          <Carousel>
            {bmInfoJSON.board_members_list.map((info: any, i: number) => (
              <Carousel.Item key={i}>
                <MeetTheTeamCard
                  info={info}
                  backgroundColor={ColorThemes.mainYellow}
                  color={ColorThemes.darkYellow}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </section>
      </section>

      <section>
        <h2 style={{ color: ColorThemes.mainGreen, ...header }}>
          {Headers.Second}
        </h2>

        <section style={greenRow}>
          <Carousel>
            {adInfoJSON.assistant_directors_list.map((info: any, i: number) => (
              <Carousel.Item key={i}>
                <MeetTheTeamCard
                  info={info}
                  backgroundColor={ColorThemes.mainGreen}
                  color={ColorThemes.darkGreen}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </section>
      </section>

      <section>
        <h2 style={{ color: ColorThemes.mainBlue, ...header }}>
          {Headers.Third}
        </h2>

        <section style={blueRow}>
          <Carousel>
            {ccInfoJSON.curriculum_committee_list.map(
              (info: any, i: number) => (
                <Carousel.Item key={i}>
                  <MeetTheTeamCard
                    info={info}
                    backgroundColor={ColorThemes.mainBlue}
                    color={ColorThemes.darkBlue}
                  />
                </Carousel.Item>
              )
            )}
          </Carousel>
        </section>
      </section>

      <section>
        <h2 style={{ color: ColorThemes.mainYellow, ...header }}>
          {Headers.Fourth}
        </h2>
        <section style={orangeRow}>
          <Carousel>
            {pcInfoJSON.pub_committee.map((info: any, i: number) => (
              <Carousel.Item key={i}>
                <MeetTheTeamCard
                  info={info}
                  backgroundColor={ColorThemes.mainOrange}
                  color={ColorThemes.darkOrange}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </section>
      </section>
    </>
  );
};
