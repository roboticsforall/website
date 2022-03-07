import React from "react";
import { Container, Row } from "react-bootstrap";
import { ColorThemes } from "../../colors";
import { Header } from "@/components/Header";
import { FlagCard } from "@/components/Enroll/FlagCard";
import { CourseCard } from "@/components/Enroll/CourseCard";
import { FAQDropdowns } from "@/components/FAQDropdowns";
import { LongButtonWithHyperlink } from "@/components/LongButton"

import Markdown from "markdown-to-jsx";

import indlearnersFAQJSON from "@/posts/faqs/coordination_faqs.json";
import coursesInfoJSON from "@/posts/individualLearnersCourses.json";
import syllabiJSON from "@/posts/course_syllabi.json";
import indLearnersCourseOverview from "@/posts/editable_texts.json";
import enroll_links from "@/posts/enrollment_form_document_link.json";

import headerBlobBlue from "@/media/HeaderBlobs/blue.png";

export const IndLearners: React.FC = () => {
  const positionsTitle: React.CSSProperties = {
    fontFamily: "Oswald-Medium",
    color: ColorThemes.mainBlue,
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
  const blueRow = {
    backgroundColor: "#3399ff4D",
  };
  return (
    <>
      <Header
        headerTextColor={ColorThemes.mainBlue}
        image={headerBlobBlue}
        title={"Take a Class with us Today!"}
        description={
          ""
        }
      />
      <br />
      <br />
      <Container>
        <h2 style={positionsTitle}>COURSE OVERVIEWS</h2>
        <br />
        <h3 style={boldNote}>{indLearnersCourseOverview.indlearners_bold_text}</h3>
        <br />
        <h5 style={bodyText}>
          <Markdown>{indLearnersCourseOverview.indlearners_body_text}</Markdown>
        </h5>
        <br/>
        <LongButtonWithHyperlink title = {"Enroll in a Course Today!"} location = {enroll_links.ind_learners_link} backgroundColor = {ColorThemes.mainBlue} />

      </Container>
      <br></br>
      <br></br>
      <div style={blueRow}>
        <Container>
          <br></br>
          <h2 style={positionsTitle}>COURSE OFFERINGS</h2>
          <br></br>
          <h5 style={bodyText}>
              We offer basic and advanced classes in a variety of STEM subjects such as computer programming for students in K-8th grade
            <br></br>
            <br></br>
            View our selection of courses below and click on the boxes to learn
            more:
          </h5>
          <br></br>
          <Row className = "g-4">
            {coursesInfoJSON.courses_list.map((courseInfo, i) => (
              <CourseCard
                key={i}
                link={courseInfo.link}
                courseImage={courseInfo.file_path.replace("/public", "")}
                title={courseInfo.course_name}
                backgroundColor={ColorThemes.lightBlue}
                dropdownCourseDescription={
                  courseInfo.course_description
                }
                dropdownCourseImage={courseInfo.file_path.replace(
                  "/public",
                  ""
                  )}
                  />
                  ))}
          </Row>
          <br></br>
          <br></br>
        </Container>
      <Container>
        <hr/>
        <br/>
        <h2 style={positionsTitle}>COURSE SYLLABI</h2>
        <br/>
        <Row className="justify-content-between m-0">
          {syllabiJSON.syllabi_list.map((flagInfo, i) => (
            <FlagCard
              image={flagInfo.file_path.replace("/public", "")}
              title={flagInfo.language}
              link={flagInfo.link}
              backgroundColor={ColorThemes.lightBlue}
              key={i}
            />
            ))}
        </Row>
        <br/>
        <br/>
        </Container>
        </div>
      <div>
        <br/>
        <h2 style={positionsTitle}>FAQs</h2>
        <Container>
          <FAQDropdowns
              data = {indlearnersFAQJSON.ind_learners_faqs}
            />
          <br />
        </Container>
      </div>
    </>
  );
};
