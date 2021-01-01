import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Image, Col, Card, CardDeck} from "react-bootstrap";
import RFAAffOrgsCard from "../RFAAffOrgsCard";

export default function RFAAffOrgs(props){
    return (
        <div>
          <Row className = "pb-5 header-blobs">
            <div className = "d-flex justify-content-center align-self-end">
              <Row className = "m-5 justify-content-center">
                <h1 style = {{color: "#FFCC00"}} className = "page-header header-size text-center">Check out our Affiliated Organizations!</h1>
                <p className = "page-header-description header-description-size text-center">Learn more about our affiliate organizations started from Robotics for All volunteers! </p>
              </Row>
            </div>
          </Row>
          <Container>
            <br/><br/>
            <RFAAffOrgsCard linkColor = {"#c06204"} orgAbrv = {"TFA"} mainColor = {"#fa8d1f"} affOrgName = {"Tutoring For All"} affOrgsDescription = {"Tutoring for All is a branch of the non-profit organization Robotics for All. Our goal is to provide free, quality tutoring services to primarily low income and disadvantaged students."}/>
            <br/><br/>
            <RFAAffOrgsCard linkColor = {"#248f47"} orgAbrv = {"MFA"} mainColor = {"#33cc66"} affOrgName = {"Mentoring For All"} affOrgsDescription = {"Mentoring for All is a branch of the non-profit organization Robotics for All with the goal of providing guidance on the path towards future success for underserved high school students."}/>
            <br/><br/>
            <RFAAffOrgsCard linkColor = {"#006bd6"} orgAbrv = {"CFC"} mainColor = {"#3399ff"} affOrgName = {"Crafts For Charity"} affOrgsDescription = {"Crafts for Charity is a student-led nonprofit providing classes and opportunities for everyone to give back to their communities through crafting! We help donate handmade goods to charities for causes like homelessness."}/>
          </Container>
        </div>
    );
}
