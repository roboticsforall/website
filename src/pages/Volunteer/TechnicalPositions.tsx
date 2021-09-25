import React, { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { RFAHeader } from "@/components/RFAHeader";
import headerBlob from "@/media/HeaderBlobs/green.png";
import { RFATabsCardNoImage } from "@/components/RFATabCards";
import { RFAPosButton } from "@/components/RFAPosButton";

import Markdown from "markdown-to-jsx";

import { ColorThemes } from "@/colors";
import { RFAFAQDropdowns } from "@/components/RFAFAQDropdowns";
import technicalInternJSON from "@/posts/technical_intern.json"



export const TechnicalPositions: React.FC = () => {
  const [key, setKey] = useState("one");
  const ActiveStyle = {
    background: ColorThemes.mainGreen,
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
    color: ColorThemes.mainGreen,
    textAlign: "center",
    textTransform: "uppercase",
  };

  return (
    <div>
      <RFAHeader
        headerTextColor={ColorThemes.mainGreen}
        image={headerBlob}
        title={"Help develop curriculum and software!"}
        description={
          "Technical interns use their STEM skills to create and revise curriculum and make custom software."
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
                <p style={black}>Technical Intern Positions</p>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
              <RFATabsCardNoImage
                posHeader={"DETAILS"}
                generalColor = {ColorThemes.mainGreen}
                posDescription={
                  <div>
                    <p>
                      <Markdown>{technicalInternJSON.technical_intern_details}</Markdown>
                    </p>
                  </div>
                }
              />
              <RFAPosButton backgroundColor = {ColorThemes.mainGreen} backgroundHover = {ColorThemes.mainYellow} title={"Apply Now!"} link="/volunteer/volunteerapp" />
              <br/>
              <h2 className = "header-size" style={positionsTitle}>Positions</h2>
              <Container>
                {technicalInternJSON.positions.map((pair, i) => (
                  <RFAFAQDropdowns
                    key={i}
                    question={pair.name}
                    answer={pair.description}
                    colors = {{main: ColorThemes.mainGreen, light: ColorThemes.lightGreen, dark: ColorThemes.darkGreen, backgroundHover: ColorThemes.mainYellow}}
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
