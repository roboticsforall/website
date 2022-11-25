import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { ColorThemes } from "@/colors";
import { ButtonFullWidth } from "../ButtonFullWidth";

export const activeStyles: any = {
  activeStyle: (backgroundColor: string) => ({
    background: backgroundColor,
    color: ColorThemes.black,
  }),
};

const styles = {
  posHeader : {
    textAlign: "center" as "center",
    wordBreak: "break-word" as "break-word",
  },
  posDescription: {
    color: ColorThemes.black,
  },
  posContainer: (props: any) => ({
    border: "15px solid",
    color: props.color,
    borderColor: props.borderColor,
    backgroundColor: props.backgroundColor,
  }),
  img: {
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
    location: string,
    title: string,
    variant: string,
  };
}

export const TabCardsNoImage: React.FC<IProps> = (props: IProps) => {
  return (
    <section>
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
    </section>
  );
};

export const TabCardsLeftImage: React.FC<IProps> = (props: IProps) => {
  return (
    <section>
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
                  <ButtonFullWidth
                    location={props.button.location}
                    title={props.button.title}
                    variant = {props.button.variant}
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
    </section>
  );
};

export const TabCardsRightImage: React.FC<IProps> = (props: IProps) => {
  return (
    <section>
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
                  <ButtonFullWidth
                    location = {props.button.location}
                    title={props.button.title}
                    variant = {props.button.variant}
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
    </section>
  );
};
