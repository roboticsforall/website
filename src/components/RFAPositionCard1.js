import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";

export default class RFAPositionCard1 extends React.Component{
    
    render () {
        const posHeader = {
            fontFamily: "Mazzard-H-Extrabold",
            letterSpacing: "0.25em",
            textAlign: "center",
        };

        const posDescription = {
            fontFamily: "BeVietnam-Medium",
            color: "#000000",
        };

        const img = {
            marginBottom: "10px",
            width: "auto",
            maxHeight: "250px",
        };

        const con = {
            width: "75%",
            margin: "auto",
            marginBottom: "40px",
        };

    return (
            <Container className = "pos-container center-align" style = {con}>
                <div>
                    <h1 className = "header-size" style = {posHeader}>{this.props.posHeader}</h1>                    
                    <Row>
                        <Col xs = {3}>
                            <Image className = "center-align" src = {this.props.posImage} style = {img} fluid />
                        </Col>
                        <Col>
                            <p className = "header-description-size" style = {posDescription}>{this.props.posDescription}</p>
                        </Col>
                    </Row>
                </div>   
            </Container>
    );
    }
}
