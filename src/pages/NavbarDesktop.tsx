import React from "react";
import TobyHeaderLogo from "@/media/TobyHeaderLogo.png";
import { Link } from "react-router-dom";
import { enrollvolunteerabout } from "@/navbarroutes";

export const NavbarDesktop: React.FC = () => {

  const logoImageSize = {
    height: "7vh",
  };

  const navHeader = {
    display: "flex",
    alignItems: "center",
  };
  const navHeading = {
    fontFamily: "Oswald-Medium",
    margin: 0,
  };
  const navContainer: React.CSSProperties = {
    display: "flex",
  };
  const list: React.CSSProperties = {
    textDecoration: "none",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  };
  const navItemsList: React.CSSProperties = {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-around",
    flexGrow: 100,
  };
  // const navItem:

  return (
    <nav className="py-5" style={navContainer}>
      <header style={navHeader}>
        <Link to="/">
          <img className = "imageSize" src={TobyHeaderLogo} style={logoImageSize} />
        </Link>
        <Link className="hyperlink" to="/">
          <h2 style={navHeading}>Robotics For All</h2>
        </Link>
      </header>
      <ul className="ms-2" style={{ ...navItemsList, ...list }}>
        {enrollvolunteerabout.map((navItem, i) => (
          <>
            <li className="nav-item" key={i}>
              <div className="h-100 nav-item-header">
                <Link onClick = "return false" className="hyperlink"> 
                  <h5>{navItem.headerName}</h5>
                </Link>
              </div>
              <ul className="rounded dropdown-container" style={list}>
                {navItem.subPages.map((subPageInfo, i) => (
                  <Link key={i} className="hyperlink rounded" to={subPageInfo.to}>
                    <li className = "rounded"><h5>{subPageInfo.subPageName}</h5></li>
                  </Link>
                ))}
              </ul>
            </li>
          </>
        ))}
        <li className="nav-item">
          <div className="h-100 m-0 nav-item-header">
            <Link className="hyperlink" to="/contact">
              <h5>Contact</h5>
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div className="h-100 nav-item-header">
            <Link className="hyperlink" to="/news">
              <h5>News</h5>
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div className="h-100 donate-nav-item-header">
            <Link className="donate-nav-background rounded hyperlink" to="/donate">
              <h5>Donate</h5>
            </Link>
          </div>
          <ul className="rounded dropdown-container" style={list}>
            <a
              rel="noopener"
              target="_blank"
              href="https://www.bonfire.com/store//"
              className="hyperlink"
            >
              <li className = "rounded"><h5>Merch</h5></li>
            </a>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
