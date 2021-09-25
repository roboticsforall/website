import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { ColorThemes } from "@/colors";


const styles : any = {
  posHeader: {
    fontFamily: "BeVietnam-ExtraBold",
    letterSpacing: "0.25em",
    textAlign: "center",
  },
  posDescription: {
    fontFamily: "BeVietnam-Medium",
    color: ColorThemes.black,
  },
  posContainer: (props: any) => ({
    border: "15px solid",
    borderRadius: "0 0 15px 15px",
    margin: "0 0 40px 0",
    color: props.color,
    borderColor: props.borderColor,
    backgroundColor: props.backgroundColor
  }),
  img: {
    marginBottom: "10px",
    width: "auto",
    maxHeight: "250px",
  },
}

interface IProps {
  posHeader: string;
  posDescription: JSX.Element;
  generalColor?: string;
  backgroundColor?: string;
  posImage?: string;
}

export const RFATabsCardNoImage: React.FC<IProps> = (props: IProps) => {
  return (
    <Container style={styles.posContainer({borderColor: props.generalColor, color: props.generalColor, backgroundColor: props.backgroundColor})}>
      <div>
        <Row>
          <Col>
            <h1 className="header-size" style={styles.posHeader}>
              {props.posHeader}
            </h1>
            <div className="header-description-size" style={styles.posDescription}>
              {props.posDescription}
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export const RFATabsCardLeftImage: React.FC<IProps> = (props: IProps) => {
  return (
    <Container style={styles.posContainer({borderColor: props.generalColor, color: props.generalColor, backgroundColor: props.backgroundColor})}>
      <div>
        <h1 className="header-size" style={styles.posHeader}>
          {props.posHeader}
        </h1>
        <Row>
          <Col className="center-align" xs={3}>
            <Image
              src={props.posImage}
              style={styles.img}
              fluid
            />
          </Col>
          <Col>
            <div className="header-description-size" style={styles.posDescription}>
              {props.posDescription}
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export const RFATabsCardRightImage: React.FC<IProps> = (props: IProps) => {
  return (
    <Container style={styles.posContainer({borderColor: props.generalColor, color: props.generalColor, backgroundColor: props.backgroundColor})}>
      <div>
        <h1 className="header-size" style={styles.posHeader}>
          {props.posHeader}
        </h1>
        <Row>
          <Col>
            <div className="header-description-size" style={styles.posDescription}>
              {props.posDescription}
            </div>
          </Col>
          <Col className = "center-align" xs={3}>
            <Image
              src={props.posImage}
              style={styles.img}
              fluid
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};