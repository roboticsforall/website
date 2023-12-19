import React from "react";
import bmInfoJSON from "@/posts/board_members.json";
import ccInfoJSON from "@/posts/curriculum_committee.json";
import adInfoJSON from "@/posts/assistant_directors.json";
//import pcInfoJSON from "@/posts/pub_committee.json";

import { Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { MeetTheTeamCard }  from "@/components/About/MeetTheTeamCard";
import { Header } from "@/components/Header";

import { ColorThemes } from "@/colors";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png";


enum Headers {
    First = "EXECUTIVE COMMITTEE",
    Second = "BOARD OF DIRECTORS",
    Third = "CURRICULUM COMMITTEE",
    Fourth = "PUBLICITY COMMITTEE",
    }

export const MeetTheTeam: React.FC = () => {
        

return (
    <section>
        <Header
            headerTextColor={ColorThemes.mainYellow}
            image={headerBlobYellow}
            title={"Get to Know our Team!"}
            description={"Get to know the faces behind Robotics for All!"} 
        />
        <section>
            <h2 style={{ color: ColorThemes.mainOrange, textAlign: "center", padding: "8px" }}>
                {Headers.First}
            </h2>
            <Container fluid className="container">
                <Row className="d-flex justify-content-center ">
                    {bmInfoJSON.board_members_list.map((info: any, i: number) => (
                    <Col xs={12} sm={6} md={6} lg={6} xl={4} key={i}>
                        <MeetTheTeamCard 
                        info={info}
                        backgroundColor={ColorThemes.mainYellow}
                        color={ColorThemes.darkYellow}
                    />
                    </Col>
                    )
                )}
                </Row>
            </Container>
        </section>

        <section>
        <h2 style={{ color: ColorThemes.mainGreen,  textAlign: "center", padding: "8px" }}>
            {Headers.Second}
        </h2>
        <Container fluid className="container">
                <Row className="d-flex justify-content-center">
                    {adInfoJSON.assistant_directors_list.map((info: any, i: number) => (
                    <Col xs={12} sm={6} md={6} lg={6} xl={4} key={i}>
                        <MeetTheTeamCard 
                        info={info}
                        backgroundColor={ColorThemes.mainYellow}
                        color={ColorThemes.darkYellow}
                    />
                    </Col>
                    )
                )}
                </Row>
            </Container>
        </section>

        <section>
            <h2 style={{ color: ColorThemes.mainBlue,  textAlign: "center", padding: "8px" }}>
                {Headers.Third}
            </h2>
            <Container fluid className="container">
                <Row className="d-flex justify-content-center">
                    {ccInfoJSON.curriculum_committee_list.map((info: any, i: number) => (
                    <Col xs={12} sm={6} md={6} lg={6} xl={4} key={i} >
                        <MeetTheTeamCard 
                        info={info}
                        backgroundColor={ColorThemes.mainYellow}
                        color={ColorThemes.darkYellow}
                    />
                    </Col>
                    )
                )}
                </Row>
            </Container>
        </section>


        </section>
    );
};