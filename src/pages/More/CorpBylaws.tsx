import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "@/components/Header";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png";
import { BylawEntry } from "@/components/More/BylawEntry";
import bylawsListJSON from "@/posts/downloads/corp_bylaws.json";

import { ColorThemes } from "@/colors";

export const CorpBylaws: React.FC = () => {
  const background: React.CSSProperties = {
    background: ColorThemes.lightYellow,
    borderRadius: "15px",
  };
  const header: React.CSSProperties = {
    background: ColorThemes.lightYellow,
    borderRadius: "20px",
    border: "10px solid white",
    padding: "5px",
    textAlign: "center",
  };
  return (
    <div>
      <Header
        headerTextColor={ColorThemes.mainYellow}
        image={headerBlobYellow}
        title={"Corporate Bylaws"}
        description={"Learn more about Robotics for All's bylaws!"}
      />
      <br></br>
      <br></br>
      <Container>
        <Row className="center-align">
          <Col xs={3} style={header}>
            <h3>Date</h3>
          </Col>
          <Col xs={6} style={header}>
            <h3>Item</h3>
          </Col>
          <Col xs={3} style={header}>
            <h3>File</h3>
          </Col>
        </Row>
      </Container>
      <Container style={background}>
        {bylawsListJSON.corp_bylaws_list.map((bylawEntry, i) => (
          <BylawEntry
            key={i}
            date={bylawEntry.date}
            bylawName={bylawEntry.item_name}
            download={bylawEntry.file_path}
          />
        ))}
      </Container>
      <br />
      <br />
    </div>
  );
};
