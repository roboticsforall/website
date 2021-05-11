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
            <RFABylawEntry date = {"December 1st, 2018"} bylaw = {"Initial Incorporation Bylaws"} download = {"#"}/>
        </Container>
    </div>
);
}