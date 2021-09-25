import React, { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RFAHeader } from "@/components/RFAHeader";
import headerBlobOrange from "@/media/HeaderBlobs/orange.png";
import { RFATabsCardNoImage } from "@/components/RFATabCards";
import { RFAPosButton } from "@/components/RFAPosButton";

import pubInternOverviewJSON from "@/posts/pub_intern_overview.json";
import Markdown from "markdown-to-jsx";

import volunteerFAQJSON from "@/posts/faqs/volunteer_faqs.json";

import { ColorThemes } from "@/colors";
import { RFAFAQDropdowns } from "@/components/RFAFAQDropdowns";

import {publicity_intern} from "@/posts/publicity_intern.json"


export const PublicityPositions: React.FC = () => {
  const [key, setKey] = useState("one");
  const ActiveStyle = {
    background: ColorThemes.mainOrange,
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
    color: ColorThemes.mainOrange,
    textAlign: "center",
    textTransform: "uppercase",
  };

  return (
    <div>
      <RFAHeader
        headerTextColor={"#FA8D1F"}
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
              <Nav.Link
                eventKey="one"
                className="pos"
                style={ActiveStyle}
              >
                <p style={black}>Publicity Intern Positions</p>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
              <RFATabsCardNoImage
                posHeader={"DETAILS"}
                generalColor = {ColorThemes.mainOrange}
                posDescription={
                  <div>
                    <p>
                      <Markdown>{pubInternOverviewJSON.overview}</Markdown>
                    </p>
                  </div>
                }
              />
              <RFAPosButton backgroundColor = {ColorThemes.mainOrange} backgroundHover = {ColorThemes.mainYellow} title={"Apply Now!"} link="/volunteer/volunteerapp" />
              <br/>
              <h2 className = "header-size" style={positionsTitle}>Positions</h2>
              <Container>
                {volunteerFAQJSON.publicity_faq_list.map((QAPair) => (
                  <RFAFAQDropdowns
                    key={QAPair.question}
                    question={QAPair.question}
                    answer={QAPair.answer}
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
