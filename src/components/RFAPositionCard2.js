import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";

export default class RFAPositionCard2 extends React.Component{

    render () {

    return (
            <Container className = "pos-container">
                <h1 className = "pos-header">{this.props.posHeader}</h1>
                <p className = "pos-description">
                    <div>
                        <Row>
                            <Col>
                                {this.props.posDescription}
                            </Col>
                            <Col  xs = {3}>
                                <Image className = "justify-content-center" src = {this.props.posImage} fluid />
                            </Col>
                        </Row>
                    </div>
                </p>
            </Container>
    );
    }
}
