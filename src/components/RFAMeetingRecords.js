import React, { useState } from 'react';
import {Container, Row, Col, Nav, Button} from "react-bootstrap";
import RFAHeader from "../components/RFAHeader";
import headerBlobYellow from "../media/HeaderBlobs/HBLightYellow.png";
import RFAMeetingEntry from './RFAMeetingEntry';

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
            <RFAMeetingEntry date = {"December 8th, 2018 (Special Meeting)"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"January 20th, 2019"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"February 17th, 2019"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"March 10th, 2019"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"April 21st, 2019"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"May 2019"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"June 2nd, 2019"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"July 22nd, 2019"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"August 31st, 2019"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"October 12th, 2019"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"November 10th, 2019"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"December 8th, 2019"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"January 24th, 2020"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"Feburary 13th, 2020"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"Feburary 29th, 2020 (Special Meeting)"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"March 15th, 2020"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"April 5th, 2020"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"May 3rd, 2020"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"June 7th, 2020"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"July 28th, 2020 (Special Board Meeting)"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"August 2nd, 2020"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"August 11th, 2020 (Special Board Meeting)"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"September 16th, 2020"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"October 4th, 2020"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"October 18th, 2020"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"October 29th, 2020 (Special Board Meeting)"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"November 5th, 2020 (Special Board Meeting)"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"November 15th, 2020"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"December 4th, 2020 (Special Board Meeting)"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"December 6th, 2020"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"December 19th, 2020"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"January 14th, 2021"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"January 24th, 2021"} agenda = {"#"} minutes = {"#"}/>
            <RFAMeetingEntry date = {"February 9th, 2021"} agenda = {"#"} minutes = {"#"}/>
        </Container>
    </div>
);
}