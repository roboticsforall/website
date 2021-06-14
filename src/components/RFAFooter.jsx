import React from 'react';
import { Row, Container, Col, Image } from "react-bootstrap";

import facebookIcon from "@/media/Social Media Logos/facebook.png";
import instagramIcon from "@/media/Social Media Logos/instagram.png";
import linkedin from "@/media/Social Media Logos/linkedin.png";
import guidestar from "@/media/Social Media Logos/guidestar.png";

import {Link} from "react-router-dom";

export default function RFAFooter(props) {

    const darkBrown = {
        color: "#532F0A"
    }
    const linkStyle = {
        fontFamily: "BeVietnam-Bold",
        fontSize: "large"
    }
    const headerStyle = {
        fontFamily: "Oswald-Medium"
    }
    const copyrightDisclaimer = {
        fontFamily: "BeVietnam-Light",
        textAlign: "center"
    }
    const iconSize = {
        width: "4vw",
        height: "4vw",
        margin: "0.1em"
    }

    return (
        <Row className="yellow-row">
            <Container>
                <br/>
                <Row className = "justify-content-center">
                    <Col lg = {3}>
                        <h1 style = {headerStyle}>NAVIGATION</h1>
                        <a style = {linkStyle} className="hyperlink C06202" href = "#"><p>Home</p></a>
                        <a style = {linkStyle} className="hyperlink C06202" href = "#"><p>Enroll</p></a>
                        <a style = {linkStyle} className="hyperlink C06202" href = "#"><p>Volunteer</p></a>
                        <a style = {linkStyle} className = "hyperlink C06202" href = "#"><p>About</p></a>
                        <a style = {linkStyle} className = "hyperlink C06202" href = "#"><p>Contact</p></a>
                        <a style = {linkStyle} className = "hyperlink C06202" href = "#"><p>News</p></a>
                    </Col>
                    <br/>
                    <Col lg = {3}>
                        <h1 style = {headerStyle}>FIND US</h1>
                        <p style = {darkBrown, linkStyle}>
                            EMAIL | <a className="hyperlink C06202" href={"mailto:info@roboticsforall.net"}>info@roboticsforall.net</a>
                        </p>
                        <p style = {darkBrown, linkStyle}>
                            PHONE | <a className="hyperlink C06202" href={"tel:+6506659734"}>(650)-665-9734</a>
                        </p>
                        <div style = {darkBrown, linkStyle}>
                            ADDRESS | <p className = "C06202">P.O. Box 56, Palo Alto, CA 94302</p>
                        </div>
                        <div className = "d-flex align-items-baseline">
                            <Image style = {iconSize} src = {facebookIcon}/>
                            <Image style = {iconSize} src = {instagramIcon}/>
                            <Image style = {iconSize} src = {linkedin}/>
                            <Image style = {{width: "8vw", height: "8vw"}} src = {guidestar}/>
                        </div>
                    </Col>
                    <br/>
                    <Col lg = {3}>
                        <h1 style = {headerStyle}>MORE</h1>
                        <a style = {linkStyle} className="hyperlink C06202" href = "#"><p>Privacy Policy</p></a>
                        <a style = {linkStyle} className="hyperlink C06202" href = "#"><p>Website Terms of Use</p></a>
                        <Link to = "/more-bylaws" style = {linkStyle} className="hyperlink C06202"><p>Robotics For All Bylaws</p></Link>
                        <Link to = "/more-meetingrecords" style = {linkStyle} className = "hyperlink C06202" ><p>Meeting Minutes & Agendas</p></Link>
                        <div style = {darkBrown, linkStyle}>
                            TAX IDs | <p className = "C06202">83-2012119</p>
                        </div>
                    </Col>
                    <br/>
                </Row>
                <Container>
                    <p style = {copyrightDisclaimer}><strong>Robotics For All 2018-2021© Photos of minors were used with permission from their parent/guardian. </strong>
                        Robotics for All has and will never discriminate against a student or a volunteer on any basis, including gender expression, ethnicity, sexual orientation, religion, nationality, legal status, disability, political stances, or any other factor that can be discriminated against.
                    </p>
                </Container>
            </Container>
        </Row>
    );

}