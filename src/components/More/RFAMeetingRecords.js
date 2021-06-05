import React, { useState } from 'react';
import {Container, Row, Col, Nav, Button} from "react-bootstrap";
import RFAHeader from "../RFAHeader";
import headerBlobYellow from "../../media/HeaderBlobs/yellow.png";
import RFAMeetingEntry from '../RFAMeetingEntry';

export default function RFAMeetingRecords(props){
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
        <div>
            <RFAHeader headerTextColor = {"#ffcc00"} image = {headerBlobYellow} title = {"Meeting Records"} description = {"Learn more about Robotics for All's meeting agenda and minutes!"}/>
        </div>
        <br></br>
        <br></br>
        <Container>
            <Row className="center-align">
                <Col xs={6} style ={header}>Meeting Date and Time</Col>
                <Col xs={3} style ={header}>Date</Col>
                <Col xs={3} style ={header}>Minutes</Col>
            </Row>
        </Container>
        <Container style ={background}>
            <RFAMeetingEntry date = {"December 1st, 2018"} agenda = {"#"} minutes = {"#"}/>
        </Container>
    </div>
);
}