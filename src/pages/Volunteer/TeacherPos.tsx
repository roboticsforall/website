import React, { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { Header } from "@/components/Header";
import headerBlobOrange from "@/media/HeaderBlobs/orange.png";
import {
  TabsCardNoImage,
  TabsCardLeftImage,
  TabsCardRightImage,
} from "@/components/Volunteer/TabCards";
import { PosButton } from "@/components/Volunteer/PosButton";
import { FAQDropdowns } from "@/components/FAQDropdowns";

import Calendar from "@/media/Graphics/calendar.png";
import Clock from "@/media/Graphics/clock.png";
import Curriculum from "@/media/Graphics/curriculum.png";
import Laptop from "@/media/Graphics/laptop.png";
import Presentation from "@/media/Graphics/presentation.png";
import TasksOrange from "@/media/Graphics/tasksOrange.png";
import ThumbsUp from "@/media/Graphics/thumbsUp.png";

import Markdown from "markdown-to-jsx";
import teacherOverviewJSON from "@/posts/teacher_overview.json";
import taOverviewJSON from "@/posts/ta_overview.json";
import teachingfaqsJSON from "@/posts/faqs/recruitment_faqs.json";

import googleForms from "@/posts/volunteer_sign_up_forms.json";


import { ColorThemes } from "@/colors";

export const TeacherPos: React.FC = () => {
  const [key, setKey] = useState("one");
  const ActiveStyle = {
    background: ColorThemes.mainYellow,
    border: "none",
    fontFamily: "BeVietnam-ExtraBold",
    padding: "20px",
    height: "100%",
  };
  const inActiveStyle = {
    background: ColorThemes.mainOrange,
    border: "none",
    fontFamily: "BeVietnam-ExtraBold",
    padding: "20px",
    height: "100%",
  };
  const blackText = {
    color: ColorThemes.black,
  };
  const positionsTitle: React.CSSProperties = {
    fontFamily: "BeVietnam-ExtraBold",
    letterSpacing: "0.25em",
    color: ColorThemes.mainOrange,
    textAlign: "center",
    fontSize: "3em",
  };

  return (
    <div>
      <Header
        headerTextColor={ColorThemes.mainOrange}
        image={headerBlobOrange}
        title={"Volunteer to Teach Students STEM!"}
        description={
          "Volunteer to help with graphic design, curriculum development, and much much more!"
        }
      />
      <br></br>
      <br></br>
      <Container>
        <br></br>
        <br></br>
        <Tab.Container activeKey={key} onSelect={(key) => setKey(key!)}>
          <Nav justify fill variant="tabs">
            <Nav.Item>
              <Nav.Link
                eventKey="one"
                style={key === "one" ? ActiveStyle : inActiveStyle}
              >
                <p style={blackText}>Lead Instructor</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="two"
                style={key === "two" ? ActiveStyle : inActiveStyle}
              >
                <p style={blackText}>Teacher Assistant</p>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="one">
              <TabsCardNoImage
                posHeader={"OVERVIEW"}
                generalColor={ColorThemes.mainYellow}
                posDescription={
                  <div>
                    <p>
                      <Markdown>{teacherOverviewJSON.overview}</Markdown>
                    </p>
                  </div>
                }
              />
              <TabsCardRightImage
                posHeader={"SCHEDULING"}
                generalColor={ColorThemes.mainOrange}
                posImage={Calendar}
                posDescription={
                  <div>
                    <p>
                      <Markdown>{teacherOverviewJSON.scheduling}</Markdown>
                    </p>
                  </div>
                }
              />
              <TabsCardLeftImage
                posHeader={"TASKS"}
                posImage={TasksOrange}
                generalColor={ColorThemes.mainYellow}
                posDescription={
                  <Markdown>{teacherOverviewJSON.tasks}</Markdown>
                }
              />
              <TabsCardRightImage
                posHeader={"CURRICULA"}
                generalColor={ColorThemes.mainOrange}
                posImage={Curriculum}
                posDescription={
                  <Markdown>{teacherOverviewJSON.curriculum}</Markdown>
                }
              />
              <TabsCardLeftImage
                posHeader={"TIME COMMITMENT"}
                generalColor={ColorThemes.mainYellow}
                posImage={Clock}
                posDescription={
                  <Markdown>{teacherOverviewJSON.time_commitment}</Markdown>
                }
              />
              <TabsCardRightImage
                posHeader={"BENEFITS"}
                generalColor={ColorThemes.mainOrange}
                posImage={ThumbsUp}
                posDescription={
                  <Markdown>{teacherOverviewJSON.benefits}</Markdown>
                }
              />
              <TabsCardLeftImage
                posHeader={"REQUIemENTS"}
                generalColor={ColorThemes.mainYellow}
                posImage={Laptop}
                posDescription={
                  <Markdown>{teacherOverviewJSON.requirments}</Markdown>
                }
              />
              <TabsCardRightImage
                posHeader={"BENEFICIAL QUALIFICATIONS"}
                generalColor={ColorThemes.mainOrange}
                posImage={Presentation}
                posDescription={
                  <Markdown>
                    {teacherOverviewJSON.beneficial_qualifications}
                  </Markdown>
                }
              />
                      <PosButton
          backgroundColor={ColorThemes.mainOrange}
          backgroundHover={ColorThemes.mainYellow}
          title={"Apply Now!"}
          link= {googleForms.teacher_app_link}
        />
              <h2 style={positionsTitle}>
        FAQs
      </h2>
      <Container>
      <FAQDropdowns
          data = {teachingfaqsJSON.teacher_faqs}
        />
        <br />
      </Container>
            </Tab.Pane>
            <Tab.Pane eventKey="two">
              <TabsCardNoImage
                posHeader={"OVERVIEW"}
                generalColor={ColorThemes.mainYellow}
                posDescription={
                  <div>
                    <p>
                      <Markdown>{taOverviewJSON.overview}</Markdown>
                    </p>
                  </div>
                }
              />
              <TabsCardRightImage
                posHeader={"SCHEDULING"}
                generalColor={ColorThemes.mainOrange}
                posImage={Calendar}
                posDescription={
                  <div>
                    <p>
                      <Markdown>{taOverviewJSON.scheduling}</Markdown>
                    </p>
                  </div>
                }
              />
              <TabsCardLeftImage
                posHeader={"TASKS"}
                posImage={TasksOrange}
                generalColor={ColorThemes.mainYellow}
                posDescription={<Markdown>{taOverviewJSON.tasks}</Markdown>}
              />
              <TabsCardRightImage
                posHeader={"CURRICULA"}
                posImage={Curriculum}
                generalColor={ColorThemes.mainOrange}
                posDescription={
                  <Markdown>{taOverviewJSON.curriculum}</Markdown>
                }
              />
              <TabsCardLeftImage
                posHeader={"TIME COMMITMENT"}
                generalColor={ColorThemes.mainYellow}
                posImage={Clock}
                posDescription={
                  <Markdown>{taOverviewJSON.time_commitment}</Markdown>
                }
              />
              <TabsCardRightImage
                posHeader={"BENEFITS"}
                generalColor={ColorThemes.mainOrange}
                posImage={ThumbsUp}
                posDescription={<Markdown>{taOverviewJSON.benefits}</Markdown>}
              />
              <TabsCardLeftImage
                posHeader={"REQUIemENTS"}
                generalColor={ColorThemes.mainYellow}
                posImage={Laptop}
                posDescription={
                  <Markdown>{taOverviewJSON.requirments}</Markdown>
                }
              />
              <TabsCardRightImage
                posHeader={"BENEFICIAL QUALIFICATIONS"}
                generalColor={ColorThemes.mainOrange}
                posImage={Presentation}
                posDescription={
                  <Markdown>
                    {taOverviewJSON.beneficial_qualifications}
                  </Markdown>
                }
              />
              <br></br>
              <br></br>
                      <PosButton
          backgroundColor={ColorThemes.mainOrange}
          backgroundHover={ColorThemes.mainYellow}
          title={"Apply Now!"}
          link= {googleForms.ta_app_link}
        />
              <h2 style={positionsTitle}>
        FAQs
      </h2>
      <Container>
      <FAQDropdowns
          data = {teachingfaqsJSON.ta_faqs}
        />
        <br />
      </Container>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
      <br />

    </div>
  );
};
