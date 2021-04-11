import React, {useState, useEffect} from 'react';
import { Container, Row, Image, Col } from "react-bootstrap";

export default function RFAAboutAffOrgsCard(props) {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    
    useEffect(() => {
        window.addEventListener('resize', updateWindowDimensions);
    });

    const updateWindowDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    const affOrgsCardText = {
        fontFamily: 'BeVietnam-Medium',
        fontSize: "large",
    }

    const affOrgsHeader = {
        fontFamily: "Mazzard-H-Extrabold",
        color: props.mainColor
    }
    const affOrgsLogoSize = {
        height: "20vh",
    }

        return (
            <Row className="justify-content-center">
                <Col className="" md={11} lg={11} xl={11}>
                    {(window.innerWidth >= 768) && (<Row><h1 style={affOrgsHeader} className="header-size">{props.affOrgName}</h1></Row>)}
                    <Row style={{ backgroundColor: (props.mainColor + "80"), borderRadius: 15 }}>
                        {(window.innerWidth >= 768) ? (
                            <Col sm={3} md={3} lg={3} xl={3} className="p-3 center-align">
                                <Image style={affOrgsLogoSize} className="border" src={props.logo} />
                            </Col>
                        ) : (
                            <Col>
                                <Row className="p-2">
                                    <Col className="center-align">
                                        <Image style={affOrgsLogoSize} src={props.logo} />
                                    </Col>
                                    <Col className="center-align">
                                        <h1 style={affOrgsHeader} className="text-center header-size">{props.affOrgName}</h1>
                                    </Col>
                                </Row>
                            </Col>
                        )}
                        <Col md={5} lg={5} xl={5} className="p-3 border center-align">
                            <video width="320" height="240" autoPlay muted loop>
                                <source src="https://www.youtube.com/embed/NpEaa2P7qZI?playlist=NpEaa2P7qZ1" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </Col>
                        <Col md={4} lg={4} xl={4} className="p-3 border">
                            <Container>
                                <Row className="justify-content-center">
                                    <p style={affOrgsCardText} className="text-center">{props.affOrgsDescription}</p>
                                    <a style={{ color: props.linkColor }} className="text-center hyperlink aff-org-card-link" href={props.website}>VISIT {props.orgAbrv}</a>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Col>
            </Row>
    );
}

