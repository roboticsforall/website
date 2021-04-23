import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

export default class RFAPositionCard extends React.Component{
    
    render () {

        const posHeader = {
            fontFamily: "Mazzard-H-Extrabold",
            letterSpacing: "0.25em",
            textAlign: "center",
        };

        const posDescription = {
            color: "#000000",
        };

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
                            <p className = "header-description-size" style = {posDescription}>{this.props.posDescription}</p>
                        </Col>
                    </Row>
                </div>
            </Container>
    );
    }
}