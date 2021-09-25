import React, { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RFAHeader } from "@/components/RFAHeader";
import headerBlobOrange from "@/media/HeaderBlobs/orange.png";
import { RFATabsCardLeftImage, RFATabsCardNoImage, RFATabsCardRightImage } from "@/components/RFATabCards";
import { RFAInternDescriptionTabs } from "../../components/RFAInternDescriptionTabs";
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


export const InternOverview: React.FC = () => {
  const black = {
    color: "#000000",
  };
  const positionsTitle: React.CSSProperties = {
    fontFamily: "BeVietnam-ExtraBold",
    letterSpacing: "0.25em",
    color: ColorThemes.mainYellow,
    textAlign: "center",
  };

  return (
    <div>
      <RFAHeader
        headerTextColor={"#FA8D1F"}
        image={headerBlobOrange}
        title={"Intern at Robotics for All in 20+ groups."}
        description={
          "Interns work on anything from graphic design to curriculum development!"
        }
      />
      <Container>
        <br></br>
        <br></br>
        <br></br>
        <Tab.Container>
          <Tab.Content>
            <RFATabsCardNoImage
              posHeader={"OVERVIEW"}
              generalColor = {ColorThemes.mainYellow}
              posDescription={
                <div>
                  <p>
                    <Markdown>{pubInternOverviewJSON.overview}</Markdown>
                  </p>
                </div>
              }
            />
            <RFAInternDescriptionTabs
              publicityDescription = {
                <Markdown>{pubInternOverviewJSON.requirments}</Markdown>
              }
              technicalDescription = {
                <Markdown>{pubInternOverviewJSON.requirments}</Markdown>
              }
              businessDescription = {
                <Markdown>{pubInternOverviewJSON.requirments}</Markdown>
              }
              addButtons = {true}
            />
            <RFATabsCardRightImage
              posHeader={"SCHEDULING"}
              posImage={Calendar}
              generalColor = {ColorThemes.lightYellow}
              posDescription={
                <div>
                    <Markdown>{pubInternOverviewJSON.tasks}</Markdown>
                </div>
              }
            />
            <RFATabsCardLeftImage
              posHeader={"TIME COMMITMENT"}
              posImage={Clock}
              generalColor = {ColorThemes.mainYellow}
              posDescription={
                <Markdown>{pubInternOverviewJSON.time_commitment}</Markdown>
              }
            />
            <RFATabsCardRightImage
              posHeader={"BENEFITS"}
              posImage={ThumbsUp}
              generalColor = {ColorThemes.lightYellow}
              posDescription={
                <Markdown>{pubInternOverviewJSON.benefits}</Markdown>
              }
            />
            <RFATabsCardLeftImage
              posHeader={"REQUIREMENTS"}
              posImage={Laptop}
              generalColor = {ColorThemes.mainYellow}
              posDescription={
                <Markdown>{pubInternOverviewJSON.requirments}</Markdown>
              }
            />
            <RFATabsCardRightImage
              posHeader={"BENEFICIAL QUALIFICATIONS"}
              posImage={Presentation}
              generalColor = {ColorThemes.lightYellow}
              posDescription={
                <Markdown>{pubInternOverviewJSON.beneficial_qualifications}</Markdown>
              }
            />
            <h2 className = "header-size" style={positionsTitle}>FAQs</h2>
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
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};
