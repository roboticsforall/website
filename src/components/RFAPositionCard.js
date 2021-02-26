import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

export default class RFAPositionCard extends React.Component{

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
                        </Row>
                    </div>
                </p>
            </Container>
    );
    }
}
