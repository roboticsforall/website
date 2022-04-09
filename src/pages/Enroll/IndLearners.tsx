import React from "react";
import { Container, Row } from "react-bootstrap";
import { ColorThemes } from "../../colors";
import { Header } from "@/components/Header";
import { FlagCard } from "@/components/Enroll/FlagCard";
import { CourseCard } from "@/components/Enroll/CourseCard";
import { FAQDropdowns } from "@/components/FAQDropdowns";
import { LongButtonWithHyperlink } from "@/components/LongButton";

import Markdown from "markdown-to-jsx";

import indlearnersFAQJSON from "@/posts/faqs/coordination_faqs.json";
import coursesInfoJSON from "@/posts/individualLearnersCourses.json";
import syllabiJSON from "@/posts/course_syllabi.json";
import indLearnersCourseOverview from "@/posts/editable_texts.json";
import enroll_links from "@/posts/enrollment_form_document_link.json";

import headerBlobBlue from "@/media/HeaderBlobs/blue.png";

export const IndLearners: React.FC = () => {
  const positionsTitle: React.CSSProperties = {
    color: ColorThemes.mainBlue,
    textAlign: "center",
  };
  const boldNote = {};
  const bodyText = {
    lineHeight: 1.5,
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
        description={""}
      />
      <section>
        <Container>
          <h2 style={positionsTitle}>COURSE OVERVIEWS</h2>

          <h3 style={boldNote}>
            {indLearnersCourseOverview.indlearners_bold_text}
          </h3>
          <h5 style={bodyText}>
            <Markdown>
              {indLearnersCourseOverview.indlearners_body_text}
            </Markdown>
          </h5>
          <LongButtonWithHyperlink
            title={"Enroll in a Course Today!"}
            location={enroll_links.ind_learners_link}
            backgroundColor={ColorThemes.mainBlue}
          />
        </Container>
      </section>

      <section style={blueRow}>
        <section>
          <Container>
            <h2 style={positionsTitle}>COURSE OFFERINGS</h2>
            <h5 style={bodyText}>
              View our selection of courses below and click on the boxes to
              learn more.
            </h5>
            <Row className="g-4">
              {coursesInfoJSON.courses_list.map((courseInfo, i) => (
                <CourseCard
                  key={i}
                  link={courseInfo.link}
                  courseImage={courseInfo.file_path}
                  title={courseInfo.course_name}
                  backgroundColor={ColorThemes.lightBlue}
                  dropdownCourseDescription={courseInfo.course_description}
                  dropdownCourseImage={courseInfo.file_path}
                />
              ))}
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <hr />
            <h2 style={positionsTitle}>COURSE SYLLABI</h2>
            <Row className="justify-content-between m-0">
              {syllabiJSON.syllabi_list.map((flagInfo, i) => (
                <FlagCard
                  image={flagInfo.file_path}
                  title={flagInfo.language}
                  link={flagInfo.link}
                  backgroundColor={ColorThemes.lightBlue}
                  key={i}
                />
              ))}
            </Row>
          </Container>
        </section>
      </section>

      <section>
        <Container>
          <h2 style={positionsTitle}>FAQs</h2>
          <FAQDropdowns data={indlearnersFAQJSON.ind_learners_faqs} />
        </Container>
      </section>
    </>
  );
};
