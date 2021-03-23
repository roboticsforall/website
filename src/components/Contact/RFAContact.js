import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import RFAHeader from '../RFAHeader';
import headerBlobYellow from '../../media/HeaderBlobs/Blob-RFA-4.png'; // add correct image and filepath here

export default function RFAContact(props){

    return (
      <div>
        <RFAHeader 
          headerTextColor = {"#ffcc00"} 
          image = {headerBlobYellow} 
          title = {"Want to know more? Contact us!"} 
          description = {"Contact us for more information, questions, partnerships and much more!"}
        />

        <Container className = "border">
          <Row>
            <Col>
              <Row className = "flex-column">
                <a href = {"mailto:" + props.email}>{props.email}</a>
                <a href = {"tel:+" + props.telephone}>+{props.telephone}</a>
              </Row>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>

      </div>
    );
}
