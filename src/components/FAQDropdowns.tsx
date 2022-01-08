import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import dropdownIcon from "@/media/Shapes/brownarrow.png"; // add correct image here
import { createUseStyles } from "react-jss";

interface IProps {
  question: string;
  answer: JSX.Element | string;
  colors: {
    backgroundHover: string;
    main: string;
    light: string;
    dark: string;
  };
}

export const FAQDropdowns: React.FC<IProps> = (props: IProps) => {
  const [dropdownAnswerDisplay, setdropdownAnswerDisplay] = useState("none");
  const [dropdownBGColor, setdropdownBGColor] = useState(props.colors.light);
  const [dropdownTextColor, setdropdownTextColor] = useState(props.colors.main);

  const dropdownAnswer = {
    backgroundColor: props.colors.main,
    fontFamily: "BeVietnam-SemiBold",
  };
  const dropdownDisplay = {
    display: dropdownAnswerDisplay,
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

  const useStyles = createUseStyles({
    dropdown: (props: any) => ({
      composes: "p-2 d-flex justify-content-between rounded",
      fontFamily: "BeVietnam-ExtraBold",
      transition: "200ms",
      backgroundColor: props.dropdownBGColor,
      "&:hover": {
        backgroundColor: props.backgroundHover,
        transition: "200ms",
        "& h3": {
          color: "#fff",
        },
      },
    }),
  });

  const backgroundHover = props.colors.backgroundHover; //defined new object. Could not add line directly in useStyles object
  const classes = useStyles({ dropdownBGColor, backgroundHover });

  return (
    <div onClick={displayDiv}>
      <div className={classes.dropdown}>
        <h3 style={{ color: dropdownTextColor }}>{props.question}</h3>
        <img
          alt="dropdownArrow"
          width="70"
          height="40"
          src={dropdownIcon}
          style={
            dropdownAnswerDisplay == "block"
              ? { transform: "rotate(180deg)" }
              : { transform: "rotate(0deg)" }
          }
        />
      </div>
      <br />
      <div style={dropdownDisplay}>
        <div
          style={dropdownAnswer}
          className="p-2 justify-content-between rounded align-items-center"
        >
          <h3>{props.answer}</h3>
        </div>
        <br />
      </div>
    </div>
  );
};
