import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const RFAWebsiteTOSCard2: React.FC<{
  posHeader?: string;
  posDescription: JSX.Element;
}> = (props) => {

  const posDescription: React.CSSProperties = {
    color: "#000000",
    fontFamily: "BeVietnam-Medium",
  };
  const borderColor: React.CSSProperties = {
    borderColor: "#fcaf6280"
  }

  return (
    <Container style = {borderColor} className="pos-container2">
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
