import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountUp from 'react-countup';
export default class RFAVolOverviewCircle extends React.Component {
   
    render() {
        const circleText = {
            borderRadius: "50%",
            backgroundColor: "#fcaf62",
            textAlign: "center",
            marginTop: this.props.top,
            height: this.props.height,
            width: this.props.width,
            paddingTop: this.props.paddingtop,
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
            fontSize: "5.4vmax",
            color: "black",
            lineHeight: "88%",
        }
        return (
            <div style={circleText}>
                <h3 style={circleTitle}>{this.props.title}</h3>
                <div style={statNumbers}>
                    <CountUp end={this.props.end} start={1}/>
                </div>
                <h4 style={circleSubtext}>{this.props.subtext}</h4>
            </div>
        );
    }
}