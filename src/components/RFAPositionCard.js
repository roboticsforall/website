import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

export default function RFAPositionCard(props){

        const posHeader = {
            fontFamily: "Mazzard-H-Extrabold",
            letterSpacing: "0.25em",
            textAlign: "center",
        };

        const posDescription = {
            fontFamily: "BeVietnam-Medium",
            color: "#000000",
        };

        const con = {
            width: "75%",
            margin: "auto",
            marginBottom: "40px",
        };
        const posContainer = {
            backgroundColor: props.color,
            borderRadius: "0 0 15px 15px",
            borderColor: props.borderColor,
        };


    return (
            <Container className = "pos-container" style = {posContainer}>
                <div>                
                    <Row>
                        <Col>
                            <h1 className = "header-size" style = {posHeader}>{props.posHeader}</h1>    
                            <div className = "header-description-size" style = {posDescription}>{props.posDescription}</div>
                        </Col>
                    </Row>
                </div>
            </Container>
    );
}