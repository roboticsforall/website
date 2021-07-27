import React, {useState} from "react";
import TobyHeaderLogo from "@/media/TobyHeaderLogo.png";
import { Link } from "react-router-dom";
import dropdownIcon from "../media/Icons/dropdownIcon.svg";
import exitIcon from "../media/Icons/exitIcon.svg";
import { RFAMobileNavbarItem } from "../components/RFAMobileNavbarItem";

export const RFANavbarMobile: React.FC = () => {

  const [dropdownHeight, setDropdownHeight] = useState("0");

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
    backgroundColor: "#FFF0B2",
    height: dropdownHeight,
    width: "100%",
    position: "fixed",
    zIndex: 1,
    top: 0,
    left: 0,
    transition: "0.5s",
    overflowY: "auto",
  }
  const setNavHeight = () => {
    dropdownHeight === "0"
      ? setDropdownHeight("130vh")
      : setDropdownHeight("0");
  };

  return (
    <nav className = "py-5" style = {navContainer}>
      <header className = "mx-md-3" style = {navHeader}>
        <Link to = "/"><img src = {TobyHeaderLogo} style = {logoImageSize}/></Link>
        <button onClick = {setNavHeight}><img width = "50" src = {dropdownIcon}/></button>
      </header>
      <div style = {screenCover}>
        <header className = "py-5 px-3" style = {navHeader}>
          <Link to = "/"><img src = {TobyHeaderLogo} style = {logoImageSize}/></Link>
          <button onClick = {setNavHeight}><img width = "50" src = {exitIcon}/></button>
        </header>
        <ul className = "mx-3 p-0" style = {{height: "50%", overflowY: "auto", ...list}}>
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
            setNavHeight = {setNavHeight}
          />
        ))}
        </ul>
      </div>
    </nav>
  );
};
