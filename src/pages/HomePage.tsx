import React from "react";
import { Row, Container, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
// import homePageVideo from "@/media/homePageVideo.mp4";

import TFALogo from "@/media/AffiliatedOrgs/TFA_Logo.png";
import CFCLogo from "@/media/AffiliatedOrgs/CFC_Logo.png";

import LM from "@/media/Sponsors/lm.png";
import TF from "@/media/Sponsors/tf.png";
import WMM from "@/media/Sponsors/wmm.png";
import Google from "@/media/Sponsors/google.png";
import NSP from "@/media/Sponsors/nsp.png";
import AH from "@/media/Sponsors/ah.png";
import NGN from "@/media/Sponsors/ngn.png";
import WH from "@/media/Sponsors/wh.png";
import YMCA from "@/media/Sponsors/ymca.png";

import home from "@/media/HoverImages/house_1.png";
import apple from "@/media/HoverImages/apple_1.png";
import world from "@/media/HoverImages/world_1.png";

import { ColorThemes } from "../colors";

export const HomePage: React.FC = () => {
  const header: React.CSSProperties = {
    fontFamily: "Oswald-Medium",
    color: ColorThemes.mainYellow,
    textAlign: "center",
  };
  const headerDescription: React.CSSProperties = {
    fontFamily: "BeVietnam-Regular",
    textAlign: "center",
  };
  const sponsorsLabel: React.CSSProperties = {
    fontFamily: "BeVietnam-Bold",
    textAlign: "center",
  };
  const affOrgsHeader: React.CSSProperties = {
    fontFamily: "Oswald-Medium",
    color: ColorThemes.mainYellow,
    textAlign: "center",
    wordWrap: "break-word",
  };
  const sponsorImageSize: React.CSSProperties = {
    maxHeight: "7vh",
  };
  const yellowRow = {
    backgroundColor: ColorThemes.lightYellow,
  };

  return (
<>
    <div style={yellowRow} className="d-flex justify-content-center">
      <video
        className="video-width"
        autoPlay
        loop
        muted
        // src={homePageVideo}
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

      <div style = {yellowRow} className="d-flex justify-content-center p-5">
        <Container>
          <Row>
            {[
              {
                to: "/enroll/individlearners",
                src: home,
                label: "Students and Parents",
                color: ColorThemes.mainBlue,
              },
              {
                to: "/enroll/schools",
                src: apple,
                label: "Schools and Partners",
                color: ColorThemes.mainGreen,
              },
              {
                to: "/volunteer/overview",
                src: world,
                label: "Volunteers",
                color: ColorThemes.mainOrange,
              },
            ].map((info, i) => (
              <Col md={4} className="text-center">
                <Link to = {info.to} className="hyperlink">
                  <Image fluid src={info.src} />
                  <h2
                    style={{
                      fontFamily: "Oswald-Medium",
                      textAlign: "center",
                      color: info.color,
                    }}
                  >
                    {info.label}
                  </h2>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Container>
        <br></br>
        <br></br>
        <h1 style={affOrgsHeader}>AFFILIATED ORGANIZATIONS</h1>
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
            label: "crafts for charity",
            logo: CFCLogo,
            linkColor: ColorThemes.darkBlue,
            bgColor: ColorThemes.lightBlue,
            link: "https://craftsforcharity.com/about-us/",
          },
        ].map((afforgs, i) => (
          <HomeAffOrgsCard
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
        <br />
        <br />
      </Container>
    </>
  );
};

const HomeAffOrgsCard: React.FC<{
  linkColor: string;
  bgColor: string;
  link: string;
  org: string;
  logo: string;
}> = (props) => {
  const affOrgsTitle: React.CSSProperties = {
    fontFamily: "Mazzard-H-ExtraBold",
    color: "white",
    textAlign: "center",
  };
  const imageSize: React.CSSProperties = {
    objectFit: "scale-down",
  };

  
  const useStyles = createUseStyles({
    link: {
      composes: "hyperlink",
      fontFamily: "BeVietnam-ExtraBold",
      transition: "0.2s",
      color: props.linkColor,
      "&:hover": {
        transition: "0.2s",
        color: ColorThemes.white,
      },
    },
  });
  const classes = useStyles();

  return (
    <>
      <Row
        style={{ backgroundColor: props.bgColor}}
        className="justify-content-center rounded align-items-center mx-2"
      >
        <Col
          className="d-flex justify-content-center"
          sm={3}
          md={3}
          lg={3}
          xl={3}
        >
          <Image fluid style = {imageSize} src={props.logo} />
        </Col>
        <Col md={6} lg={6} xl={6}>
          <h2 style={affOrgsTitle}>
            {props.org}
          </h2>
        </Col>
        <Col className="text-center" md={3} lg={3} xl={3}>
          <a
            href={props.link}
            target="_blank"
            className = {classes.link}
            rel="noreferrer"
          >
            <h5>LEARN MORE</h5>
          </a>
        </Col>
      </Row>
      <br />
    </>
  );
};
