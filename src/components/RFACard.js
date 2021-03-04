import React from 'react';
import {Card, Button} from "react-bootstrap";

export default function RFANavbar(props){
    return (
        <Card style={{width: 'auto'}}>
            <Card.Img variant="top"/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.text}</Card.Text>
                    
                </Card.Body>
        </Card>
    );
}
