import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const VolOverviewCard: React.FC<{
  backgroundcolor: string;
  buttonColor: string;
  learnMoreLink: string;
  title: string;
  description: string;
  applyLink: string;
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
    color: props.buttonColor,
    fontFamily: "Oswald-Medium",
  };
  return (
    <Container>
      <Row>
        <Col className="rounded center-align me-3 px-4" md={8} style={card}>
          <Row className="align-items-center">
            <h2 style={positionsTitle}>{props.title}</h2>
            <p style={description}>{props.description}</p>
          </Row>
        </Col>
        <Col>
          <Row className="h-100 align-items-between">
            <Link
              to={props.learnMoreLink}
              className="rounded center-align hyperlink mb-md-3 p-3"
              style={button}
            >
              <p className = "aff-org-card-link">Learn More</p>
            </Link>
            <Link
              to={props.applyLink}
              className=" rounded hyperlink center-align p-3"
              style={button}
            >
              <p className = "aff-org-card-link">Apply</p>
            </Link>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
