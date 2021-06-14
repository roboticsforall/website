import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../App.css';

export default function RFAVolOverviewCard(props){

    const positionsTitle = {
        fontFamily: "Oswald-Medium",
        fontSize: "3.2vmax",
    }
    const description = {
        fontFamily: "BeVietnam-Medium",
        fontSize: "1.3vmax",
    }
    const card = {
        borderRadius: "15px",
        backgroundColor: props.backgroundcolor,
        // padding: "1.2vmax",
        // height: "12vmax",
        // float: this.props.cardfloat,
        // width: "68%",
        // lineHeight: "2vmax",
    }
    const buttonBox = {
        // float: this.props.buttonfloat,
    }
    const button = {
        borderRadius: "15px",
        backgroundColor: props.backgroundcolor,
        color: props.buttonColor,
        fontFamily: "Oswald-Medium",
        fontSize: "2.2vmax",
        // letterSpacing: "0.25em",
        // width: "17vmax",
        // height: "5.7vmax",
        // paddingTop: "1vmax",
        // textAlign: "center",
    }
    const containerStyle = {
        // paddingLeft: "7vmax",
        // paddingRight: "6vmax",
        // width: "75%",
    }
    const arrow = {
        borderBottom: `70px solid ${props.backgroundcolor}`,
        borderRight: "35px solid transparent",
        borderLeft: "35px solid transparent",
        borderTop: "20px solid transparent",
    }
    return (
        <Container style={containerStyle}>
            <Row>
                <div style={{ paddingLeft: props.arrowLocation }}>
                    <div style={arrow}></div>
                </div>
            </Row>
            <Row>
                <Col className = "border center-align me-3 px-4" md = {8} style={card}>
                    <Row className = "align-items-center">
                        <h2 style={positionsTitle}>{props.title}</h2>
                        <p style={description}>{props.description}</p>
                    </Row>
                </Col>
                <Col style={buttonBox}>
                    <Row className = "h-100 align-items-between">
                        <Link to = {props.learnMoreLink} className = "aff-org-card-link center-align hyperlink mb-md-3 p-3" style={button}>Learn More</Link>
                        <Link to = {props.applyLink} className = "aff-org-card-link hyperlink center-align p-3" style={button}>Apply</Link>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
