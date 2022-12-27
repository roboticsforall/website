import React from "react";
import { Container, Row, Col, Form, Image, Button } from "react-bootstrap";
import { Header } from "@/components/Header";
import { useForm, ValidationError } from "@formspree/react";

import headerBlobYellow from "@/media/HeaderBlobs/yellow.png"; // add correct image and filepath here
import facebookIcon from "@/media/SocialMediaLogos/facebook.png";
import instagramIcon from "@/media/SocialMediaLogos/instagram.png";
import linkedin from "@/media/SocialMediaLogos/linkedin.png";
import orgLogisticsJSON from "@/posts/org_logistics.json";

import { ColorThemes } from "@/colors";

export const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mzbybwgz");

  const checkFormState = () => {
    if (state.succeeded) {
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

  const linkStyle = {
    color: ColorThemes.darkOrange,
  }
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

<section>
      <Container>
        <Row className="justify-content-between">
          <Col md={5}>
            <Row className="flex-column">
              <section>
              <h3>
                EMAIL |{" "}
                <a
                  className="hyperlink"
                  style={linkStyle}
                  href={"mailto:" + orgLogisticsJSON.email}
                >
                  {orgLogisticsJSON.email}
                </a>
              </h3>
              </section>
              <section>
              <h3>
                PHONE |{" "}
                <a
                  className="hyperlink"
                  style={linkStyle}
                  href={"tel:" + orgLogisticsJSON.phone_number}
                >
                  {orgLogisticsJSON.phone_number}
                </a>
              </h3>
              </section>
              <section>
              <h3>
                ADDRESS |{" "}
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Palo+Alto,+CA+94302/@37.4400162,-122.1487548,15z/data=!3m1!4b1!4m8!1m2!2m1!1sP.O.+Box+56,+Palo+Alto,+CA+94302!3m4!1s0x808fbb1b431541ef:0x2d06ff09a989536f!8m2!3d37.44!4d-122.14"
                  className="C06202 hyperlink"
                  rel="noreferrer"
                  style={linkStyle}
                >
                  {orgLogisticsJSON.address}
                </a>
              </h3>
              </section>
            </Row>
            <section>
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
            </section>
          </Col>
          <Col md={6} className="justify-content-end">
            <Form id="contact-form" onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Full Name"
                  id="user_name"
                  name="user_name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  height="3em"
                  id="user_email"
                  name="user_email"
                />
              </Form.Group>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <Form.Group>
                <Form.Label>Questions, Comments, or Concerns</Form.Label>
                <Form.Control
                  id="message"
                  name="message"
                  as="textarea"
                  rows={4}
                />
              </Form.Group>

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <br/>
              <Button className = "w-100 border" type = "submit" variant = "primaryYellow" disabled = {state.submitting}><h3>Submit</h3></Button>
              {checkFormState()}
            </Form>
          </Col>
        </Row>
        <br></br>
      </Container>
      </section>
    </>
  );
};