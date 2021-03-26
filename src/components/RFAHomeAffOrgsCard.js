import React from 'react';
import Container from 'react-bootstrap/Container';
import {Row, Col, Image} from 'react-bootstrap';


export default function RFAHomeAffOrgsCard(props) {
    
    const affOrgsTitle = {
        fontFamily: "Oswald-Bold",
        color: "white",
        textAlign: 'center'
    }
    const affOrgsLogoSize = {
        height: "10vw",
    }
    const borderRadius = {
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    };

    return(
        <Row style = {{backgroundColor: props.bgColor, ...borderRadius}} className="justify-content-center align-items-center">
            <Col sm={3} md={3} lg={3} xl={3}>
                <Image style={affOrgsLogoSize} src={props.logo} />
            </Col>
            <Col md={6} lg={6} xl={6}>
                <h1 className = "header-size" style={affOrgsTitle}>{props.org}</h1>
            </Col>
            <Col className = "text-center" md={3} lg={3} xl={3}>
                <a style = {{color: props.linkColor}} className = "home-aff-org-card-link" >Learn More</a>
            </Col>
        </Row>
    );

}