import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import RFAVolOverviewCircle from './RFAVolOverviewCircle';
export default function RFAVolOverviewHeader(props) {

    const headerText = {
        position: "relative",
        textAlign: "center",
        bottom: "100px",
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
    const pageHeaderDescription = {
        fontFamily: 'Be Vietnam',
        fontSize: "1.5vmax",
        color: "black",
    }
    const statCircles = {
        marginLeft: "auto",
        marginRight: "auto",
        width: "900px",
    }
    const circle1 = {
        height: "225px",
        width: "225px",
        backgroundColor: "#fcaf62",
        borderRadius: "50%",
        paddingTop: "52px",
        marginTop: "50%",
        marginBottom: "50%",
    }

    const circle2 = {
        height: "225px",
        width: "225px",
        backgroundColor: "#fcaf62",
        borderRadius: "50%",
        paddingTop: "52px",
        marginTop: "5%",
    }

    const circle3 = {
        height: "250px",
        width: "260px",
        backgroundColor: "#fcaf62",
        borderRadius: "50%",
        paddingTop: "65px",
        marginTop: "35%",
    }

    return (
        <Row style={headerBlob}>
            <Container className="align-self-end">
                <Col>
                    <div style={statCircles}>
                        <Row>
                            <Col>
                                <Container style={circle1}>
                                    <RFAVolOverviewCircle title={"Work With"} subtext={"Levels of Curriculum"} end={12} subtextSize={"20px"} titleSize={"33px"}></RFAVolOverviewCircle>
                                </Container>
                            </Col>
                            <Col>
                                <Container style={circle2}>
                                    <RFAVolOverviewCircle title={"Join our:"} subtext={"Active Volunteers"} end={221} subtextSize={"20px"} titleSize={"35px"}></RFAVolOverviewCircle>
                                </Container>
                            </Col>
                            <Col>
                                <Container style={circle3}>
                                    <RFAVolOverviewCircle title={"Support our:"} subtext={"Students Taught"} end={1296} subtextSize={"25px"} titleSize={"35px"}></RFAVolOverviewCircle>
                                </Container>
                            </Col>
                        </Row>
                    </div>
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