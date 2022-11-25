import React, { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { Header } from "@/components/Header";
import { TabCardsNoImage } from "@/components/Volunteer/TabCards";
import { activeStyles } from "@/components/Volunteer/TabCards";

import Markdown from "markdown-to-jsx";

import { FAQDropdowns } from "../FAQDropdowns";

type TProps = {
  color : string,
  variant : string,
  position : string,
  headerTitle: string,
  headerDescription : string,
  data : any,
  headerBlob : string,
}

export const PosOverview: React.FC<TProps> = (props : TProps) => {
  const [key, setKey] = useState("one");

  const positionsTitle: React.CSSProperties = {
    color: props.color,
    textAlign: "center",
    textTransform: "uppercase",
    wordBreak: "break-word",
  };

  return (
    <>
      <Header
        headerTextColor={props.color}
        image={props.headerBlob}
        title={props.headerTitle}
        description={props.headerDescription}
      />
      <section>
        <Container>
          <Tab.Container activeKey={key} onSelect={(key) => setKey(key!)}>
            <Nav justify fill variant="tabs">
              <Nav.Item>
                <Nav.Link
                  eventKey="one"
                  className="pos"
                  style={activeStyles.activeStyle(props.color)}
                >
                  {props.position}
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <TabCardsNoImage
                posHeader={"OVERVIEW"}
                generalColor={props.color}
                posDescription={
                  <div>
                    <p>
                      <Markdown>
                        {props.data.overview}
                      </Markdown>
                    </p>
                  </div>
                }
              />
            </Tab.Content>
          </Tab.Container>
          <section>
            <h2 style = {positionsTitle}>Positions</h2>
            <FAQDropdowns data = {props.data.positions} />
          </section>
        </Container>
      </section>
    </>
  );
};
