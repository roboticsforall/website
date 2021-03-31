import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import RFAVolOverviewCircle from './RFAVolOverviewCircle';
export default function RFAVolOverviewHeader(props) {

    const headerText = {
        position: "relative",
        textAlign: "center",
        bottom: "3vw",
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
        fontWeight: 600,
        color: "black",
    }
    const statCircles = {
        paddingLeft: "5vmax",
    }

    return (
        <Row style={headerBlob}>
            <Container className="align-self-end">
                <Col>
                   
                        <Row style = {statCircles}>
                            <Col>
                                <div>
                                    <RFAVolOverviewCircle paddingtop = {"3.3vmax"} width = {"16vmax"} height = {"16vmax"} top={"-20vmax"} title={"Work With:"} subtext={"Levels of Curriculum"} end={12} subtextSize={"1.3vmax"} titleSize={"2.1vmax"}></RFAVolOverviewCircle>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <RFAVolOverviewCircle paddingtop = {"3.3vmax"} width = {"16vmax"} height = {"16vmax"} top={"-32vmax"} title={"Join our:"} subtext={"Active Volunteers"} end={221} subtextSize={"1.3vmax"} titleSize={"2.1vmax"}></RFAVolOverviewCircle>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <RFAVolOverviewCircle paddingtop = {"3.8vmax"} width = {"18vmax"} height = {"17vmax"} top={"-23vmax"} title={"Support our:"} subtext={"Students Taught"} end={1296} subtextSize={"1.6vmax"} titleSize={"2.4vmax"}></RFAVolOverviewCircle>
                                </div>
                            </Col>
                        </Row>
                   
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