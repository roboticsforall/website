import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { RFAHeader } from "@/components/RFAHeader";
import { RFAFAQDropdowns } from "@/components/RFAFAQDropdowns";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png"; // add correct image here
import classFAQJSON from "@/posts/faqs/class_faqs.json";
import Markdown from "markdown-to-jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import maxImg from "@/media/LeadershipTeam/max.png";



export const RFAMeetTheTeam: React.FC = () => {

    const yellowRow = {
        backgroundColor: "#ffcc004d"
    }
    const greenRow = {
        backgroundColor: "#33cc664d"
    }
    const blueRow = {
        backgroundColor: "#3399ff80"
    }
    const orangeRow = {
        backgroundColor: "#ffcc0080"
    }
    const header: React.CSSProperties = {
        fontFamily: "Oswald-Medium",
        fontSize: "9vh",
        textAlign: "center",
    };
    const nameHeader: React.CSSProperties = {
        fontFamily: "Oswald-Medium",
        fontSize: "7vh",
    };
    const titleHeader: React.CSSProperties = {
        fontFamily: "BeVietnam-Bold",
        fontSize: "4vh",
    };
    const bodyText: React.CSSProperties = {
        fontFamily: "BeVietnam-Medium",
        color: "white",
    };
    const imgSize = {
        height: "21vmax",
    };
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1,
        },
      };


  return (
    <div>
      <RFAHeader
        headerTextColor={"#ffcc00"}
        image={headerBlobYellow}
        title={"Get to Know our Team!"}
        description={
          "Get to know the faces behind Robotics for All!"
        }
      />
      <br />
        <h1 style={header}>BOARD OF DIRECTORS</h1>
        <Row style = {yellowRow}>
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                transitionDuration={500}
                infinite
            >
                {[1, 2, 3].map(number => (
                    <div style = {imgSize} className = "d-flex">
                        <Col md = {"auto"}>
                            <Image style = {imgSize} src = {maxImg} />
                        </Col>
                        <Col style = {{overflowY: "scroll"}}md = {7} className = "ms-2">
                            <h1 style = {nameHeader}>Maximillian Goetz</h1>
                            <h1 style = {{color: "#c06204", ...titleHeader}}>President & CEO (he/him)</h1>
                            <p style = {bodyText}>​Maximilian Goetz is a first year student at Georgetown University's McDonough School of Business. In April 2017, he founded Robotics for All when he was a high school freshman at Henry. M Gunn High School in Palo Alto, CA. While volunteering for Reading Partners at Mariano Castro Elementary, Maximilian realized the lack of after school enrichment programs at the school, particularly in the fields of STEM. From there, he built Robotics for All from ground up, teaching its first classes and eventually expanding it into a national 501(c)(3) nonprofit organization. In addition to Robotics for All, Maximilian is a student advisor to Congresswoman Anna Eshoo, a lead legislative aide to Councilman Greg Tanaka, and an online English teacher to students in China. In the past, Maximilian has volunteered at the YMCA, Wizbots, and was a member of the Palo Alto Youth Council. Maximilian has served over 3,000 community service hours since his freshman year of high school, and is honored to be a two time President's Gold Community Service Award recipient. In his free time, Maximilian is an avid aviation geek, enjoys photography and recreational biking. www.maximiliangoetz.com</p>
                        </Col>
                    </div>
                ))}

            </Carousel>
        </Row>
        <br/>
        <br/>
        <h1 style={header}>EXECUTIVE ASSISTANT DIRECTOR</h1>
        <Row style = {greenRow}>
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                transitionDuration={500}
                infinite
            >
                {[1, 2, 3].map(number => (
                    <div style = {imgSize} className = "d-flex">
                        <Col md = {"auto"}>
                            <Image style = {imgSize} src = {maxImg} />
                        </Col>
                        <Col style = {{overflowY: "scroll"}}md = {7} className = "ms-2">
                            <h1 style = {nameHeader}>Maximillian Goetz</h1>
                            <h1 style = {{color: "#248f47", ...titleHeader}}>President & CEO (he/him)</h1>
                            <p style = {bodyText}>​Maximilian Goetz is a first year student at Georgetown University's McDonough School of Business. In April 2017, he founded Robotics for All when he was a high school freshman at Henry. M Gunn High School in Palo Alto, CA. While volunteering for Reading Partners at Mariano Castro Elementary, Maximilian realized the lack of after school enrichment programs at the school, particularly in the fields of STEM. From there, he built Robotics for All from ground up, teaching its first classes and eventually expanding it into a national 501(c)(3) nonprofit organization. In addition to Robotics for All, Maximilian is a student advisor to Congresswoman Anna Eshoo, a lead legislative aide to Councilman Greg Tanaka, and an online English teacher to students in China. In the past, Maximilian has volunteered at the YMCA, Wizbots, and was a member of the Palo Alto Youth Council. Maximilian has served over 3,000 community service hours since his freshman year of high school, and is honored to be a two time President's Gold Community Service Award recipient. In his free time, Maximilian is an avid aviation geek, enjoys photography and recreational biking. www.maximiliangoetz.com</p>
                        </Col>
                    </div>
                ))}

            </Carousel>
        </Row>
        <br/>
        <br/>
        <h1 style={header}>CURRICULUM COMMITTEE</h1>
        <Row style = {blueRow}>
        <p>Add some text</p>
        </Row>
        <br/>
        <br/>
        <h1 style={header}>PUBLICITY COMMITTEE</h1>
        <Row style={orangeRow}>
        <p>Add some text</p>
        </Row>
        <br/>
    </div>
  );
};
