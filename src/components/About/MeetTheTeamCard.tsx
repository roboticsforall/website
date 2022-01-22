import React, { useState } from "react";
import { Col, Image, Row, Container, Modal, Button } from "react-bootstrap";
import Markdown from "markdown-to-jsx";
import { ColorThemes } from "@/colors";
import Carousel from "react-bootstrap/Carousel";

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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  const imgBoxShadow = {
    boxShadow: "0px 7px 8px -8px #000000",
  };
  const nameHeader: React.CSSProperties = {
    fontFamily: "Oswald-Medium",
    textShadow: "0px 1px 3px rgba(0,0,0,0.58)",
    wordBreak: "break-word",
    width: "75%"
  };
  const titleHeader: React.CSSProperties = {
    fontFamily: "BeVietnam-Bold",
    textShadow: "0px 1px 3px rgba(0,0,0,0.22)",
  };
  const bodyText: React.CSSProperties = {
    fontFamily: "BeVietnam-Medium",
    color: "white",
  };

  const dropdownControl: React.CSSProperties = {
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
  };
  const dropdownHeader: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
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
            <h1 style={nameHeader}>{props.info.name}</h1>
            <h1 style={{ color: props.color, ...titleHeader }}>
              {props.info.title_pronouns}
            </h1>
            <Markdown style={bodyText}>{props.info.description}</Markdown>
          </Col>
        )}
      </div>

      <Modal centered fullscreen={"md-down"} size={"lg"} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>{props.info.name}</h1>
            <h2>{props.info.title_pronouns}</h2>
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
