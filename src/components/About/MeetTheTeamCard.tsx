import React, { useState } from "react";
import { Col, Image, Modal, Button } from "react-bootstrap";
import Markdown from "markdown-to-jsx";

import "../../index.css";

interface IProps {
  info: {
    name: string,
    title_pronouns: string,
    description: string,
    image: string
  }
  backgroundColor: string;
  color: string;
}

export const MeetTheTeamCard: React.FC<IProps> = (props: IProps) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const nameHeader: React.CSSProperties = {
    textShadow: "0px 1px 3px rgba(0,0,0,0.58)",
    wordBreak: "break-word",
    width: "75%"
  };
  const titleHeader: React.CSSProperties = {
    textShadow: "0px 1px 3px rgba(0,0,0,0.22)",
  };
  const bodyText: React.CSSProperties = {

    color: "white",
  };
  const imgBoxShadow = {
    boxShadow: "0px 7px 8px -8px #000000",
  };
  return (
    <>
      <div
        style={{
          backgroundColor: props.backgroundColor,
          borderRadius: "15px",
        }}
        onClick={handleShow}
        className="d-flex my-3 p-3"
      >
        <Col md={"auto"}>
          <Image
            fluid
            src={props.info.image.replace("/public", "")}
            style={imgBoxShadow}
          />
        </Col>

        {window.innerWidth <= 600 ? (
          <></>
        ) : (
          <Col style={{ overflowY: "auto" }} className="ms-2">
            <h2 style={nameHeader}>{props.info.name}</h2>
            <h3 style={{ color: props.color, ...titleHeader }}>
              {props.info.title_pronouns}
            </h3>
            <Markdown style={bodyText}>{props.info.description}</Markdown>
          </Col>
        )}
      </div>

      <Modal centered fullscreen={"md-down"} size={"lg"} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h2>{props.info.name}</h2>
            <h3>{props.info.title_pronouns}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.info.description}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
