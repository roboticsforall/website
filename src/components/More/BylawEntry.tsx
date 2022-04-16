import React from "react";
import { Row, Col } from "react-bootstrap";
import { ColorThemes } from "@/colors";

export const BylawEntry: React.FC<{
  date: string;
  bylawName: string;
  download: string;
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
      <Col xs={3} className="" style={background}>
        <p>{props.date}</p>
      </Col>
      <Col xs={6} style={background}>
        <p>{props.bylawName}</p>
      </Col>
      <Col xs={3} style={background}>
        <p>
          <a href={props.download} className="hyperlink" download>
            Download
          </a>
        </p>
      </Col>
    </Row>
  );
};
