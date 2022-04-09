import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { ColorThemes } from "@/colors";
import { PosButton } from "./PosButton";

export const activeStyles: any = {
  activeStyle: (backgroundColor: string) => ({
    background: backgroundColor,
    color: ColorThemes.black,
    padding: "20px",
  }),
};

const styles = {
  posHeader: {
    textAlign: "center",
    wordBreak: "break-word",
  },
  posDescription: {
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
  button?: {
    link: string;
    title: string;
    backgroundColor: string;
    backgroundHover: string;
  };
}

export const TabCardsNoImage: React.FC<IProps> = (props: IProps) => {
  return (
    <Container
      style={styles.posContainer({
        borderColor: props.generalColor,
        color: props.generalColor,
        backgroundColor: props.backgroundColor,
      })}
      className="rounded"
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

export const TabCardsLeftImage: React.FC<IProps> = (props: IProps) => {
  return (
    <Container
      style={styles.posContainer({
        borderColor: props.generalColor,
        color: props.generalColor,
        backgroundColor: props.backgroundColor,
      })}
      className="rounded"
    >
      <div>
        <h2 style={styles.posHeader}>{props.posHeader}</h2>
        <Row>
          {window.innerWidth > 768 ? (
            <Col className="center-align" xs={3}>
              <Image src={props.posImage} style={styles.img} fluid />
            </Col>
          ) : (
            <></>
          )}
          <Col>
            <div style={styles.posDescription}>{props.posDescription}</div>
            {props.button ? (
              <>
                <PosButton
                  link={props.button.link}
                  title={props.button.title}
                  backgroundColor={props.button.backgroundColor}
                  backgroundHover={props.button.backgroundHover}
                />
                <br />
              </>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export const TabCardsRightImage: React.FC<IProps> = (props: IProps) => {
  return (
    <Container
      style={styles.posContainer({
        borderColor: props.generalColor,
        color: props.generalColor,
        backgroundColor: props.backgroundColor,
      })}
      className="rounded"
    >
      <div>
        <h2 style={styles.posHeader}>{props.posHeader}</h2>
        <Row>
          <Col>
            <p style={styles.posDescription}>{props.posDescription}</p>{" "}
            {props.button ? (
              <>
                <PosButton
                  link={props.button.link}
                  title={props.button.title}
                  backgroundColor={props.button.backgroundColor}
                  backgroundHover={props.button.backgroundHover}
                />
                <br />
              </>
            ) : (
              <></>
            )}
          </Col>
          {window.innerWidth > 768 ? (
            <Col className="center-align" xs={3}>
              <Image src={props.posImage} style={styles.img} fluid />
            </Col>
          ) : (
            <></>
          )}
        </Row>
      </div>
    </Container>
  );
};
