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
  }
  const list:React.CSSProperties = {
    textDecoration: "none",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  }
  const navItemsList:React.CSSProperties = {
    display: "flex",
    alignItems: 'stretch',
    justifyContent: "space-between",
    flexGrow: 100,
  }
  // const navItem:

  return (
    <nav className = "h-75" style = {navContainer}>
      <header style = {navHeader}>
        <Link to = "/"><img className = "mx-2" src = {TobyHeaderLogo} style = {logoImageSize}/></Link>
        <h1 style = {navHeading}>Robotics For All</h1>
      </header>
      <ul className = "ms-2" style = {{...navItemsList, ...list}}>
        {[
          {
            headerName: "Enroll",
            to: "/enroll",
            subPages: [
              {
                subPageName: "For Individual Learners",
                to: "enroll/individlearners",
              },
              {
                subPageName: "For Schools",
                to: "enroll/schools",
              },
              {
                subPageName: "Register",
                to: "enroll/register",
              },
              {
                subPageName: "Class FAQs",
                to: "enroll/classfaq",
              },
            ]
          },
          {
            headerName: "Volunteer",
            to: "/volunteer",
            subPages: [
              {
                subPageName: "Overview",
                to: "volunteer/overview",
              },
              {
                subPageName: "Teachers Positions",
                to: "volunteer/teacherpos",
              },
              {
                subPageName: "Publicity Positions",
                to: "volunteer/publicitypos",
              },
              {
                subPageName: "Volunteer Application",
                to: "volunteer/volunteerapp",
              },
              {
                subPageName: "Volunteer FAQs",
                to: "volunteer/volunteerfaq",
              },
            ]
          },
          {
            headerName: "Volunteer",
            to: "/volunteer",
            subPages: [
              {
                subPageName: "Overview",
                to: "/volunteer/overview",
              },
              {
                subPageName: "Teachers Positions",
                to: "/volunteer/teacherpos",
              },
              {
                subPageName: "Publicity Positions",
                to: "/volunteer/publicitypos",
              },
              {
                subPageName: "Volunteer Application",
                to: "/volunteer/volunteerapp",
              },
              {
                subPageName: "Volunteer FAQs",
                to: "/volunteer/volunteerfaq",
              },
            ]
          },
          {
            headerName: "About",
            to: "/about",
            subPages: [
              {
                subPageName: "Overview",
                to: "/about/overview",
              },
              {
                subPageName: "Meet The Team",
                to: "/about/meettheteam",
              },
              {
                subPageName: "Affiliated Organization",
                to: "/about/afforgs",
              },
              {
                subPageName: "Newsletter",
                to: "/about/newsletter",
              },
            ]
          }
        ].map((navItem, i) => (
          <React.Fragment>
            <li className = "nav-item" key = {i}>
              <h1 className = "h-100 nav-item-header">{navItem.headerName}</h1>
              <ul className = "dropdown-container" style = {list}>
                {navItem.subPages.map((subPageInfo, i) => (
                  <li>{subPageInfo.subPageName}</li>
                ))}
              </ul>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};
