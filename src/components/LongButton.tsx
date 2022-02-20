import { ColorThemes } from "@/colors";
import React from "react";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

const title: React.CSSProperties = {
  fontFamily: "BeVietnam-ExtraBold",
  textAlign: "center",
};

export const LongButtonWithRouterLink: React.FC<{
  location: string;
  title: string;
}> = (props) => {
  const useStyles = createUseStyles({
		button: {
      composes: "rounded p-2 justify-content-center align-items-center",
      border: "none",
      transition: "200ms",
      backgroundColor: ColorThemes.mainYellow,
		  "&:hover": {
        transition: "200ms",
		  },
		},
	  });

	  const classes = useStyles();

  return (
    <Link className="hyperlink" to={props.location}>
      <Row className = {classes.button}>
        <h3 style={title}>{props.title}</h3>
      </Row>
    </Link>
  );
};

export const LongButtonWithHyperlink: React.FC<{
  location: string;
  title: string;
  backgroundColor: string;
}> = (props) => {
  const useStyles = createUseStyles({
		button: {
      composes: "rounded p-2 justify-content-center align-items-center",
      border: "none",
      transition: "200ms",
      backgroundColor: props.backgroundColor,
		  "&:hover": {
        transition: "200ms",
        backgroundColor: ColorThemes.mainYellow,
		  },
		},
	});

	  const classes = useStyles();

  return (
      <a
        target="_blank"
        rel="noreferrer"
        href={props.location}
        className="hyperlink"
        >
        <Row className = {classes.button}>
          <h3 style={title}>{props.title}</h3>
        </Row>
    </a>
  );
};
