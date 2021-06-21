import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const RFAWebsiteTOSCard2: React.FC<{
  posHeader?: string;
  posDescription: JSX.Element;
}> = (props) => {
  const posHeader: React.CSSProperties = {
    fontFamily: "Oswald-Medium",
    letterSpacing: "0.25em",
    // textAlign: "center",
  };

  const posDescription: React.CSSProperties = {
    color: "#000000",
    fontFamily: "BeVietnam-Medium",
  };

  return (
    <Container className="pos-container2">
      <div>
        <Row>
          <Col>
            <h1 className="header-size" style={posHeader}>
              {props.posHeader}
            </h1>
            <p className="header-description-size" style={posDescription}>
              {props.posDescription}
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};