import React from "react";
import { Row } from "react-bootstrap";

export default function RFASubmitButton(props) {
  const textStyle: React.CSSProperties = {
    fontFamily: "BeVietnam-ExtraBold",
    textAlign: "center",
    color: "black",
  };

  return (
    <Row className="justify-content-center align-items-center">
      <button
        disabled={props.state}
        className="long-button p-1 w-50"
        type="submit"
      >
        <h4 style={textStyle}>Submit</h4>
      </button>
    </Row>
  );
}
