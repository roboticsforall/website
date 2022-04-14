import React from "react";
import { Image, Col, Button } from "react-bootstrap";
import { createUseStyles } from "react-jss";

interface IProps {
  link: string;
  title: string;
  image: string;
  variant: string;
}
export const FlagCard: React.FC<IProps> = (props: IProps) => {
  const imageSize = {
    height: "11vmax",
  };

  return (
    <Col md={3} lg={3}>
      <Button
        target="_blank"
        href={props.link}
        rel="noreferrer"
        className="mb-2"
        variant={props.variant}
      >
        <img style={imageSize} src={props.image} />
        <h3>{props.title}</h3>
      </Button>
    </Col>
  );
};
