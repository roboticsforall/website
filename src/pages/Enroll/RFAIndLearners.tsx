import React from "react";
import { Container, Row } from "react-bootstrap";
import { RFAHeader } from "@/components/RFAHeader";
import { RFAFlagCard } from "@/components/RFAFlagCard";
import { RFACourseCard } from "@/components/RFACourseCard";
import { RFALongButton } from "@/components/RFALongButton";


import americaFlag from "@/media/Flags/america.png"
import chineseFlag from "@/media/Flags/chinese.png"
import frenchFlag from "@/media/Flags/french.png"
import spainFlag from "@/media/Flags/spain.png"

import headerBlobBlue from "@/media/HeaderBlobs/blue.png";

export const RFAIndLearners: React.FC<{
  link: string,
  title: string
}> = (props) => {

  const positionsTitle: React.CSSProperties = {
    fontFamily: "Oswald-Medium",
    fontSize: "5.5vmax",
    color: "#3399ff",
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
  const blueRow = {
    backgroundColor: "#3399ff4D"
  }
  return (
    <>
      <RFAHeader
        headerTextColor={"#3399ff"}
        image={headerBlobBlue}
        title={"Take a Class with us Today!"}
        description={"Learn from any of our 12 levels of curriculum and join the community of 1027 students we've taught!"}
      />
      <Container>
        <h2 style={positionsTitle}>COURSE OVERVIEWS</h2>
        <br/>
        <h3 style = {boldNote}>Course Enrollments for Spring courses starting March 15th are open until March 5th, 2020!</h3>
        <br/>
        <h5 style = {bodyText}>
          Since July 2020, Robotics for All has provided online courses for students from Kindergarten to 8th grade.
          All classes run for eight weeks and have virtual hour-long meetings with teachers twice a week!
        <br></br>
        <br></br>
          Spring courses will run from the week of March 15th to the week of May 3rd. 
          All courses have pre-class orientations on the week of March 8th. Current class time offerings for each course are:
        <br></br>
        <ul>
          <li>Mondays/Thursdays 2 pm Pacific/5 pm Eastern Time</li>
          <li>Mondays/Thursdays 4 pm Pacific/7 pm Eastern Time</li>
          <li>Tuesdays/Fridays 4 pm Pacific/7 pm Eastern Time</li>
          <li>Tuesdays/Fridays 6 pm Pacific/9 pm Eastern Time</li>
        </ul>
        <br></br>
          Class times may vary for different courses due to enrollments and some class times may not run if there are not enough enrollments.
          <br></br>
          <br></br>
          View our detailed syllabi below:
        </h5>
        <br></br>
        <div className = "d-flex flex-wrap justify-content-between">
          <RFAFlagCard link = {""} image = {americaFlag} title = "ENGLISH"></RFAFlagCard>
          <RFAFlagCard link = {""} image = {spainFlag} title = "ESPAÑOL"></RFAFlagCard>
          <RFAFlagCard link = {""} image = {frenchFlag} title = "FRANÇAIS"></RFAFlagCard>
          <RFAFlagCard link = {""} image = {chineseFlag} title = "中文"></RFAFlagCard>
        </div>
        <br></br>
        <a className = "hyperlink">
            <Row className = "enroll-button p-2 justify-content-center align-items-center">
                <h3 style = {enrollButtonTitle}>Enroll in a Course Today!</h3>
            </Row>
        </a>
      </Container>
      <br></br>
      <Container fluid style = {blueRow}>
        <Container>
            <h2 style={positionsTitle}>COURSE OFFERINGS</h2>
            <br></br>
            <h5 style = {bodyText}>
              We offer basic and advanced computer programming and computer-aided design courses for students in K-8th grade!
              <br></br>
              <br></br>
              View our selection of courses below:
            </h5>
            <br></br>
            <div className = "d-flex flex-wrap justify-content-between">
              <RFACourseCard link = {""} image = {americaFlag} title = "ENGLISH"></RFACourseCard>
              <RFACourseCard link = {""} image = {spainFlag} title = "ESPAÑOL"></RFACourseCard>
              <RFACourseCard link = {""} image = {frenchFlag} title = "FRANÇAIS"></RFACourseCard>
              <RFACourseCard link = {""} image = {chineseFlag} title = "中文"></RFACourseCard>
              <RFACourseCard link = {""} image = {americaFlag} title = "ENGLISH"></RFACourseCard>
              <RFACourseCard link = {""} image = {spainFlag} title = "ESPAÑOL"></RFACourseCard>
              <RFACourseCard link = {""} image = {frenchFlag} title = "FRANÇAIS"></RFACourseCard>
              <RFACourseCard link = {""} image = {chineseFlag} title = "中文"></RFACourseCard>
            </div>
            <br></br>
            <a className = "hyperlink">
                <Row className = "enroll-button p-2 justify-content-center align-items-center">
                    <h3 style = {enrollButtonTitle}>Enroll in a Course Today!</h3>
                </Row>
            </a>
            <br></br>
        </Container>
      </Container>
    </>
  );
};
