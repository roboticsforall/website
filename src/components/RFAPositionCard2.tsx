import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export const RFAPositionCard2: React.FC<{
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
    color: "#000000",
  };

  const img: React.CSSProperties = {
    marginBottom: "10px",
  };

  return (
    <Container className="pos-container2">
      <div>
        <h1 className="header-size" style={posHeader}>
          {props.posHeader}
        </h1>
        <Row>
          <Col>
            <div className="header-description-size" style={posDescription}>
              {props.posDescription}
            </div>
          </Col>
          <Col xs={3}>
            <Image
              className="center-align"
              src={props.posImage}
              style={img}
              fluid
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};
