import React from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./styles.css";

function NewsCard(props) {
  return (
    <Card
      style={{
        width: "23rem",
        display: "inline-grid",
        margin: "25px",
        boxShadow: "2px 5px black",
      }}
    >
      <Card.Img variant="top" src={props.link} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;
