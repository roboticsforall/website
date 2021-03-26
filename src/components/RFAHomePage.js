import React, { useState, useEffect } from 'react';
import { Row, Container, ResponsiveEmbed, Col, Image } from "react-bootstrap";
import homePageVideo from "../media/homePageVideo.mp4";
import TFALogo from '../media/AffiliatedOrgs/TFA_Logo.png';
import CFCLogo from '../media/AffiliatedOrgs/CFC_Logo.png';
import MFALogo from '../media/AffiliatedOrgs/MFA_Logo.png';

import RFAHomeAffOrgsCard from "./RFAHomeAffOrgsCard";
export default function RFAHomePage(props) {

    const videoRow = {
        backgroundColor: "#FFCC00",
    }
    const yellowRow = {
        backgroundColor: "#FFCC004D",
    }
    const title = {
        fontFamily: "Oswald",
        fontSize: "12vh",
        color: "#ffcc00",
        textAlign: "center",
    }
    const titleText = {
        fontFamily: "BeVietnam-Regular",
        textAlign: "center",
        fontSize: "2vw",
    }
    const imageSize = {
        height: "20vh",
    }



    // const [aspectRatio, setAspectRatio] = useState("21by9");

    // useEffect(() => {
    //     window.innerWidth <= 768 ? setAspectRatio("16by9") : setAspectRatio("21by9")
    // }, []);

    return (
        <>
            <Row style={videoRow} className="justify-content-center">
                <ResponsiveEmbed className="video-width" aspectRatio={"16by9"}>
                    <video loop autoPlay muted type="video/mp4" src={homePageVideo} />
                </ResponsiveEmbed>
            </Row>

            <Container>
                <Row className="justify-content-center">
                    <h1 style={title}>ROBOTICS FOR ALL</h1>
                    <p style={titleText}>
                        Robotics For All provides free STEM education to students of all backgrounds,
                        particularly students from underserved communities.
                        We aim to inspire children to pursue careers in STEM later in their lives.
                        We support student volunteers to teach our classes and engage with their local communities.
                    </p>
                </Row>
            </Container>

            <Row className="p-5" style={yellowRow}>
                <Container>
                    <Row>
                        {
                            [
                                {
                                    label: "STUDENTS & PARENTS",
                                    logo: TFALogo,
                                    color: "#3399ff"
                                },
                                {
                                    label: "SCHOOLS",
                                    logo: TFALogo,
                                    color: "#33cc66"

                                },
                                {
                                    label: "VOLUNTEERS",
                                    logo: TFALogo,
                                    color: "#fa8d1f"

                                }
                            ].map((buttons) => (
                                <Col md={4} className="text-center">
                                    <Image style = {imageSize} className="mb-3" src={buttons.logo} />
                                    <h1 style={{ color: buttons.color, fontFamily: "Oswald", textAlign: 'center' }}>{buttons.label}</h1>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </Row>
            <Container>
                <Row className="justify-content-center">
                    <h1 style={title}>AFFILIATED ORGANIZATIONS</h1>
                </Row>
                {
                            [
                                {
                                    label: "tutoring for all",
                                    logo: TFALogo,
                                    linkColor: "#C06204",
                                    bgColor: "#FCAF62",
                                },
                                {
                                    label: "mentoring for all",
                                    logo: MFALogo,
                                    linkColor: "#248F47",
                                    bgColor: "#70DB94",

                                },
                                {
                                    label: "crafts for charity",
                                    logo: CFCLogo,
                                    linkColor: "#006BD6",
                                    bgColor: "#70BAFF",

                                }
                            ].map((afforgs, i) => (
                                <>
                                    <RFAHomeAffOrgsCard key = {i} org = {afforgs.label} linkColor = {afforgs.linkColor} bgColor ={afforgs.bgColor} logo = {afforgs.logo}/>
                                    <br/>
                                </>
                            ))
                        }
            </Container>
        </>
    );

}