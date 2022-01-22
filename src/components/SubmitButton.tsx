import React from "react";
import { Row } from "react-bootstrap";

export const SubmitButton: React.FC<{ state?: boolean }> = (props) => {
  const textStyle: React.CSSProperties = {
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
};
