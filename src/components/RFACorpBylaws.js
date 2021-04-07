import React, { useState } from 'react';
import {Container, Row, Col, Nav, Button} from "react-bootstrap";
import RFAHeader from "../components/RFAHeader";
import headerBlobYellow from "../media/HeaderBlobs/HBLightYellow.png";
import RFABylawEntry from './RFABylawEntry';

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
        <div>
            <RFAHeader headerTextColor = {"#ffcc00"} image = {headerBlobYellow} title = {"Corporate Bylaws"} description = {"Learn more about Robotics for All's bylaws!"}/>
        </div>
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
            <RFABylawEntry date = {"December 1st, 2018"} bylaw = {"Initial Incorporation Bylaws"} download = {"Download"}/>
            <RFABylawEntry date = {"December 8th, 2018"} bylaw = {"Amendment 1: Chairperson"} download = {"Download"}/>
            <RFABylawEntry date = {"December 8th, 2018"} bylaw = {"Amendment 2: Voting Online"} download = {"Download"}/>
            <RFABylawEntry date = {"January 20th, 2019"} bylaw = {"Amendment 3: Remove Membership Clause"} download = {"Download"}/>
            <RFABylawEntry date = {"February 17th, 2019"} bylaw = {"Amendment 4: Graphic Designer"} download = {"Download"}/>
            <RFABylawEntry date = {"April 21st, 2019"} bylaw = {"Amendment 5: Executive Positions"} download = {"Download"}/>
            <RFABylawEntry date = {"April 21st, 2019"} bylaw = {"Amendment 6: Advisory Committee"} download = {"Download"}/>
            <RFABylawEntry date = {"April 21st, 2019"} bylaw = {"Amendment 7: Local Director Committee"} download = {"Download"}/>
            <RFABylawEntry date = {"May 3rd, 2019"} bylaw = {"Amendment 8: Section 5.2 - Number, Tenure, and Qualifications"} download = {"Download"}/>
            <RFABylawEntry date = {"May 3rd, 2019"} bylaw = {"Amendment 9: Section 5.2 - Number, Tenure, and Qualifications"} download = {"Download"}/>
            <RFABylawEntry date = {"June 2nd, 2019"} bylaw = {"Amendment 10: Removal of Board Advisor Position"} download = {"Download"}/>
            <RFABylawEntry date = {"June 2nd, 2019"} bylaw = {"Amendment 11: Removal of Publicity Committee"} download = {"Download"}/>
            <RFABylawEntry date = {"June 2nd, 2019"} bylaw = {"Amendment 12: Addition of CFO"} download = {"Download"}/>
            <RFABylawEntry date = {"July 28th, 2019"} bylaw = {"Amendment 13: Online Voting"} download = {"Download"}/>
            <RFABylawEntry date = {"October 4th, 2020"} bylaw = {"Amendment 14: Number of Board Members"} download = {"Download"}/>
            <RFABylawEntry date = {"October 4th, 2020"} bylaw = {"Amendment 15: Number of Board Members and New Positions"} download = {"Download"}/>
            <RFABylawEntry date = {"October 19th, 2020"} bylaw = {"Amendment 16: Director of Recruitment"} download = {"Download"}/>
            <RFABylawEntry date = {"October 19th, 2020"} bylaw = {"Amendment 17: Finance Committee"} download = {"Download"}/>
            <RFABylawEntry date = {"October 19th, 2020"} bylaw = {"Amendment 18: Publicity Committee"} download = {"Download"}/>
            <RFABylawEntry date = {"October 19th, 2020"} bylaw = {"Amendment 19: Curriculum Committee"} download = {"Download"}/>
            <RFABylawEntry date = {"November 15th, 2020"} bylaw = {"Amendment 20: Fiscal Year Change"} download = {"Download"}/>
            <RFABylawEntry date = {"November 15th, 2020"} bylaw = {"Amendment 21: Addition of Legal Affairs Director"} download = {"Download"}/>
            <RFABylawEntry date = {"November 15th, 2020"} bylaw = {"Amendment 22: Board Member Reshuffling and Compensation"} download = {"Download"}/>
            <RFABylawEntry date = {"November 15th, 2020"} bylaw = {"Amendment 23: Incumbent Board Member Reapplication Process"} download = {"Download"}/>
            <RFABylawEntry date = {"November 15th, 2020"} bylaw = {"Amendment 24: Executive Officer Compensation"} download = {"Download"}/>
        </Container>
    </div>
);
}