import React from 'react';
import { Row, Container, Col } from "react-bootstrap";
import homePageVideo from "../media/homePageVideo.mp4";
import RFAHomeAffOrgsCard from "./RFAHomeAffOrgsCard";

export default function RFAFooter(props) {

    const darkBrown = {
        color: "#532F0A"
    }
    const linkStyle = {
        fontFamily: "BeVietnam-Bold",
        fontSize: "large"
    }
    const headerStyle = {
        fontFamily: "Oswald"
    }

    return (
        <Row className="yellow-row">
            <Container>
                <br/>
                <Row className = "justify-content-center">
                    <Col md = {3}>
                        <h1 style = {headerStyle}>NAVIGATION</h1>
                        <a style = {linkStyle} className="hyperlink C06202" href = "#"><p>Home</p></a>
                        <a style = {linkStyle} className="hyperlink C06202" href = "#"><p>Enroll</p></a>
                        <a style = {linkStyle} className="hyperlink C06202" href = "#"><p>Volunteer</p></a>
                        <a style = {linkStyle} className = "hyperlink C06202" href = "#"><p>About</p></a>
                        <a style = {linkStyle} className = "hyperlink C06202" href = "#"><p>Contact</p></a>
                        <a style = {linkStyle} className = "hyperlink C06202" href = "#"><p>News</p></a>
                    </Col>
                    <br/>
                    <Col md = {3}>
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
                    </Col>
                    <br/>
                    <Col md = {3}>
                        <h1 style = {headerStyle}>MORE</h1>
                        <a style = {linkStyle} className="hyperlink C06202" href = "#"><p>Privacy Policy</p></a>
                        <a style = {linkStyle} className="hyperlink C06202" href = "#"><p>Website Terms of Use</p></a>
                        <a style = {linkStyle} className="hyperlink C06202" href = "#"><p>Robotics For All Bylaws</p></a>
                        <a style = {linkStyle} className = "hyperlink C06202" href = "#"><p>Meeting Minutes & Agendas</p></a>
                        <div style = {darkBrown, linkStyle}>
                            TAX IDs | <p className = "C06202">83-2012119</p>
                        </div>
                    </Col>
                    <br/>
                </Row>
            </Container>
        </Row>
    );

}