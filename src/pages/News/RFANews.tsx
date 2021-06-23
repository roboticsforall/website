import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { RFAHeader } from "@/components/RFAHeader";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png";
import paloaltoonline from "@/media/News/Palo-Alto-Online.png";
import mercurynews from "@/media/News/Mercury-News.png";
import houseofreps from "@/media/News/House-of-Representatives.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const photosImport = Array.from(
  { length: 10 },
  (_, i) => import(`../../media/Photos/${(i + 1).toString()}.jpg`)
);

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export const RFANews: React.FC = () => {
  const [images, setImages] = useState(
    [] as {
      media_type: string;
      media_url: string;
      key: string;
      permalink: string;
      id: string;
    }[]
  );
  useEffect(() => {
    (async () => {
      const data = await fetch(
        "https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url&&access_token=IGQVJYTWU0MzNrQW85YkVBdTZA5ck5GQnI5OF95Wm81SWN1U3pyaUlLbXdqU2pKZAGI3cEcxRjNqT013M0tDUGZAFazhQQ2dDQWQ5cWpPMTc2M3VJZA2NmYlJhaGRUT2dTaElURjhadHE2U1lFQlUzV2dlNAZDZD"
      );
      const json = await data.json();
      if (json.error) console.error("Importing images failed", json.error);
      else setImages(json.data);
    })();
  }, []);

  const [photos, setPhotos] = useState([] as { default: string }[]);
  useEffect(() => {
    Promise.all(photosImport).then(setPhotos);
  }, []);
  const buttonStyles: React.CSSProperties = {
    width: "272px",
    height: "81px",
    background: "#FA8D1F",
    borderRadius: "15px",
    border: "none",
    fontSize: "28px",
    fontFamily: "BeVietnam-Medium",
    color: "black",
  };
  const linkStyles: React.CSSProperties = {
    textDecoration: "none",
    color: "black",
    fontFamily: "Mazzard-H-Extrabold",
    fontSize: "30px",
    textAlign: "center",
  };
  const cardStyles: React.CSSProperties = {
    background: "#9be6b2",
    border: "none",
  };
<<<<<<< HEAD
  const cardStyles = { background: "#9be6b2", border: "none", borderRadius: "15px"};
=======
>>>>>>> dfcaa11152918d5d3d5bd9088565b5eecc21af06
  return (
    <div>
      <RFAHeader
        headerTextColor="#ffcc00"
        image={headerBlobYellow}
        title="See us in the news!"
        description="Learn more about our progress and community outreach."
      />
      <Container>
        <Row className="mt-3">
          <Container
            style={{
              borderRadius: "15px",
              backgroundColor: "#ffe691",
              padding: "20px",
              lineHeight: "24px",
            }}
          >
            <Row>
              <Col xs="auto">
                <h1
                  style={{
                    fontFamily: "Mazzard-H-Extrabold",
                    fontSize: "59px",
                    color: "rgb(250, 141, 31)",
                  }}
                >
                  Media
                </h1>
              </Col>
              <Col>
                <p style={{ fontSize: "20px", fontFamily: "BeVietnam-Medium" }}>
                  Find all of our press information here! This includes photos,
                  statistics, stories, and more details. Contact us at{" "}
                  <a
                    href="mailto:info@roboticsforall.net"
                    style={{ color: "black" }}
                  >
                    info@roboticsforall.net
                  </a>{" "}
                  for press inquiries.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button block size="lg" style={buttonStyles}>
                  Info Packet
                </Button>
              </Col>
              <Col>
                <Button block size="lg" style={buttonStyles}>
                  Stories
                </Button>
              </Col>
              <Col>
                <Button block size="lg" style={buttonStyles}>
                  Photos
                </Button>
              </Col>
            </Row>
          </Container>
        </Row>
        <Row className="mt-3">
          <h1
            style={{
              fontFamily: "Mazzard-H-Extrabold",
              fontSize: "59px",
              color: "#3c6",
            }}
          >
            In the news
          </h1>
          <Row className="align-items-stretch">
            <Col>
              <a
                style={linkStyles}
                href="https://paloaltoonline.com/news/2018/07/04/gunn-underclassmen-aim-to-change-educational-outcomes-through-robotics"
              >
                <Card className="h-100" style={cardStyles}>
                  <Card.Img src={paloaltoonline} />
                  <Card.Body>
                    <Card.Text>
                      Gunn Underclassmen Aim to Change Educational Outcomes
                      through Robotics
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col>
              <a
                href="https://www.mercurynews.com/2019/05/06/palo-alto-teens-turn-school-project-into-national-nonprofit-that-tackles-achievement-gap/"
                style={linkStyles}
              >
                <Card className="h-100" style={cardStyles}>
                  <Card.Img src={mercurynews} />
                  <Card.Body>
                    <Card.Text>
                      Palo Alto Teens Turn School Project into National
                      Nonprofit that Tackles Achievement Gap
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col>
              <a
                href="https://www.roboticsforall.net/uploads/1/1/5/4/115434321/scan0001_1.jpg"
                style={linkStyles}
              >
                <Card className="h-100" style={cardStyles}>
                  <Card.Img
                    src={houseofreps}
                    style={{ height: "150px", width: "150px", margin: "auto" }}
                  />
                  <Card.Body>
                    <Card.Text>
                      Congresswoman Anna G. Eshoo recognizes Robotics for All
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          </Row>
        </Row>
        <Row className="mt-3">
          <h1
            style={{
              fontFamily: "Mazzard-H-Extrabold",
              fontSize: "59px",
              color: "rgb(51,153,255)",
            }}
          >
            Social Media
          </h1>

          <Container
            style={{
              background: "rgb(51,153,255)",
              borderRadius: "15px",
              padding: "15px",
            }}
          >
            <Carousel responsive={responsive}>
              {images.map((x) => (
                <a href={x.permalink} key={x.id}>
                  {x.media_type === "VIDEO" ? (
                    <video
                      key={x.key}
                      style={{ width: "100%", display: "block" }}
                      controls
                    >
                      <source src={x.media_url} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={x.media_url}
                      key={x.key}
                      style={{ width: "100%", display: "block" }}
                      alt=""
                    />
                  )}
                </a>
              ))}
            </Carousel>
          </Container>
        </Row>
        <Row className="mt-3">
          <h1
            style={{
              fontFamily: "Mazzard-H-Extrabold",
              fontSize: "59px",
              color: "rgb(255,204,0)",
            }}
          >
            Invited Talks and Fundraising
          </h1>
          <Container
            style={{
              background: "#ffe691",
              borderRadius: "15px",
              padding: "15px",
            }}
          >
            <Carousel responsive={responsive}>
              <iframe
                style={{ width: "100%", height: "315px" }}
                src="https://www.youtube.com/embed/xK1wg0mwJP8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                style={{ width: "100%", height: "315px" }}
                src="https://www.youtube.com/embed/IqgSK39czO0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                style={{ width: "100%", height: "315px" }}
                src="https://www.youtube.com/embed/aYSU-1hKHiY"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <iframe
                style={{ width: "100%", height: "315px" }}
                src="https://www.youtube.com/embed/jHhpK_vlJcQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Carousel>
          </Container>
        </Row>
        <Row className="mt-3">
          <h1
            style={{
              fontFamily: "Mazzard-H-Extrabold",
              fontSize: "59px",
              color: "rgb(250,141,31)",
            }}
          >
            Photos
          </h1>
          <Container
            style={{
              background: "#fdc694",
              borderRadius: "15px",
              padding: "15px",
            }}
          >
            <Carousel responsive={responsive}>
              {photos.map((x, i) => (
                <div
                  style={{ height: "286px", overflow: "hidden" }}
                  key={"img" + i}
                >
                  <img src={x.default} style={{ width: "100%" }} alt="" />
                </div>
              ))}
            </Carousel>
          </Container>
        </Row>
      </Container>
    </div>
  );
};
