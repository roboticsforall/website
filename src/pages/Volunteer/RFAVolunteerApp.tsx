import React, { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { RFAHeader } from "@/components/RFAHeader";
import headerBlobOrange from "@/media/HeaderBlobs/orange.png";
import { RFATabsCardNoImage } from "@/components/RFATabCards";
import googleForms from "@/posts/google_form.json";
import Markdown from "markdown-to-jsx";

export const RFAVolunteerApp: React.FC = () => {
  const [key, setKey] = useState("one");
  const ActiveStyle: React.CSSProperties = {
    color: "#000000",
    background: "#FFCC00",
    border: "none",
    borderRadius: "15px 15px 0 0",
    fontFamily: "Mazzard-H-Extrabold",
    fontSize: "x-large",
    padding: "30px",
  };
  const ActiveStyle2: React.CSSProperties = {
    color: "#000000",
    background: "#FA8D1F",
    border: "none",
    borderRadius: "15px 15px 0 0",
    fontFamily: "Mazzard-H-Extrabold",
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
                Teacher Application
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="two"
                style={key === "two" ? ActiveStyle2 : ActiveStyle2}
              >
                Publicity Application
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="one">
              <RFATabsCardNoImage
                borderColor="#FFCC00"
                color={"#ffeb99"}
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
                borderColor="#FA8D1F"
                color={"#FCBB79"}
                posHeader={""}
                posDescription={
                  <div className="center-align">
                    <Markdown>{googleForms.publicity_app_form_code.code}</Markdown>
                  </div>
                }
              />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};
