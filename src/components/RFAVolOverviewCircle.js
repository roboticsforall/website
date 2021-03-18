import React from 'react';
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import CountUp from 'react-countup';
export default class RFAVolOverviewCircle extends React.Component {
   
    render() {
        const circleText = {
            verticalAlign: "baseline",
            textAlign: "center",
        }
        const circleTitle = {
            fontFamily: 'MazzardH-ExtraBold',
            fontSize: this.props.titleSize,
            lineHeight: "88%",
        }
        const circleSubtext = {
            fontFamily: 'BeVietnam-SemiBold',
            fontSize: this.props.subtextSize,
            lineHeight: "88%",
        }
        const statNumbers = {
            fontFamily: 'MazzardH-Bold',
            fontSize: "75px",
            color: "black",
            lineHeight: "88%",
        }
        return (
            <Container style={circleText}>
                <h3 style={circleTitle}>{this.props.title}</h3>
                <div style={statNumbers}>
                    <CountUp end={this.props.end} start={1}/>
                </div>
                <h4 style={circleSubtext}>{this.props.subtext}</h4>
            </Container>
        );
    }
}