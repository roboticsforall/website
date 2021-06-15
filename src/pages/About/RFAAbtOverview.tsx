import React from "react";
import "@/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png";
import { RFAHeader } from "@/components/RFAHeader";

export const RFAAbtOverview: React.FC<{}> = (props) => {
  const title: React.CSSProperties = {
    fontFamily: "Oswald-Medium",
    fontSize: "10vh",
    textAlign: "center",
  };
  const description: React.CSSProperties = {
    fontFamily: "BeVietnam-Regular",
    fontSize: "3.5vh",
    color: "black",
  };
  const missionColor: React.CSSProperties = {
    color: "#fa8d1f",
  };

  const visionColor: React.CSSProperties = {
    color: "#33cc66",
  };

  const valuesColor: React.CSSProperties = {
    color: "#3399ff",
  };

  return (
    <div>
      <RFAHeader
        headerTextColor={"#ffcc00"}
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
      <Container fluid style={{ backgroundColor: "#B7EDC9" }}>
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
              style={{ fontFamily: "BeVietnam-Semibold", color: "#fa8d1f" }}
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
              style={{ fontFamily: "BeVietnam-Semibold", color: "#ffcc00" }}
            >
              inclusive
            </span>
            . We celebrate the diversity of our students and volunteers alike.
          </p>
          <div></div>
          <p style={description}>
            We are{" "}
            <span
              style={{ fontFamily: "BeVietnam-Semibold", color: "#33cc66" }}
            >
              accountable
            </span>
            . We remain honest and transparent in everything we do.
          </p>
          <div></div>
          <p style={description}>
            We are{" "}
            <span
              style={{ fontFamily: "BeVietnam-Semibold", color: "#70b8ff" }}
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
              style={{ fontFamily: "BeVietnam-Semibold", color: "#006bd6" }}
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
