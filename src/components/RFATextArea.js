import React from 'react';
import {Container, Navbar, NavDropdown, Nav} from "react-bootstrap";

export default function RFATextArea(props){

    const inputStyle = {
        borderRadius: 15,
        borderWidth: 1,
        fontFamily: "BeVietnam-ExtraBold",
        paddingLeft: "0.5em",
        fontSize: "1.2em",
        margin: "auto"
        //marginBottom: "0.5em"
    }

    return (
        <textarea style = {inputStyle} id = {props.id} name = {props.name} placeholder = {props.placeholder} onChange={props.onChange}
        value={props.value} rows = {props.rows} className = "w-100" required></textarea>
    );
}