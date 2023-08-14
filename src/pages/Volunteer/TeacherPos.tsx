import React, { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { Header } from "@/components/Header";
import headerBlobOrange from "@/media/HeaderBlobs/orange.png";
import { TabCardsNoImage } from "@/components/Volunteer/TabCards";
import { activeStyles } from "@/components/Volunteer/TabCards";

import { FAQDropdowns } from "@/components/FAQDropdowns";

import Markdown from "markdown-to-jsx";
import teacherOverviewJSON from "@/posts/teacher_overview.json";
import taOverviewJSON from "@/posts/ta_overview.json";
import teachingfaqsJSON from "@/posts/faqs/recruitment_faqs.json";

import { ColorThemes } from "@/colors";
import { ButtonFullWidth } from "@/components/ButtonFullWidth";

export const TeacherPos: React.FC = () => {
  const [key, setKey] = useState("one");
  const positionsTitleTeacher: React.CSSProperties = {
    color: ColorThemes.mainYellow,
    textAlign: "center",
  };
  const positionsTitleTA: React.CSSProperties = {
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
      <section>
        <Container>
          <Tab.Container activeKey={key} onSelect={(key) => setKey(key!)}>
            <Nav fill variant="tabs">
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
                      ? activeStyles.activeStyle(ColorThemes.mainOrange)
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
                <TabCardsNoImage
                  posHeader={"SCHEDULING"}
                  generalColor={ColorThemes.mainYellow}
                  posDescription={
                    <div>
                      <p>
                        <Markdown>{teacherOverviewJSON.scheduling}</Markdown>
                      </p>
                    </div>
                  }
                />
                <TabCardsNoImage
                  posHeader={"TASKS"}
                  generalColor={ColorThemes.mainYellow}
                  posDescription={
                    <Markdown>{teacherOverviewJSON.tasks}</Markdown>
                  }
                />
                <TabCardsNoImage
                  posHeader={"CURRICULA"}
                  generalColor={ColorThemes.mainYellow}
                  posDescription={
                    <Markdown>{teacherOverviewJSON.curriculum}</Markdown>
                  }
                />
                <TabCardsNoImage
                  posHeader={"TIME COMMITMENT"}
                  generalColor={ColorThemes.mainYellow}
                  posDescription={
                    <Markdown>{teacherOverviewJSON.time_commitment}</Markdown>
                  }
                />
                <TabCardsNoImage
                  posHeader={"BENEFITS"}
                  generalColor={ColorThemes.mainYellow}
                  posDescription={
                    <Markdown>{teacherOverviewJSON.benefits}</Markdown>
                  }
                />
                <TabCardsNoImage
                  posHeader={"REQUIREMENTS"}
                  generalColor={ColorThemes.mainYellow}
                  posDescription={
                    <Markdown>{teacherOverviewJSON.requirments}</Markdown>
                  }
                />
                <TabCardsNoImage
                  posHeader={"BENEFICIAL QUALIFICATIONS"}
                  generalColor={ColorThemes.mainYellow}
                  posDescription={
                    <Markdown>
                      {teacherOverviewJSON.beneficial_qualifications}
                    </Markdown>
                  }
                />
                <ButtonFullWidth
                  location={teacherOverviewJSON.link}
                  variant={"primaryYellow"}
                  title="Apply Now"
                />
                <section>
                  <h2 style={positionsTitleTeacher}>FAQs</h2>
                  <FAQDropdowns data={teachingfaqsJSON.teacher_faqs} />
                </section>
              </Tab.Pane>
              <Tab.Pane eventKey="two">
                <TabCardsNoImage
                  posHeader={"OVERVIEW"}
                  generalColor={ColorThemes.mainOrange}
                  posDescription={
                    <div>
                      <p>
                        <Markdown>{taOverviewJSON.overview}</Markdown>
                      </p>
                    </div>
                  }
                />
                <TabCardsNoImage
                  posHeader={"SCHEDULING"}
                  generalColor={ColorThemes.mainOrange}
                  posDescription={
                    <div>
                      <p>
                        <Markdown>{taOverviewJSON.scheduling}</Markdown>
                      </p>
                    </div>
                  }
                />
                <TabCardsNoImage
                  posHeader={"TASKS"}
                  generalColor={ColorThemes.mainOrange}
                  posDescription={<Markdown>{taOverviewJSON.tasks}</Markdown>}
                />
                <TabCardsNoImage
                  posHeader={"CURRICULA"}
                  generalColor={ColorThemes.mainOrange}
                  posDescription={
                    <Markdown>{taOverviewJSON.curriculum}</Markdown>
                  }
                />
                <TabCardsNoImage
                  posHeader={"TIME COMMITMENT"}
                  generalColor={ColorThemes.mainOrange}
                  posDescription={
                    <Markdown>{taOverviewJSON.time_commitment}</Markdown>
                  }
                />
                <TabCardsNoImage
                  posHeader={"BENEFITS"}
                  generalColor={ColorThemes.mainOrange}
                  posDescription={
                    <Markdown>{taOverviewJSON.benefits}</Markdown>
                  }
                />
                <TabCardsNoImage
                  posHeader={"REQUIREMENTS"}
                  generalColor={ColorThemes.mainOrange}
                  posDescription={
                    <Markdown>{taOverviewJSON.requirments}</Markdown>
                  }
                />
                <TabCardsNoImage
                  posHeader={"BENEFICIAL QUALIFICATIONS"}
                  generalColor={ColorThemes.mainOrange}
                  posDescription={
                    <Markdown>
                      {taOverviewJSON.beneficial_qualifications}
                    </Markdown>
                  }
                />
                <ButtonFullWidth
                  location={taOverviewJSON.link}
                  variant={"primaryOrange"}
                  title="Apply Now"
                />
                <section>
                  <h2 style={positionsTitleTA}>FAQs</h2>
                  <FAQDropdowns data={teachingfaqsJSON.ta_faqs} />
                </section>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Container>
      </section>
    </div>
  );
};
