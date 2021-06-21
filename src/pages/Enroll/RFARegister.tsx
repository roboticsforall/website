import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RFAHeader } from "@/components/RFAHeader";
import headerBlobBlue from "@/media/HeaderBlobs/blue.png"; // add correct image and filepath here
// import registerLinkJSON from "@/posts/register_link.json";

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
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScZ-YvhK6guV9n7M8wn31TYpGBtSC9QpyOSzjQPoM_Db683NA/viewform?embedded=true"
              width="640"
              height="975"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
            >
              Loading…
            </iframe>
          </Col>
        </Row>
      </Container>
    </>
  );
};
