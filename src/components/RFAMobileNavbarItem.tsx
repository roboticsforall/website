import React, { useState } from "react";
import { Link } from "react-router-dom";

export const RFAMobileNavbarItem: React.FC<{
    headerName: string,
    subPages: {
        to: string,
        subPageName: string,
    }[],
    setNavHeight: () => void
}> = (props) => {
    const [buttonState, setButtonState] = useState("+");
    const [dropdownDisplay, setDropdownDisplay] = useState("none");
    const onClick = () => {
        switchButtonIcon();
        displayDiv();
    }
    const switchButtonIcon = () => {
        if(buttonState == "+") {
            setButtonState("-");
        }
        else {
            setButtonState("+");
        }
    }
    const displayDiv = () => {
        dropdownDisplay === "none"
          ? setDropdownDisplay("block")
          : setDropdownDisplay("none");
    };
    
    const navHeader = {
        display: 'flex',
        justifyContent: "space-between",
        fontFamily: "BeVietnam-Bold",
        fontSize: "1.5em",
    };
    const list: React.CSSProperties = {
        textDecoration: "none",
        listStyleType: "none",
    }
    const dropdownItemText = {
        fontFamily: "BeVietnam-Regular",
    }
    
    return (
        <React.Fragment>
            <li onClick = {onClick} style={navHeader}>
                {props.headerName} <button>{buttonState}</button>
            </li>
            <hr />
            <ul style={{display: dropdownDisplay, ...list}}>
                {props.subPages.map((subPageInfo, i) => (
                    <React.Fragment>
                        <Link onClick = {props.setNavHeight} style = {dropdownItemText} className="hyperlink" to = {subPageInfo.to}><li>{subPageInfo.subPageName}</li></Link>
                        <hr />
                    </React.Fragment>
                ))}
            </ul>
        </React.Fragment>
    );
};
