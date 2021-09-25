import React from "react";
import { Container, Row, Tab, Nav } from "react-bootstrap";
import { RFAHeader } from "@/components/RFAHeader";
import headerBlobYellow from "../../media/HeaderBlobs/yellow.png";
import { ColorThemes } from "@/colors";
import privacypolicyJSON from "@/posts/privacy_policy.json";
import { RFATabsCardNoImage } from "@/components/RFATabCards";
import Markdown from "markdown-to-jsx";

export const RFAPrivacyPolicy: React.FC = () => {
  const ActiveStyle = (props: any) => ({
    color: "#000000",
    backgroundColor: (props.i % 2 == 0 ? ColorThemes.lightYellow : ColorThemes.lightOrange),
    border: 0,
    borderRadius: "15px 15px 0 0",
    fontFamily: "Oswald-Medium",
    fontSize: "3vmax",
    padding: "20px",
    textAlign: "left",
    width: "auto"
  });

  const positionsDescription: React.CSSProperties = {
    fontFamily: "BeVietnam-SemiBold",
    fontWeight: 600,
    color: "black",
  };
  const blackText = {
    color: ColorThemes.black
  }

  return (
    <div>
      <RFAHeader
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
                <Nav.Link
                  eventKey="one"
                  style = {ActiveStyle({i: i})}
                >
                  <p style={blackText}>{sections.header}</p>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <RFATabsCardNoImage
                posHeader={""}
                generalColor = {(i % 2 == 0 ? ColorThemes.lightYellow : ColorThemes.lightOrange)}
                posDescription={
                  <div>
                    <p>
                      <Markdown>{sections.description}</Markdown>
                    </p>
                  </div>
                }
              />
            </Tab.Content>
          </Tab.Container>
          ))}

        <Row className="justify-content-center align-items-center">
          <p
            style={positionsDescription}
            className="text-center header-description-size"
          >
            If you feel that we are not abiding by this privacy policy, you
            should contact us immediately via telephone at (650) 665-9734 or via
            email at info@roboticsforall.net.
          </p>
        </Row>
      </Container>
    </div>
  );
};
