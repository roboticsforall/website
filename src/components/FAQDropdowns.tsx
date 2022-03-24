import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Markdown from "markdown-to-jsx";

interface IProps {
  data: {}[];
}

export const FAQDropdowns: React.FC<IProps> = (props: IProps) => {



  return (
    <Accordion alwaysOpen>
      {props.data.map((QAPair: Object, i) => (
        <Accordion.Item key = {i} eventKey={i.toString()}>
          <Accordion.Header>
            {Object.values(QAPair)[0]}
          </Accordion.Header>
          <Accordion.Body>
            <Markdown>{Object.values(QAPair)[1]}</Markdown>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
