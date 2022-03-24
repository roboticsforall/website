import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Carousel, Image } from "react-bootstrap";
import { Header } from "@/components/Header";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png";
import paloaltoonline from "@/media/News/Palo-Alto-Online.png";
import mercurynews from "@/media/News/Mercury-News.png";
import houseofreps from "@/media/News/House-of-Representatives.png";

import { ColorThemes } from "@/colors";

const photosImport = Array.from(
  { length: 10 },
  (_, i) => import(`../../media/Photos/${(i + 1).toString()}.jpg`)
);

export const News: React.FC = () => {
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

  const linkStyles: React.CSSProperties = {
    textDecoration: "none",
    color: "black",
    textAlign: "center",
  };
  const cardStyles: React.CSSProperties = {
    background: ColorThemes.lightGreen,
    border: "none",
  };
  return (
    <div>
      <Header
        headerTextColor={ColorThemes.mainYellow}
        image={headerBlobYellow}
        title="See us in the news!"
        description="Learn more about our progress and community outreach."
      />
      <Container>
        <Row className="mt-3">
          <Container
            style={{
              backgroundColor: ColorThemes.lightYellow,
              padding: "20px",
              lineHeight: "24px",
            }}
            className="rounded"
          >
            <Row>
              <Col xs="auto">
                <h1
                  style={{
                    color: ColorThemes.mainOrange,
                  }}
                >
                  Media
                </h1>
              </Col>
              <Col>
                <p>
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
          </Container>
        </Row>
        <Row className="mt-3">
          <h1
            style={{
              color: ColorThemes.mainGreen,
            }}
          >
            In the news
          </h1>
          <Row className="g-4">
            <Col md={4}>
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
            <Col md={4}>
              <a
                href="https://www.mercurynews.com/2019/05/06/palo-alto-teens-turn-school-project-into-national-nonprofit-that-tackles-achievement-gap/"
                style={linkStyles}
              >
                <Card className="h-100 p-2" style={cardStyles}>
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
            <Col md={4}>
              <a
                href="https://www.roboticsforall.net/uploads/1/1/5/4/115434321/scan0001_1.jpg"
                style={linkStyles}
              >
                <Card className="h-100 p-2" style={cardStyles}>
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
        {/* <Row className="mt-3">
          <h1
            style={{
              color: ColorThemes.mainBlue,
            }}
          >
            Social Media
          </h1>

          <Container
            style={{
              background: ColorThemes.lightBlue,
              padding: "15px",
            }}
            className = "rounded"
          >
            <Carousel>
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
        </Row> */}
        <Row className="mt-3">
          <h1
            style={{
              color: ColorThemes.mainYellow,
            }}
          >
            Invited Talks and Fundraising
          </h1>
          <Container
            style={{
              background: ColorThemes.lightYellow,
              padding: "15px",
            }}
            className="rounded"
          >
            <Carousel>
              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <iframe
                    // style={{ width: "100%", height: "315px" }}
                    src="https://www.youtube.com/embed/xK1wg0mwJP8"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <iframe
                    // style={{ width: "100%", height: "315px" }}
                    src="https://www.youtube.com/embed/IqgSK39czO0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <iframe
                    // style={{ width: "100%", height: "315px" }}
                    src="https://www.youtube.com/embed/aYSU-1hKHiY"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="d-flex justify-content-center">
                  <iframe
                    // style={{ width: "100%", height: "315px" }}
                    src="https://www.youtube.com/embed/jHhpK_vlJcQ"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </Carousel.Item>
            </Carousel>
          </Container>
        </Row>
        <Row className="mt-3">
          <h1
            style={{
              color: ColorThemes.mainOrange,
            }}
          >
            Photos
          </h1>
          <Container
            style={{
              background: ColorThemes.lightOrange,
              padding: "15px",
            }}
            className="rounded"
          >
            <Carousel>
              {photos.map((x, i) => (
                <Carousel.Item>
                  <div className="d-flex justify-content-center">
                    <Image fluid src={x.default} alt="" />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
        </Row>
      </Container>
      <br />
      <br />
    </div>
  );
};
