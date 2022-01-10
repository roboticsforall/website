import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "@/components/Header";
import headerBlobBlue from "@/media/HeaderBlobs/blue.png"; // add correct image and filepath here
import googleForms from "@/posts/google_form.json";
import Markdown from "markdown-to-jsx";
import { ColorThemes } from "../../colors";

export const Register: React.FC = () => {
  return (
    <>
      <Header
        headerTextColor={ColorThemes.mainBlue}
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
            <Markdown>{googleForms.register_app_code.code}</Markdown>
          </Col>
        </Row>
        <br></br>
        <br></br>
      </Container>
    </>
  );
};
