import React, { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { TabCardsLeftImage } from "./TabCards";
import TobyHeaderLogo from "@/media/TobyHeaderLogo.png";

import { ColorThemes } from "@/colors";

interface IProps {
  publicityDescription: JSX.Element;
  technicalDescription: JSX.Element;
  businessDescription: JSX.Element;
  addButtons: boolean;
}

export const InternDescriptionTabs: React.FC<IProps> = (props: IProps) => {
  const [key, setKey] = useState("one");

  const styles = {
    general: (props: { backgroundColor: string }) => ({
      background: props.backgroundColor,
      color: ColorThemes.black,
    }),
  };

  return (
    <div>
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
                    ? styles.general({ backgroundColor: ColorThemes.mainBlue })
                    : styles.general({ backgroundColor: ColorThemes.lightBlue })
                }
              >
                General Business
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="two"
                style={
                  key === "two"
                    ? styles.general({ backgroundColor: ColorThemes.mainGreen })
                    : styles.general({
                        backgroundColor: ColorThemes.lightGreen,
                      })
                }
              >
                Technical
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="three"
                style={
                  key === "three"
                    ? styles.general({
                        backgroundColor: ColorThemes.mainOrange,
                      })
                    : styles.general({
                        backgroundColor: ColorThemes.lightOrange,
                      })
                }
              >
                Publicity
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="one">
              <TabCardsLeftImage
                posHeader={"GENERAL BUSINESS PATH"}
                posImage={TobyHeaderLogo}
                posDescription={props.businessDescription}
                generalColor={ColorThemes.mainBlue}
                button={{
                  location: "/volunteer/businesspositions",
                  title: "Learn More",
                  variant: "primaryBlue",
                }}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="two">
              <TabCardsLeftImage
                posHeader={"TECHNICAL PATH"}
                posImage={TobyHeaderLogo}
                posDescription={props.technicalDescription}
                generalColor={ColorThemes.mainGreen}
                button={{
                  location: "/volunteer/technicalpositions",
                  title: "Learn More",
                  variant: "primaryGreen",
                }}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="three">
              <TabCardsLeftImage
                posHeader={"PUBLICITY PATH"}
                posImage={TobyHeaderLogo}
                posDescription={props.publicityDescription}
                generalColor={ColorThemes.mainOrange}
                button={{
                  location: "/volunteer/publicitypositions",
                  title: "Learn More",
                  variant: "primaryOrange",
                }}
              />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};
