import { ColorThemes } from "@/colors";
import React from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

const title: React.CSSProperties = {
  textAlign: "center",
};

export const LongButtonWithHyperlink: React.FC<{
  location: string;
  title: string;
  backgroundColor: string;
}> = (props) => {
  const useStyles = createUseStyles({
    button: {
      composes: "w-100 border-0",
      backgroundColor: props.backgroundColor,
    },
  });

  const classes = useStyles();

  return (
    <Button
      target="_blank"
      rel="noreferrer"
      href={props.location}
      className = {classes.button}
    >
        <h3 style={title}>{props.title}</h3>
    </Button>
  );
};
