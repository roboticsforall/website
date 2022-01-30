import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Markdown from "markdown-to-jsx";

interface IProps {
  data: {}[]
};

export const FAQDropdowns: React.FC<IProps> = (props: IProps) => {
  
  const questionText = {
    fontFamily: "BeVietnam-ExtraBold"
  };
  const answerText = {
    fontFamily: "BeVietnam-SemiBold",
  }

  return (
    <Accordion alwaysOpen>
      {
        props.data.map((QAPair : Object, key) => (
          <Accordion.Item eventKey = {key.toString()}>
            <Accordion.Header style = {questionText}>{Object.values(QAPair)[0]}</Accordion.Header>
              <Accordion.Body style = {answerText}>
                <Markdown>{Object.values(QAPair)[1]}</Markdown>
              </Accordion.Body>
          </Accordion.Item>
        ))
      }
    </Accordion>
  );
};
