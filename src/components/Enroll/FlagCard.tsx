import React from "react";
import { Image, Col, Button } from "react-bootstrap";

interface IProps {
  link: string;
  title: string;
  image: string;
  variant: string;
}
export const FlagCard: React.FC<IProps> = (props: IProps) => {
  return (
    <Col md={3} lg={3}>
      <Button
        target="_blank"
        href={props.link}
        rel="noreferrer"
        className="mb-2"
        variant={props.variant}
      >
        <Image fluid src={props.image} />
        <h3>{props.title}</h3>
      </Button>
    </Col>
  );
};
