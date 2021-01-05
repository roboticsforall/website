import React from 'react';
import {Container, Col, Image} from "react-bootstrap";

export default class RFAPositionCard extends React.Component{
    
    render () {

    return (
            <Container className = "pos-container">
                <h1 className = "pos-header">{this.props.posHeader}</h1>
                <Col><p className = "pos-description">{this.props.posDescription}</p></Col>
            </Container>
    );
    }
}
