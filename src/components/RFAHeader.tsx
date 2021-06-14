import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RFAHeader(props) {
  const pageHeaderDescription = {
    fontFamily: "BeVietnam-SemiBold",
    fontWeight: 600,
    color: "black",
  };
  const pageHeader = {
    fontFamily: "Mazzard-H-Extrabold",
    // transform: 'rotate(358deg)',
    color: props.headerTextColor,
  };
  const headerBlob = {
    backgroundSize: "100% 100%",
    height: "45vmax",
    width: "100vw",
    backgroundImage: `url(${props.image})`,
  };

  return (
    <div
      className="d-flex justify-content-center align-items-end order"
      style={headerBlob}
    >
      <div className="w-75 mb-6">
        <h1 style={pageHeader} className="text-center header-size">
          {props.title}
        </h1>
        <p
          style={pageHeaderDescription}
          className="text-center header-description-size"
        >
          {props.description}
        </p>
      </div>
    </div>
  );
}
