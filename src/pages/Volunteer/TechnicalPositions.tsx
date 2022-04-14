import React, { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { Header } from "@/components/Header";
import headerBlob from "@/media/HeaderBlobs/green.png";
import { TabCardsNoImage } from "@/components/Volunteer/TabCards";
import { activeStyles } from "@/components/Volunteer/TabCards";

import { ButtonFullWidth } from "@/components/ButtonFullWidth";

import Markdown from "markdown-to-jsx";

import { ColorThemes } from "@/colors";
import { FAQDropdowns } from "@/components/FAQDropdowns";
import technicalInternJSON from "@/posts/technical_intern_position_description.json";
import googleForms from "@/posts/volunteer_sign_up_forms.json";

export const TechnicalPositions: React.FC = () => {
  const [key, setKey] = useState("one");
  const positionsTitle: React.CSSProperties = {
    color: ColorThemes.mainGreen,
    textAlign: "center",
    textTransform: "uppercase",
    wordBreak: "break-word",
  };

  return (
    <div>
      <Header
        headerTextColor={ColorThemes.mainGreen}
        image={headerBlob}
        title={"Help develop curriculum and software!"}
        description={
          "Technical interns use their STEM skills to create and revise curriculum and make custom software."
        }
      />
      <section>
        <Container>
          <Tab.Container activeKey={key} onSelect={(key) => setKey(key!)}>
            <Nav justify fill variant="tabs">
              <Nav.Item>
                <Nav.Link
                  eventKey="one"
                  className="pos"
                  style={activeStyles.activeStyle(ColorThemes.mainGreen)}
                >
                  Technical Intern Positions
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <TabCardsNoImage
                posHeader={"DETAILS"}
                generalColor={ColorThemes.mainGreen}
                posDescription={
                  <div>
                    <p>
                      <Markdown>
                        {technicalInternJSON.technical_intern_details}
                      </Markdown>
                    </p>
                  </div>
                }
              />
              <ButtonFullWidth
                title={"Apply Now!"}
                location={googleForms.technical_intern_app_link}
                variant="primaryGreen"
              />

              <section>
                <h2 style={positionsTitle}>Positions</h2>
                <FAQDropdowns data={technicalInternJSON.positions} />
              </section>
            </Tab.Content>
          </Tab.Container>
        </Container>
      </section>
    </div>
  );
};
