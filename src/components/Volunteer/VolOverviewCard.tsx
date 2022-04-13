import { ColorThemes } from "@/colors";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

export const VolOverviewCard: React.FC<{
  backgroundColor: string;
  buttonColor: string;
  location: string;
  title: string;
  description: string;
  image: string;
}> = (props) => {
  const useStyles = createUseStyles({
    cardBackground: {
      composes: "rounded h-100",
      backgroundColor: props.backgroundColor,
    },
  });
  const classes = useStyles();

  return (
  <Col md = {4}>
    <Container className = {classes.cardBackground}>
      <Row className = "justify-content-center">
        <Col>
          {(window.innerWidth >= 768) ? (
            <img src = {props.image}/>
          ) : (
            <></>
          )}
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <a href = {props.location}>Learn More</a>
        </Col>
      </Row>
    </Container>
    </Col>
  );
};
