import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Markdown from "markdown-to-jsx";
import { ColorThemes } from "@/colors";
import Carousel from "react-multi-carousel/lib/Carousel";
import "react-multi-carousel/lib/styles.css";
import exitIcon from "@/media/Icons/exitIcon.svg";

interface IProps {
  infoJSON: any;
  backgroundColor: string;
  color: string
}

export const MeetTheTeamCard: React.FC<IProps> = (props: IProps) => {
  const [dropdownDisplay, setDropdownDisplay] = React.useState(<></>);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  const imgSize = {
    height: "21vmax",
    boxShadow: "0px 7px 8px -8px #000000",
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

  const dropdownControl: React.CSSProperties = {
    zIndex: 10000,
    position: "fixed",
    left: 0,
    top: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.4)" /* Black w/ opacity */,
  };
  const dropdownContainer: React.CSSProperties = {
    position: "fixed",
    left: "50%",
    top: "50%",
    width: "100vw",
    transform: "translate(-50%, -50%)",
  };
  const dropdownHeader: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
  };
  const dropdownHeaderText: React.CSSProperties = {
    fontFamily: "Oswald-Medium",
    fontSize: "4vmax",
  };
  const dropdownText: React.CSSProperties = {
    fontFamily: "BeVietnam-Medium",
    fontSize: "1.6vmax",
  };

  const constructModal = (info : any) => {
      setDropdownDisplay(
        <div style={dropdownControl}>
        <div
          style={dropdownContainer}
          className="d-flex justify-content-center"
        >
          <Row
            className="w-75"
            style={{
              backgroundColor: props.backgroundColor,
              borderRadius: "15px",
              boxShadow: "-1px 8px 15px 1px rgba(0,0,0,0.57)",
            }}
          >
            <header style={dropdownHeader}>
                <h1 style={nameHeader}>{info.name}</h1>
              
              <button
                onClick={() => {
                  setDropdownDisplay(<></>);
                }}
              >
                <img width="50" src={exitIcon} />
              </button>
            </header>
            <h1 style={{ color: props.color, ...titleHeader }}>
            {info.title_pronouns}
          </h1>
            <p><Markdown style={bodyText}>{info.description}</Markdown></p>

          </Row>
        </div>
      </div>
      );
  }

  return (
    <>
    <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        transitionDuration={500}
    >
    {props.infoJSON.map((info : any, i : number) => (
      <div
        style={{
          backgroundColor: props.backgroundColor,
          borderRadius: "15px",
        }}
        onClick={() => {
            constructModal(info);
          }}
        className="d-flex my-3 p-3"
    >
        <Col md={"auto"}>
          <Image
            style={imgSize}
            src={info.image.replace("/public", "")}
          />
        </Col>
        {(window.innerWidth <= 600) ? (<></>) : (
            <Col style={{ overflowY: "auto" }} md={7} className="ms-2">
          <h1 style={nameHeader}>{info.name}</h1>
          <h1 style={{ color: props.color, ...titleHeader }}>
            {info.title_pronouns}
          </h1>
          <Markdown style={bodyText}>{info.description}</Markdown>
        </Col>
        )}
        </div>
        ))}
    </Carousel>

    {dropdownDisplay}
    </>
  );
};
