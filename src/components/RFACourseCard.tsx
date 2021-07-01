import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";

export const RFACourseCard: React.FC<{
  link: string;
  title: string;
  courseImage: string;
  tobyImage: string;
  type: string;
  dropdownCourseDescription: string;
  dropdownCourseImage: string;
}> = (props) => {
  const courseImageSize: React.CSSProperties = {
    height: "11vmax",
  };
  const tobyImageSize: React.CSSProperties = {
    height: "20vmax",
  };
  const text: React.CSSProperties = {
    fontFamily: "Oswald-Medium",
  };
  const dropdownHeader = {
    fontFamily: "Oswald-Medium",
    fontSize: "4vmax",
  }
  const dropdownText = {
    fontFamily: "BeVietnam-Medium",
    fontSize: "1.6vmax"
  }
  return (
    <>
    {(props.type == "ind") ? (
      <Col
        className="ind-learners-flag-course-card border"
        md="auto"
      >
          <a className="mb-2 hyperlink" target="_blank" href={props.link} rel="noreferrer">
          <div className="m-3 text-center">
            <Image style={courseImageSize} src={props.courseImage} />
            <h3 style={text} className="mb-4 text-center">
              {props.title}
            </h3>
          </div>
        </a>
      </Col>
    ) : (
      <Col
        className="school-flag-course-card border"
        md="auto"
      >
        <a className="mb-2 hyperlink" target="_blank" href={props.link} rel="noreferrer">
          <div className="m-3 text-center">
            <Image style={courseImageSize} src={props.courseImage} />
            <h3 style={text} className="mb-4 text-center">
              {props.title}
            </h3>
          </div>
        </a>
      </Col>
    )}


      <div className = "course-dropdown-card my-5 justify-content-center">
          <Row className = "w-75 p-3" style = {{backgroundColor: "#ffdb4d", borderRadius: "15px"}}>
            <h1 style = {dropdownHeader}>BASIC SCRATCH (2-3) PART 1</h1>
            <Col md = {7}>
              <h4 style = {dropdownText}>Basic Scratch (K-3) Part 1 is designed for K-3rd grade students who have prior experience with computer programming.<br></br> <br></br> Students will learn how to code a basic program in Scratch, a block-programming program, using looks, motion, sound, and loop blocks. After completing this course, students will be prepared to take our Basic Scratch (K-3) Part 2 course which will be offered in the Summer of 2021.</h4>
            </Col>
            <Col className = "d-flex flex-column align-items-center justify-content-between">
              <Image className = "p-2" style = {{borderRadius: "15px", backgroundColor: "white", ...tobyImageSize}} src = {props.tobyImage}></Image>
              <a
                style={{ color: "#006bd6", fontFamily: "BeVietnam-ExtraBold" }}
                rel="noopener noreferrer"
                target="_blank"
                className="text-center hyperlink aff-org-card-link"
                // href={props.website}
              >
                Learn More
              </a>
            </Col>
          </Row>
      </div>
    </>
  );
};
