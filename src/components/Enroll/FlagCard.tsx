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
        <Image
          fluid
          src={`${props.image}-/resize/600x/600.png`}
          srcSet={`${props.image}-/resize/320x/320.png 320w,
                  ${props.image}-/resize/600x/600.png 600w`}
          sizes="(max-width: 1000px) 50vw, 90vw"
        />

        {/* <img
          src={`${props.courseImage}`}
          srcSet={`${props.courseImage}-/resize/320x/320.png 320w`}
          type="image/png"
          sizes="(max-width: 1000px) 50vw, 90vw"
          style={{ maxWidth: "100%" }}
        /> */}
        <h3>{props.title}</h3>
      </Button>
    </Col>
  );
};
