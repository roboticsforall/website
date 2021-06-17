import React from 'react';
import {Card, Button, Row, Col, Container} from "react-bootstrap";

export const RFANewsCard: React.FC<{
    link: string,
    title: string
}> = (props) => {

    return (
        <a className = "hyperlink" target = "_blank" href = {props.link}>
            <Col className = "newsletter-card">
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Row className = "justify-content-center">
                    <h3 className = "mb-4 text-center">{props.title}</h3>
                </Row>
            </Col>
        </a>
    );
}