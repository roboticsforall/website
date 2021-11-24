import React from "react";
import {Col, Image } from "react-bootstrap";
import { Header } from "@/components/Header";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png"; // add correct image here
import Markdown from "markdown-to-jsx";
import Carousel from "react-multi-carousel/lib/Carousel";
import "react-multi-carousel/lib/styles.css";
import bmInfoJSON from "@/posts/board_members.json"
import ccInfoJSON from "@/posts/curriculum_committee.json"
import adInfoJSON from "@/posts/assistant_directors.json"
import pcInfoJSON from "@/posts/pub_committee.json"

import { ColorThemes } from "@/colors";

export const MeetTheTeam: React.FC = () => {

    const yellowRow = {
        backgroundColor: ColorThemes.lightYellow
    }
    const greenRow = {
        backgroundColor: ColorThemes.lightGreen
    }
    const blueRow = {
        backgroundColor: ColorThemes.lightBlue
    }
    const orangeRow = {
        backgroundColor: ColorThemes.lightOrange
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
      <Header
        headerTextColor={ColorThemes.mainYellow}
        image={headerBlobYellow}
        title={"Get to Know our Team!"}
        description={
          "Get to know the faces behind Robotics for All!"
        }
      />
      <br />
        <h1 style={{color: ColorThemes.mainOrange, ...header}}>BOARD OF DIRECTORS</h1>
        <div style = {yellowRow}>
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                transitionDuration={500}
                centerMode
                infinite
            >
                    {bmInfoJSON.board_members_list.map((info,i) => (
                        <div key = {i} style = {{backgroundColor: ColorThemes.mainYellow, borderRadius: "15px"}} className = "d-flex my-3 p-3">
                            <Col>
                                <Image style = {imgSize} src = {info.image.replace("/public","")} />
                            </Col>
                            <Col style = {{overflowY: "auto"}} className = "ms-2">
                                <h1 style = {nameHeader}>{info.name}</h1>
                                <h1 style = {{color: ColorThemes.darkYellow, ...titleHeader}}>{info.title_pronouns}</h1> 
                                <Markdown style = {bodyText}>{info.description}</Markdown>
                            </Col> 
                        </div>

                    ))}
            </Carousel>
        </div>
        <br/>
        <br/>
        <h1 style={{color: ColorThemes.mainGreen, ...header}}>EXECUTIVE ASSISTANT DIRECTOR</h1>
        <div style = {greenRow}>
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                transitionDuration={500}
                centerMode
                infinite
            >
                {adInfoJSON.assistant_directors_list.map((info,i) => (
                    <div key = {i} style = {{backgroundColor: ColorThemes.mainGreen, borderRadius: "15px"}} className = "d-flex my-3 p-3">
                        <Col md = {"auto"}>
                            <Image style = {imgSize} src = {info.image.replace("/public","")} />
                        </Col>
                        <Col style = {{overflowY: "auto"}} md = {7} className = "ms-2">
                            <h1 style = {nameHeader}>{info.name}</h1>
                            <h1 style = {{color: ColorThemes.darkGreen, ...titleHeader}}>{info.title_pronouns}</h1> 
                            <Markdown style = {bodyText}>{info.description}</Markdown>
                        </Col> 
                    </div>
                ))}

            </Carousel>
        </div>
        <br/>
        <br/>
        <h1 style={{color: ColorThemes.mainBlue, ...header}}>CURRICULUM COMMITTEE</h1>
        <div style = {blueRow}>
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                transitionDuration={500}
                centerMode
                infinite
            >
                {ccInfoJSON.curriculum_committee_list.map((info,i) => (
                    <div key = {i} style = {{backgroundColor: ColorThemes.mainBlue, borderRadius: "15px"}} className = "d-flex my-3 p-3">
                        <Col md = {"auto"}>
                            <Image style = {imgSize} src = {info.image.replace("/public","")} />
                        </Col>
                        <Col style = {{overflowY: "auto"}} md = {7} className = "ms-2">
                            <h1 style = {nameHeader}>{info.name}</h1>
                            <h1 style = {{color: ColorThemes.darkBlue, ...titleHeader}}>{info.title_pronouns}</h1>
                            <Markdown style = {bodyText}>{info.description}</Markdown>
                        </Col>
                    </div>
                ))}

            </Carousel>
        </div>
        <br/>
        <br/>
        <h1 style={{color: ColorThemes.mainYellow, ...header}}>PUBLICITY COMMITTEE</h1>
        <div style={orangeRow}>
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                transitionDuration={500}
                centerMode
                infinite
            >
                {pcInfoJSON.pub_committee.map((info,i) => (
                    <div key = {i} style = {{backgroundColor: ColorThemes.mainOrange, borderRadius: "15px"}} className = "d-flex my-3 p-3">
                        <Col md = {"auto"}>
                            <Image style = {imgSize} src = {info.image.replace("/public","")} />
                        </Col>
                        <Col style = {{overflowY: "auto"}} md = {7} className = "ms-2">
                            <h1 style = {nameHeader}>{info.name}</h1>
                            <h1 style = {{color: ColorThemes.darkOrange, ...titleHeader}}>{info.title_pronouns}</h1>
                            <Markdown style = {bodyText}>{info.description}</Markdown>
                        </Col>
                    </div>
                ))}

            </Carousel>
        </div>
        <br/>
    </div>
  );
};
