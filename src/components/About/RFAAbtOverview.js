import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'; 
import headerBlobYellow from "../../media/HeaderBlobs/yellow.png";
import RFAHeader from "../RFAHeader";

export default function RFAAbtOverview(props) {
    return(
        <div>
             <RFAHeader headerTextColor = {"#ffcc00"} image = {headerBlobYellow} title = {"Welcome to Robotics for All!"} description = {"Learn more about Robotics for All and what we do!"}/>
        </div>
    );
}