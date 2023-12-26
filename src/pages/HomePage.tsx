import React from "react";
import {
  Row,
  Container,
  Col,
  Image,
  Carousel,
  Card,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { HomeAffOrgsCard } from "../components/HomeAffOrgsCard";

import CFCLogo from "@/media/AffiliatedOrgs/CFC_Logo.png";

import carouselImagesJSON from "@/posts/homepage_carousel.json";

import WH from "@/media/Sponsors/wh-600w.png";
import LQFF from "@/media/Sponsors/lqff-600w.png";

import house320w from "@/media/HoverImages/house-320w.png";
import house600w from "@/media/HoverImages/house-600w.png";
import apple320w from "@/media/HoverImages/apple-320w.png";
import apple600w from "@/media/HoverImages/apple-600w.png";
import world320w from "@/media/HoverImages/world-320w.png";
import world600w from "@/media/HoverImages/world-600w.png";

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
        <Carousel>
          {carouselImagesJSON.homepage_carousel_images_list.map((x) => (
            <Carousel.Item>
              <picture>
                <source
                  media="(max-width: 800px)"
                  src={`${x.image}-/crop/4:3/`}
                  srcSet={`${x.image}-/crop/4:3/-/progressive/yes/-/format/webp/-/resize/600x/600.webp 600w,
                          ${x.image}-/crop/4:3/-/progressive/yes/-/format/webp/-/resize/750x/750.webp 750w`}
                  type="image/webp"
                  sizes="50vw"
                />
                <source
                  media="(max-width: 800px)"
                  src={`${x.image}-/crop/4:3/`}
                  srcSet={`${x.image}-/crop/4:3/-/progressive/yes/-/format/png/-/resize/600x/600.png 600w,
                          ${x.image}-/crop/4:3/-/progressive/yes/-/format/png/-/resize/750x/750.png 750w`}
                  type="image/png"
                  sizes="50vw"
                />
                <source
                  media="(max-width: 800px)"
                  src={`${x.image}-/crop/4:3/`}
                  srcSet={`${x.image}-/crop/4:3/-/progressive/yes/-/format/jpeg/-/resize/600x/600.jpeg 600w,
                          ${x.image}-/crop/4:3/-/progressive/yes/-/format/jpeg/-/resize/750x/750.jpeg 750w`}
                  type="image/jpeg"
                  sizes="50vw"
                />
                <source
                  media="(min-width: 801px)"
                  src={`${x.image}-/crop/21:9/`}
                  srcSet={`${x.image}-/crop/21:9/-/progressive/yes/-/format/webp/-/resize/900x/900.webp 900w,
                          ${x.image}-/crop/21:9/-/progressive/yes/-/format/webp/-/resize/1200x/1200.webp 1200w`}
                  type="image/webp"
                  sizes="(max-width: 1000px) 50vw, 90vw"
                  alt={x.alt}
                />
                <source
                  media="(min-width: 801px)"
                  src={`${x.image}-/crop/21:9/`}
                  srcSet={`${x.image}-/crop/21:9/-/progressive/yes/-/format/png/-/resize/900x/900.png 900w,
                          ${x.image}-/crop/21:9/-/progressive/yes/-/format/png/-/resize/1200x/1200.png 1200w`}
                  type="image/png"
                  sizes="(max-width: 1000px) 50vw, 90vw"
                />
                <source
                  media="(min-width: 801px)"
                  src={`${x.image}-/crop/21:9/`}
                  srcSet={`${x.image}-/crop/21:9/-/progressive/yes/-/format/jpeg/-/resize/900x/900.jpeg 900w,
                          ${x.image}-/crop/21:9/-/progressive/yes/-/format/jpeg/-/resize/1200x/1200.jpeg 1200w`}
                  type="image/jpeg"
                  sizes="(max-width: 1000px) 50vw, 90vw"
                />
                <img
                  style={{ width: "100%" }}
                  src={x.image + "-/crop/21:9/"}
                  alt={x.alt}
                />
              </picture>
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
                src: house600w,
                srcset: `${house320w} 320w, ${house600w} 600w`,
                alt: "Graphic of blue house",
                label: "Students and Parents",
                color: ColorThemes.mainBlue,
              },
              {
                location: "/enroll/schools",
                src: apple600w,
                srcset: `${apple320w} 320w, ${apple600w} 600w`,
                alt: "Graphic of green apple",
                label: "Schools and Partners",
                color: ColorThemes.mainGreen,
              },
              {
                location: "/volunteer/overview",
                src: world600w,
                srcset: `${world320w} 320w, ${world600w} 600w`,
                alt: "Graphic of orange planet",
                label: "Volunteers",
                color: ColorThemes.mainOrange,
              },
            ].map((info, i) => (
              <Col key={i} md={4} className="text-center">
                <Link className="hyperlink" to={info.location}>
                  <Image
                    src={info.src}
                    srcSet={info.srcset}
                    sizes={"50vw"}
                    alt={info.alt}
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
        <Container style={{ maxWidth: "75%" }}>
          <h1 style={affOrgsHeader}>News</h1>
          <br />
          <Row>
            {[
              {
                title: "News 1",
                text: "This is a sample text",
                piclink:
                  "https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?cs=srgb&dl=pexels-karl-solano-2883049.jpg&fm=jpg",
              },
              {
                title: "News 2",
                text: "This is a sample text",
                piclink:
                  "https://img.freepik.com/free-photo/modern-office-with-view-city_1340-37363.jpg",
              },
              {
                title: "News 3",
                text: "This is a sample text",
                piclink:
                  "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3AtNDY1LXRkLTcxNjQuanBn.jpg",
              },
            ].map((info, i) => (
              <Col key={i}>
                <Card
                  style={{
                    background: "transparent",
                    marginLeft: "15px",
                    marginRight: "15px",
                    fontWeight: "bolder",
                    // padding: "10px",
                    // border: "5px solid " + ColorThemes.lightGreen,
                    // boxShadow: "0 0 5px black",
                    marginBottom: "30px",
                  }}
                  className=".shadow-5"
                  key={i}
                >
                  <Card.Img variant="top" src={info.piclink} />
                  <Card.Body>
                    <Card.Title
                      style={{
                        fontSize: "20px",
                        color: ColorThemes.mainBlue,
                      }}
                    >
                      {info.title}
                    </Card.Title>
                    <Card.Text style={{ color: "black" }}>
                      <span style={{ fontSize: "17px" }}>{info.text}</span>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
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
              alt: "Crafts for Charity Logo",
              logo: CFCLogo,
              linkColor: ColorThemes.darkBlue,
              bgColor: ColorThemes.lightBlue,
              link: "https://craftsforcharity.com/about-us/",
            },
          ].map((afforgs, i) => (
            <HomeAffOrgsCard
              key={i}
              org={afforgs.label}
              alt={afforgs.alt}
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
            {[
              {
                image: WH,
                alt: "Wilmerhale Logo",
              },
              {
                image: LQFF,
                alt: "Inituitive Logo",
              },
            ].map((sponsor, i) => (
              <Image
                key={i}
                className="m-3"
                style={sponsorImageSize}
                src={sponsor.image}
                alt={sponsor.alt}
                fluid
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
