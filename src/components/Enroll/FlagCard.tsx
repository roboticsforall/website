import React from "react";
import { Image, Col } from "react-bootstrap";
import { createUseStyles } from "react-jss";

interface IProps {
  link: string;
  title: string;
  image: string;
  backgroundColor: string;
}
export const FlagCard: React.FC<IProps> = (props: IProps) => {
  const useStyles = createUseStyles({
    imageSize: {
      height: "11vmax",
    },
    text: {
      composes: "text-center mb-4",
      fontFamily: "BeVietnam-Bold",
    },
    cardBackground: {
      composes: "mb-2",
      borderRadius: "1em",
      transition: "200ms",
      backgroundColor: props.backgroundColor,
      "&:hover": {
        transition: "200ms",
        backgroundColor: "#ffdb4d",
      },
    },
  });

  const classes = useStyles();

  return (
    <Col className={classes.cardBackground} md={"auto"} lg = {4}>
      <a
        className="hyperlink"
        target="_blank"
        href={props.link}
        rel="noreferrer"
      >
        <div className="m-3 text-center">
          <Image fluid src={props.image} />
          <h3 className={classes.text}>{props.title}</h3>
        </div>
      </a>
    </Col>
  );
};
