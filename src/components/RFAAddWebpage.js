import React from 'react';
import {Container, Row} from "react-bootstrap";
import RFAHeader from './RFAHeader';
import headerBlobYellow from '../media/HeaderBlobs/Blob-RFA-4.png'; // add correct image and filepath here

export default function RFAAddWebpage(props){

    return (
      <div>
        <RFAHeader headerTextColor = {"#ffcc00"} image = {headerBlobYellow} title = {"add title"} description = {"add description"}/>
      </div>
    );
}