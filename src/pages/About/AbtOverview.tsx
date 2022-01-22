import React from "react";
import { Container } from "react-bootstrap";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png";
import { Header } from "@/components/Header";

import { ColorThemes } from "@/colors";

export const AbtOverview: React.FC = () => {
  const title: React.CSSProperties = {
    textAlign: "center",
  };
  const description: React.CSSProperties = {
    color: "black",
  };
  const missionColor: React.CSSProperties = {
    color: ColorThemes.mainOrange,
  };

  const visionColor: React.CSSProperties = {
    color: ColorThemes.mainGreen,
  };

  const valuesColor: React.CSSProperties = {
    color: ColorThemes.mainBlue,
  };

  return (
    <div>
      <Header
        headerTextColor={ColorThemes.mainYellow}
        image={headerBlobYellow}
        title={"Welcome to Robotics for All!"}
        description={"Learn more about Robotics for All and what we do!"}
      />
      <Container fluid>
        <br />
        <Container>
          <h2 style={{ ...title, ...missionColor }}>OUR MISSION</h2>
          <p className="text-center" style={description}>
            Robotics for All aims to inspire the next generation of students and
            volunteers to achieve their full potential, regardless of their
            background.
          </p>
        </Container>
        <br />
      </Container>
      <Container fluid style={{ backgroundColor: ColorThemes.lightGreen }}>
        <br />
        <Container>
          <h2 style={{ ...title, ...visionColor }}>OUR VISION</h2>
          <p className="text-center" style={description}>
            A world where all students are able to access equitable educational
            opportunities to create their futures.
          </p>
        </Container>
        <br />
      </Container>
      <Container fluid>
        <br />
        <Container>
          <h2 style={{ ...title, ...valuesColor }}>OUR VALUES</h2>
          <p style={description}>
            We are{" "}
            <span
              style={{
                color: ColorThemes.mainOrange,
              }}
            >
              motivated
            </span>
            . Each and every day, we strive to be a positive force in this world
            and create social change.
          </p>
          <div></div>
          <p style={description}>
            We are{" "}
            <span
              style={{
                color: ColorThemes.mainYellow,
              }}
            >
              inclusive
            </span>
            . We celebrate the diversity of our students and volunteers alike.
          </p>
          <div></div>
          <p style={description}>
            We are{" "}
            <span
              style={{
                color: ColorThemes.mainGreen,
              }}
            >
              accountable
            </span>
            . We emain honest and transparent in everything we do.
          </p>
          <div></div>
          <p style={description}>
            We are{" "}
            <span
              style={{
                color: ColorThemes.lightBlue,
              }}
            >
              collaborative
            </span>
            . Through the strength of teamwork, we are able to generate stronger
            ideas and do more.
          </p>
          <div></div>
          <p style={description}>
            We are{" "}
            <span
              style={{
                color: ColorThemes.mainBlue,
              }}
            >
              compassionate
            </span>
            . We care deeply about all of our students, volunteers, and our
            community.
          </p>
        </Container>
        <br />
      </Container>
    </div>
  );
};
