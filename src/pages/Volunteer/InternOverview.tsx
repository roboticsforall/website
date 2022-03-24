import React from "react";
import { Container, Tab } from "react-bootstrap";
import { Header } from "@/components/Header";
import headerBlobOrange from "@/media/HeaderBlobs/orange.png";
import {
  TabCardsLeftImage,
  TabCardsNoImage,
  TabCardsRightImage,
} from "@/components/Volunteer/TabCards";
import { InternDescriptionTabs } from "../../components/Volunteer/InternDescriptionTabs";
import Clock from "@/media/Graphics/clock.png";
import Laptop from "@/media/Graphics/laptop.png";
import Presentation from "@/media/Graphics/presentation.png";
import Calendar from "@/media/Graphics/calendar.png";
import ThumbsUp from "@/media/Graphics/thumbsUp.png";

import Markdown from "markdown-to-jsx";

import internfaqsJSON from "@/posts/faqs/recruitment_faqs.json";

import { ColorThemes } from "@/colors";
import { FAQDropdowns } from "@/components/FAQDropdowns";
import internOverviewJSON from "@/posts/intern_overview.json";

export const InternOverview: React.FC = () => {
  const positionsTitle: React.CSSProperties = {
    color: ColorThemes.mainYellow,
    textAlign: "center",
    wordBreak: "break-word",
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
            <TabCardsNoImage
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
            <TabCardsRightImage
              posHeader={"SCHEDULING"}
              posImage={Calendar}
              generalColor={ColorThemes.lightYellow}
              posDescription={
                <div>
                  <Markdown>{internOverviewJSON.scheduling}</Markdown>
                </div>
              }
            />
            <TabCardsLeftImage
              posHeader={"TIME COMMITMENT"}
              posImage={Clock}
              generalColor={ColorThemes.mainYellow}
              posDescription={
                <Markdown>{internOverviewJSON.time_commitment}</Markdown>
              }
            />
            <TabCardsRightImage
              posHeader={"BENEFITS"}
              posImage={ThumbsUp}
              generalColor={ColorThemes.lightYellow}
              posDescription={
                <Markdown>{internOverviewJSON.benefits}</Markdown>
              }
            />
            <TabCardsLeftImage
              posHeader={"REQUIREMENTS"}
              posImage={Laptop}
              generalColor={ColorThemes.mainYellow}
              posDescription={
                <Markdown>{internOverviewJSON.requirments}</Markdown>
              }
            />
            <TabCardsRightImage
              posHeader={"BENEFICIAL QUALIFICATIONS"}
              posImage={Presentation}
              generalColor={ColorThemes.lightYellow}
              posDescription={
                <Markdown>
                  {internOverviewJSON.beneficial_qualifications}
                </Markdown>
              }
            />
            <h2 style={positionsTitle}>FAQs</h2>
            <Container>
              <FAQDropdowns data={internfaqsJSON.intern_faqs} />
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
