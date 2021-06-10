import React from 'react';
import {Row} from "react-bootstrap";

export default class RFAPosButton extends React.Component{
    render () {
        const button = {
            color: "#000000",
            background: "#FA8D1F",
            fontFamily: "mazzard-h-extrabold",
            fontSize: "45px",
            borderColor: "#FA8D1F",
            // width: "75%",
            borderRadius: "15px",
            paddingTop: "20px",
            paddingBottom: "20px",
            margin: "auto",
        };

    return (
        <a className = "hyperlink" target = {this.props.target} href = {this.props.link}>
            <Row className = "pos-container-button justify-content-center align-items-center" style = {button}>
                <h2 className = "text-center">{this.props.title}</h2>
            </Row>
        </a>
    );  
    }
}
