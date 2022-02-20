import React from "react";
import { Container, Row } from "react-bootstrap";
import { Header } from "@/components/Header";
import { FlagCard } from "@/components/Enroll/FlagCard";
import { CourseCard } from "@/components/Enroll//CourseCard";
import { FAQDropdowns } from "@/components/FAQDropdowns";

import Markdown from "markdown-to-jsx";

import forschoolsFAQJSON from "@/posts/faqs/coordination_faqs.json";
import coursesInfoJSON from "@/posts/schoolsAndPartnersCourses.json";
import syllabiJSON from "@/posts/course_syllabi.json";
import enroll_links from "@/posts/enrollment_form_document_link.json";

import schoolsCourseOverview from "@/posts/editable_texts.json";

import headerBlobGreen from "@/media/HeaderBlobs/green.png";

import { ColorThemes } from "@/colors";

export const Schools: React.FC = () => {
  const positionsTitle: React.CSSProperties = {
    fontFamily: "Oswald-Medium",
    color: ColorThemes.mainGreen,
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
      <Header
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
        <h3 style={boldNote}>{schoolsCourseOverview.schools_bold_text}</h3>
        <br />
        <h5 style={bodyText}>
          <Markdown>{schoolsCourseOverview.schools_body_text}</Markdown>
        </h5>
        <br />
        <LongButtonWithHyperlink title = {"Partner With Us Today!"} location = {enroll_links.link} backgroundColor = {ColorThemes.mainGreen} />

      </Container>
      <br></br>
      <div style={greenRow}>
      <Container>
      <br></br>
          <h2 style={positionsTitle}>COURSE OFFERINGS</h2>
          <br></br>
          <h5 style={bodyText}>
            We offer basic and advanced classes in a variety of STEM subjects such as computer programming for students in K-8th grade
            <br></br>
            <br></br>
            View our selection of courses below and click on the boxes to learn
            more
          </h5>
          <br></br>
          <Row className = "g-4">
            {coursesInfoJSON.courses_list.map((courseInfo, i) => (
              <CourseCard
                key={i}
                link={courseInfo.link}
                courseImage={courseInfo.file_path.replace("/public", "")}
                title={courseInfo.course_name}
                backgroundColor={ColorThemes.lightGreen}
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
        <br/>
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
              backgroundColor= {ColorThemes.lightGreen}
              key={i}
            />
            ))}
        </Row>
        <br/>
        </Container>
      </div>
      <div>
        <br/>
        <h2 style={positionsTitle}>FAQs</h2>
        <Container>
          <FAQDropdowns
              data = {forschoolsFAQJSON.schools_and_partners_faqs}
            />
          <br />
        </Container>
      </div>

    </>
  );
};
