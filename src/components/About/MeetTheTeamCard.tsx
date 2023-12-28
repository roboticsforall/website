import React, { useState } from "react";
import { Col, Card, Modal, Button } from "react-bootstrap";
//import { ColorThemes } from "../../colors";

interface IProps {
  info: {
    name: string;
    title_pronouns: string;
    description: string;
    image: string;
  };
  backgroundColor: string;
  color: string;
}

export const MeetTheTeamCard: React.FC<IProps> = (props: IProps) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card onClick={handleShow} className="h-100 shadow">
        <Card.Img
          src={
            props.info.image +
            "-/scale_crop/300x350/smart/-/format/webp/-/sharp/10/"
          }
          alt={props.info.name}
        />

        <Card.Body className="my-auto">
          <Card.Title>{props.info.name}</Card.Title>
          <Card.Subtitle>{props.info.title_pronouns}</Card.Subtitle>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        fullscreen={"md-down"}
        size={"lg"}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.info.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.info.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
