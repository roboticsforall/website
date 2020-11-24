import React from 'react';
// import homePageImage from "../images/homePageImage.png";
import {Button, Card} from 'react-bootstrap';


function RFA_Card(props) {
    return (
        <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.content}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}
export default RFA_Card;
