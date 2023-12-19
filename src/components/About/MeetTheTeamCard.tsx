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
<<<<<<< HEAD
    <div className='holder'>
      <Col>
        <Card className="meet-card" onClick={handleShow} 
              style={{
                border: 'none', 
                cursor: 'pointer', 
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                marginBottom: '1rem',
                padding: '1rem',
                height: '430px'}}>
            
            <Card.Img
              src={props.info.image + "-/scale_crop/300x350/smart/-/format/webp/-/sharp/10/"}
              alt={props.info.name}
            />
            
          <Card.Body className="">
            <Card.Title className="meet-team-card-title" style={{margin: '0'}}>
              {props.info.name }</Card.Title>
            <Card.Text className="meet-team-card-text" style={{padding: '5px'}}>
=======
    <Col>
      <div className='holder'>
        <Card onClick={handleShow} style={{border: 'none', cursor: 'pointer' }}>
          <Card.Img variant="top" src={props.info.image + "-/scale_crop/100x150/smart/-/format/webp/"} />
          <Card.Body>
            <Card.Title className="meet-team-card-title">
              {props.info.name }</Card.Title>
            <Card.Text className="meet-team-card-text">
>>>>>>> faac4fe1aec2f7a6db41a08a8865d6e7e26c52c5
              {props.info.title_pronouns}
              </Card.Text>
          </Card.Body>
        </Card>
<<<<<<< HEAD
    </Col>

     </div>
    
=======
      </div>
    </Col>
>>>>>>> faac4fe1aec2f7a6db41a08a8865d6e7e26c52c5

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
