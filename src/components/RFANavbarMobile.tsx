import React, {useState} from "react";
import TobyHeaderLogo from "@/media/TobyHeaderLogo.png";
import { Link } from "react-router-dom";
import dropdownIcon from "../media/Icons/dropdownIcon.svg";
import { RFAMobileNavbarItem } from "./RFAMobileNavbarItem";
import { propTypes } from "react-bootstrap/esm/Image";

export const RFANavbarMobile: React.FC = () => {

  const [dropdownDisplay, setDropdownDisplay] = useState("none");

  const logoImageSize = {
    height: "7vh",
  };
  const navHeader = {
    display: 'flex',
    justifyContent: "space-between",
    width: "100%"
  };
  const navContainer:React.CSSProperties = {
    display: "flex",
  }
  const list:React.CSSProperties = {
    textDecoration: "none",
    listStyleType: "none",
  }
  const screenCover:React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#ffcc00",
    display: dropdownDisplay,
  }
  const screenCoverCenterContainer:React.CSSProperties = {
    position: "absolute",
    top: "20%",
    width: "90%",
    left: "50%",
    height: "70%",
    transform: "translate(-50%, 0%)",
    overflowY: "auto",
  }
  const exitButton = {
    display: 'flex',
    justifyContent: "flex-end",
    fontFamily: "BeVietnam-Bold",
    fontSize: "1.5em",
  };
  const displayNav = () => {
    dropdownDisplay === "none"
      ? setDropdownDisplay("block")
      : setDropdownDisplay("none");
  };

  return (
    <nav className = "py-5" style = {navContainer}>
      <header className = "mx-md-3"style = {navHeader}>
        <Link to = "/"><img src = {TobyHeaderLogo} style = {logoImageSize}/></Link>
        <button onClick = {displayNav}><img width = "50" src = {dropdownIcon}/></button>
      </header>
      <div style = {screenCover}>
        <header style = {exitButton}>
          <button onClick = {displayNav} className = "me-5">&#10006;</button>
        </header>
        <ul className = "mx-3 p-0" style = {{...screenCoverCenterContainer, ...list}}>
        {[
          {
            headerName: "Enroll",
            to: "/enroll",
            subPages: [
              {
                subPageName: "For Individual Learners",
                to: "/enroll/individlearners",
              },
              {
                subPageName: "For Schools",
                to: "/enroll/schools",
              },
              {
                subPageName: "Register",
                to: "/enroll/register",
              },
              {
                subPageName: "Class FAQs",
                to: "/enroll/classfaq",
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
                subPageName: "Affiliated Organizations",
                to: "/about/afforgs",
              },
              {
                subPageName: "Newsletter",
                to: "/about/newsletter",
              },
            ]
          },
          {
            headerName: "Contact",
            to: "/contact",
            subPages: [
              {
                subPageName: "Contact",
                to: "/contact",
              },
            ]
          },
          {
            headerName: "News",
            to: "/news",
            subPages: [
              {
                subPageName: "News",
                to: "/news",
              },
            ]
          },
          {
            headerName: "Donate",
            to: "/donate",
            subPages: [
              {
                subPageName: "Donate",
                to: "/donate",
              },
              {
                subPageName: "Merch",
                to: "https://www.bonfire.com/store/rfa/ ",
              },
            ]
          },
        ].map((navItem, i) => (
          <RFAMobileNavbarItem 
            headerName = {navItem.headerName}
            subPages = {navItem.subPages}
            displayNav = {displayNav}
          />
        ))}
        </ul>
      </div>
    </nav>
  );
};
