import React from 'react';
import { Image } from "react-bootstrap";
import '../App.css';
export default class RFAVolOverviewCard extends React.Component {
    
    render() {
        const cardTitle = {
            fontFamily: 'Oswald',
            fontSize: "2.5vmax",
            color: this.props.color,
        }
        const overviewImgSize = {
            height: "20vmax",
        }
        return (
                <div style = {{width:"100%"}}>
                        <Image style={overviewImgSize} src={this.props.image}></Image>
                        <p style={cardTitle}>{this.props.title}</p>
                </div>
        );
    }
}
