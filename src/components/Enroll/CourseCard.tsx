import React, { useState } from "react";
import { Image, Row, Col, Container, Modal, Button, Stack } from "react-bootstrap";
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
  const [dropdownDisplay, setDropdownDisplay] = useState("none");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    top: "30%",
    width: "100vw",
    transform: "translate(-50%, 0%)",
  };
  const dropdownHeaderText: React.CSSProperties = {
    fontFamily: "Oswald-Medium",
  };
  const dropdownText: React.CSSProperties = {
    fontFamily: "BeVietnam-Medium",
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
        onClick={handleShow}
      >
        <div className="d-flex justify-content-center">
          <Image fluid src={props.courseImage} />
        </div>
        <div className="text-center">
          <h3 style={text}>{props.title}</h3>
        </div>
      </Col>

      <Modal centered fullscreen={"md-down"} size={"lg"} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.title.toUpperCase()}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col md={8}>
                <Markdown>{props.dropdownCourseDescription}</Markdown>
              </Col>
              <Col>
                  <Row className="justify-content-center">
                    <Image
                      // fluid
                      src={props.dropdownCourseImage}
                    />
                  </Row>
                  <Row className="justify-content-center">
                      <a
                        style={{ color: props.backgroundColor }}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="hyperlink text-center aff-org-card-link"
                        href={props.link}
                      >
                        Learn More
                      </a>
                  </Row>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

      <div style={dropdownControl}>
        <div
          style={dropdownContainer}
          className="d-flex justify-content-center h-50"
        >
          <Row
            className="w-75"
            style={{
              backgroundColor: ColorThemes.mainYellow,
              borderRadius: "15px",
              boxShadow: "-1px 8px 15px 1px rgba(0,0,0,0.57)",
              overflowY: "auto",
            }}
          >
            <header>
              <button
                onClick={() => {
                  setDropdownDisplay("none");
                }}
              >
                <img width="50" src={exitIcon} />
              </button>
              <h1 style={dropdownHeaderText}>{props.title.toUpperCase()}</h1>
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
                style={{ color: props.backgroundColor }}
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
