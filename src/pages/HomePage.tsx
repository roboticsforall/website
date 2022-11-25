import React from "react";
import { Row, Container, Col, Image, Carousel, Ratio } from "react-bootstrap";
import { Link } from "react-router-dom";

import { HomeAffOrgsCard } from "../components/HomeAffOrgsCard";

import CFCLogo from "@/media/AffiliatedOrgs/CFC_Logo.png";

import carouselImagesJSON from "@/posts/homepage_carousel.json";

import WH from "@/media/Sponsors/wh.png";
import LQFF from "@/media/Sponsors/lqff.png";

import home from "@/media/HoverImages/house_1.png";
import apple from "@/media/HoverImages/apple_1.png";
import world from "@/media/HoverImages/world_1.png";

import { ColorThemes } from "../colors";

export const HomePage: React.FC = () => {

  const header: React.CSSProperties = {
    color: ColorThemes.mainYellow,
  };
  const sponsorsLabel: React.CSSProperties = {
    textAlign: "center",
  };
  const affOrgsHeader: React.CSSProperties = {
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
      <div>
          <Carousel fade>
            {carouselImagesJSON.homepage_carousel_images_list.map((x, i) => (
              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  {window.innerWidth > 768 ? (
                    <Image className = "imageSize" fluid src={x.image + "-/crop/21:9/"} alt="" />
                  ) : (
                    <Image className = "imageSize" fluid src={x.image + "-/crop/4:3/"} alt="" />
                  )}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
      </div>

      <section>
        <Container>
          <Row className="justify-content-center text-center">
            <h1 style={header}>ROBOTICS FOR ALL</h1>
            <p>
              Robotics For All provides free STEM education to students of all
              backgrounds, particularly students from underserved communities.
              We aim to inspire children to pursue careers in STEM later in
              their lives. We support student volunteers to teach our classes
              and engage with their local communities.
            </p>
          </Row>
        </Container>
      </section>

      <section style={yellowRow}>
        <Container>
          <Row>
            {[
              {
                location: "/enroll/individlearners",
                src: home,
                label: "Students and Parents",
                color: ColorThemes.mainBlue,
              },
              {
                location: "/enroll/schools",
                src: apple,
                label: "Schools and Partners",
                color: ColorThemes.mainGreen,
              },
              {
                location: "/volunteer/overview",
                src: world,
                label: "Volunteers",
                color: ColorThemes.mainOrange,
              },
            ].map((info, i) => (
              <Col key={i} md={4} className="text-center">
                <Link className="hyperlink" to={info.location}>
                  <Image 
                    src={info.src}
                    fluid
                  />
                  <h2
                    style={{
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
      </section>

      <section>
        <Container>
          <h1 style={affOrgsHeader}>AFFILIATED ORGANIZATIONS</h1>
          <br></br>
          {[
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
      </section>

      <section>
        <Container>
          <h3 style={sponsorsLabel}>
            Supported by the following organizations and over 50 independent
            donors:
          </h3>
          <div className="d-flex justify-content-around flex-wrap">
            {[WH, LQFF].map((sponsor, i) => (
              <Image
                key={i}
                className="m-3"
                style={sponsorImageSize}
                src={sponsor}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
