import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import RFAHeader from "@/components/RFAHeader";
import headerBlobYellow from "@/media/HeaderBlobs/Blob-RFA-4.png"; // add correct image and filepath here
import { useForm, ValidationError } from "@formspree/react";
import RFAFormInput from "@/components/RFAFormInput";
import RFATextArea from "@/components/RFATextArea";
import RFASubmitButton from "@/components/RFASubmitButton";

function ContactForm() {
  return <></>;
}

export default function RFAContactwithFormspree(props) {
  // const [state, handleSubmit] = useForm("xeqvkqbo");
  const [state, handleSubmit] = useForm("mzbybwgz");
  const [submitMessage, handleMessage] = useState("");

  const checkFormState = () => {
    if (state.succeeded) {
      // handleMessage("Thank you for contacting Robotics for All!");
      return (
        <p style={{ color: "green" }}>
          Thank you for contacting Robotics for All!
        </p>
      );
    } else {
      return state.errors.map((error, i) => (
        <>
          <p key={i} style={{ color: "red" }}>
            {error.field}
          </p>
          <p key={i + 1} style={{ color: "red" }}>
            {error.message}
          </p>
        </>
      ));
    }
  };

  const contactInfo = {
    fontFamily: "BeVietnam-SemiBold",
  };

  const linkStyle = {
    color: "#C06202",
  };

  return (
    <>
      <RFAHeader
        headerTextColor={"#ffcc00"}
        image={headerBlobYellow}
        title={"Want to know more?"}
        description={
          "Contact us for more information, questions, partnerships and much more!"
        }
      />

      <Container className="border">
        <br />
        <Row className="justify-content-between">
          <Col style={contactInfo} md={5}>
            <Row className="flex-column">
              <h3>
                EMAIL |{" "}
                <a
                  className="hyperlink"
                  style={linkStyle}
                  href={"mailto:" + props.email}
                >
                  {props.email}
                </a>
              </h3>
              <br></br>
              <h3>
                PHONE |{" "}
                <a
                  className="hyperlink"
                  style={linkStyle}
                  href={"tel:+" + props.telephone}
                >
                  +{props.telephone}
                </a>
              </h3>
              <br></br>
              <h3>
                ADDRESS | <p style={linkStyle}>{props.address}</p>
              </h3>
            </Row>
            <Row></Row>
          </Col>
          <Col md={6} className="justify-content-end">
            <Form id="contact-form" onSubmit={handleSubmit}>
              <RFAFormInput
                type="text"
                placeholder="Full Name"
                height="3em"
                id="user_name"
                name="user_name"
              />
              <RFAFormInput
                type="email"
                placeholder="Email"
                height="3em"
                id="user_email"
                name="user_email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <RFATextArea
                rows={4}
                placeholder="Question, Comments, or Concerns"
                id="message"
                name="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <br></br>
              <RFASubmitButton state={state.submitting} />
              <br />
              <br />
              {checkFormState()}
            </Form>
          </Col>
        </Row>
        <br></br>
      </Container>
    </>
  );
}

function App() {
  return <ContactForm />;
}
