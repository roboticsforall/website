import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function RFABylawEntry(props) {
  const background: React.CSSProperties = {
    backgroundColor: "white",
    borderRadius: "20px",
    border: "10px solid rgba(255, 204, 0, 0.5)",
    padding: "5px",
    fontFamily: "BeVietnam-Bold",
    fontSize: "large",
    textAlign: "center",
  };
  return (
    <Row>
      <Col xs={3} style={background}>
        <p>{props.date}</p>
      </Col>
      <Col xs={7} style={background}>
        <p>{props.bylawName}</p>
      </Col>
      <Col xs={2} style={background}>
        <p>
          <a href={props.download} className="hyperlink" download>
            Download
          </a>
        </p>
      </Col>
    </Row>
  );
}
