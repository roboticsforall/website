import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ColorThemes } from "@/colors";

export const WebsiteTOSCard: React.FC<{
  posHeader?: string;
  posDescription: JSX.Element;
}> = (props) => {

  const posDescription: React.CSSProperties = {
    color: "#000000",
    fontFamily: "BeVietnam-Medium",
  };
  const borderColor: React.CSSProperties = {
    borderColor: ColorThemes.lightYellow
  }

  return (
    <Container style = {borderColor} className="pos-container">
      <Row>
        <Col>
          <p className="header-description-size" style={posDescription}>
            {props.posDescription}
          </p>
        </Col>
      </Row>
    </Container>
  );
};
