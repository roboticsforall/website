import React, { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RFAHeader } from "@/components/RFAHeader";
import headerBlobOrange from "@/media/HeaderBlobs/orange.png";
import { RFAPosButton } from "@/components/RFAPosButton";
import Clock from "@/media/Graphics/clock.png";
import Laptop from "@/media/Graphics/laptop.png";
import Presentation from "@/media/Graphics/presentation.png";
import TasksYellow from "@/media/Graphics/tasksYellow.png";
import ThumbsUp from "@/media/Graphics/thumbsUp.png";
import QuestionMark from "@/media/Graphics/questionMark.png";

import pubInternOverviewJSON from "@/posts/pub_intern_overview.json";
import Markdown from "markdown-to-jsx";

import {createUseStyles} from 'react-jss';

import { ColorThemes } from "@/colors";


export const RFAInternDescriptionTabs: React.FC = () => {
  const [key, setKey] = useState("one");

  const styles = {
    general: (props: any) => ({
      background: props.backgroundColor,
      border: "none",
      borderRadius: "15px 15px 0 0",
      fontFamily: "Mazzard-H-Extrabold",
      fontSize: "x-large",
      padding: "20px",
      height: "100%",
    }),
    technical: {
      background: ColorThemes.mainGreen,
      border: "none",
      borderRadius: "15px 15px 0 0",
      fontFamily: "Mazzard-H-Extrabold",
      fontSize: "x-large",
      padding: "20px",
      height: "100%",
    },
    publicity: {
      background: ColorThemes.mainOrange,
      border: "none",
      borderRadius: "15px 15px 0 0",
      fontFamily: "Mazzard-H-Extrabold",
      fontSize: "x-large",
      padding: "20px",
      height: "100%",
    },
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
              <h1>Hello</h1>
              <br></br>
              <br></br>
            </Tab.Pane>
            <Tab.Pane eventKey="two">
              <h1>bdfg</h1>
              <br></br>
              <br></br>
            </Tab.Pane>
            <Tab.Pane eventKey="three">
              <h1>df</h1>
              <br></br>
              <br></br>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};
