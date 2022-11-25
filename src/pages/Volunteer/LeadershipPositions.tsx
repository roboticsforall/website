import React from "react";
import { Header } from "@/components/Header";
import Container from "react-bootstrap/Container";

import headerBlob from "@/media/HeaderBlobs/orange.png";
import leadershipPositionJSON from "@/posts/leadership_positions.json";

export const LeadershipPositions: React.FC = () => {
  return (
    <>
      <Header
        headerTextColor={"#ffcc00"}
        image={headerBlob}
        title={"Leadership Positions"}
        description={"Apply to our Leadership Positions"}
      />
      <br />
      <br />
      <br />
      <Container>
        <h4>
            Interested in applying to a Leadership Role at RFA{" "}
            <a href = {leadershipPositionJSON.link}>
                Read More Here
            </a>
        </h4>
      </Container>
      <br />
      <br />
      <br />
    </>
  );
};
