import React from "react";
import { Container, Row, Col, Form, Image } from "react-bootstrap";
import { RFAHeader } from "@/components/RFAHeader";
import { useForm, ValidationError } from "@formspree/react";
import { RFAFormInput } from "@/components/RFAFormInput";
import { RFATextArea } from "@/components/RFATextArea";
import { RFASubmitButton } from "@/components/RFASubmitButton";

import headerBlobYellow from "@/media/HeaderBlobs/yellow.png"; // add correct image and filepath here
import facebookIcon from "@/media/Social Media Logos/facebook.png";
import instagramIcon from "@/media/Social Media Logos/instagram.png";
import linkedin from "@/media/Social Media Logos/linkedin.png";

export const RFAContact: React.FC<{
  address: string;
  telephone: string;
  email: string;
  // facebookLink: "https://www.facebook.com/roboticsforalleducation/";
  // instagramLink: "https://www.instagram.com/roboticsforall/";
  // linkedin: "https://www.linkedin.com/company/robotics-for-all"
}> = () => {
  const [state, handleSubmit] = useForm("mzbybwgz");

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

  const iconSize = {
    width: "auto",
    height: "5vmax",
    margin: "0.1em",
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

      <Container>
        <br />
        <Row className="justify-content-between">
          <Col style={contactInfo} md={5}>
            <Row className="flex-column">
              <h3>
                EMAIL |{" "}
                <a
                  className="hyperlink"
                  style={linkStyle}
                  href={"mailto:info@roboticsforall.net"}
                >
                  info@roboticsforall.net
                </a>
              </h3>
              <br></br>
              <h3>
                PHONE |{" "}
                <a
                  className="hyperlink"
                  style={linkStyle}
                  href={"tel:+(650)-665-9734"}
                >
                  +(650)-665-9734
                </a>
              </h3>
              <br></br>
              <h3>
                ADDRESS |{" "}
                <p style={linkStyle}>P.O. Box 56, Palo Alto, CA 94302</p>
              </h3>
            </Row>
            <div className="d-flex">
              <a
                target="_blank"
                href="https://www.facebook.com/roboticsforalleducation/"
                rel="noreferrer"
              >
                <Image style={iconSize} src={facebookIcon} />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/roboticsforall/"
                rel="noreferrer"
              >
                <Image style={iconSize} src={instagramIcon} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/robotics-for-all"
                rel="noreferrer"
              >
                <Image style={iconSize} src={linkedin} />
              </a>
            </div>
            <br></br>
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
};
