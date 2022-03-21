import React from "react";
import { Row } from "react-bootstrap";
import { ColorThemes } from "@/colors";
import { createUseStyles } from "react-jss";

export const PosButton: React.FC<{
  link: string;
  title: string;
  backgroundColor: string;
  backgroundHover: string;
}> = (props) => {
  const useStyles = createUseStyles({
    button: (props: any) => ({
      composes: "py-3 justify-content-between align-items-center rounded",
      transition: "200ms",
      color: ColorThemes.black,
      backgroundColor: props.backgroundColor,
      "&:hover": {
        backgroundColor: props.backgroundHover,
        transition: "200ms",
      },
    }),
  });

  const classes = useStyles({
    backgroundColor: props.backgroundColor,
    backgroundHover: props.backgroundHover,
  });

  return (
    <a className="hyperlink" rel="noopener noreferrer" target="_blank" href = {props.link}>
      <Row className={classes.button}>
        <h4 className="text-center">{props.title}</h4>
      </Row>
    </a>
  );
};
