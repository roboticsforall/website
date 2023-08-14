import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

type TVolOverviewCard = {
  backgroundColor: string;
  buttonColor: string;
  location: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const VolOverviewCard: React.FC<TVolOverviewCard> = (
  props: TVolOverviewCard
) => {
  const useStyles = createUseStyles({
    cardBackground: {
      composes: "rounded h-100",
      backgroundColor: props.backgroundColor,
    },
  });
  const classes = useStyles();

  return (
    <Col md={4}>
      <Container className={classes.cardBackground}>
        <Row className="justify-content-center">
          <Col>
            {window.innerWidth >= 768 && (
              <Image fluid src={props.image} alt={props.alt} />
            )}
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <Link to={props.location}>Learn More</Link>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};
