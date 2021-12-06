import React from "react";
import { Container, Tab } from "react-bootstrap";
import { Header } from "@/components/Header";
import headerBlobOrange from "@/media/HeaderBlobs/orange.png";
import {
  TabsCardLeftImage,
  TabsCardNoImage,
  TabsCardRightImage,
} from "@/components/Volunteer/TabCards";
import { InternDescriptionTabs } from "../../components/Volunteer/InternDescriptionTabs";
import Clock from "@/media/Graphics/clock.png";
import Laptop from "@/media/Graphics/laptop.png";
import Presentation from "@/media/Graphics/presentation.png";
import Calendar from "@/media/Graphics/calendar.png";
import ThumbsUp from "@/media/Graphics/thumbsUp.png";

import Markdown from "markdown-to-jsx";

import internfaqsJSON from "@/posts/faqs/intern_faqs.json";

import { ColorThemes } from "@/colors";
import { FAQDropdowns } from "@/components/FAQDropdowns";
import internOverviewJSON from "@/posts/intern_overview.json";

export const InternOverview: React.FC = () => {
  const positionsTitle: React.CSSProperties = {
    fontFamily: "BeVietnam-ExtraBold",
    letterSpacing: "0.25em",
    color: ColorThemes.mainYellow,
    textAlign: "center",
    fontSize: "3em",
    wordBreak: "break-word"
  };

  return (
    <div>
      <Header
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
            <TabsCardNoImage
              posHeader={"OVERVIEW"}
              generalColor={ColorThemes.mainYellow}
              posDescription={
                <div>
                  <p>
                    <Markdown>{internOverviewJSON.overview}</Markdown>
                  </p>
                </div>
              }
            />
            <InternDescriptionTabs
              publicityDescription={
                <Markdown>{internOverviewJSON.requirments}</Markdown>
              }
              technicalDescription={
                <Markdown>{internOverviewJSON.requirments}</Markdown>
              }
              businessDescription={
                <Markdown>{internOverviewJSON.requirments}</Markdown>
              }
              addButtons={true}
            />
            <TabsCardRightImage
              posHeader={"SCHEDULING"}
              posImage={Calendar}
              generalColor={ColorThemes.lightYellow}
              posDescription={
                <div>
                  <Markdown>{internOverviewJSON.scheduling}</Markdown>
                </div>
              }
            />
            <TabsCardLeftImage
              posHeader={"TIME COMMITMENT"}
              posImage={Clock}
              generalColor={ColorThemes.mainYellow}
              posDescription={
                <Markdown>{internOverviewJSON.time_commitment}</Markdown>
              }
            />
            <TabsCardRightImage
              posHeader={"BENEFITS"}
              posImage={ThumbsUp}
              generalColor={ColorThemes.lightYellow}
              posDescription={
                <Markdown>{internOverviewJSON.benefits}</Markdown>
              }
            />
            <TabsCardLeftImage
              posHeader={"REQUIemENTS"}
              posImage={Laptop}
              generalColor={ColorThemes.mainYellow}
              posDescription={
                <Markdown>{internOverviewJSON.requirments}</Markdown>
              }
            />
            <TabsCardRightImage
              posHeader={"BENEFICIAL QUALIFICATIONS"}
              posImage={Presentation}
              generalColor={ColorThemes.lightYellow}
              posDescription={
                <Markdown>
                  {internOverviewJSON.beneficial_qualifications}
                </Markdown>
              }
            />
            <h2 style={positionsTitle}>
              FAQs
            </h2>
            <Container>
              {internfaqsJSON.intern_faqs_list.map((QAPair) => (
                <FAQDropdowns
                  key={QAPair.question}
                  question={QAPair.question}
                  answer={QAPair.answer}
                  colors={{
                    main: ColorThemes.mainOrange,
                    light: ColorThemes.lightOrange,
                    dark: ColorThemes.darkOrange,
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
