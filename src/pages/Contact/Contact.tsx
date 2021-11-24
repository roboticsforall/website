import React from "react";
import { Container, Row, Col, Form, Image } from "react-bootstrap";
import { Header } from "@/components/Header";
import { useForm, ValidationError } from "@formspree/react";
import { FormInput } from "@/components/FormInput";
import { TextArea } from "@/components/TextArea";
import { SubmitButton } from "@/components/SubmitButton";

import headerBlobYellow from "@/media/HeaderBlobs/yellow.png"; // add correct image and filepath here
import facebookIcon from "@/media/SocialMediaLogos/facebook.png";
import instagramIcon from "@/media/SocialMediaLogos/instagram.png";
import linkedin from "@/media/SocialMediaLogos/linkedin.png";

import { ColorThemes } from "@/colors";

export const Contact: React.FC = () => {
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
    color: ColorThemes.darkOrange,
  };

  const iconSize = {
    width: "auto",
    height: "5vmax",
    margin: "0.1em",
  };

  return (
    <>
      <Header
        headerTextColor={ColorThemes.mainYellow}
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
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Palo+Alto,+CA+94302/@37.4400162,-122.1487548,15z/data=!3m1!4b1!4m8!1m2!2m1!1sP.O.+Box+56,+Palo+Alto,+CA+94302!3m4!1s0x808fbb1b431541ef:0x2d06ff09a989536f!8m2!3d37.44!4d-122.14"
                  className="C06202 hyperlink"
                  rel="noreferrer"
                  style={linkStyle}
                >
                  P.O. Box 56, Palo Alto, CA 94302
                </a>
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
              <FormInput
                type="text"
                placeholder="Full Name"
                height="3em"
                id="user_name"
                name="user_name"
              />
              <FormInput
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
              <TextArea
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
              <SubmitButton state={state.submitting} />
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
