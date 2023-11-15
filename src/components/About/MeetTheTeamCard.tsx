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
    <Col>
      <div className='holder'>
        <Card onClick={handleShow} style={{border: 'none', cursor: 'pointer' }}>
          <Card.Img variant="top" src={props.info.image + "-/scale_crop/100x150/smart/-/format/webp/"} />
          <Card.Body>
            <Card.Title className="meet-team-card-title">
              {props.info.name }</Card.Title>
            <Card.Text className="meet-team-card-text">
              {props.info.title_pronouns}
              </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Col>

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
