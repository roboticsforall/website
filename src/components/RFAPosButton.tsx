import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ColorThemes } from "@/colors";

export const RFAPosButton: React.FC<{ link: string; title: string }> = (
  props
) => {
  const button = {
    color: ColorThemes.black,
    background: "#FA8D1F",
    fontFamily: "Mazzard-H-Extrabold",
    fontSize: "45px",
    borderColor: ColorThemes.mainOrange,
    borderRadius: "15px",
    paddingTop: "20px",
    paddingBottom: "20px",
    margin: "auto",
  };

  return (
    <Link className="hyperlink" to={props.link}>
      <Row
        className="pos-container-button justify-content-center align-items-center"
        style={button}
      >
        <h2 className="text-center">{props.title}</h2>
      </Row>
    </Link>
  );
};
