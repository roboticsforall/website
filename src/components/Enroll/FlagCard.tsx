import React from "react";
import { Image, Col, Button } from "react-bootstrap";
import { createUseStyles } from "react-jss";

interface IProps {
  link: string;
  title: string;
  image: string;
  backgroundColor: string;
  variant: string;
}
export const FlagCard: React.FC<IProps> = (props: IProps) => {
  const useStyles = createUseStyles({
    imageSize: {
      height: "11vmax",
    },
    text: {
      composes: "text-center mb-4",
    },
    cardBackground: {
      composes: "mb-2 border-0",
      backgroundColor: props.backgroundColor,
    },
  });

  const classes = useStyles();

  return (
    <Col md={3} lg={3}>
      <Button
        target="_blank"
        href={props.link}
        rel="noreferrer"
        className={classes.cardBackground}
        variant = {props.variant}
      >
          <img src={props.image} />
          <h3 className={classes.text}>{props.title}</h3>
      </Button>
    </Col>
  );
};
