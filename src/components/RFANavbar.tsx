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
                to="/enroll/individlearners"
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
                <Link
                  to="/enroll/individlearners"
                  className="dropdown-item"
                  href="#"
                >
                  For Individual Learners
                </Link>
                <Link to="/enroll/schools" className="dropdown-item">
                  For Schools
                </Link>
                <Link to="/enroll/register" className="dropdown-item">
                  Register
                </Link>
                <Link to="/enroll/classfaq" className="dropdown-item">
                  Class FAQ's
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/volunteer/overview"
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
                <Link to="/volunteer/overview" className="dropdown-item">
                  Overview
                </Link>
                <Link to="/volunteer/teacherpos" className="dropdown-item">
                  Teacher Positions
                </Link>
                <Link to="/volunteer/publicitypos" className="dropdown-item">
                  Publicity Positions
                </Link>
                <Link to="/volunteer/volunteerapp" className="dropdown-item">
                  Volunteer Application
                </Link>
                <Link to="/volunteer/volunteerfaq" className="dropdown-item">
                  Volunteer FAQ's
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/about/overview"
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
                <Link to="/about/overview" className="dropdown-item">
                  Overview
                </Link>
                <Link to="/about/meettheteam" className="dropdown-item">
                  Meet The Team
                </Link>
                <Link to="/about/afforgs" className="dropdown-item">
                  Affiliated Organizations
                </Link>
                <Link to="/about/newsletter" className="dropdown-item">
                  Newsletter
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className="nav-link">
                News
              </Link>
            </li>
            <li className="nav-item donate-nav-item dropdown text-center">
              <Link
                to="/donate"
                className="mt-2 nav-link donate-nav-link dropdown-toggle"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Donate
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
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
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}
    </Row>
  );
};
