import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RFAHeader(props) {

    const pageHeaderDescription = {
        fontFamily: 'Be Vietnam',
        fontWeight: 600,
        color: "black",
    }
    const pageHeader = {
        fontFamily: "MazzardH-Bold",
        transform: 'rotate(358deg)',
        color: props.headerTextColor,
    }
    const headerBlob = {
        backgroundSize: "100% 100%",
        height: "45vw",
        width: "100vw",
        backgroundImage: `url(${props.image})`,
    }
    const headerText = {
        position: "relative",
        textAlign: "center",
        bottom: "5vw",
    }
    return (
        <Row style={headerBlob}>
            <Container className="align-self-end">
                <Col>
                    <div style={headerText}>
                        <Row className="justify-content-center">
                            <h1 style={pageHeader} className="text-center header-size">{props.title}</h1>
                        </Row>
                        <Row className="justify-content-center">
                            <p style={pageHeaderDescription} className="text-center header-description-size">{props.description}</p>
                        </Row>
                    </div>
                </Col>
            </Container>
        </Row>
    );
}