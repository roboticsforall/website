import React from "react";
import { Row } from "react-bootstrap";
import { ColorThemes } from "@/colors";
import { createUseStyles } from "react-jss";

export const SubmitButton: React.FC<{ state?: boolean }> = (props) => {
  const textStyle: React.CSSProperties = {
    fontFamily: "BeVietnam-ExtraBold",
    textAlign: "center",
    color: "black",
  };
  const useStyles = createUseStyles({
    button: {
      composes: "rounded w-100",
      backgroundColor: ColorThemes.mainYellow,
    },
  });

  const classes = useStyles();

  return (
    <button
      disabled={props.state}
      className = {classes.button}
      type="submit"
    >
      <h4 style={textStyle}>Submit</h4>
    </button>
  );
};
