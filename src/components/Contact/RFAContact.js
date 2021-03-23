import React from 'react';
import {Container, Row, Col, Form,} from "react-bootstrap";
import RFAHeader from '../RFAHeader';
import headerBlobYellow from '../../media/HeaderBlobs/Blob-RFA-4.png'; // add correct image and filepath here

export default function RFAContact(props){


  const contactInfo = {
    fontFamily: "Oswald",
  }

    return (
      <div>
        <RFAHeader 
          headerTextColor = {"#ffcc00"} 
          image = {headerBlobYellow} 
          title = {"Want to know more? Contact us!"} 
          description = {"Contact us for more information, questions, partnerships and much more!"}
        />

        <Container className = "border">
          <br/>
          <Row className = "justify-content-between">
            <Col md = {5}>
              <Row className = "flex-column">
                <h3>
                  EMAIL | <a href = {"mailto:" + props.email}>{props.email}</a>
                </h3>
                <br></br>
                <h3>
                 PHONE | <a href = {"tel:+" + props.telephone}>+{props.telephone}</a>
                </h3>
                <br></br>
                <h3>
                  ADDRESS | {props.address}
                </h3>
              </Row>
              <Row>
                Add Icons here
              </Row>
            </Col>
            <Col md = {6} className = "justify-content-end">
              <Form>
                <Form.Group controlId="formGroupName">
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <br></br>
          <br></br>

          <br></br>

          <br></br>

          <br></br>

          <br></br>

          <br></br>

        </Container>

      </div>
    );
}
