import React, { useState } from "react";
import { Container, Tab, Nav, Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import TobyHeaderLogo from "@/media/TobyHeaderLogo.png";
import googleForms from "@/posts/google_form.json";



import {createUseStyles} from 'react-jss';

import { ColorThemes } from "@/colors";
import { propTypes } from "react-bootstrap/esm/Image";

interface IProps {
  posHeader: string;
  posDescription: JSX.Element;
  generalColor: {main: String, light: String};
  addButtons : boolean;
  backgroundColor?: string;
  posImage?: string;
}
interface IProps2 {
  publicityDescription: JSX.Element;
  technicalDescription: JSX.Element;
  businessDescription: JSX.Element;
  addButtons : boolean;
}

export const RFAInternDescriptionTabs: React.FC<IProps2> = (props: IProps2) => {
  const [key, setKey] = useState("one");

  const styles = {
    general: (props: any) => ({
      background: props.backgroundColor,
      border: "none",
      borderRadius: "15px 15px 0 0",
      fontFamily: "BeVietnam-ExtraBold",
      fontSize: "x-large",
      padding: "20px",
      height: "100%",
    }),
    blackText: {
      color: "#000000",
    }
  }

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
                  style={key === "one" ? styles.general({backgroundColor: ColorThemes.mainBlue}) : styles.general({backgroundColor: ColorThemes.lightBlue})}
                 >
                  <p style={styles.blackText}>General</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="two"
                  style={key === "two" ? styles.general({backgroundColor: ColorThemes.mainGreen}) : styles.general({backgroundColor: ColorThemes.lightGreen})}
                 >
                  <p style={styles.blackText}>Technical</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="three"
                  style={key === "three" ? styles.general({backgroundColor: ColorThemes.mainOrange}) : styles.general({backgroundColor: ColorThemes.lightOrange})}
                 >
                  <p style={styles.blackText}>Publicity</p>
                </Nav.Link>
              </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="one">
              <RFATabsCardLeftImage
                posHeader={"GENERAL BUSINESS PATH"}
                posImage={TobyHeaderLogo}
                generalColor = {{main: ColorThemes.mainBlue, light: ColorThemes.lightBlue}}
                posDescription = {props.businessDescription}
                addButtons = {props.addButtons}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="two">
              <RFATabsCardLeftImage
                posHeader={"TECHNICAL PATH"}
                posImage={TobyHeaderLogo}
                generalColor = {{main: ColorThemes.mainGreen, light: ColorThemes.lightGreen}}
                posDescription={props.technicalDescription}
                addButtons = {props.addButtons}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="three">
              <RFATabsCardLeftImage
                posHeader={"PUBLICITY PATH"}
                posImage={TobyHeaderLogo}
                generalColor = {{main: ColorThemes.mainOrange, light: ColorThemes.lightOrange}}
                posDescription={props.publicityDescription}
                addButtons = {props.addButtons}
              />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};

const RFATabsCardLeftImage: React.FC<IProps> = (props: IProps) => {
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
      backgroundColor: props.backgroundColor,
    }),
    buttonHeader: {
      fontFamily: "BeVietnam-ExtraBold",
      textAlign: "center",
      color: ColorThemes.black
    },
    img: {
      marginBottom: "10px",
      width: "auto",
      maxHeight: "250px",
    },
  }
  const useStyles = createUseStyles({
    buttonContainer: (props: any) => ({
      border: "solid",
      backgroundColor: props.backgroundColor,
      transition: "200ms",
      "&:hover": {
        backgroundColor: ColorThemes.mainYellow,
        transition: "200ms",
      }
    }),
  })

  const classes = useStyles({backgroundColor: props.generalColor.light});

  return (
    <Container style={styles.posContainer({borderColor: props.generalColor.main, color: props.generalColor.main, backgroundColor: props.backgroundColor})}>
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
        {props.addButtons ? (
        <Row>
          <Col className = {classes.buttonContainer} style = {{borderWidth: "15px 7.5px 0px 0px"}}>
            <Link to = "" className = "hyperlink">
              <h1 className="header-size" style={styles.buttonHeader}>
                Learn More
              </h1>
            </Link>
          </Col>
          <Col className = {classes.buttonContainer} style = {{borderWidth: "15px 0px 0px 7.5px"}}>
            <Link to = "/volunteer/volunteerapp" className = "hyperlink">
              <h1 className="header-size" style={styles.buttonHeader}>
                Apply Now!
              </h1>
            </Link>
          </Col>
        </Row>
        ) : (<></>)}

      </div>

    </Container>
  );
};