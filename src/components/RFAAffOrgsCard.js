import React from 'react';
import {Container, Row, Image, Col, Card, CardDeck} from "react-bootstrap";
import MFALogo from "../media/AffiliatedOrgs/MFALogo.png";

export default function RFAAffOrgsCard(props){
    return (
        <Row>
            <h1 className = "header-size">{props.affOrgName}</h1>
            <Row className = "justify-content-center">
                <Col md = {3} className = "border">
                    <Container>
                        <Image src = {MFALogo} fluid/>
                    </Container>
                </Col>
                <Col md = {4} className = "border">
                    <Container>
                        <Image src = {MFALogo} fluid/>
                    </Container>
                </Col>
                <Col md = {5} className = "d-flex align-items-center border">
                    <Container>
                        <Row>Tutoring for All is a branch of the non-profit organization Robotics for All. Our goal is to provide free, quality tutoring services to primarily low income and disadvantaged students.</Row>
                        <Row className = "justify-content-center"><a className = "text-center" href = "#">Vist TFA</a></Row>
                    </Container>
                </Col>
            </Row>
            <br/><br/>
        </Row>
    );
}
