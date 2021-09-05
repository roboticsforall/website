import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ColorThemes } from "@/colors";

export const RFAPositionCard: React.FC<{
  posHeader: string;
  posDescription: JSX.Element;
  color?: string;
  borderColor?: string;
}> = (props) => {
  const posHeader: React.CSSProperties = {
    fontFamily: "Mazzard-H-Extrabold",
    letterSpacing: "0.25em",
    textAlign: "center",
  };

  const posDescription: React.CSSProperties = {
    fontFamily: "BeVietnam-Medium",
    color: ColorThemes.black,
  };

  const posContainer: React.CSSProperties = {
    backgroundColor: props.color,
    borderRadius: "0 0 15px 15px",
    borderColor: props.borderColor,
  };

  return (
    <Container className="pos-container" style={posContainer}>
      <div>
        <Row>
          <Col>
            <h1 className="header-size" style={posHeader}>
              {props.posHeader}
            </h1>
            <div className="header-description-size" style={posDescription}>
              {props.posDescription}
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
