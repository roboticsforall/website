import React, { useState } from "react";
import { Container, Tab, Nav, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import TobyHeaderLogo from "@/media/TobyHeaderLogo.png";

import { createUseStyles } from "react-jss";

import { ColorThemes } from "@/colors";

interface IProps {
  posHeader: string;
  posDescription: JSX.Element;
  generalColor: { main: String; light: String };
  addButtons: boolean;
  backgroundColor?: string;
  posImage?: string;
  learnMoreLocation: string;
}
interface IProps2 {
  publicityDescription: JSX.Element;
  technicalDescription: JSX.Element;
  businessDescription: JSX.Element;
  addButtons: boolean;
}

export const InternDescriptionTabs: React.FC<IProps2> = (props: IProps2) => {
  const [key, setKey] = useState("one");

  const styles = {
    general: (props: any) => ({
      background: props.backgroundColor,
      border: "none",
      padding: "20px",
      height: "100%",
    }),
    blackText: {
      color: "#000000",
    },
  };

  return (
    <div>
      <Container>
        <br></br>
        <br></br>
        <Tab.Container activeKey={key} onSelect={(key) => setKey(key!)}>
          <Nav justify fill variant="tabs">
            <Nav.Item>
              <Nav.Link
                eventKey="one"
                style={
                  key === "one"
                    ? styles.general({ backgroundColor: ColorThemes.mainBlue })
                    : styles.general({ backgroundColor: ColorThemes.lightBlue })
                }
              >
                <p style={styles.blackText}>General Business</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="two"
                style={
                  key === "two"
                    ? styles.general({ backgroundColor: ColorThemes.mainGreen })
                    : styles.general({
                        backgroundColor: ColorThemes.lightGreen,
                      })
                }
              >
                <p style={styles.blackText}>Technical</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="three"
                style={
                  key === "three"
                    ? styles.general({
                        backgroundColor: ColorThemes.mainOrange,
                      })
                    : styles.general({
                        backgroundColor: ColorThemes.lightOrange,
                      })
                }
              >
                <p style={styles.blackText}>Publicity</p>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="one">
              <TabsCardLeftImage
                posHeader={"GENERAL BUSINESS PATH"}
                posImage={TobyHeaderLogo}
                generalColor={{
                  main: ColorThemes.mainBlue,
                  light: ColorThemes.lightBlue,
                }}
                posDescription={props.businessDescription}
                addButtons={props.addButtons}
                learnMoreLocation="/volunteer/businesspositions"
              />
            </Tab.Pane>
            <Tab.Pane eventKey="two">
              <TabsCardLeftImage
                posHeader={"TECHNICAL PATH"}
                posImage={TobyHeaderLogo}
                generalColor={{
                  main: ColorThemes.mainGreen,
                  light: ColorThemes.lightGreen,
                }}
                posDescription={props.technicalDescription}
                addButtons={props.addButtons}
                learnMoreLocation="/volunteer/technicalpositions"
              />
            </Tab.Pane>
            <Tab.Pane eventKey="three">
              <TabsCardLeftImage
                posHeader={"PUBLICITY PATH"}
                posImage={TobyHeaderLogo}
                generalColor={{
                  main: ColorThemes.mainOrange,
                  light: ColorThemes.lightOrange,
                }}
                posDescription={props.publicityDescription}
                addButtons={props.addButtons}
                learnMoreLocation="/volunteer/publicitypositions"
              />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};

const TabsCardLeftImage: React.FC<IProps> = (props: IProps) => {
  const styles: any = {
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
      margin: "0 0 40px 0",
      color: props.color,
      borderColor: props.borderColor,
      backgroundColor: props.backgroundColor,
    }),
    buttonHeader: {
      fontFamily: "BeVietnam-ExtraBold",
      textAlign: "center",
      color: ColorThemes.black,
    },
    img: {
      marginBottom: "10px",
      width: "auto",
      maxHeight: "250px",
    },
  };
  const useStyles = createUseStyles({
    buttonContainer: (props: any) => ({
      border: "solid",
      backgroundColor: props.backgroundColor,
      transition: "200ms",
      "&:hover": {
        backgroundColor: ColorThemes.mainYellow,
        transition: "200ms",
      },
    }),
  });

  const classes = useStyles({ backgroundColor: props.generalColor.light });

  return (
    <Container
      style={styles.posContainer({
        borderColor: props.generalColor.main,
        color: props.generalColor.main,
        backgroundColor: props.backgroundColor,
      })}
      className = "rounded-bottom"
    >
      <div>
        <h1 style={styles.posHeader}>{props.posHeader}</h1>
        <Row>
          <Col className="center-align" xs={3}>
            <Image src={props.posImage} style={styles.img} fluid />
          </Col>
          <Col>
            <div style={styles.posDescription}>{props.posDescription}</div>
          </Col>
        </Row>
        {props.addButtons ? (
          <Row>
            <Col
              className={classes.buttonContainer}
              style={{ borderWidth: "15px 7.5px 0px 0px" }}
            >
              <Link to={props.learnMoreLocation} className="hyperlink">
                <h1 style={styles.buttonHeader}>Learn More</h1>
              </Link>
            </Col>
          </Row>
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
};
