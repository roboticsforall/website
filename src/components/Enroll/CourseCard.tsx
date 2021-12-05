import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import Markdown from "markdown-to-jsx";
import exitIcon from "@/media/Icons/exitIcon.svg";
import { createUseStyles } from "react-jss";
import { ColorThemes } from "@/colors";

interface IProps {
  link: string;
  title: string;
  courseImage: string;
  backgroundColor: string;
  dropdownCourseDescription: string;
  dropdownCourseImage: string;
}

export const CourseCard: React.FC<IProps> = (props: IProps) => {
  const [dropdownDisplay, setDropdownDisplay] = React.useState("none");

  const text: React.CSSProperties = {
    fontFamily: "Oswald-Medium",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  };
  const dropdownControl: React.CSSProperties = {
    display: dropdownDisplay,
    zIndex: 10000,
    position: "fixed",
    left: 0,
    top: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.4)" /* Black w/ opacity */,
  };
  const dropdownContainer: React.CSSProperties = {
    position: "fixed",
    left: "50%",
    top: "50%",
    width: "100vw",
    transform: "translate(-50%, -50%)",
    overflowY: "auto",
  };
  const dropdownHeader: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
  };
  const dropdownHeaderText: React.CSSProperties = {
    fontFamily: "Oswald-Medium",
    fontSize: "4em",
  };
  const dropdownText: React.CSSProperties = {
    fontFamily: "BeVietnam-Medium",
    fontSize: "1.5em",
  };

  const useStyles = createUseStyles({
    cardBackground: {
      composes: "d-flex flex-column justify-content-center",
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
    <>
      <Col
        className={classes.cardBackground}
        md={4}
        lg={3}
        onClick={() => {
          setDropdownDisplay("flex");
        }}
      >
        <div className="d-flex justify-content-center">
          <Image fluid src={props.courseImage} />
        </div>
        <div className="text-center">
          <h3 style={text}>{props.title}</h3>
        </div>
      </Col>
      <div style={dropdownControl}>
        <div
          style={dropdownContainer}
          className="d-flex justify-content-center"
        >
          <Row
            className="w-75"
            style={{
              backgroundColor: ColorThemes.mainYellow,
              borderRadius: "15px",
              boxShadow: "-1px 8px 15px 1px rgba(0,0,0,0.57)",
            }}
          >
            <header style={dropdownHeader}>
              <h1 style={dropdownHeaderText}>{props.title.toUpperCase()}</h1>
              <button
                onClick={() => {
                  setDropdownDisplay("none");
                }}
              >
                <img width="50" src={exitIcon} />
              </button>
            </header>
            <Col md={7}>
              <h4 style={dropdownText}>
                <Markdown>{props.dropdownCourseDescription}</Markdown>
              </h4>
            </Col>
            <Col className="d-flex flex-column align-items-center justify-content-between">
              <Image
                className="p-2"
                style={{
                  borderRadius: "15px",
                  backgroundColor: ColorThemes.white,
                }}
                fluid
                src={props.dropdownCourseImage}
              ></Image>
              <a
                style={{ color: props.backgroundColor, fontSize: "4em" }}
                rel="noopener noreferrer"
                target="_blank"
                className="text-center hyperlink aff-org-card-link"
                href={props.link}
              >
                Learn More
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
