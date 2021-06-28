import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import dropdownIcon from "@/media/Shapes/brownarrow.png"; // add correct image here

export const RFAFAQDropdowns: React.FC<{
  question: string;
  answer: JSX.Element | string;
}> = (props) => {
  const [dropdownAnswerDisplay, setdropdownAnswerDisplay] = useState("none");
  const [dropdownBGColor, setdropdownBGColor] = useState("#ffcc0080");
  const [dropdownTextColor, setdropdownTextColor] = useState("#c06204");

  const dropdownQuestion = {
    borderRadius: "1em",
    fontFamily: "BeVietnam-ExtraBold",
    backgroundColor: dropdownBGColor,
    color: dropdownTextColor,
  };

  const dropdownAnswer = {
    borderRadius: "1em",
    backgroundColor: "#ffcc00",
    fontFamily: "BeVietnam-SemiBold",
  };
  const dropdownDisplay = {
    display: dropdownAnswerDisplay,
  };
  const button = {
    background: "none",
  };

  const displayDiv = () => {
    dropdownAnswerDisplay === "none"
      ? setdropdownAnswerDisplay("block")
      : setdropdownAnswerDisplay("none");
    dropdownBGColor === "#ffcc0080"
      ? setdropdownBGColor("#ffcc00")
      : setdropdownBGColor("#ffcc0080");
    dropdownTextColor === "#c06204"
      ? setdropdownTextColor("#532f04")
      : setdropdownTextColor("#c06204");
  };

  return (
    <div>
      <Row
        style={dropdownQuestion}
        className="faq-dropdown p-2 justify-content-between align-items-center"
      >
        <Col md={11}>
          <h3 className="w-75">{props.question}</h3>
        </Col>
        <Col>
          <button
            style={button}
            onClick={displayDiv}
            className="background-none border-0"
          >
            <img
              alt="dropdownArrow"
              width="70"
              height="40"
              src={dropdownIcon}
            />
          </button>
        </Col>
      </Row>
      <br />
      <div style={dropdownDisplay}>
        <Row
          style={dropdownAnswer}
          className="p-2 justify-content-between align-items-center"
        >
          <h3>{props.answer}</h3>
        </Row>
        <br />
      </div>
    </div>
  );
};
