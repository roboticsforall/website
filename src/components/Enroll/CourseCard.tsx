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
          <Image
            fluid
            src={`${props.courseImage}-/resize/600x/600.png`}
            srcSet={`${props.courseImage}-/resize/320x/320.png 320w,
                    ${props.courseImage}-/resize/600x/600.png 600w`}
            sizes="(max-width: 1000px) 50vw, 90vw"
          />
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
          <Markdown>{props.dropdownCourseDescription}</Markdown>
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
