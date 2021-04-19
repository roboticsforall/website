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
            fontFamily: "BeVietnam-Medium",
            color: "#000000",
        }

    return (
            <Container className = "pos-container">
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
