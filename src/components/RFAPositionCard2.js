import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";

export default class RFAPositionCard2 extends React.Component{
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
        }

    return (
            <Container className = "pos-container">
                <div>
                <h1 className = "header-size" style = {posHeader}>{this.props.posHeader}</h1>                    
                    <Row>
                        <Col>
                            <div className = "header-description-size" style = {posDescription}>{this.props.posDescription}</div>
                        </Col>
                        <Col  xs = {3}>
                            <Image className = "center-align" src = {this.props.posImage} style = {img} fluid />
                        </Col>
                    </Row>
                </div>
            </Container>
    );
    }
}
