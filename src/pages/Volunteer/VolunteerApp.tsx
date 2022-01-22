import React, { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { Header } from "@/components/Header";
import headerBlobOrange from "@/media/HeaderBlobs/orange.png";
import { TabsCardNoImage } from "@/components/Volunteer/TabCards";
import googleForms from "@/posts/google_form.json";
import Markdown from "markdown-to-jsx";
import { ColorThemes } from "@/colors";

import { InternDescriptionTabs } from "../../components/Volunteer/InternDescriptionTabs";

export const VolunteerApp: React.FC = () => {
  const [key, setKey] = useState("one");
  const ActiveStyle: React.CSSProperties = {
    color: ColorThemes.black,
    background: ColorThemes.mainYellow,
    border: "none",
    padding: "30px",
  };
  const InActiveStyle: React.CSSProperties = {
    color: ColorThemes.black,
    background: ColorThemes.mainOrange,
    border: "none",
    padding: "30px",
  };

  return (
    <div>
      <Header
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
                style={key === "one" ? ActiveStyle : InActiveStyle}
              >
                Teacher
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="two"
                style={key === "two" ? ActiveStyle : InActiveStyle}
              >
                TA
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="one">
              <TabsCardNoImage
                generalColor={ColorThemes.mainYellow}
                backgroundColor={ColorThemes.lightYellow}
                posHeader={""}
                posDescription={
                  <div className="center-align">
                    <Markdown>
                      {googleForms.teacher_app_form_code.code}
                    </Markdown>
                  </div>
                }
              />
            </Tab.Pane>
            <Tab.Pane eventKey="two">
              <TabsCardNoImage
                generalColor={ColorThemes.mainYellow}
                backgroundColor={ColorThemes.lightYellow}
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
        <InternDescriptionTabs
          publicityDescription={
            <Markdown>
              {googleForms.publicity_intern_app_form_code.code}
            </Markdown>
          }
          technicalDescription={
            <Markdown>
              {googleForms.technical_intern_app_form_code.code}
            </Markdown>
          }
          businessDescription={
            <Markdown>{googleForms.general_intern_app_form_code.code}</Markdown>
          }
          addButtons={false}
        />
      </Container>
    </div>
  );
};
