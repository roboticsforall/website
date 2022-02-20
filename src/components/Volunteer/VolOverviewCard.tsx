import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const VolOverviewCard: React.FC<{
  backgroundcolor: string;
  buttonColor: string;
  learnMoreLink: string;
  title: string;
  description: string;
}> = (props) => {
  const positionsTitle = {
    fontFamily: "Oswald-Medium",
  };
  const description = {
    fontFamily: "BeVietnam-Medium",
  };
  const card = {
    backgroundColor: props.backgroundcolor,
  };
  const button = {
    backgroundColor: props.backgroundcolor,
  };
  const linkText = {
    color: props.buttonColor,
    fontFamily: "Oswald-Medium",
  }
  return (
    <Container>
      <Row>
        <Col className="rounded center-align me-3 px-4" md={8} style={card}>
          <Row className="align-items-center">
            <h2 style={positionsTitle}>{props.title}</h2>
            <p style={description}>{props.description}</p>
          </Row>
        </Col>
        <Col className = "center-align rounded" style={button}>
          <Link
            to={props.learnMoreLink}
            className="rounded hyperlink"
            style = {linkText}
          >
            <p className = "aff-org-card-link">Learn More</p>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
