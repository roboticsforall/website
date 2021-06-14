import React from 'react';
import {Container, Navbar, NavDropdown, Nav} from "react-bootstrap";

export default function RFAFormInput(props){

    const inputStyle = {
        borderRadius: 15,
        borderWidth: 1,
        height: props.height,
        fontFamily: "BeVietnam-ExtraBold",
        paddingLeft: "0.5em",
        fontSize: "1.2em",
        marginBottom: "0.5em"
    }

    return (
        <input required type = {props.type} style = {inputStyle} id = {props.id} name = {props.name} placeholder = {props.placeholder} onChange={props.onChange}
                value={props.value} className = "w-100"></input>
    );
}