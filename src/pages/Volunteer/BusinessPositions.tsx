import React, { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { Header } from "@/components/Header";
import headerBlob from "@/media/HeaderBlobs/blue.png";
import { TabCardsNoImage } from "@/components/Volunteer/TabCards";
import { activeStyles } from "@/components/Volunteer/TabCards";

import { ButtonFullWidth } from "@/components/ButtonFullWidth";

import Markdown from "markdown-to-jsx";

import { ColorThemes } from "@/colors";
import generalInternJSON from "@/posts/general_intern_position_description.json";
import googleForms from "@/posts/volunteer_sign_up_forms.json";

export const BusinessPositions: React.FC = () => {
  const [key, setKey] = useState("one");

  return (
    <>
      <Header
        headerTextColor={ColorThemes.mainBlue}
        image={headerBlob}
        title={"Become a General Business Intern!"}
        description={
          "General Business Interns help with a variety of tasks from recruitment to data analysis!"
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
                  style={activeStyles.activeStyle(ColorThemes.mainBlue)}
                >
                  Business Intern Positions
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <TabCardsNoImage
                posHeader={"DETAILS"}
                generalColor={ColorThemes.mainBlue}
                posDescription={
                  <div>
                    <p>
                      <Markdown>
                        {generalInternJSON.general_intern_details}
                      </Markdown>
                    </p>
                  </div>
                }
              />
              <ButtonFullWidth
                title={"Apply Now!"}
                location={googleForms.general_intern_app_link}
                variant="primaryBlue"
              />
            </Tab.Content>
          </Tab.Container>
        </Container>
      </section>
    </>
  );
};
