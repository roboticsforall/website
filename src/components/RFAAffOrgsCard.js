import React from 'react';
import {Container, Row, Image, Col, Card, CardDeck} from "react-bootstrap";
import MFALogo from "../media/AffiliatedOrgs/MFALogo.png";

export default function RFAAffOrgsCard(props){
    return (
        <Row>
            <h1 style = {{color: props.color}} className = "header-size afforgs-header">{props.affOrgName}</h1>
            <Row style = {{backgroundColor: (props.color + "80"), borderRadius: 15}} className = "justify-content-center">
                <Col md = {3} className = "p-3 border d-flex align-items-center justify-content-center ">
                    <Image src = {MFALogo} fluid/>
                </Col>
                <Col md = {4} className = "p-3 border d-flex align-items-center justify-content-center">
                    <Image src = {MFALogo} fluid/>
                </Col>
                <Col md = {5} className = "p-3 border d-flex align-items-center">
                    <Container>
                        <Row><p className = "afforgs-card-text text-center">{props.affOrgsDescription}</p></Row>
                        <Row className = "justify-content-center"><a className = "text-center" href = "#">Vist TFA</a></Row>
                    </Container>
                </Col>
            </Row>
            <br/><br/>
        </Row>
    );
}
