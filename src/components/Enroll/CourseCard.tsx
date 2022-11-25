import React, { useState } from "react";
import { Image, Row, Col, Container, Modal, Button } from "react-bootstrap";
import Markdown from "markdown-to-jsx";
import { ButtonFullWidth } from "../ButtonFullWidth";

interface IProps {
  link: string;
  title: string;
  courseImage: string;
  dropdownCourseDescription: string;
  dropdownCourseImage: string;
  variant: string;
}

export const CourseCard: React.FC<IProps> = (props: IProps) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col md={4} lg={3} onClick={handleShow}>
        <Button variant={props.variant}>
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
              <Col>
                <ButtonFullWidth
                  variant={props.variant}
                  location={props.link}
                  title="Learn More"
                />
              </Col>
            </Row>
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
};
