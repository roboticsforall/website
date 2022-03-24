import React, { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { Header } from "@/components/Header";
import headerBlobOrange from "@/media/HeaderBlobs/orange.png";
import { TabCardsNoImage } from "@/components/Volunteer/TabCards";
import { PosButton } from "@/components/Volunteer/PosButton";

import { activeStyles } from "@/components/Volunteer/TabCards";

import Markdown from "markdown-to-jsx";

import { ColorThemes } from "@/colors";

import publicityInternJSON from "@/posts/publicity_intern_position_description.json";

import googleForms from "@/posts/volunteer_sign_up_forms.json";

export const PublicityPositions: React.FC = () => {
  const [key, setKey] = useState("one");
  return (
    <div>
      <Header
        headerTextColor={ColorThemes.mainOrange}
        image={headerBlobOrange}
        title={"Volunteer to Build Our Outreach!"}
        description={
          "Volunteer to help with graphic design, illustrations, and much much more!"
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
                className="pos"
                style={activeStyles.activeStyle(ColorThemes.mainOrange)}
              >
                Publicity Intern Positions
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <TabCardsNoImage
              posHeader={"DETAILS"}
              generalColor={ColorThemes.mainOrange}
              posDescription={
                <div>
                  <p>
                    <Markdown>
                      {publicityInternJSON.publicity_intern_details}
                    </Markdown>
                  </p>
                </div>
              }
            />
            <PosButton
              backgroundColor={ColorThemes.mainOrange}
              backgroundHover={ColorThemes.mainYellow}
              title={"Apply Now!"}
              link={googleForms.publicity_intern_app_link}
            />
            <br></br>
            <br></br>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};
