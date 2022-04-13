import React, { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { Header } from "@/components/Header";
import headerBlobOrange from "@/media/HeaderBlobs/orange.png";
import {
  TabCardsNoImage,
  TabCardsLeftImage,
  TabCardsRightImage,
} from "@/components/Volunteer/TabCards";
import { activeStyles } from "@/components/Volunteer/TabCards";

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
import { ButtonFullWidth } from "@/components/ButtonFullWidth";

export const TeacherPos: React.FC = () => {
  const [key, setKey] = useState("one");
  const positionsTitle: React.CSSProperties = {
    color: ColorThemes.mainOrange,
    textAlign: "center",
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
                style={
                  key === "one"
                    ? activeStyles.activeStyle(ColorThemes.mainYellow)
                    : activeStyles.activeStyle("none")
                }
              >
                Lead Instructor
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="two"
                style={
                  key === "two"
                    ? activeStyles.activeStyle(ColorThemes.mainYellow)
                    : activeStyles.activeStyle("none")
                }
              >
                Teacher Assistant
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="one">
              <TabCardsNoImage
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
              <TabCardsRightImage
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
              <TabCardsLeftImage
                posHeader={"TASKS"}
                posImage={TasksOrange}
                generalColor={ColorThemes.mainYellow}
                posDescription={
                  <Markdown>{teacherOverviewJSON.tasks}</Markdown>
                }
              />
              <TabCardsRightImage
                posHeader={"CURRICULA"}
                generalColor={ColorThemes.mainOrange}
                posImage={Curriculum}
                posDescription={
                  <Markdown>{teacherOverviewJSON.curriculum}</Markdown>
                }
              />
              <TabCardsLeftImage
                posHeader={"TIME COMMITMENT"}
                generalColor={ColorThemes.mainYellow}
                posImage={Clock}
                posDescription={
                  <Markdown>{teacherOverviewJSON.time_commitment}</Markdown>
                }
              />
              <TabCardsRightImage
                posHeader={"BENEFITS"}
                generalColor={ColorThemes.mainOrange}
                posImage={ThumbsUp}
                posDescription={
                  <Markdown>{teacherOverviewJSON.benefits}</Markdown>
                }
              />
              <TabCardsLeftImage
                posHeader={"REQUIREMENTS"}
                generalColor={ColorThemes.mainYellow}
                posImage={Laptop}
                posDescription={
                  <Markdown>{teacherOverviewJSON.requirments}</Markdown>
                }
              />
              <TabCardsRightImage
                posHeader={"BENEFICIAL QUALIFICATIONS"}
                generalColor={ColorThemes.mainOrange}
                posImage={Presentation}
                posDescription={
                  <Markdown>
                    {teacherOverviewJSON.beneficial_qualifications}
                  </Markdown>
                }
              />
              <ButtonFullWidth
                location={googleForms.ta_app_link}
                variant={"primaryOrange"}
                title="Apply Now"
              />
              <br />
              <br />

              <h2 style={positionsTitle}>FAQs</h2>
              <Container>
                <FAQDropdowns data={teachingfaqsJSON.teacher_faqs} />
                <br />
              </Container>
            </Tab.Pane>
            <Tab.Pane eventKey="two">
              <TabCardsNoImage
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
              <TabCardsRightImage
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
              <TabCardsLeftImage
                posHeader={"TASKS"}
                posImage={TasksOrange}
                generalColor={ColorThemes.mainYellow}
                posDescription={<Markdown>{taOverviewJSON.tasks}</Markdown>}
              />
              <TabCardsRightImage
                posHeader={"CURRICULA"}
                posImage={Curriculum}
                generalColor={ColorThemes.mainOrange}
                posDescription={
                  <Markdown>{taOverviewJSON.curriculum}</Markdown>
                }
              />
              <TabCardsLeftImage
                posHeader={"TIME COMMITMENT"}
                generalColor={ColorThemes.mainYellow}
                posImage={Clock}
                posDescription={
                  <Markdown>{taOverviewJSON.time_commitment}</Markdown>
                }
              />
              <TabCardsRightImage
                posHeader={"BENEFITS"}
                generalColor={ColorThemes.mainOrange}
                posImage={ThumbsUp}
                posDescription={<Markdown>{taOverviewJSON.benefits}</Markdown>}
              />
              <TabCardsLeftImage
                posHeader={"REQUIREMENTS"}
                generalColor={ColorThemes.mainYellow}
                posImage={Laptop}
                posDescription={
                  <Markdown>{taOverviewJSON.requirments}</Markdown>
                }
              />
              <TabCardsRightImage
                posHeader={"BENEFICIAL QUALIFICATIONS"}
                generalColor={ColorThemes.mainOrange}
                posImage={Presentation}
                posDescription={
                  <Markdown>
                    {taOverviewJSON.beneficial_qualifications}
                  </Markdown>
                }
              />
              <ButtonFullWidth
                location={googleForms.ta_app_link}
                variant={"primaryOrange"}
                title="Apply Now"
              />
              <br></br>
              <br></br>
              <h2 style={positionsTitle}>FAQs</h2>
              <Container>
                <FAQDropdowns data={teachingfaqsJSON.ta_faqs} />
                <br />
                <br></br>
                <br></br>
              </Container>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
      <br />
    </div>
  );
};
