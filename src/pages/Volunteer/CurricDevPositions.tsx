import React, { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { Header } from "@/components/Header";
import headerBlob from "@/media/HeaderBlobs/yellow.png";
import { TabCardsNoImage } from "@/components/Volunteer/TabCards";
import { PosButton } from "@/components/Volunteer/PosButton";
import { activeStyles } from "@/components/Volunteer/TabCards";

import Markdown from "markdown-to-jsx";

import { ColorThemes } from "@/colors";
import { FAQDropdowns } from "@/components/FAQDropdowns";

import curricdevpositionsJSON from "@/posts/curriculum_developer_position_description.json";

import googleForms from "@/posts/volunteer_sign_up_forms.json";

export const CurricDevPositions: React.FC = () => {
  const [key, setKey] = useState("one");

  const positionsTitle: React.CSSProperties = {
    color: ColorThemes.mainYellow,
    textAlign: "center",
    textTransform: "uppercase",
    wordBreak: "break-word",
  };

  return (
    <div>
      <Header
        headerTextColor={ColorThemes.mainYellow}
        image={headerBlob}
        title={"Help develop curriculum!"}
        description={
          "Curriculum developers construct the diverse set of curriculum at "
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
                style={activeStyles.activeStyle(ColorThemes.mainYellow)}
              >
                Curriculum Developer Positions
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <TabCardsNoImage
              posHeader={"DETAILS"}
              generalColor={ColorThemes.mainYellow}
              posDescription={
                <div>
                  <p>
                    <Markdown>
                      {curricdevpositionsJSON.curriculum_developer_details}
                    </Markdown>
                  </p>
                </div>
              }
            />
            <PosButton
              backgroundColor={ColorThemes.mainYellow}
              backgroundHover={ColorThemes.mainYellow}
              title={"Apply Now!"}
              link={googleForms.curriculum_developer_app_link}
            />
            <br />
            <br />
            <h2 style={positionsTitle}>Positions</h2>
            <FAQDropdowns data={curricdevpositionsJSON.positions} />
            <br></br>
            <br></br>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};
