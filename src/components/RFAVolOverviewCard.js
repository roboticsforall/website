import React from 'react';
import { Container, Row } from "react-bootstrap";
import '../App.css';
export default class RFAVolOverviewCard extends React.Component {

    render() {
        const positionsTitle = {
            fontFamily: "Oswald",
            fontSize: "50px",
        }
        const description = {
            fontFamilt: "BeVietnam-Medium",
            fontSize: "20px",
        }
        const card = {
            borderRadius: "15px",
            backgroundColor: this.props.backgroundcolor,
            padding: "20px",
            height: "170px",
            float: this.props.cardfloat,
            width: "70%",
            lineHeight: "24px",
        }
        const buttonBox = {
            float: this.props.buttonfloat,
            paddingLeft: this.props.buttonPaddingleft,
        }
        const button = {
            borderRadius: "15px",
            backgroundColor: this.props.backgroundcolor,
            color: this.props.buttonColor,
            fontFamily: "Oswald",
            fontSize: "30px",
            letterSpacing: "5px",
            width: "200px",
            height: "80px",
            paddingTop: "15px",
            textAlign: "center",
            marginBottom: "10px",
        }
        const containerStyle = {
            paddingLeft: "90px",
            paddingRight: "40px",
            width: "1000px",
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
