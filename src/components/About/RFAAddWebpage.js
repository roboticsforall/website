import React from 'react';
import {Container, Row} from "react-bootstrap";
import RFAHeader from '../RFAHeader';
import headerBlobYellow from '../../media/HeaderBlobs/HBLightYellow.png'; // add correct image here

export default function RFAAddWebpage(props){
    return (
      <div>
        <RFAHeader image = {headerBlobYellow} title = {"add title"} description = {"add description"}/>
      </div>
    );
}
