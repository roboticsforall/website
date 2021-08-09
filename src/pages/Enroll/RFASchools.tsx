import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RFAHeader } from "@/components/RFAHeader";
import { RFAFlagCard } from "@/components/RFAFlagCard";
import { RFACourseCard } from "@/components/RFACourseCard";
import { RFAFAQDropdowns } from "@/components/RFAFAQDropdowns";

import Markdown from "markdown-to-jsx";

import classFAQJSON from "@/posts/faqs/class_faqs.json";
import coursesInfoJSON from "@/posts/courses.json";
import syllabiJSON from "@/posts/syllabi.json";
import enroll_links from "@/posts/enroll_links.json";

import headerBlobGreen from "@/media/HeaderBlobs/green.png";

export const RFASchools: React.FC = () => {
  const positionsTitle: React.CSSProperties = {
    fontFamily: "Oswald-Medium",
    fontSize: "5.5vmax",
    color: "#33cc66",
    textAlign: "center",
  };
  const boldNote = {
    fontFamily: "BeVietnam-ExtraBold",
  };
  const bodyText = {
    fontFamily: "BeVietnam-Medium",
    lineHeight: 1.5,
  };
  const enrollButtonTitle: React.CSSProperties = {
    fontFamily: "BeVietnam-ExtraBold",
    textAlign: "center",
  };
  const greenRow = {
    backgroundColor: "#33cc664D",
  };
  

  return (
    <>
      <RFAHeader
        headerTextColor={"#33cc66"}
        image={headerBlobGreen}
        title={"Partner with us Today for After-School STEM Programs!"}
        description={
          "Choose from any of our 5 levels of curriculum offered to schools and join the community of schools we partner with to offer classes!"
        }
      />
      <br />
      <br />
      <Container>
        <h2 style={positionsTitle}>COURSE OVERVIEWS</h2>
        <br />
        <h3 style={boldNote}>
          Partner with us at any time to offer our wide selection of courses to
          your students!
        </h3>
        <br />
        <h5 style={bodyText}>
          Since July 2020, Robotics for All has provided online courses for
          students from Kindergarten to 8th grade. All classes run for eight
          weeks and have virtual hour-long meetings with teachers once or twice
          a week!
        </h5>
        <br />
        <h5 style={bodyText}>View our detailed syllabi below:</h5>
        <br></br>
        <Row className="justify-content-between">
          {syllabiJSON.syllabi_list.map((flagInfo, i) => (
            <Col className="school-flag-course-card mb-2 mx-2" md={"auto"} key={i}>
              <RFAFlagCard
                image={flagInfo.file_path.replace("/public", "")}
                title={flagInfo.language}
                link={flagInfo.link}
              />
            </Col>
          ))}
        </Row>
        <br></br>
        <a target = "_blank" rel="noreferrer" href = {enroll_links.link} className="hyperlink">
          <Row className="school-enroll-button mx-2 p-2 justify-content-center align-items-center">
            <h3 style={enrollButtonTitle}>Enroll in a Course Today!</h3>
          </Row>
        </a>
      </Container>
      <br></br>
      <br></br>
      <Container fluid style={greenRow}>
        <Container>
          <br></br>
          <h2 style={positionsTitle}>COURSE OFFERINGS</h2>
          <br></br>
          <h5 style={bodyText}>
            We offer basic and advanced computer programming and computer-aided
            design courses for students in K-8th grade!
            <br></br>
            <br></br>
            View our selection of courses below and click on the boxes to learn more
          </h5>
          <br></br>
          <Row>
          {coursesInfoJSON.courses_list.map((courseInfo, i) => (
              <RFACourseCard
                key = {i}
                link={courseInfo.class_description_link}
                courseImage={courseInfo.file_path.replace("/public", "")}
                title={courseInfo.course_name}
                webpage = "school"
                dropdownCourseDescription = {courseInfo.dropdown_course_description}
                dropdownCourseImage = {courseInfo.dropdown_file_path.replace("/public", "")}
              ></RFACourseCard>
          ))}
          </Row>
          <br></br>
          <br></br>
        </Container>
      </Container>
        <h2 style={positionsTitle}>FAQs</h2>
        <Container>
          {classFAQJSON.class_faq_list.map((QAPair:any) => (
            <RFAFAQDropdowns
              key={QAPair.question}
              question={QAPair.question}
              answer={QAPair.answer}
              webpage = "schools"
              colors = {{main: "#33cc66", light: "#70db94", dark: "#248f47"}}

            />
          ))}
          <RFAFAQDropdowns
            question={classFAQJSON.upcoming_courses_question}
            answer={<Markdown>{classFAQJSON.upcoming_courses_answer}</Markdown>}
            webpage = "schools"
            colors = {{main: "#33cc66", light: "#70db94", dark: "#248f47"}}

          />
          <br/>
        </Container>
    </>
  );
};
