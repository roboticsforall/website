import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { ColorThemes } from "@/colors";

export const RFAPositionCard1: React.FC<{
  posHeader: string;
  posImage: string;
  posDescription: JSX.Element;
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

  const img: React.CSSProperties = {
    marginBottom: "10px",
    width: "auto",
    maxHeight: "250px",
  };

  return (
    <Container className="pos-container">
      <div>
        <h1 className="header-size" style={posHeader}>
          {props.posHeader}
        </h1>
        <Row>
          <Col xs={3}>
            <Image
              className="center-align"
              src={props.posImage}
              style={img}
              fluid
            />
          </Col>
          <Col>
            <div className="header-description-size" style={posDescription}>
              {props.posDescription}
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
