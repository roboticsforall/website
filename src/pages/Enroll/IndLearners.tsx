import React from "react";
import { Container, Row } from "react-bootstrap";
import { ColorThemes } from "../../colors";
import { Header } from "@/components/Header";
import { FlagCard } from "@/components/Enroll/FlagCard";
import { CourseCard } from "@/components/Enroll/CourseCard";
import { FAQDropdowns } from "@/components/FAQDropdowns";
import { ButtonFullWidth } from "@/components/ButtonFullWidth";

import Markdown from "markdown-to-jsx";

import indlearnersFAQJSON from "@/posts/faqs/coordination_faqs.json";
import coursesInfoJSON from "@/posts/individualLearnersCourses.json";
import syllabiJSON from "@/posts/course_syllabi.json";
import indLearnersCourseOverview from "@/posts/course_overviews.json";
import enroll_links from "@/posts/enrollment_form_document_link.json";

import headerBlobBlue from "@/media/HeaderBlobs/blue.png";

export const IndLearners: React.FC = () => {
  const positionsTitle: React.CSSProperties = {
    color: ColorThemes.mainBlue,
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
        description={""}
      />
      <section>
        <Container>
          <h2 style={positionsTitle}>COURSE OVERVIEWS</h2>
          <br />
          <h3>
            {indLearnersCourseOverview.indlearners_enrollment_status_text}
          </h3>
          <br />
          <p>
            <Markdown>
              {indLearnersCourseOverview.indlearners_details_text}
            </Markdown>
          </p>
          <br />
          <ButtonFullWidth
            title={"Enroll in a Course Today!"}
            location={enroll_links.ind_learners_link}
            variant="primaryBlue"
          />
        </Container>
      </section>

      <section style={blueRow}>
        <section>
          <Container>
            <h2 style={positionsTitle}>COURSE OFFERINGS</h2>
            <h5>
              View our selection of courses below and click on the boxes to
              learn more.
            </h5>
            <Row className="g-4">
              {coursesInfoJSON.courses_list.map((courseInfo, i) => (
                <CourseCard
                  key={i}
                  link={courseInfo.link}
                  courseImage={courseInfo.file_path}
                  alt={courseInfo.alt}
                  title={courseInfo.course_name}
                  dropdownCourseDescription={courseInfo.course_description}
                  dropdownCourseImage={courseInfo.file_path}
                  variant="primaryBlue"
                />
              ))}
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <hr />
            <h2 style={positionsTitle}>COURSE SYLLABI</h2>
            <Row className="g-4">
              {syllabiJSON.syllabi_list.map((flagInfo, i) => (
                <FlagCard
                  image={flagInfo.file_path}
                  alt={flagInfo.alt}
                  title={flagInfo.language}
                  link={flagInfo.link}
                  key={i}
                  variant="primaryBlue"
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
