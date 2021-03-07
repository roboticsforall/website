import React from 'react';
import { Container, Row, Image, Col } from "react-bootstrap";
import '../App.css';
export default class RFAVolOverviewCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const cardTitle = {
            fontFamily: 'Oswald',
            fontSize: "35px",
            color: this.props.color,
        }
        const overviewImgSize = {
            height: "36vh",
        }
        return (
            <Row>
                <Col>
                    <Container>
                        <Image style={overviewImgSize} src={this.props.image}></Image>
                        <p style={cardTitle}>{this.props.title}</p>
                    </Container>
                </Col>
            </Row>
        );
    }
}
