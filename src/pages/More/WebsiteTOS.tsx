import React from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { Header } from "@/components/Header";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png";
import { ColorThemes } from "@/colors";
import websitetosJSON from "@/posts/website_tos.json";
import { TabsCardNoImage } from "@/components/Volunteer/TabCards";
import Markdown from "markdown-to-jsx";

export const WebsiteTOS: React.FC = () => {
  const ActiveStyle = (props: any) => ({
    color: "#000000",
    backgroundColor:
      props.i % 2 == 0 ? ColorThemes.lightYellow : ColorThemes.lightOrange,
    border: 0,
    borderRadius: "15px 15px 0 0",
    padding: "20px",
    textAlign: "left",
    width: "auto",
  });

  const headerText = {
    color: ColorThemes.black,
  };

  return (
    <div>
      <Header
        headerTextColor={"#ffcc00"}
        image={headerBlobYellow}
        title={"Website Terms of Use"}
        description={"Learn more about Robotics for All's terms of use!"}
      />
      <br />
      <br />
      <Container>
        {websitetosJSON.sections.map((sections, i) => (
          <Tab.Container>
            <Nav justify fill variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="one" style={ActiveStyle({ i: i })}>
                  <h1 style={headerText}>{sections.header}</h1>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <TabsCardNoImage
                posHeader={""}
                generalColor={
                  i % 2 == 0 ? ColorThemes.lightYellow : ColorThemes.lightOrange
                }
                posDescription={<Markdown>{sections.description}</Markdown>}
              />
            </Tab.Content>
          </Tab.Container>
        ))}
      </Container>
    </div>
  );
};
