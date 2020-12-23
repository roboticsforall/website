import React from 'react';
import {Card, Button} from "react-bootstrap";

export default function RFANavbar(props){
    return (
        <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.text}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
        </Card>
    );
}
