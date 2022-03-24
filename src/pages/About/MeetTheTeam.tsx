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

import "../../index.css";

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

      <br />

      <h2 style={{ color: ColorThemes.mainOrange, ...header }}>
        BOARD OF DIRECTORS
      </h2>

      <div style={yellowRow}>
        <Carousel>
          {bmInfoJSON.board_members_list.map((info: any, i: number) => (
            <Carousel.Item key = {i}>
              <MeetTheTeamCard
                info={info}
                backgroundColor={ColorThemes.mainYellow}
                color={ColorThemes.darkYellow}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <br />
      <br />

      <h2 style={{ color: ColorThemes.mainGreen, ...header }}>
        EXECUTIVE ASSISTANT DIRECTOR
      </h2>

      <div style={greenRow}>
        <Carousel>
          {adInfoJSON.assistant_directors_list.map((info: any, i: number) => (
            <Carousel.Item key = {i}>
              <MeetTheTeamCard
                info={info}
                backgroundColor={ColorThemes.mainGreen}
                color={ColorThemes.darkGreen}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <br />
      <br />

      <h2 style={{ color: ColorThemes.mainBlue, ...header }}>
        CURRICULUM COMMITTEE
      </h2>

      <div style={blueRow}>
        <Carousel>
          {ccInfoJSON.curriculum_committee_list.map((info: any, i: number) => (
            <Carousel.Item key = {i}>
              <MeetTheTeamCard
                info={info}
                backgroundColor={ColorThemes.mainBlue}
                color={ColorThemes.darkBlue}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <br />
      <br />

      <h2 style={{ color: ColorThemes.mainYellow, ...header }}>
        PUBLICITY COMMITTEE
      </h2>
      <div style={orangeRow}>
        <Carousel>
          {pcInfoJSON.pub_committee.map((info: any, i: number) => (
            <Carousel.Item key = {i}>
              <MeetTheTeamCard
                info={info}
                backgroundColor={ColorThemes.mainOrange}
                color={ColorThemes.darkOrange}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};
