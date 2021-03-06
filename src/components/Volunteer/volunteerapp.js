import React, { useState } from 'react';
import {Container, Row, Tab, Nav} from "react-bootstrap";
import RFAHeader from '../RFAHeader';
import headerBlobYellow from '../../media/HeaderBlobs/HBLightYellow.png'; 
import RFAPositionCard from "../RFAPositionCard";

export default function VolunteerApp(props){
  const [key, setKey] = useState("one")
  const ActiveStyle = {
    color: "#000000",
    background: "#FFCC00",
    border: 0,
    borderRadius: "15px 15px 0 0",
    fontFamily: "mazzard-h-extrabold",
    fontSize: "x-large",
    padding: "30px",
  };
  const inActiveStyle = {
    color: "#000000",
    background: "#FA8D1F",
    border: 0,
    borderRadius: "15px 15px 0 0",
    fontFamily: "mazzard-h-extrabold",
    fontSize: "x-large",
    padding: "30px",
  };

    return (
      <div>
      <div>
        <RFAHeader headerTextColor = {"#FA8D1F"} image = {headerBlobYellow} title = {"Join us to help students in STEM!"} description = {"Fill out the form below to sign up for our classes today!"}/>
      </div>
        <br></br>
        <br></br>
        <Container>
          <Tab.Container activeKey = {key} onSelect = {key => setKey(key)}>
              <Nav justify fill variant = "tabs">
                <Nav.Item>
                  <Nav.Link eventKey = "one" style = {key === "one" ? ActiveStyle : inActiveStyle}>Teacher Application</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey = "two" style = {key === "two" ? ActiveStyle : inActiveStyle}>Publicity Application</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey = "one">
                  <RFAPositionCard posHeader = {""} posDescription = {
                      <div className = "center-align">
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdxQe6sYXbPoLQ5MpFnptT6e5ptCQYFXq5U2fwcAaBBONrP8g/viewform?embedded=true" width="640" height="4777" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                      </div>
                    }/>
                </Tab.Pane>
                <Tab.Pane eventKey = "two">
                  <RFAPositionCard posHeader = {""} posDescription = {
                        <div className = "center-align">
                          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdYi6eUvSdgRQ6Yw2EsF_bdhCuKEskR-draKjd7FoNk_8jrbw/viewform?embedded=true" width="640" height="6014" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                        </div>
                      }/>
                </Tab.Pane>
              </Tab.Content>
          </Tab.Container>
        </Container>
      </div>
    );
}
