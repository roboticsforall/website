import React from 'react';
import {Container, Row} from "react-bootstrap";
import RFAHeader from '../RFAHeader';
import headerBlobYellow from '../../media/HeaderBlobs/Blob-RFA.PNG'; // add correct image here
import dropdownIcon from '../../media/Shapes/dropDownArrow.svg'; // add correct image here

export default function RFAClassFAQ(props){

    const dropdown = {
      borderRadius: "1em",
      backgroundColor: "#ffcc00",
      fontFamily: "BeVietnam-ExtraBold"
    }
    const button = {
      background: "none",
    }

    return (
      <div>
        <RFAHeader headerTextColor = {"#ffcc00"} image = {headerBlobYellow} title = {"Questions?"} description = {"Here are the answers to our commonly asked questions. Please feel free to contact us if your question is not answered here!"}/>
        <Container>
          <Row style = {dropdown} className = "p-2 justify-content-between align-items-center">
              <h3 className = "">When will I know if my class time is confirmed?</h3>
              <button style = {button} className = "background-none border-0"><img width = "50" height = "50" src = {dropdownIcon}/></button>
          </Row>
          <br/>
          <Row style = {dropdown} className = "p-2 justify-content-between align-items-center">
              <h3 className = "">When will I know if my class time is confirmed?</h3>
              <button style = {button} className = "background-none border-0"><img width = "50" height = "50" src = {dropdownIcon}/></button>
          </Row>
          <br/>
          <Row style = {dropdown} className = "p-2 justify-content-between align-items-center">
              <h3 className = "">When will I know if my class time is confirmed?</h3>
              <button style = {button} className = "background-none border-0"><img width = "50" height = "50" src = {dropdownIcon}/></button>
          </Row>
        </Container>
      </div>
    );
}
