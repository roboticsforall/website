import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'; 
import headerBlobYellow from "../../media/HeaderBlobs/yellow.png";
import RFAHeader from "../RFAHeader";

export default function RFAAbtOverview(props) {
    const title = {
        fontFamily: 'Oswald',
        fontSize: "9vh",
        color: "#fa8d1f",
        textAlign: "center",
        letterSpacing: "5px",
      }
      const description = {
        fontFamily: 'Be Vietnam',
        fontSize: "2.6vh",
        color: "black",
      }
      const positions = {
        marginLeft: "auto",
        marginRight: "auto",
        width: "120vh",
        textAlign: "center",
      }
    return(
        <div>
             <RFAHeader headerTextColor = {"#ffcc00"} image = {headerBlobYellow} title = {"Welcome to Robotics for All!"} description = {"Learn more about Robotics for All and what we do!"}/>
             <Container fluid style={{ backgroundColor: 'white'}}>
                <Row>
                    <Container fluid>
                        <Container style={{ width: "120vh"}}>
                            <h2 style={title} class="our_mission">OUR MISSION</h2>
                            <p style={description}>Robotics for All aims to inspire the next generation of students and volunteers to achieve their full potential, regardless of their background.</p>
                        </Container>    
                    </Container>
                </Row>
                <Row>
                    <Container fluid>
                        <Container style={{ width: "120vh"}}>
                            <h2 style={title} class="our_vision">OUR VISION</h2>
                            <p style={description}>A world where all students are able to access equitable educational opportunities to create their futures.</p>
                        </Container>    
                    </Container>
                </Row>
                <Row>
                    <Container fluid>
                        <Container style={{ width: "120vh"}}>
                            <h2 style={title} class="our_mission">OUR VALUES</h2>
                            <p style={description}>We are motivated. Each and every day, we strive to be a positive force in this world and create social change.</p>
                            <div></div>
                            <p style={description}>We are inclusive. We celebrate the diversity of our students and volunteers alike.</p>
                            <div></div>
                            <p style={description}>We are accountable. We remain honest and transparent in everything we do.</p>
                            <div></div>
                            <p style={description}>We are collaborative. Through the strength of teamwork, we are able to generate stronger ideas and do more.</p>
                            <div></div>
                            <p style={description}>We are compassionate. We care deeply about all of our students, volunteers, and our community.</p>
                        </Container>    
                    </Container>
                </Row>
            </Container>
        </div>
        
    );
}