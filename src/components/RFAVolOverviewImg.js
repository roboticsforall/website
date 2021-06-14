import React from 'react';
import {Row, Image, Container} from "react-bootstrap";
import '../App.css';

export default function RFAVolOverviewCard(props){
    
        const cardTitle = {
            fontFamily: 'Oswald-Medium',
            fontSize: "2.5vmax",
            color: props.color,
        }
        const overviewImgSize = {
            width: "18vmax",
        }
        return (
            <div>
                <a target = "_blank" href = "https://www.bonfire.com/store/rfa/"><Image style = {overviewImgSize} src={props.image}/></a>
                <p className = "text-center" style={cardTitle}>{props.title}</p>
            </div>
        );
}
