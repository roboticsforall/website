import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'; 
import headerBlobYellow from "../../media/HeaderBlobs/yellow.png";
import RFAHeader from "../RFAHeader";

export default function RFAAbtOverview(props) {
    const title = {
        fontFamily: 'Oswald',
        fontSize: "12vh",
        textAlign: "center",
        letterSpacing: "5px",
      }
      const description = {
        fontFamily: 'BeVietnam-Regular',
        fontSize: "3.5vh",
        color: "black",
      }
    return(
        <div>
             <RFAHeader headerTextColor = {"#ffcc00"} image = {headerBlobYellow} title = {"Welcome to Robotics for All!"} description = {"Learn more about Robotics for All and what we do!"}/>
             <Container fluid style={{ backgroundColor: 'white'}}>
                <Row>
                    <Container fluid>
                        <Container style={{ width: "145vh", padding: "5vh"}}>
                            <h2 style={title } class="our_mission">OUR MISSION</h2>
                            <p style={description}>Robotics for All aims to inspire the next generation of students and volunteers to achieve their full potential, regardless of their background.</p>
                        </Container>    
                    </Container>
                </Row>
                <Row>
                    <Container fluid style={{ backgroundColor: "#B7EDC9"}}>
                        <Container style={{ width: "145vh", padding: "5vh"}}>
                            <h2 style={title} class="our_vision">OUR VISION</h2>
                            <p style={description}>A world where all students are able to access equitable educational opportunities to create their futures.</p>
                        </Container>    
                    </Container>
                </Row>
                <Row>
                    <Container fluid>
                        <Container style={{ width: "145vh", align: "left", padding: "5vh"}}>
                            <h2 style={title} class="our_values">OUR VALUES</h2>
                            <p style={description}>We are <span style={{fontFamily: 'BeVietnam-Semibold', color: "#fa8d1f"}}>motivated</span>. Each and every day, we strive to be a positive force in this world and create social change.</p>
                            <div></div>
                            <p style={description}>We are <span style={{fontFamily: 'BeVietnam-Semibold', color: "#ffcc00"}}>inclusive</span>. We celebrate the diversity of our students and volunteers alike.</p>
                            <div></div>
                            <p style={description}>We are <span style={{fontFamily: 'BeVietnam-Semibold', color: "#33cc66"}}>accountable</span>. We remain honest and transparent in everything we do.</p>
                            <div></div>
                            <p style={description}>We are <span style={{fontFamily: 'BeVietnam-Semibold', color: "#70b8ff"}}>collaborative</span>. Through the strength of teamwork, we are able to generate stronger ideas and do more.</p>
                            <div></div>
                            <p style={description}>We are <span style={{fontFamily: 'BeVietnam-Semibold', color: "#006bd6"}}>compassionate</span>. We care deeply about all of our students, volunteers, and our community.</p>
                        </Container>    
                    </Container>
                </Row>
            </Container>
        </div>
        
    );
}