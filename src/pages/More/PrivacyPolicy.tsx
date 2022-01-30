import React from "react";
import { Container, Row, Tab, Nav } from "react-bootstrap";
import { Header } from "@/components/Header";
import headerBlobYellow from "../../media/HeaderBlobs/yellow.png";
import { ColorThemes } from "@/colors";
import privacypolicyJSON from "@/posts/privacy_policy.json";
import { TabsCardNoImage } from "@/components/Volunteer/TabCards";
import Markdown from "markdown-to-jsx";

export const PrivacyPolicy: React.FC = () => {
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

  const positionsDescription: React.CSSProperties = {
    fontFamily: "BeVietnam-SemiBold",
    fontWeight: 600,
    color: "black",
    textAlign: "center",
  };
  const headerText = {
    color: ColorThemes.black,
    fontFamily: "Oswald-Medium",
  };

  return (
    <div>
      <Header
        headerTextColor={ColorThemes.mainYellow}
        image={headerBlobYellow}
        title={"Website Privacy Policy"}
        description={"Learn more about Robotics for All's privacy policies!"}
      />
      <br />
      <br />
      <Container>
        {privacypolicyJSON.sections.map((sections, i) => (
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

        <Row className="justify-content-center align-items-center">
          <p style={positionsDescription}>
            If you feel that we are not abiding by this privacy policy, you
            should contact us immediately via telephone at (650) 665-9734 or via
            email at info@roboticsforall.net.
          </p>
        </Row>
      </Container>
    </div>
  );
};
