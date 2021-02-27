import React from 'react';
import {Container, Row} from "react-bootstrap";
import RFAHeader from '../RFAHeader';
import headerBlobYellow from '../../media/HeaderBlobs/Blob-RFA.PNG'; // add correct image here

export default function RFAClassFAQ(props){

    const dropdown = {
      borderRadius: "1em",
      backgroundColor: "#ffcc00",
      fontFamily: "Be-Vietnam"
    }

    return (
      <div>
        <RFAHeader headerTextColor = {"#ffcc00"} image = {headerBlobYellow} title = {"Questions?"} description = {"Here are the answers to our commonly asked questions. Please feel free to contact us if your question is not answered here!"}/>
        <Container>
          <Row style = {dropdown} className = "p-2 justify-content-center align-items-center">
              <h3 className = "">Hello</h3>
          </Row>
        </Container>
      </div>
    );
}
