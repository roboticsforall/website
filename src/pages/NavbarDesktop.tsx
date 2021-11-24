import React from "react";
import TobyHeaderLogo from "@/media/TobyHeaderLogo.png";
import { Link } from "react-router-dom";
import { enrollvolunteerabout } from "@/navbarroutes";

export const NavbarDesktop: React.FC = () => {

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
    justifyContent: "space-around",
    flexGrow: 100,
  }
  // const navItem:

  return (
    <nav className = "py-5" style = {navContainer}>
      <header style = {navHeader}>
        <Link to = "/"><img src = {TobyHeaderLogo} style = {logoImageSize}/></Link>
        <Link className = "hyperlink" to = "/"><h2 style = {navHeading}>Robotics For All</h2></Link>
      </header>
      <ul className = "ms-2" style = {{...navItemsList, ...list}}>
        {enrollvolunteerabout.map((navItem, i) => (
          <React.Fragment>
            <li className = "nav-item" key = {i}>
              <div className = "h-100 nav-item-header">
                <Link to = "#" className = "hyperlink">{navItem.headerName}</Link>
              </div>
              <ul className = "dropdown-container" style = {list}>
                {navItem.subPages.map((subPageInfo, i) => (
                  <Link key = {i} className = "hyperlink" to = {subPageInfo.to}><li>{subPageInfo.subPageName}</li></Link>
                ))}
              </ul>
            </li>
          </React.Fragment>
        ))}
          <li className = "nav-item">
            <div className = "h-100 m-0 nav-item-header">
              <Link className = "hyperlink" to = "/contact">Contact</Link>
            </div>
          </li>
          <li className = "nav-item">
            <div className = "h-100 nav-item-header">
              <Link className = "hyperlink" to = "/news">News</Link>
            </div>
          </li>
          <li className = "nav-item">
            <div className = "h-100 donate-nav-item-header">
              <Link className = "donate-nav-background hyperlink" to = "/donate">Donate</Link>
            </div>
            <ul className = "dropdown-container" style = {list}>
              <a rel="noopener" target = "_blank" href = "https://www.bonfire.com/store//" className = "hyperlink"><li>Merch</li></a>
            </ul>
          </li>
      </ul>
    </nav>
  );
};
