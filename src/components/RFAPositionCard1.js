import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";

export default class RFAPositionCard1 extends React.Component{

    render () {

      const posHeader = {
            fontFamily: "Mazzard-H-Extrabold",
            letterSpacing: "0.25em",
            textAlign: "center",
        };

        const posDescription = {
            color: "#000000",
        }

        return (
          <Container className = "pos-container">
         <div>
             <h1 className = "header-size" style = {posHeader}>{this.props.posHeader}</h1>
             <Row>
                 <Col xs = {3}>
                     <Image className = "justify-content-center" src = {this.props.posImage} fluid />
                 </Col>
                 <Col>
                     <p className = "header-description-size" style = {posDescription}>{this.props.posDescription}</p>
                 </Col>
             </Row>
         </div>
     </Container>
        );
    }
}
