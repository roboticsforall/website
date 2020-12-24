import React from 'react';
import {Card, Button} from "react-bootstrap";

export default function RFANavbar(props){
    return (
        <Card style={{width: 'auto'}}>
            <Card.Img variant="top" src="https://raw.githubusercontent.com/DevSandBoxx/RFA_website_design/overview/src/media/teacher%20toby.webp"/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.text}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
        </Card>
    );
}
