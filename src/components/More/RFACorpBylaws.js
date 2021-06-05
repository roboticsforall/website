import React, { useState } from 'react';
import {Container, Row, Col, Nav, Button} from "react-bootstrap";
import RFAHeader from "../RFAHeader";
import headerBlobYellow from "../../media/HeaderBlobs/yellow.png";
import RFABylawEntry from '../RFABylawEntry';
import bylawsListJSON from "../../posts/downloads/corp_bylaws.json";
// import image from "/post/faqs/volunteer_faqs.json";
// import pdf from "../../posts/corpsbylawsuploads/codebase_eye_forward_rev3.pdf";

export default function RFACorpBylaws(props){
    const background = {
        background: "rgba(255, 204, 0, 0.5)",
        borderRadius: "15px",
    };
    const header = {
        background: "rgba(255, 204, 0, 0.5)",
        borderRadius: "20px",
        border: "10px solid white",
        padding: "5px",
        fontFamily: "BeVietnam-ExtraBold",
        fontSize: "xx-large",
        textAlign: "center",
        color: "black",
    }
return (
    <div>
        <RFAHeader headerTextColor = {"#ffcc00"} image = {headerBlobYellow} title = {"Corporate Bylaws"} description = {"Learn more about Robotics for All's bylaws!"}/>
        <br></br>
        <br></br>
        <Container>
            <Row className="center-align">
                <Col xs={3} style ={header}>Date</Col>
                <Col xs={7} style ={header}>Item</Col>
                <Col xs={2} style ={header}>File</Col>
            </Row>
        </Container>
        <Container style ={background}>
            {bylawsListJSON.corp_bylaws_list.map((bylawEntry, i) => (
                <RFABylawEntry key = {i} date = {bylawEntry.date} bylawName = {"corpsbylawsuploads/bach_brandenburg3_parts-1-.pdf"} download = {"/post/faqs/volunteer_faqs.json"}/>
            ))}
        </Container>
    </div>
);
}