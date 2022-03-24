import React from "react";
import { Row } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import { ColorThemes } from "@/colors";


export const NewsCard: React.FC<{
  file: string;
  title: string;
}> = (props) => {

  const useStyles = createUseStyles({
		card: {
      composes: "rounded",
      border: "none",
      transition: "200ms",
      backgroundColor: ColorThemes.lightYellow,
		  "&:hover": {
        transition: "200ms",
        backgroundColor: ColorThemes.mainYellow,
		  },
		},
	});

	  const classes = useStyles();

  return (
    <a className="hyperlink" href={props.file} download>
      <div className = {classes.card}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row className="justify-content-center">
          <h3 className="mb-4 text-center">{props.title}</h3>
        </Row>
      </div>
    </a>
  );
};
