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
        <Accordion.Item key={i} eventKey={i.toString()}>
          <Accordion.Header>
            <h5>{Object.values(QAPair)[0]}</h5>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              <Markdown>{Object.values(QAPair)[1]}</Markdown>
            </p>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
