import React from "react";
import {Row, Col, Image } from "react-bootstrap";
import { RFAHeader } from "@/components/RFAHeader";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png"; // add correct image here
import Markdown from "markdown-to-jsx";
import Carousel from "react-multi-carousel/lib/Carousel";
import "react-multi-carousel/lib/styles.css";
import bmInfoJSON from "@/posts/board_members.json"
import ccInfoJSON from "@/posts/curriculum_committee.json"
import adInfoJSON from "@/posts/assistant_directors.json"
import pcInfoJSON from "@/posts/pub_committee.json"



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
        textShadow: "0px 1px 3px rgba(0,0,0,0.58)",
    };
    const titleHeader: React.CSSProperties = {
        fontFamily: "BeVietnam-Bold",
        fontSize: "4vh",
        textShadow: "0px 1px 3px rgba(0,0,0,0.22)",
    };
    const bodyText: React.CSSProperties = {
        fontFamily: "BeVietnam-Medium",
        color: "white",
    };
    const imgSize = {
        height: "21vmax", 
        boxShadow: "0px 7px 8px -8px #000000"
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
        <h1 style={{color: "#fa8d1f", ...header}}>BOARD OF DIRECTORS</h1>
        <Row style = {yellowRow}>
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                transitionDuration={500}
                infinite
            >
                    {bmInfoJSON.board_members_list.map((info,i) => (
                        <div key = {i} style = {{backgroundColor: "#fa8d1f", borderRadius: "15px"}} className = "d-flex my-3 w-75 p-3">
                            <Col md = {"auto"}>
                                <Image style = {imgSize} src = {info.image.replace("/public","")} />
                            </Col>
                            <Col style = {{overflowY: "auto"}} md = {7} className = "ms-2">
                                <h1 style = {nameHeader}>{info.name}</h1>
                                <h1 style = {{color: "#c06204", ...titleHeader}}>{info.title_pronouns}</h1> 
                                <Markdown style = {bodyText}>{info.description}</Markdown>
                            </Col> 
                        </div>
                    ))}
            </Carousel>
        </Row>
        <br/>
        <br/>
        <h1 style={{color: "#33cc66", ...header}}>EXECUTIVE ASSISTANT DIRECTOR</h1>
        <Row style = {greenRow}>
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                transitionDuration={500}
                infinite
            >
                {adInfoJSON.assistant_directors_list.map((info,i) => (
                    <div key = {i} style = {{backgroundColor: "#33cc66", borderRadius: "15px"}} className = "d-flex my-3 w-75 p-3">
                        <Col md = {"auto"}>
                            <Image style = {imgSize} src = {info.image.replace("/public","")} />
                        </Col>
                        <Col style = {{overflowY: "auto"}} md = {7} className = "ms-2">
                            <h1 style = {nameHeader}>{info.name}</h1>
                            <h1 style = {{color: "#248f47", ...titleHeader}}>{info.title_pronouns}</h1> 
                            <Markdown style = {bodyText}>{info.description}</Markdown>
                        </Col> 
                    </div>
                ))}

            </Carousel>
        </Row>
        <br/>
        <br/>
        <h1 style={{color: "#3399ff", ...header}}>CURRICULUM COMMITTEE</h1>
        <Row style = {blueRow}>
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                transitionDuration={500}
                infinite
            >
                {ccInfoJSON.curriculum_committee_list.map((info,i) => (
                    <div key = {i} style = {{backgroundColor: "#3399ff", borderRadius: "15px"}} className = "d-flex my-3 w-75 p-3">
                        <Col md = {"auto"}>
                            <Image style = {imgSize} src = {info.image.replace("/public","")} />
                        </Col>
                        <Col style = {{overflowY: "auto"}} md = {7} className = "ms-2">
                            <h1 style = {nameHeader}>{info.name}</h1>
                            <h1 style = {{color: "#006bd6", ...titleHeader}}>{info.title_pronouns}</h1>
                            <Markdown style = {bodyText}>{info.description}</Markdown>
                        </Col>
                    </div>
                ))}

            </Carousel>
        </Row>
        <br/>
        <br/>
        <h1 style={{color: "#ffcc00", ...header}}>PUBLICITY COMMITTEE</h1>
        <Row style={orangeRow}>
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                transitionDuration={500}
                infinite
            >
                {pcInfoJSON.pub_committee.map((info,i) => (
                    <div key = {i} style = {{backgroundColor: "#ffcc00", borderRadius: "15px"}} className = "d-flex my-3 w-75 p-3">
                        <Col md = {"auto"}>
                            <Image style = {imgSize} src = {info.image.replace("/public","")} />
                        </Col>
                        <Col style = {{overflowY: "auto"}} md = {7} className = "ms-2">
                            <h1 style = {nameHeader}>{info.name}</h1>
                            <h1 style = {{color: "#b38f00", ...titleHeader}}>{info.title_pronouns}</h1>
                            <Markdown style = {bodyText}>{info.description}</Markdown>
                        </Col>
                    </div>
                ))}

            </Carousel>
        </Row>
        <br/>
    </div>
  );
};
