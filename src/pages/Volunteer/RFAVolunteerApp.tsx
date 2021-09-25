import React, { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { RFAHeader } from "@/components/RFAHeader";
import headerBlobOrange from "@/media/HeaderBlobs/orange.png";
import { RFATabsCardNoImage } from "@/components/RFATabCards";
import googleForms from "@/posts/google_form.json";
import Markdown from "markdown-to-jsx";
import { ColorThemes } from "@/colors";

import { RFAInternDescriptionTabs } from "./RFAInternDescriptionTabs";


export const RFAVolunteerApp: React.FC = () => {
  const [key, setKey] = useState("one");
  const ActiveStyle: React.CSSProperties = {
    color: "#000000",
    background: "#FFCC00",
    border: "none",
    borderRadius: "15px 15px 0 0",
    fontFamily: "BeVietnam-ExtraBold",
    fontSize: "x-large",
    padding: "30px",
  };

  return (
    <div>
      <RFAHeader
        headerTextColor={"#FA8D1F"}
        image={headerBlobOrange}
        title={"Join us to help students in STEM!"}
        description={
          "Fill out the form below to sign up for our classes today!"
        }
      />
      <br></br>
      <br></br>
      <Container>
        <Tab.Container activeKey={key} onSelect={(key) => setKey(key!)}>
          <Nav justify fill variant="tabs">
            <Nav.Item>
              <Nav.Link
                eventKey="one"
                style={key === "one" ? ActiveStyle : ActiveStyle}
              >
                Teacher/TA
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="one">
              <RFATabsCardNoImage
                generalColor = {ColorThemes.mainYellow}
                backgroundColor = {ColorThemes.lightYellow}
                posHeader={""}
                posDescription={
                  <div className="center-align">
                    <Markdown>{googleForms.teacher_app_form_code.code}</Markdown>
                  </div>
                }
              />
            </Tab.Pane>
            <Tab.Pane eventKey="two">
              <RFATabsCardNoImage
                generalColor = {ColorThemes.mainOrange}
                backgroundColor = {ColorThemes.lightOrange}
                posHeader={""}
                posDescription={
                  <div className="center-align">
                    <Markdown>{googleForms.ta_app_form_code.code}</Markdown>
                  </div>
                }
              />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        <RFAInternDescriptionTabs
              publicityDescription = {
                <Markdown>{googleForms.publicity_intern_app_form_code.code}</Markdown>
              }
              technicalDescription = {
                <Markdown>{googleForms.technical_intern_app_form_code.code}</Markdown>
              }
              businessDescription = {
                <Markdown>{googleForms.general_intern_app_form_code.code}</Markdown>
              }
              addButtons = {false}
        />
      </Container>
    </div>
  );
};
