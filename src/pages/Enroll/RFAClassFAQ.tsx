import React from "react";
import { Container } from "react-bootstrap";
import { RFAHeader } from "@/components/RFAHeader";
import { RFAFAQDropdowns } from "@/components/RFAFAQDropdowns";
import headerBlobOrange from "@/media/HeaderBlobs/orange.png"; // add correct image here
import classFAQJSON from "@/posts/faqs/class_faqs.json";
import Markdown from "markdown-to-jsx";

export const RFAClassFAQ: React.FC = () => {
  return (
    <div>
      <RFAHeader
        headerTextColor={"#fa8d1f"}
        image={headerBlobOrange}
        title={"Questions?"}
        description={
          "Here are the answers to our commonly asked questions. Please feel free to contact us if your question is not answered here!"
        }
      />
      <br />
      <Container>
        {classFAQJSON.class_faq_list.map((QAPair) => (
          <RFAFAQDropdowns
            key={QAPair.question}
            question={QAPair.question}
            answer={QAPair.answer}
          />
        ))}
        <RFAFAQDropdowns
          question={classFAQJSON.upcoming_courses_question}
          answer={<Markdown>{classFAQJSON.upcoming_courses_answer}</Markdown>}
        />
        <br/>
      </Container>
    </div>
  );
};
