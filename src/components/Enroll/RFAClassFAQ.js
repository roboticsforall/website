import React from 'react';
import {Container, Row} from "react-bootstrap";
import RFAHeader from '../RFAHeader';
import RFAClassFAQDropdowns from '../RFAClassFAQDropdowns';
import headerBlobYellow from '../../media/HeaderBlobs/Blob-RFA.PNG'; // add correct image here
import dropdownIcon from '../../media/Shapes/dropDownArrow.svg'; // add correct image here

export default function RFAClassFAQ(props){

    return (
      <div>
        <RFAHeader headerTextColor = {"#ffcc00"} image = {headerBlobYellow} title = {"Questions?"} description = {"Here are the answers to our commonly asked questions. Please feel free to contact us if your question is not answered here!"}/>
        <br/>
        <Container>
          <RFAClassFAQDropdowns/>
        </Container>
      </div>
    );
}
