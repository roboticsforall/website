import React from 'react';
import { Container, Row } from "react-bootstrap";
import '../App.css';
export default class RFAVolOverviewCard extends React.Component {

    render() {
        const positionsTitle = {
            fontFamily: "Oswald",
            fontSize: "3.2vmax",
        }
        const description = {
            fontFamilt: "BeVietnam-Medium",
            fontSize: "1.3vmax",
        }
        const card = {
            borderRadius: "15px",
            backgroundColor: this.props.backgroundcolor,
            padding: "1.2vmax",
            height: "12vmax",
            float: this.props.cardfloat,
            width: "68%",
            lineHeight: "2vmax",
        }
        const buttonBox = {
            float: this.props.buttonfloat,
        }
        const button = {
            borderRadius: "15px",
            backgroundColor: this.props.backgroundcolor,
            color: this.props.buttonColor,
            fontFamily: "Oswald",
            fontSize: "2.2vmax",
            letterSpacing: "5px",
            width: "17vmax",
            height: "5.7vmax",
            paddingTop: "1vmax",
            textAlign: "center",
            marginBottom: "0.6vmax",
        }
        const containerStyle = {
            paddingLeft: "7vmax",
            paddingRight: "6vmax",
            width: "75%",
        }
        const arrow = {
            borderBottom: `70px solid ${this.props.backgroundcolor}`,
            borderRight: "35px solid transparent",
            borderLeft: "35px solid transparent",
            borderTop: "20px solid transparent",
        }
        return (
            <Container style={containerStyle}>
                <Container>
                    <Row>
                        <div style={{ paddingLeft: this.props.arrowLocation }}>
                            <div style={arrow}></div>
                        </div>
                    </Row>
                    <Row>
                        <div>
                            <div style={card}>
                                <h2 style={positionsTitle}>{this.props.title}</h2>
                                <p style={description}>{this.props.description}</p>
                            </div>
                            <div style={buttonBox}>
                                <div style={button}>Learn More</div>
                                <div style={button}>Apply</div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </Container>
        );
    }
}
