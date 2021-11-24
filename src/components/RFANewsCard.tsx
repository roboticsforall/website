import React from 'react';
import {Row } from "react-bootstrap";

export const RFANewsCard: React.FC<{
    file: string,
    title: string
}> = (props) => {

    return (
        <a className = "hyperlink" href = {props.file} download>
            <div className = "newsletter-card">
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Row className = "justify-content-center">
                    <h3 className = "mb-4 text-center">{props.title}</h3>
                </Row>
            </div>
        </a>
    );
}