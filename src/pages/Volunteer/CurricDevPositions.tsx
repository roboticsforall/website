import React, { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { RFAHeader } from "@/components/RFAHeader";
import headerBlob from "@/media/HeaderBlobs/yellow.png";
import { RFATabsCardNoImage } from "@/components/RFATabCards";
import { RFAPosButton } from "@/components/RFAPosButton";

import Markdown from "markdown-to-jsx";

import { ColorThemes } from "@/colors";
import { RFAFAQDropdowns } from "@/components/RFAFAQDropdowns";

import curricdevpositionsJSON from "@/posts/curriculum_developer.json";


export const CurricDevPositions: React.FC = () => {
  const [key, setKey] = useState("one");
  const ActiveStyle = {
    background: ColorThemes.mainYellow,
    border: "none",
    borderRadius: "15px 15px 0 0",
    fontFamily: "BeVietnam-ExtraBold",
    fontSize: "x-large",
    padding: "20px",
    height: "100%",
  };
  const black = {
    color: "#000000",
  };
  const positionsTitle: React.CSSProperties = {
    fontFamily: "BeVietnam-ExtraBold",
    letterSpacing: "0.25em",
    color: ColorThemes.mainYellow,
    textAlign: "center",
    textTransform: "uppercase",
  };

  return (
    <div>
      <RFAHeader
        headerTextColor = {ColorThemes.mainYellow}
        image={headerBlob}
        title={"Help develop curriculum!"}
        description={
          "Curriculum developers construct the diverse set of curriculum at RFA"
        }
      />
      <Container>
        <br></br>
        <br></br>
        <br></br>
        <Tab.Container activeKey={key} onSelect={(key) => setKey(key!)}>
          <Nav justify fill variant="tabs">
            <Nav.Item>
              <Nav.Link
                eventKey="one"
                className="pos"
                style={ActiveStyle}
              >
                <p style={black}>Curriculum Developer Positions</p>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
              <RFATabsCardNoImage
                posHeader={"DETAILS"}
                generalColor = {ColorThemes.mainYellow}
                posDescription={
                  <div>
                    <p>
                      <Markdown>{curricdevpositionsJSON.curriculum_developer_details}</Markdown>
                    </p>
                  </div>
                }
              />
              <RFAPosButton backgroundColor = {ColorThemes.mainYellow} backgroundHover = {ColorThemes.mainYellow} title={"Apply Now!"} link="/volunteer/volunteerapp" />
              <br/>
              <h2 className = "header-size" style={positionsTitle}>Positions</h2>
              <Container>
                {curricdevpositionsJSON.positions.map((pair, i) => (
                  <RFAFAQDropdowns
                    key={i}
                    question={pair.name}
                    answer={pair.description}
                    colors = {{main: ColorThemes.mainOrange, light: ColorThemes.lightOrange, dark: ColorThemes.darkOrange, backgroundHover: ColorThemes.mainYellow}}
                  />
                ))}
                <br/>
              </Container>
              <br></br>
              <br></br>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};
