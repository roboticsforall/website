import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const RFAVolOverviewCard2: React.FC<{
  backgroundcolor: string;
  buttonColor: string;
  learnMoreLink: string;
  title: string;
  description: string;
  applyLink: string;
  
}> = (props) => {
  const positionsTitle = {
    fontFamily: "Oswald-Medium",
    fontSize: "3.2vmax",
  };
  const description = {
    fontFamily: "BeVietnam-Medium",
    fontSize: "1.3vmax",
  };
  const card = {
    borderRadius: "15px",
    backgroundColor: props.backgroundcolor,
  };
  const button = {
    borderRadius: "15px",
    backgroundColor: props.backgroundcolor,
    color: props.buttonColor,
    fontFamily: "Oswald-Medium",
    fontSize: "2.2vmax",
  };
  const cardDiv = {
    display: "flex",
    marginRight: "6vw", 
    marginLeft: "6vw",
  };
  const arrow = {
    borderBottom: `70px solid ${props.backgroundcolor}`,
    borderRight: "35px solid transparent",
    borderLeft: "35px solid transparent",
    borderTop: "20px solid transparent",
  };
  return (
    <Container style = {{marginBottom: "1.5vh"}}>
      <div style = {cardDiv}>
        <Col>
          <Row>
            <Link
              to={props.learnMoreLink}
              className="aff-org-card-link center-align hyperlink mb-3 p-3"
              style={button}
            >
              Learn More
            </Link>
            <Link
              to={props.applyLink}
              className="aff-org-card-link hyperlink center-align p-3"
              style={button}
            >
              Apply
            </Link>
          </Row>
        </Col>
        <Col className="border center-align me-3 px-4" md = {8} style={card}>
          <Row className="align-items-center">
            <h2 style={positionsTitle}>{props.title}</h2>
            <p style={description}>{props.description}</p>
          </Row>
        </Col>
      </div>
    </Container>
  );
};
