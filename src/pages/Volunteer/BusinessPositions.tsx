import React, { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { Header } from "@/components/Header";
import headerBlob from "@/media/HeaderBlobs/blue.png";
import { TabsCardNoImage } from "@/components/Volunteer/TabCards";
import { PosButton } from "@/components/Volunteer/PosButton";

import Markdown from "markdown-to-jsx";


import { ColorThemes } from "@/colors";
import { FAQDropdowns } from "@/components/FAQDropdowns";
import generalInternJSON from "@/posts/general_intern.json";
import googleForms from "@/posts/google_form.json";

export const BusinessPositions: React.FC = () => {
  const [key, setKey] = useState("one");
  const ActiveStyle = {
    background: ColorThemes.mainBlue,
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
    color: ColorThemes.mainBlue,
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "3em",
    wordBreak: "break-word"
  };

  return (
    <div>
      <Header
        headerTextColor={ColorThemes.mainBlue}
        image={headerBlob}
        title={"Become a General Business Intern!"}
        description={
          "General Business Interns help with a variety of tasks from recruitment to data analysis!"
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
                <p style={black}>Business Intern Positions</p>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <TabsCardNoImage
              posHeader={"DETAILS"}
              generalColor={ColorThemes.mainBlue}
              posDescription={
                <div>
                  <p>
                    <Markdown>
                      {generalInternJSON.general_intern_details}
                    </Markdown>
                  </p>
                </div>
              }
            />
            <PosButton
              backgroundColor={ColorThemes.mainBlue}
              backgroundHover={ColorThemes.mainYellow}
              title={"Apply Now!"}
              link="/volunteer/volunteerapp"
            />
            <br />
            <h2 style={positionsTitle}>Positions</h2>
            <Container>
              {generalInternJSON.positions.map((pair, i) => (
                <FAQDropdowns
                  key={i}
                  question={pair.name}
                  answer={pair.description}
                  colors={{
                    main: ColorThemes.mainBlue,
                    light: ColorThemes.lightBlue,
                    dark: ColorThemes.darkBlue,
                    backgroundHover: ColorThemes.mainYellow,
                  }}
                />
              ))}
              <br />
            </Container>
            <br></br>
            <br></br>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};
