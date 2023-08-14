import React from "react";
import { Row, Container, Col, Image } from "react-bootstrap";

import { ColorThemes } from "@/colors";

import facebookIcon from "@/media/SocialMediaLogos/facebook-320w.png";
import instagramIcon from "@/media/SocialMediaLogos/instagram-320w.png";
import linkedin from "@/media/SocialMediaLogos/linkedin-320w.png";
import guidestar from "@/media/SocialMediaLogos/guidestar-320w.png";

import orgLogisticsJSON from "@/posts/org_logistics.json";

import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  const darkBrown: React.CSSProperties = {
    color: "#532F0A",
  };
  const linkStyle: React.CSSProperties = {
    color: "#C06202",
  };
  const headerStyle: React.CSSProperties = {};
  const copyrightDisclaimer: React.CSSProperties = {
    textAlign: "center",
  };
  const iconSize: React.CSSProperties = {
    width: "4vmax",
    height: "4vmax",
    margin: "0.1em",
  };
  const yellowRow = {
    backgroundColor: ColorThemes.lightYellow,
  };

  return (
    <div style={yellowRow} className="center-align">
      <Container fluid className="mx-2">
        <br />
        <Row className="justify-content-center">
          <Col lg={3}>
            <h1 style={headerStyle}>NAVIGATION</h1>
            <Link style={linkStyle} className="hyperlink" to="/">
              <p>Home</p>
            </Link>
            <Link
              style={linkStyle}
              className="hyperlink "
              to="/enroll/individlearners"
            >
              <p>Enroll</p>
            </Link>
            <Link
              style={linkStyle}
              className="hyperlink "
              to="/volunteer/overview"
            >
              <p>Volunteer</p>
            </Link>
            <Link style={linkStyle} className="hyperlink " to="/about/overview">
              <p>About</p>
            </Link>
            <Link style={linkStyle} className="hyperlink " to="/contact">
              <p>Contact</p>
            </Link>
            <Link style={linkStyle} className="hyperlink " to="/news">
              <p>News</p>
            </Link>
          </Col>
          <br />
          <Col lg={3}>
            <h1 style={headerStyle}>FIND US</h1>
            <p style={{ ...darkBrown, ...linkStyle }}>
              EMAIL |{" "}
              <a
                className="hyperlink "
                href={"mailto:" + orgLogisticsJSON.email}
              >
                {orgLogisticsJSON.email}
              </a>
            </p>
            <p style={{ ...darkBrown, ...linkStyle }}>
              PHONE |{" "}
              <a
                className="hyperlink"
                href={"tel:" + orgLogisticsJSON.phone_number}
              >
                {orgLogisticsJSON.phone_number}
              </a>
            </p>
            <div style={{ ...darkBrown, ...linkStyle }}>
              ADDRESS |{" "}
              <a
                target="_blank"
                href="https://www.google.com/maps/place/Palo+Alto,+CA+94302/@37.4400162,-122.1487548,15z/data=!3m1!4b1!4m8!1m2!2m1!1sP.O.+Box+56,+Palo+Alto,+CA+94302!3m4!1s0x808fbb1b431541ef:0x2d06ff09a989536f!8m2!3d37.44!4d-122.14"
                className=" hyperlink"
                rel="noreferrer"
              >
                {orgLogisticsJSON.address}
              </a>
            </div>
            <div className="d-flex align-items-end">
              <a
                target="_blank"
                href="https://www.facebook.com/roboticsforalleducation/"
                rel="noreferrer"
              >
                <Image
                  className="imageSize"
                  style={iconSize}
                  src={facebookIcon}
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/roboticsforall/"
                rel="noreferrer"
              >
                <Image
                  className="imageSize"
                  style={iconSize}
                  src={instagramIcon}
                />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/robotics-for-all"
                rel="noreferrer"
              >
                <Image className="imageSize" style={iconSize} src={linkedin} />
              </a>
              <a
                target="_blank"
                href="https://www.guidestar.org/"
                rel="noreferrer"
              >
                <Image className="imageSize" style={iconSize} src={guidestar} />
              </a>
            </div>
          </Col>
          <br />
          <Col lg={3}>
            <h1 style={headerStyle}>MORE</h1>
            <Link
              style={linkStyle}
              className="hyperlink "
              to="/more-privacypolicy"
            >
              <p>Privacy Policy</p>
            </Link>
            <Link
              style={linkStyle}
              className="hyperlink "
              to="/more-websitetos"
            >
              <p>Website Terms of Use</p>
            </Link>
            <Link to="/more-bylaws" style={linkStyle} className="hyperlink ">
              <p>Robotics For All Bylaws</p>
            </Link>
            <Link
              to="/more-meetingrecords"
              style={linkStyle}
              className="hyperlink "
            >
              <p>Meeting Minutes & Agendas</p>
            </Link>
            <div style={{ ...darkBrown, ...linkStyle }}>
              TAX IDs |{" "}
              <a
                target="_blank"
                href="https://www.guidestar.org/profile/83-2012119"
                className="hyperlink "
                rel="noreferrer"
              >
                83-2012119
              </a>
            </div>
          </Col>
          <br />
        </Row>
        <br />
        <Container>
          <p style={copyrightDisclaimer}>
            <strong>
              Robotics For All 2018-{new Date().getFullYear()}© Photos of minors
              were used with permission from their parent/guardian.{" "}
            </strong>
            Robotics for All does not discriminate against any students or
            volunteers on the basis of gender identity or expression, race,
            color, religion, sex, sexual orientation, age, disability, marital
            status, national origin, military status or any other characteristic
            protected by law. We celebrate our diversity and take pride in our
            inclusive environment for all people.
          </p>
        </Container>
      </Container>
    </div>
  );
};
