import React from "react";
import { Row, Container, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import homePageVideo from "@/media/homePageVideo.mp4";

import TFALogo from "@/media/AffiliatedOrgs/TFA_Logo.png";
import CFCLogo from "@/media/AffiliatedOrgs/CFC_Logo.png";
import MFALogo from "@/media/AffiliatedOrgs/MFA_Logo.png";

import LM from "@/media/Sponsors/lm.png";
import TF from "@/media/Sponsors/tf.png";
import WMM from "@/media/Sponsors/wmm.png";
import Google from "@/media/Sponsors/google.png";
import NSP from "@/media/Sponsors/nsp.png";
import AH from "@/media/Sponsors/ah.png";
import NGN from "@/media/Sponsors/ngn.png";
import WH from "@/media/Sponsors/wh.png";
import YMCA from "@/media/Sponsors/ymca.png";

import transparentImage from "@/media/transparentImage.png";

import { RFAHomeAffOrgsCard } from "@/components/RFAHomeAffOrgsCard";

import { ColorThemes } from "../colors";

export const RFAHomePage: React.FC = () => {
  const videoRow: React.CSSProperties = {
    backgroundColor: ColorThemes.mainYellow,
  };
  const header: React.CSSProperties = {
    fontFamily: "Oswald-Medium",
    fontSize: "10vh",
    color: ColorThemes.mainYellow,
    textAlign: "center",
  };
  const headerDescription: React.CSSProperties = {
    fontFamily: "BeVietnam-Regular",
    textAlign: "center",
    fontSize: "4vh",
  };
  const sponsorsLabel: React.CSSProperties = {
    fontFamily: "BeVietnam-Bold",
    textAlign: "center",
    fontSize: "4vh",
  };
  const affOrgsHeader: React.CSSProperties = {
    fontFamily: "Oswald-Medium",
    fontSize: "7vh",
    color: ColorThemes.mainYellow,
    textAlign: "center",
  };
  const sponsorImageSize: React.CSSProperties = {
    height: "7vh",
  };

  return (
    <>
      <div style={videoRow} className="d-flex justify-content-center">
        <video
          className="video-width"
          autoPlay
          loop
          muted
          src={homePageVideo}
        />
      </div>

      <Container>
        <Row className="justify-content-center">
          <h1 style={header}>ROBOTICS FOR ALL</h1>
          <p style={headerDescription}>
            Robotics For All provides free STEM education to students of all
            backgrounds, particularly students from underserved communities. We
            aim to inspire children to pursue careers in STEM later in their
            lives. We support student volunteers to teach our classes and engage
            with their local communities.
          </p>
        </Row>
      </Container>

      <div className="d-flex justify-content-center p-5 yellow-row">
        <Container>
          <Row>
            <Col md={4} className="text-center">
              <Link to="/enroll-individlearners" className="hyperlink">
                <Image
                  className="mb-3 home-page-house-img"
                  src={transparentImage}
                />
                <h1
                  style={{
                    fontFamily: "Oswald-Medium",
                    textAlign: "center",
                  }}
                >
                  Students and Parents
                </h1>
              </Link>
            </Col>
            <Col md={4} className="text-center">
              <Link to="/enroll-schools" className="hyperlink">
                <Image
                  className="mb-3 home-page-apple-img"
                  src={transparentImage}
                />
                <h1
                  style={{
                    fontFamily: "Oswald-Medium",
                    textAlign: "center",
                  }}
                >
                  School
                </h1>
              </Link>
            </Col>
            <Col md={4} className="text-center">
              <Link to="/volunteer-overview" className="hyperlink">
                <Image
                  className="mb-3 home-page-world-img"
                  src={transparentImage}
                />
                <h1
                  style={{
                    fontFamily: "Oswald-Medium",
                    textAlign: "center",
                  }}
                >
                  Volunteers
                </h1>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <br></br>
        <br></br>
        <Row className="justify-content-center">
          <h1 style={affOrgsHeader}>AFFILIATED ORGANIZATIONS</h1>
        </Row>
        <br></br>
        {[
          {
            label: "tutoring for all",
            logo: TFALogo,
            linkColor: ColorThemes.darkOrange,
            bgColor: ColorThemes.lightOrange,
            link: "https://www.tutoringforall.org/about",
          },
          {
            label: "mentoring for all",
            logo: MFALogo,
            linkColor: ColorThemes.darkGreen,
            bgColor: ColorThemes.lightGreen,
            link: "https://www.mentoringforall.org/mission-vision-values",
          },
          {
            label: "crafts for charity",
            logo: CFCLogo,
            linkColor: ColorThemes.darkBlue,
            bgColor: ColorThemes.lightBlue,
            link: "https://craftsforcharity.com/about-us/",
          },
        ].map((afforgs, i) => (
          <RFAHomeAffOrgsCard
            key={i}
            org={afforgs.label}
            link={afforgs.link}
            linkColor={afforgs.linkColor}
            bgColor={afforgs.bgColor}
            logo={afforgs.logo}
          />
        ))}
      </Container>
      <Container>
        <h3 style={sponsorsLabel}>
          Supported by the following organizations and over 50 independent
          donors:
        </h3>
        <br />
        <br />
        <div className="d-flex justify-content-around flex-wrap">
          {[LM, TF, WMM, Google, NSP].map((sponsor, i) => (
            <Image
              key={i}
              className="m-3"
              style={sponsorImageSize}
              src={sponsor}
            />
          ))}
        </div>
        <br />
        <br />
        <h3 style={sponsorsLabel}>
          Proud partners of the following organizations:
        </h3>
        <br />
        <br />
        <div className="d-flex justify-content-around flex-wrap">
          {[AH, YMCA, NGN, WH].map((partner, i) => (
            <Image
              key={i}
              className="m-2"
              style={sponsorImageSize}
              src={partner}
            />
          ))}
        </div>
        <br/>
        <br/>
      </Container>
    </>
  );
};
