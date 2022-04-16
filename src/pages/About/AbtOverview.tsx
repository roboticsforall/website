import React from "react";
import { Container } from "react-bootstrap";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png";
import { Header } from "@/components/Header";

import { ColorThemes } from "@/colors";

export const AbtOverview: React.FC = () => {
  const missionColor: React.CSSProperties = {
    color: ColorThemes.mainOrange,
  };

  const visionColor: React.CSSProperties = {
    color: ColorThemes.darkGreen,
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
      <section>
        <Container>
          <h2 style={{ ...missionColor }}>OUR MISSION</h2>
          <p>
            Robotics for All aims to inspire the next generation of students and
            volunteers to achieve their full potential, regardless of their
            background.
          </p>
        </Container>
      </section>
      <section style={{ backgroundColor: ColorThemes.lightGreen }}>
        <Container>
          <h2 style={{ ...visionColor }}>OUR VISION</h2>
          <p>
            A world where all students are able to access equitable educational
            opportunities to create their futures.
          </p>
        </Container>
      </section>
      <section>
        <Container>
          <h2 style={{ ...valuesColor }}>OUR VALUES</h2>
          <p>
            We are{" "}
            <span style={{ color: ColorThemes.mainOrange }}>motivated</span>.
            Each and every day, we strive to be a positive force in this world
            and create social change.
          </p>
          <p>
            We are{" "}
            <span style={{ color: ColorThemes.mainYellow }}>inclusive</span>. We
            celebrate the diversity of our students and volunteers alike.
          </p>
          <p>
            We are{" "}
            <span style={{ color: ColorThemes.mainGreen }}>accountable</span>.
            We emain honest and transparent in everything we do.
          </p>
          <p>
            We are{" "}
            <span style={{ color: ColorThemes.lightBlue }}>collaborative</span>.
            Through the strength of teamwork, we are able to generate stronger
            ideas and do more.
          </p>
          <p>
            We are{" "}
            <span style={{ color: ColorThemes.mainBlue }}>compassionate</span>.
            We care deeply about all of our students, volunteers, and our
            community.
          </p>
        </Container>
      </section>
    </div>
  );
};
