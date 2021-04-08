import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

export default class RFABylawEntry extends React.Component{
    render () {
        const background ={
            backgroundColor: "white",
            borderRadius: "20px",
            border: "10px solid rgba(255, 204, 0, 0.5)",
            padding: "5px",
            fontFamily: "BeVietnam-Medium",
            fontSize: "large",
            textAlign: "center",
        };
        const link ={
            color: "black",
        }
    return (
        <Row>
            <Col xs={3} style={background}><p>{this.props.date}</p></Col>
            <Col xs={7} style={background}><p>{this.props.bylaw}</p></Col>
            <Col xs={2} style={background}><p><a href={this.props.download} style={link}>Download</a></p></Col>
        </Row>
    );
    }
}