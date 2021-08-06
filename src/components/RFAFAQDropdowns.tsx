import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import dropdownIcon from "@/media/Shapes/brownarrow.png"; // add correct image here

export const RFAFAQDropdowns: React.FC<{
  question: string;
  answer: JSX.Element | string;
  webpage: string;
  colors: {main: string, light: string, dark: string}
}> = (props) => {
  const [dropdownAnswerDisplay, setdropdownAnswerDisplay] = useState("none");
  const [dropdownBGColor, setdropdownBGColor] = useState(props.colors.light);
  const [dropdownTextColor, setdropdownTextColor] = useState(props.colors.main);

  const dropdownQuestion = {
    borderRadius: "1em",
    fontFamily: "BeVietnam-ExtraBold",
    backgroundColor: dropdownBGColor,
    color: dropdownTextColor,
  };

  const dropdownAnswer = {
    borderRadius: "1em",
    backgroundColor: props.colors.main,
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
    dropdownBGColor === props.colors.light
      ? setdropdownBGColor(props.colors.main)
      : setdropdownBGColor(props.colors.light);
    dropdownTextColor === props.colors.main
      ? setdropdownTextColor("#fff")
      : setdropdownTextColor(props.colors.main);
  };

  return (
    <div>
      <Row
        style={dropdownQuestion}
        className = {`${props.webpage}-faq-dropdown p-2 justify-content-between align-items-center`}
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
