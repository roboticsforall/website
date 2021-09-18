import React, { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RFAHeader } from "@/components/RFAHeader";
import headerBlobOrange from "@/media/HeaderBlobs/orange.png";
import { RFATabsCardLeftImage, RFATabsCardNoImage, RFATabsCardRightImage } from "@/components/RFATabCards";
import { RFAInternDescriptionTabs } from "./RFAInternDescriptionTabs";
import { RFAPosButton } from "@/components/RFAPosButton";
import Clock from "@/media/Graphics/clock.png";
import Laptop from "@/media/Graphics/laptop.png";
import Presentation from "@/media/Graphics/presentation.png";
import Calendar from "@/media/Graphics/calendar.png";
import ThumbsUp from "@/media/Graphics/thumbsUp.png";

import pubInternOverviewJSON from "@/posts/pub_intern_overview.json";
import Markdown from "markdown-to-jsx";

import volunteerFAQJSON from "@/posts/faqs/volunteer_faqs.json";

import { ColorThemes } from "@/colors";
import { RFAFAQDropdowns } from "@/components/RFAFAQDropdowns";


export const RFAPublicityInternPos: React.FC = () => {
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
  const inActiveStyle = {
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
    fontFamily: "Oswald-Medium",
    fontSize: "5.5vmax",
    color: ColorThemes.mainOrange,
    textAlign: "center",
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
        <RFAPosButton title={"Apply Now!"} link="/volunteer/volunteerapp" />
        <br></br>
        <br></br>
        <Tab.Container activeKey={key} onSelect={(key) => setKey(key!)}>
          <Nav justify fill variant="tabs">
            <Nav.Item>
              <Nav.Link
                eventKey="one"
                className="pos"
                style={key === "one" ? ActiveStyle : inActiveStyle}
              >
                <p style={black}>Publicity Intern</p>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="one">
              <RFATabsCardNoImage
                posHeader={"OVERVIEW"}
                borderColor = {ColorThemes.mainYellow}
                color = {ColorThemes.mainYellow}
                posDescription={
                  <div>
                    <p>
                      <Markdown>{pubInternOverviewJSON.overview}</Markdown>
                    </p>
                  </div>
                }
              />
              <RFAInternDescriptionTabs/>
              <RFATabsCardRightImage
                posHeader={"SCHEDULING"}
                posImage={Calendar}
                color = {ColorThemes.lightYellow}
                posDescription={
                  <div>
                      <Markdown>{pubInternOverviewJSON.tasks}</Markdown>
                  </div>
                }
              />
              <RFATabsCardLeftImage
                posHeader={"TIME COMMITMENT"}
                posImage={Clock}
                color = {ColorThemes.mainYellow}
                posDescription={
                  <Markdown>{pubInternOverviewJSON.time_commitment}</Markdown>
                }
              />
              <RFATabsCardRightImage
                posHeader={"BENEFITS"}
                posImage={ThumbsUp}
                color = {ColorThemes.lightYellow}
                posDescription={
                  <Markdown>{pubInternOverviewJSON.benefits}</Markdown>
                }
              />
              <RFATabsCardLeftImage
                posHeader={"REQUIREMENTS"}
                posImage={Laptop}
                color = {ColorThemes.mainYellow}
                posDescription={
                  <Markdown>{pubInternOverviewJSON.requirments}</Markdown>
                }
              />
              <RFATabsCardRightImage
                posHeader={"BENEFICIAL QUALIFICATIONS"}
                posImage={Presentation}
                color = {ColorThemes.lightYellow}
                posDescription={
                  <Markdown>{pubInternOverviewJSON.beneficial_qualifications}</Markdown>
                }
              />
              <h2 style={positionsTitle}>FAQs</h2>
              <Container>
                {volunteerFAQJSON.publicity_faq_list.map((QAPair) => (
                  <RFAFAQDropdowns
                    key={QAPair.question}
                    question={QAPair.question}
                    answer={QAPair.answer}
                    colors = {{main: ColorThemes.mainYellow, light: ColorThemes.lightYellow, dark: ColorThemes.lightYellow, backgroundHover: ColorThemes.black}}
                  />
                ))}
                <br/>
              </Container>
              <br></br>
              <br></br>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};
