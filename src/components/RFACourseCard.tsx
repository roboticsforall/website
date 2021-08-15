import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import Markdown from "markdown-to-jsx";
import exitIcon from "../media/Icons/exitIcon.svg";


export const RFACourseCard: React.FC<{
  link: string;
  title: string;
  courseImage: string;
  webpage: string;
  dropdownCourseDescription: string;
  dropdownCourseImage: string;
}> = (props) => {

  const [dropdownDisplay, setDropdownDisplay] = React.useState("none"); 

  const courseImageSize: React.CSSProperties = {
    height: "7vmax",
  };
  const tobyImageSize: React.CSSProperties = {
    height: "20vmax",
  };
  const text: React.CSSProperties = {
    fontFamily: "Oswald-Medium",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  };
  const dropdownControl:React.CSSProperties = {
    display: dropdownDisplay,
    position: "fixed",
    left: 0,
    top: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.4)" /* Black w/ opacity */
  }
  const dropdownContainer:React.CSSProperties = {
    position: "fixed",
    left: "50%",
    top: "50%",
    width: "100vw",
    transform: "translate(-50%, -50%)",
  }
  const dropdownHeader:React.CSSProperties = {
    display: 'flex',
    justifyContent: "space-between"
  }
  const dropdownHeaderText:React.CSSProperties = {
    fontFamily: "Oswald-Medium",
    fontSize: "4vmax",
  }
  const dropdownText:React.CSSProperties = {
    fontFamily: "BeVietnam-Medium",
    fontSize: "1.6vmax"
  }
  return (
    <>
      <Col
        className = {`${props.webpage}-flag-course-card`}
        md={3}
      >
        <button onClick = {() => {setDropdownDisplay("flex")}} className="w-100 m-0">
            <div className = "d-flex justify-content-center">
              <Image style={courseImageSize} src={props.courseImage} />
            </div>
            <div className = "text-center">
                <h3 style={text}>
                    {props.title}
                </h3>
            </div>
        </button>
        <div style = {dropdownControl}>
          <div style = {dropdownContainer} className = "d-flex justify-content-center">
              <Row className = "w-75" style = {{backgroundColor: "#ffdb4d", borderRadius: "15px", boxShadow: "-1px 8px 15px 1px rgba(0,0,0,0.57)"}}>
                <header style = {dropdownHeader}>
                  <h1 style = {dropdownHeaderText}>{props.title.toUpperCase()}</h1>
                  <button onClick = {() => {setDropdownDisplay("none")}}><img width = "50" src = {exitIcon}/></button>
                </header>
                <Col md = {7}>
                  <h4 style = {dropdownText}><Markdown>{props.dropdownCourseDescription}</Markdown></h4>
                </Col>
                <Col className = "d-flex flex-column align-items-center justify-content-between">
                  <Image className = "p-2" style = {{borderRadius: "15px", backgroundColor: "white", ...tobyImageSize}} src = {props.dropdownCourseImage}></Image>
                  <a
                    style={{ color: "#006bd6", fontFamily: "BeVietnam-ExtraBold" }}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-center hyperlink aff-org-card-link"
                    href={props.link}
                  >
                    Learn More
                  </a>
                </Col>
              </Row>
          </div>
        </div>
      </Col>
    </>
  );
};
