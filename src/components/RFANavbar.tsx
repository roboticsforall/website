import React, {useState} from "react";
import { Row, Container, Col, Image } from "react-bootstrap";
import TobyHeaderLogo from "@/media/TobyHeaderLogo.png";
import { Link } from "react-router-dom";

export const RFANavbar: React.FC = () => {

  const logoImageSize = {
    height: "7vh",
  };
  const navHeader = {
    display: 'flex',
    alignItems: 'center',
  };
  const navHeading = {
    fontFamily: "Oswald-Medium",
    margin: 0
  }
  const navContainer:React.CSSProperties = {
    display: "flex",
    border: "2px solid black",
    alignItems: 'center'
  }
  const navItems:React.CSSProperties = {
    display: "flex",
    alignItems: 'center',
    justifyContent: "space-between",
    flexGrow: 100,
    border: "2px solid black",
    textDecoration: "none",
    listStyleType: "none",
    margin: 0,
    padding: 0
  }

  return (
    <nav style = {navContainer}>
      <header style = {navHeader}>
        <Link to = "/"><img className = "mx-2" src = {TobyHeaderLogo} style = {logoImageSize}/></Link>
        <h1 style = {navHeading}>Robotics For All</h1>
      </header>
      {/* <div style = {navItemsDiv}> */}
      <ul className = "ms-2" style = {navItems}>
        <li>Enroll</li>
        <li>Volunteer</li>
        <li>About</li>
        <li>Contact</li>
        <li>News</li>
        <li>Donate</li>
        <li>Select Language</li>
      </ul>
      {/* </div> */}
    </nav>
  );
};
