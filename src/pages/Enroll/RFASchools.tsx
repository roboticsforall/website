import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { RFAHeader } from "@/components/RFAHeader";
import { RFAFlagCard } from "@/components/RFAFlagCard";
import { RFACourseCard } from "@/components/RFACourseCard";
import { RFALongButton } from "@/components/RFALongButton";
import Markdown from "markdown-to-jsx";

import americaFlag from "@/media/Flags/america.png"
import chineseFlag from "@/media/Flags/chinese.png"
import frenchFlag from "@/media/Flags/french.png"
import spainFlag from "@/media/Flags/spain.png"

import cadImg from "@/media/CourseLogos/cad.png";
import codeImg from "@/media/CourseLogos/code.org.png"; 
import lego from "@/media/CourseLogos/lego.png"; 
import python from "@/media/CourseLogos/python.png"; 
import scratch from "@/media/CourseLogos/scratch.png"; 
import snapCircuits from "@/media/CourseLogos/snap_circuits.png"; 

import coursesImgJSON from "@/posts/courses.json";
import syllabiJSON from "@/posts/syllabi.json";
import indLearnersAndSchool from "@/posts/ind_learners_and_schools.json"

import headerBlobGreen from "@/media/HeaderBlobs/green.png";

export const RFASchools: React.FC<{
  title: string,
  link: string,
  cardTitle: string
  image: string,
}> = (props) => {

  const positionsTitle: React.CSSProperties = {
    fontFamily: "Oswald-Medium",
    fontSize: "5.5vmax",
    color: "#33cc66",
    textAlign: "center",
  };
  const boldNote = {
    fontFamily: "BeVietnam-ExtraBold"
  }
  const bodyText = {
    fontFamily: "BeVietnam-Medium",
    lineHeight: 1.5
  }
  const enrollButtonTitle = {
    fontFamily: "BeVietnam-ExtraBold",
    textAlign: "center"
  }
  const greenRow = {
    backgroundColor: "#33cc664D"
  }
  const imageSize: React.CSSProperties = {
    height: "18vh"
  };
    const text: React.CSSProperties = {
        fontFamily: "Oswald-Medium"
    }
  return (
    <>
      <RFAHeader
        headerTextColor={"#33cc66 "}
        image={headerBlobGreen}
        title={"Partner with us Today for After-School STEM Programs!"}
        description={"Choose from any of our 5 levels of curriculum offered to schools and join the community of schools we partner with to offer classes!"}
      />
      <br/>
      <br/>
      <Container>
        <h2 style={positionsTitle}>COURSE OVERVIEWS</h2>
        <br/>
        <h3 style = {boldNote}>Partner with us at any time to offer our wide selection of courses to your students!</h3>
        <br/>
        <h5 style = {bodyText}>
            Since July 2020, Robotics for All has provided online courses for students from Kindergarten to 8th grade. 
            All classes run for eight weeks and have virtual hour-long meetings with teachers once or twice a week!
        </h5>
        <br/>
        <h5 style = {bodyText}>
          View our detailed syllabi below:
        </h5>
        <br></br>
          <Row className = "justify-content-between">
            {syllabiJSON.syllabi_list.map((flagInfo, i) => (
              <Col className = "school-flag-course-card border" md = {"auto"}>
                <RFAFlagCard image = {flagInfo.file_path} title = {flagInfo.language} link = {flagInfo.link}/>
              </Col>
            ))}
          </Row>
        <br></br>
        <a className = "hyperlink">
            <Row className = "school-enroll-button p-2 justify-content-center align-items-center">
                <h3 style = {enrollButtonTitle}>Enroll in a Course Today!</h3>
            </Row>
        </a>
      </Container>
      <br></br>
      <br></br>
      <Container fluid style = {greenRow}>
        <Container>
            <br></br>
            <h2 style={positionsTitle}>COURSE OFFERINGS</h2>
            <br></br>
            <h5 style = {bodyText}>
              We offer basic and advanced computer programming and computer-aided design courses for students in K-8th grade!
              <br></br>
              <br></br>
              View our selection of courses below:
            </h5>
            <br></br>
            <Row className = "justify-content">
            {coursesImgJSON.courses_list.map((courseInfo, i) => (
              <Col className = "school-flag-course-card border" md = "auto">
                <RFACourseCard link = {""} image = {courseInfo.file_path} title = {courseInfo.course_name}></RFACourseCard>
              </Col>
            ))}
            </Row>
            <br></br>
            <br></br>
        </Container>
      </Container>
    </>
  );
};