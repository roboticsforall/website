import React from "react";
import { Row } from "react-bootstrap";
import TobyHeaderLogo from "@/media/TobyHeaderLogo.png";
import { Link } from "react-router-dom";

export const RFANavbar: React.FC = () => {
  const logoImageSize = {
    height: "7vh",
  };
  const header = {
    fontFamily: "Oswald-Medium",
  };

  return (
    <Row>
      <nav className="w-100 py-5 navbar navbar-light navbar-expand-lg">
        <Link
          to="/"
          className="navbar-brand hyperlink d-flex align-items-center"
        >
          <img alt="" src={TobyHeaderLogo} style={logoImageSize} />
          <h2 className="m-0 ms-3 d-none d-sm-none d-md-block" style={header}>
            Robotics For All
          </h2>
        </Link>
        <button
          className="me-2 navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav w-100 d-flex justify-content-around">
            <li className="nav-item dropdown">
              <Link
                to="/enroll"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Enroll
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/enroll-classfaq" className="dropdown-item" href="#">
                  Class FAQ's
                </Link>
                <Link to="/enroll-register" className="dropdown-item" href="#">
                  Register
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/enroll"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Volunteer
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/volunteer-voloverview" className="dropdown-item">
                  Volunteer Overview
                </Link>
                <Link to="/volunteer-teacherpos" className="dropdown-item">
                  Teacher Positions
                </Link>
                <Link to="/volunteer-publicitypos" className="dropdown-item">
                  Publicity Positions
                </Link>
                <Link to="/volunteer-volunteerapp" className="dropdown-item">
                  Volunteer Application
                </Link>
                <Link to="/volunteer-volunteerfaq" className="dropdown-item">
                  Volunteer FAQ's
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/about-overview"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/about-overview" className="dropdown-item">
                  Overview
                </Link>
                <Link to="/about-afforgs" className="dropdown-item">
                  Affiliated Organizations
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" href="#">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className="nav-link" href="#">
                News
              </Link>
            </li>
            <li className="center-align flex-column text-center donate-nav-item dropdown">
              <a
                className="hyperlink donate-nav-link dropdown-toggle"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Donate
              </a>
              <div
                className="dropdown-menu border"
                aria-labelledby="navbarDropdown"
              >
                <a
                  href="https://www.bonfire.com/store/rfa/"
                  target="_blank"
                  className="dropdown-item"
                  rel="noreferrer"
                >
                  Merch
                </a>
              </div>
            </li>
            <li className="nav-item">
              <div id="google_translate_element"></div>
            </li>
          </ul>
        </div>
      </nav>
    </Row>
  );
};
