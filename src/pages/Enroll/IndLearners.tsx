import React from "react";
import { Container, Row } from "react-bootstrap";
import { ColorThemes } from "../../colors";
import { Header } from "@/components/Header";
import { FlagCard } from "@/components/Enroll/FlagCard";
import { CourseCard } from "@/components/Enroll/CourseCard";
import { FAQDropdowns } from "@/components/FAQDropdowns";

import Markdown from "markdown-to-jsx";

import classFAQJSON from "@/posts/faqs/class_faqs.json";
import coursesInfoJSON from "@/posts/courses.json";
import syllabiJSON from "@/posts/syllabi.json";
import indLearnersAndSchool from "@/posts/ind_learners_and_schools.json";
import enroll_links from "@/posts/enroll_links.json";

import headerBlobBlue from "@/media/HeaderBlobs/blue.png";

export const IndLearners: React.FC = () => {
  const positionsTitle: React.CSSProperties = {
    color: ColorThemes.mainBlue,
    textAlign: "center",
  };
  const boldNote = {
  };
  const bodyText = {
    lineHeight: 1.5,
  };
  const enrollButtonTitle: React.CSSProperties = {
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
          "Learn from any of our 12 levels of curriculum and join the community of 1027 students we've taught!"
        }
      />
      <br />
      <br />
      <Container>
        <section>
          <header>
            <h2 style={positionsTitle}>COURSE OVERVIEWS</h2>
          </header>
          <br/>
          <p style={boldNote}>
            <strong>{indLearnersAndSchool.indlearners_bold_text}</strong>
          </p>
          <Markdown>{indLearnersAndSchool.indlearners_body_text}</Markdown>
          
          View our detailed syllabi below:
        </section>
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
        <br></br>
        <a
          target="_blank"
          rel="noreferrer"
          href={enroll_links.link}
          className="hyperlink"
        >
          <Row className="ind-learners-enroll-button rounded p-2 justify-content-center align-items-center">
            <h3 style={enrollButtonTitle}>Enroll in a Course Today!</h3>
          </Row>
        </a>
      </Container>
      <br></br>
      <br></br>
      <div style={blueRow}>
        <Container>
          <br></br>
          <h2 style={positionsTitle}>COURSE OFFERINGS</h2>
          <br></br>
          <h5 style={bodyText}>
            We offer basic and advanced computer programming and computer-aided
            design courses for students in K-8th grade!
            <br></br>
            <br></br>
            View our selection of courses below and click on the boxes to learn
            more:
          </h5>
          <br></br>
          <Row>
            {coursesInfoJSON.courses_list.map((courseInfo, i) => (
              <CourseCard
                key={i}
                link={courseInfo.class_description_link}
                courseImage={courseInfo.file_path.replace("/public", "")}
                title={courseInfo.course_name}
                backgroundColor={ColorThemes.lightBlue}
                dropdownCourseDescription={
                  courseInfo.dropdown_course_description
                }
                dropdownCourseImage={courseInfo.dropdown_file_path.replace(
                  "/public",
                  ""
                )}
              />
            ))}
          </Row>
          <br></br>
          <br></br>
        </Container>
      </div>
      <h2 style={positionsTitle}>FAQs</h2>
        <FAQDropdowns
          data = {classFAQJSON.class_faq_list}
        />
      <br/>
    </>
  );
};
