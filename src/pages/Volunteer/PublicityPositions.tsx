import React, { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { Header } from "@/components/Header";
import headerBlobOrange from "@/media/HeaderBlobs/orange.png";
import { TabsCardNoImage } from "@/components/Volunteer/TabCards";
import { PosButton } from "@/components/Volunteer/PosButton";

import Markdown from "markdown-to-jsx";

import { ColorThemes } from "@/colors";
import { FAQDropdowns } from "@/components/FAQDropdowns";

import publicityInternJSON from "@/posts/publicity_intern.json";

export const PublicityPositions: React.FC = () => {
  const [key, setKey] = useState("one");
  const ActiveStyle = {
    background: ColorThemes.mainOrange,
    border: "none",
    padding: "20px",
    height: "100%",
  };
  const black = {
    color: "#000000",
  };
  const positionsTitle: React.CSSProperties = {
    letterSpacing: "0.25em",
    color: ColorThemes.mainOrange,
    textAlign: "center",
    textTransform: "uppercase",
    wordBreak: "break-word"
  };

  return (
    <div>
      <Header
        headerTextColor={ColorThemes.mainOrange}
        image={headerBlobOrange}
        title={"Volunteer to Build Our Outreach!"}
        description={
          "Volunteer to help with graphic design, illustrations, and much much more!"
        }
      />
      <Container>
        <br></br>
        <br></br>
        <br></br>
        <Tab.Container activeKey={key} onSelect={(key) => setKey(key!)}>
          <Nav justify fill variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="one" className="pos" style={ActiveStyle}>
                <p style={black}>Publicity Intern Positions</p>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <TabsCardNoImage
              posHeader={"DETAILS"}
              generalColor={ColorThemes.mainOrange}
              posDescription={
                <div>
                  <p>
                    <Markdown>
                      {publicityInternJSON.publicity_intern_details}
                    </Markdown>
                  </p>
                </div>
              }
            />
            <PosButton
              backgroundColor={ColorThemes.mainOrange}
              backgroundHover={ColorThemes.mainYellow}
              title={"Apply Now!"}
              link="/volunteer/volunteerapp"
            />
            <br></br>
            <br></br>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};
