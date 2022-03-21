import { ColorThemes } from "@/colors";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { createUseStyles } from "react-jss";
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
  const useStyles = createUseStyles({
    link: {
      composes: "hyperlink",
      fontFamily: "Oswald-Medium",
      transition: "0.2s",
      color: props.buttonColor,
      "&:hover": {
        transition: "0.2s",
        color: ColorThemes.white,
      },
    },
  });
  const classes = useStyles();

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
            className = {classes.link}
          >
            <h5>Learn More</h5>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
