import React from "react";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

export const RFALongButton: React.FC<{
  location: string;
  title: string;
  location: string;
}> = (props) => {
  const title: React.CSSProperties = {
    fontFamily: "BeVietnam-ExtraBold",
    textAlign: "center",
  };

  return (
    <Link className="hyperlink" to={props.location}>
      <Row className="long-button p-2 justify-content-center align-items-center">
        <h3 style={title}>{props.title}</h3>
      </Row>
    </Link>
  );
};
