import React from "react";
import { RFAHeader } from "@/components/RFAHeader";
import { Container, Row, Image, Col } from "react-bootstrap";
import homePageVideo from "@/media/homePageVideo.mp4";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png";
import MFALogo from "@/media/AffiliatedOrgs/MFA_Logo.png";
import CFCLogo from "@/media/AffiliatedOrgs/CFC_Logo.png";
import TFALogo from "@/media/AffiliatedOrgs/TFA_Logo.png";

import { ColorThemes } from "@/colors";

export const RFAAffOrgs: React.FC = () => {
  return (
    <div>
      <RFAHeader
        headerTextColor={ColorThemes.mainYellow}
        image={headerBlobYellow}
        title={"Check out our Affiliated Organizations!"}
        description={
          "Learn more about our affiliate organizations started from Robotics for All volunteers! "
        }
      />
      <Container>
        <br />
        <br />
        <RFAAboutAffOrgsCard
          website={"https://www.tutoringforall.org"}
          logo={TFALogo}
          linkColor={ColorThemes.darkOrange}
          orgAbrv={"TFA"}
          mainColor={ColorThemes.mainOrange}
          affOrgName={"Tutoring For All"}
          affOrgsDescription={
            "Tutoring for All is a branch of the non-profit organization Robotics for All. Our goal is to provide free, quality tutoring services to primarily low income and disadvantaged students."
          }
        />
        <br />
        <br />
        <RFAAboutAffOrgsCard
          website={"https://www.mentoringforall.org"}
          logo={MFALogo}
          linkColor={ColorThemes.darkGreen}
          orgAbrv={"MFA"}
          mainColor={ColorThemes.mainGreen}
          affOrgName={"Mentoring For All"}
          affOrgsDescription={
            "Mentoring for All is a branch of the non-profit organization Robotics for All with the goal of providing guidance on the path towards future success for underserved high school students."
          }
        />
        <br />
        <br />
        <RFAAboutAffOrgsCard
          website={"https://craftsforcharity.com/"}
          logo={CFCLogo}
          linkColor={ColorThemes.darkBlue}
          orgAbrv={"CFC"}
          mainColor={ColorThemes.mainBlue}
          affOrgName={"Crafts For Charity"}
          affOrgsDescription={
            "Crafts for Charity is a student-led nonprofit providing classes and opportunities for everyone to give back to their communities through crafting! We help donate handmade goods to charities for causes like homelessness."
          }
        />
      </Container>
      <br/>
      <br/>

    </div>
  );
};

const RFAAboutAffOrgsCard: React.FC<{
  mainColor: string;
  affOrgName: string;
  logo: string;
  affOrgsDescription: string;
  website: string;
  orgAbrv: string;
  linkColor: string;
}> = (props) => {
  const affOrgsCardText = {
    fontFamily: "BeVietnam-Medium",
    fontSize: "large",
  };

  const affOrgsHeader = {
    fontFamily: "Mazzard-H-Extrabold",
    color: props.mainColor,
  };
  const affOrgsLogoSize = {
    height: "20vh",
  };

  return (
    <Row className="justify-content-center">
      <Col className="" md={11} lg={11} xl={11}>
        {window.innerWidth >= 768 && (
          <Row>
            <h1 style={affOrgsHeader} className="header-size">
              {props.affOrgName}
            </h1>
          </Row>
        )}
        <Row
          style={{ backgroundColor: props.mainColor + "80", borderRadius: 15 }}
        >
          {window.innerWidth >= 768 ? (
            <Col sm={3} md={3} lg={3} xl={3} className="p-3 center-align">
              <Image style={affOrgsLogoSize} className="" src={props.logo} />
            </Col>
          ) : (
            <Col>
              <Row className="p-2">
                <Col className="center-align">
                  <Image style={affOrgsLogoSize} src={props.logo} />
                </Col>
                <Col className="center-align">
                  <h1 style={affOrgsHeader} className="text-center header-size">
                    {props.affOrgName}
                  </h1>
                </Col>
              </Row>
            </Col>
          )}
          <Col md={5} lg={5} xl={5} className="p-3 center-align">
            <video className="w-100 h-100" autoPlay muted loop>
              <source src={homePageVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col md={4} lg={4} xl={4} className="p-3">
            <Container>
              <Row className="justify-content-center">
                <p style={affOrgsCardText} className="text-center">
                  {props.affOrgsDescription}
                </p>
                <a
                  style={{ color: props.linkColor }}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-center hyperlink aff-org-card-link"
                  href={props.website}
                >
                  VISIT {props.orgAbrv}
                </a>
              </Row>
            </Container>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
