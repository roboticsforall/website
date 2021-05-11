import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

export default function RFAPositionCard(){

        const posHeader = {
            fontFamily: "Mazzard-H-Extrabold",
            letterSpacing: "0.25em",
            textAlign: "center",
        };

        const posDescription = {
            fontFamily: "BeVietnam-Medium",
            color: "#000000",
        }
        const posContainer = {
            backgroundColor: this.props.color,
            borderRadius: "0 0 15px 15px",
            borderColor: this.props.borderColor,
        };
        

    return (
            <Container className = "pos-container" style = {posContainer}>
                <div>                
                    <Row>
                        <Col>
                            <h1 className = "header-size" style = {posHeader}>{this.props.posHeader}</h1>    
                            <div className = "header-description-size" style = {posDescription}>{this.props.posDescription}</div>
                        </Col>
                    </Row>
                </div>
            </Container>
    );
}