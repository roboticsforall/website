import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Markdown from "markdown-to-jsx";

interface IProps {
  data: {header: string, description: string, link? : string}[];
}

export const FAQDropdowns: React.FC<IProps> = (props: IProps) => {
  return (
    <Accordion alwaysOpen>
      {props.data.map((pair: {header: string, description: string, link? : string}, i) => (
        <Accordion.Item key={i} eventKey={i.toString()}>
          <Accordion.Header>
            <h5>{pair.header}</h5>
          </Accordion.Header>
          <Accordion.Body>
            {typeof pair.link != "undefined" ? <p><a target = "_blank" rel = "noreferrer noopener" href = {pair.link}>Apply Now!</a> </p>: <></>}
            <p>
              <Markdown>{pair.description}</Markdown>
            </p>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
