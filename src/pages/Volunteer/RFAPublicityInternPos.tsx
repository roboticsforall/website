import React, { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RFAHeader } from "@/components/RFAHeader";
import headerBlobOrange from "@/media/HeaderBlobs/orange.png";
import { RFATabsCardNoImage } from "@/components/RFATabCards";
import { RFAPositionCard1 } from "@/components/RFAPositionCard1";
import { RFAPositionCard2 } from "@/components/RFAPositionCard2";
import { RFAInternDescriptionTabs } from "./RFAInternDescriptionTabs";
import { RFAPosButton } from "@/components/RFAPosButton";
import Clock from "@/media/Graphics/clock.png";
import Laptop from "@/media/Graphics/laptop.png";
import Presentation from "@/media/Graphics/presentation.png";
import TasksYellow from "@/media/Graphics/tasksYellow.png";
import ThumbsUp from "@/media/Graphics/thumbsUp.png";
import QuestionMark from "@/media/Graphics/questionMark.png";

import pubInternOverviewJSON from "@/posts/pub_intern_overview.json";
import Markdown from "markdown-to-jsx";

import { ColorThemes } from "@/colors";


export const RFAPublicityInternPos: React.FC = () => {
  const [key, setKey] = useState("one");
  const ActiveStyle = {
    background: ColorThemes.mainYellow,
    border: "none",
    borderRadius: "15px 15px 0 0",
    fontFamily: "Mazzard-H-Extrabold",
    fontSize: "x-large",
    padding: "20px",
    height: "100%",
  };
  const inActiveStyle = {
    background: ColorThemes.mainOrange,
    border: "none",
    borderRadius: "15px 15px 0 0",
    fontFamily: "Mazzard-H-Extrabold",
    fontSize: "x-large",
    padding: "20px",
    height: "100%",
  };
  const black = {
    color: "#000000",
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
              <RFAPositionCard2
                posHeader={"TASKS"}
                posImage={TasksYellow}
                posDescription={
                  <div>
                      <Markdown>{pubInternOverviewJSON.tasks}</Markdown>
                  </div>
                }
              />
              <RFAPositionCard1
                posHeader={"TIME COMMITMENT"}
                posImage={Clock}
                posDescription={
                  <Markdown>{pubInternOverviewJSON.time_commitment}</Markdown>
                }
              />
              <RFAPositionCard2
                posHeader={"BENEFITS"}
                posImage={ThumbsUp}
                posDescription={
                  <Markdown>{pubInternOverviewJSON.benefits}</Markdown>
                }
              />
              <RFAPositionCard1
                posHeader={"REQUIREMENTS"}
                posImage={Laptop}
                posDescription={
                  <Markdown>{pubInternOverviewJSON.requirments}</Markdown>
                }
              />
              <RFAPositionCard2
                posHeader={"BENEFICIAL QUALIFICATIONS"}
                posImage={Presentation}
                posDescription={
                  <Markdown>{pubInternOverviewJSON.beneficial_qualifications}</Markdown>
                }
              />
              <RFAPositionCard1
                posHeader={"QUESTIONS"}
                posImage={QuestionMark}
                posDescription={
                  <ul>
                    <li>
                      If you have any other questions, please visit our{" "}
                      <Link to = "/volunteer/volunteerfaq" style={black}>
                        intern FAQ's
                      </Link>
                    </li>
                    <li>
                      Please direct additional questions to{" "}
                      <a href="mailto:info@roboticsforall.net" style={black}>
                        info@roboticsforall.net
                      </a>
                    </li>
                  </ul>
                }
              />
              <br></br>
              <br></br>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};
