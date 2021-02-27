import React from 'react';
import {Container, Row} from "react-bootstrap";
import dropdownIcon from '../media/Shapes/dropDownArrow.svg'; // add correct image here

export default function RFAClassFAQ(props){

    let state = {
        dropdownAnswerDisplay: 'none'
    } 

    const dropdownQuestion = {
      borderRadius: "1em",
      backgroundColor: "#ffcc00",
      fontFamily: "BeVietnam-ExtraBold"
    }

    const dropdownAnswer = {
        borderRadius: "1em",
        backgroundColor: "#ffcc00",
        fontFamily: "BeVietnam-Medium",
        display: state.dropdownAnswerDisplays,
    }
    const button = {
      background: "none",
    }

    const displayDiv = () => {
        (state.dropdownAnswerDisplay == 'none') ? 
            this.setState({dropdownAnswerDisplay: 'initial'}) : this.setState({dropdownAnswerDisplay: 'none'})
    }

    return (
        <div>
            <Row style = {dropdownQuestion} className = "p-2 justify-content-between align-items-center">
                <h3 className = "">When will I know if my class time is confirmed?</h3>
                <button style = {button} onClick = {displayDiv} className = "background-none border-0"><img width = "50" height = "50" src = {dropdownIcon}/></button>
            </Row>
            <br/>
            <Row style = {dropdownAnswer} className = "p-2 justify-content-between align-items-center">
                <h3>You will receive an email a week before the class start date with a final confirmation of the class time.</h3>
            </Row>
        </div>
    );
}
