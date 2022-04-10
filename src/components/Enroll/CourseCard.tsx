import React, { useState } from "react";
import { Image, Row, Col, Container, Modal, Button } from "react-bootstrap";
import Markdown from "markdown-to-jsx";
import { createUseStyles } from "react-jss";

interface IProps {
  link: string;
  title: string;
  courseImage: string;
  backgroundColor: string;
  dropdownCourseDescription: string;
  dropdownCourseImage: string;
}

export const CourseCard: React.FC<IProps> = (props: IProps) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const useStyles = createUseStyles({
    cardBackground: {
      backgroundColor: props.backgroundColor,
    },
  });

  const classes = useStyles();

  return (
    <>
      <Col md={4} lg={3} onClick={handleShow}>
        <Button className={classes.cardBackground}>
            <img src={props.courseImage} />
            <h4>{props.title.substring(0, props.title.indexOf("(") - 1)}</h4>
            <h4>{props.title.substring(props.title.indexOf("("))}</h4>
        </Button>
      </Col>

      <Modal
        centered
        fullscreen={"md-down"}
        size={"lg"}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title.toUpperCase()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={8}>
                <Markdown>{props.dropdownCourseDescription}</Markdown>
              </Col>
              <Col>
                <Row className="justify-content-center">
                  <Image fluid src={props.dropdownCourseImage} />
                </Row>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Container>
            <Row>
              <h4 className="text-center">
                <a
                  style={{ color: props.backgroundColor }}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hyperlink aff-org-card-link"
                  href={props.link}
                >
                  Learn More
                </a>
              </h4>
            </Row>
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
};
