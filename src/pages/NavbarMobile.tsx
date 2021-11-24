import React, {useState} from "react";
import TobyHeaderLogo from "@/media/TobyHeaderLogo.png";
import { Link } from "react-router-dom";
import dropdownIcon from "../media/Icons/dropdownIcon.svg";
import exitIcon from "../media/Icons/exitIcon.svg";
import { enrollvolunteerabout, contactaboutdonate } from "@/navbarroutes";


export const NavbarMobile: React.FC = () => {

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
      <header style = {navHeader}>
        <Link to = "/"><img src = {TobyHeaderLogo} style = {logoImageSize}/></Link>
        <img onClick = {setNavHeight} width = "50" src = {dropdownIcon}/>
      </header>
      <div style = {screenCover}>
        <header className = "py-5" style = {navHeader}>
          <Link to = "/"><img src = {TobyHeaderLogo} style = {logoImageSize}/></Link>
          <img onClick = {setNavHeight} width = "50" src = {exitIcon}/>
        </header>
        <ul className = "mx-3 p-0" style = {{height: "50%", overflowY: "auto", ...list}}>
        {[...enrollvolunteerabout, ...contactaboutdonate].map((navItem, i) => (
          <MobileNavbarItem 
            key = {i}
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

const MobileNavbarItem: React.FC<{
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
                  <>
                      <Link key = {i} onClick = {props.setNavHeight} style = {dropdownItemText} className="hyperlink" to = {subPageInfo.to}><li>{subPageInfo.subPageName}</li></Link>
                      <hr />
                  </>
              ))}
          </ul>
      </React.Fragment>
  );
};
