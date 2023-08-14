import React from "react";
import { Container, Row, Col, Carousel, Image, Button } from "react-bootstrap";
import { Header } from "@/components/Header";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png";
import paloaltoonline from "@/media/News/Palo-Alto-Online.png";
import mercurynews from "@/media/News/Mercury-News.png";
import houseofreps from "@/media/News/House-of-Representatives.png";

import { ColorThemes } from "@/colors";

export const News: React.FC = () => {
  return (
    <div>
      <Header
        headerTextColor={ColorThemes.mainYellow}
        image={headerBlobYellow}
        title="See us in the news!"
        description="Learn more about our progress and community outreach."
      />
      <Container>
        <section>
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
                  <a href="mailto:info@roboticsforall.net">
                    info@roboticsforall.net
                  </a>{" "}
                  for press inquiries.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <Row>
          <h1
            style={{
              color: ColorThemes.mainGreen,
            }}
          >
            In the news
          </h1>
          <Row className="g-4">
            <Col md={4}>
              <Button
                href="https://paloaltoonline.com/news/2018/07/04/gunn-underclassmen-aim-to-change-educational-outcomes-through-robotics"
                variant="primaryGreen"
              >
                <Image fluid src={paloaltoonline} />
                <p>
                  Gunn Underclassmen Aim to Change Educational Outcomes through
                  Robotics
                </p>
              </Button>
            </Col>
            <Col md={4}>
              <Button
                href="https://www.mercurynews.com/2019/05/06/palo-alto-teens-turn-school-project-into-national-nonprofit-that-tackles-achievement-gap/"
                variant="primaryGreen"
              >
                <Image fluid src={mercurynews} />
                <p>
                  Palo Alto Teens Turn School Project into National Nonprofit
                  that Tackles Achievement Gap
                </p>
              </Button>
            </Col>
            <Col md={4}>
              <Button
                href="https://www.roboticsforall.net/uploads/1/1/5/4/115434321/scan0001_1.jpg"
                variant="primaryGreen"
              >
                <Image fluid src={houseofreps} />
                <p>Congresswoman Anna G. Eshoo recognizes Robotics for All</p>
              </Button>
            </Col>
          </Row>
        </Row>
        <Row>
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
      </Container>
      <br />
      <br />
    </div>
  );
};
