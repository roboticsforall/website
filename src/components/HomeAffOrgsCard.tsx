import React from "react";
import { Row, Col, Image } from "react-bootstrap";

export const HomeAffOrgsCard: React.FC<{
  linkColor: string;
  bgColor: string;
  link: string;
  org: string;
  logo: string;
}> = (props) => {
  const affOrgsTitle: React.CSSProperties = {
    fontFamily: "Mazzard-H-ExtraBold",
    color: "white",
    textAlign: "center",
  };
  const imageSize: React.CSSProperties = {
    height: "12vmax",
  };
  const borderRadius = {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  };
  const linkColor: React.CSSProperties = {
    color: props.linkColor,
  };

  return (
    <>
      <Row
        style={{ backgroundColor: props.bgColor, ...borderRadius }}
        className="justify-content-center align-items-center mx-2"
      >
        <Col
          className="d-flex justify-content-center"
          sm={3}
          md={3}
          lg={3}
          xl={3}
        >
          <Image style={imageSize} src={props.logo} />
        </Col>
        <Col md={6} lg={6} xl={6}>
          <h1 className="header-size" style={affOrgsTitle}>
            {props.org}
          </h1>
        </Col>
        <Col className="text-center" md={3} lg={3} xl={3}>
          <a
            href={props.link}
            target="_blank"
            className="home-aff-org-card-link"
            style={linkColor}
            rel="noreferrer"
          >
            LEARN MORE
          </a>
        </Col>
      </Row>
      <br />
    </>
  );
};
