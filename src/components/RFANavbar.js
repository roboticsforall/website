import React from 'react';
import {Row} from "react-bootstrap";
import TobyHeaderLogo from "../media/TobyHeaderLogo.png"
import {Link} from "react-router-dom";

export default function RFANavbar(props) {

    const logoImageSize = {
        height: "7vh",
    }
    const header = {
        fontFamily: "Oswald",
    }
    // const navItems = {
    //     color: "#ffcc00",
    //     fontFamily: "BeVietnam-ExtraBold",
    //     fontSize: "1.0em"
    // }

    return (
        <Row>
            <nav className="w-100 py-5 navbar navbar-light navbar-expand-lg">
                <Link to = "/" className="navbar-brand hyperlink d-flex align-items-center">
                    <img
                        alt=""
                        src={TobyHeaderLogo}
                        style={logoImageSize}
                    />
                    <h2 className = "m-0 ms-3 d-none d-sm-none d-md-block" style = {header}>Robotics For All</h2>
                </Link>
                <button className="me-2 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className ="navbar-nav w-100 d-flex justify-content-around">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Enroll
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to = "/enroll-classfaq" className="dropdown-item" href="#">Class FAQ's</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Volunteer
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to = "/volunteer-volunteerfaq" className="dropdown-item">Volunteer FAQ's</Link>
                                    <Link to = "/volunteer-teacherpos" className="dropdown-item">Teacher Positions</Link>
                                    <Link to = "/volunteer-volunteerapp" className="dropdown-item">Volunteer App</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    About
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to = "/about-afforgs" className="dropdown-item">Affiliated Organizations</Link>
                                    <Link to = "/about-overview" className="dropdown-item">Overview</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Contact
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to = "/news" className="nav-link" href="#">
                                    News
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Donate </a>
                            </li>
                            <li className="nav-item">
                                <div id="google_translate_element"></div>
                            </li>
                        </ul>
                    </div>
            </nav>
        </Row>
    );
}
