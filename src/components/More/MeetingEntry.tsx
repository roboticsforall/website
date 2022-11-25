import React from "react";
import { Row, Col } from "react-bootstrap";
import { ColorThemes } from "@/colors";

export const MeetingEntry: React.FC<{
  date: string;
  agendaDownload: string;
  minutesDownload: string;
}> = (props) => {
  const background: React.CSSProperties = {
    backgroundColor: ColorThemes.white,
    borderRadius: "20px",
    border: `10px solid ${ColorThemes.lightYellow}`,
    padding: "5px",
    textAlign: "center",
    wordWrap: "break-word",
  };

  return (
    <Row>
      <Col xs={6} style={background}>
        <p>{props.date}</p>
      </Col>
      <Col xs={3} style={background}>
        <p>
          <a href={props.agendaDownload} target = "_blank" rel = "noreferrer noopener" className="hyperlink">
            View
          </a>
        </p>
      </Col>
      <Col xs={3} style={background}>
        <p>
          <a href={props.minutesDownload} target = "_blank" rel = "noreferrer noopener" className="hyperlink">
            View
          </a>
        </p>
      </Col>
    </Row>
  );
};
