import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { ColorThemes } from "@/colors";
import { createUseStyles } from "react-jss";

export const activeStyles : any = {
  activeStyle: (backgroundColor: string) => ({
    background: backgroundColor,
    fontFamily: "BeVietnam-ExtraBold",
    color: ColorThemes.black,
    padding: "20px"
  })
}

const styles: any = {
  posHeader: {
    fontFamily: "BeVietnam-ExtraBold",
    textAlign: "center",
    wordBreak: "break-word"
  },
  posDescription: {
    fontFamily: "BeVietnam-Medium",
    color: ColorThemes.black,
  },
  posContainer: (props: any) => ({
    border: "15px solid",
    margin: "0 0 40px 0",
    color: props.color,
    borderColor: props.borderColor,
    backgroundColor: props.backgroundColor,
  }),
  img: {
    marginBottom: "10px",
    width: "auto",
    maxHeight: "250px",
  },
};


interface IProps {
  posHeader: string;
  posDescription: JSX.Element;
  generalColor?: string;
  backgroundColor?: string;
  posImage?: string;
}

export const TabsCardNoImage: React.FC<IProps> = (props: IProps) => {
  return (
    <Container
      style={styles.posContainer({
        borderColor: props.generalColor,
        color: props.generalColor,
        backgroundColor: props.backgroundColor,
      })}
      className = "rounded"
    >
      <div>
        <Row>
          <Col>
            <h2 style={styles.posHeader}>{props.posHeader}</h2>
            <p style={styles.posDescription}>{props.posDescription}</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export const TabsCardLeftImage: React.FC<IProps> = (props: IProps) => {
  return (
    <Container
      style={styles.posContainer({
        borderColor: props.generalColor,
        color: props.generalColor,
        backgroundColor: props.backgroundColor,
      })}
      className = "rounded"
    >
      <div>
        <h2 style={styles.posHeader}>{props.posHeader}</h2>
        <Row>
          {(window.innerWidth > 768) ? (
            <Col className="center-align" xs={3}>
              <Image src={props.posImage} style={styles.img} fluid />
            </Col>
          ) : (<></>)}
          <Col>
            <div style={styles.posDescription}>{props.posDescription}</div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export const TabsCardRightImage: React.FC<IProps> = (props: IProps) => {
  return (
    <Container
      style={styles.posContainer({
        borderColor: props.generalColor,
        color: props.generalColor,
        backgroundColor: props.backgroundColor,
      })}
      className = "rounded"
    >
      <div>
        <h2 style={styles.posHeader}>{props.posHeader}</h2>
        <Row>
          <Col>
            <div style={styles.posDescription}>{props.posDescription}</div>
          </Col>
          {(window.innerWidth > 768) ? (
            <Col className="center-align" xs={3}>
              <Image src={props.posImage} style={styles.img} fluid />
            </Col>
          ) : (<></>)}
        </Row>
      </div>
    </Container>
  );
};
