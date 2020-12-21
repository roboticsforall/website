import React from 'react';
import {Container, Row, Image, Col, Card, Button} from "react-bootstrap";
import MFALogo from "../media/AffiliatedOrgs/MFALogo.png";

export default function RFAAffOrgsCard(props){
    return (
        <Row className = "mt-5 border">
            <Container>
            <Row><h1>Tutoring For All</h1></Row>
            <Row className = "d-flex justify-content-center align-items-center border">
                <Col>
                <Image src = {MFALogo} fluid/>
                </Col>
                {/* <Image src = {MFALogo} fluid/> */}
                <Col>
                </Col>
                <Col>
                <Row>
                    <p>Tutoring for All is a branch of the non-profit organization Robotics for All. Our goal is to provide free, quality tutoring services to primarily low income and disadvantaged students.</p>
                </Row>
                <Row><a href = "">Visit MFA</a></Row>
                </Col>
            </Row>
            </Container>
        </Row>
    );
}
