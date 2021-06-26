import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const RFAWebsiteTOSCard: React.FC<{
  posHeader?: string;
  posDescription: JSX.Element;
}> = (props) => {

  const posDescription: React.CSSProperties = {
    color: "#000000",
    fontFamily: "BeVietnam-Medium",
  };
  const borderColor: React.CSSProperties = {
    borderColor: "#ffcc0080"
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
