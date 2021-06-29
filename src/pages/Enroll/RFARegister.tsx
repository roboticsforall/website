import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RFAHeader } from "@/components/RFAHeader";
import headerBlobBlue from "@/media/HeaderBlobs/blue.png"; // add correct image and filepath here
import googleForms from "@/posts/google_form.json";
import Markdown from "markdown-to-jsx";

export const RFARegister: React.FC = () => {
  return (
    <>
      <RFAHeader
        headerTextColor={"#3399ff"}
        image={headerBlobBlue}
        title={"Sign up for the next session of classes!"}
        description={
          "Fill out the form below to sign up for our classes today!"
        }
      />
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <Markdown>{googleForms.register_form_code.code}</Markdown>
          </Col>
        </Row>
        <br></br>
        <br></br>
      </Container>
    </>
  );
};
