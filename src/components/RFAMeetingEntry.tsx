import React from "react";
import { Row, Col } from "react-bootstrap";

export const RFAMeetingEntry: React.FC<{
  date: string;
  agendaDownload: string;
  minutesDownload: string;
}> = (props) => {
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
      <Col xs={6} style={background}>
        <p>{props.date}</p>
      </Col>
      <Col xs={3} style={background}>
        <p>
          <a href={props.agendaDownload} className="hyperlink" download>
            Agenda
          </a>
        </p>
      </Col>
      <Col xs={3} style={background}>
        <p>
          <a href={props.minutesDownload} className="hyperlink" download>
            Minutes
          </a>
        </p>
      </Col>
    </Row>
  );
};
