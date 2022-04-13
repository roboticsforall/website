import React from "react";
import { Row, Container, Col, Image } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import { ColorThemes } from "../colors";



export const HomeAffOrgsCard: React.FC<{
    linkColor: string;
    bgColor: string;
    link: string;
    org: string;
    logo: string;
  }> = (props) => {
    const affOrgsTitle: React.CSSProperties = {
      color: ColorThemes.white,
      textAlign: "center",
    };
    const imageSize: React.CSSProperties = {
      objectFit: "scale-down",
    };
  
    const useStyles = createUseStyles({
      link: {
        composes: "hyperlink",
        transition: "0.2s",
        color: props.linkColor,
        "&:hover": {
          transition: "0.2s",
          color: ColorThemes.white,
        },
      },
    });
    const classes = useStyles();
  
    return (
      <>
        <Row
          style={{ backgroundColor: props.bgColor }}
          className="justify-content-center rounded align-items-center mx-2 border"
        >
          <Col
            className="d-flex justify-content-center"
            sm={3}
            md={3}
            lg={3}
            xl={3}
          >
            <Image fluid style={imageSize} src={props.logo} />
          </Col>
          <Col md={6} lg={6} xl={6}>
            <h2 style={affOrgsTitle}>{props.org}</h2>
          </Col>
          <Col className="text-center" md={3} lg={3} xl={3}>
            <a
              href={props.link}
              target="_blank"
              className={classes.link}
              rel="noreferrer"
            >
              <h5>LEARN MORE</h5>
            </a>
          </Col>
        </Row>
        <br />
      </>
    );
  };
  