import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RFAHeader } from "@/components/RFAHeader";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png"; // add correct image and filepath here

export const RFADonate: React.FC = () => {
  const positionsDescription = {
    fontFamily: "BeVietnam-Medium",
  };

  const buttonText = {
    fontFamily: "Mazzard-H-Extrabold",
  };

  return (
    <>
      <RFAHeader
        headerTextColor={"#ffcc00"}
        image={headerBlobYellow}
        title={"Donate to Support our Programs!"}
        description={
          "Donate to help support Robotics for All continue to teach our students."
        }
      />
      <br></br>
      <br></br>
      <Container>
        <Row className="text-center justify-content-center align-items-center">
          <p
            style={positionsDescription}
            className="text-center header-description-size"
          >
            As a part of our mission, we strive to provide cost-free education
            to students from low-income communities. As with any business, we
            have expenses such as equipment purchases, online software fees and
            insurance fees that we need to cover. Simply put, we are unable to
            operate if we do not receive enough revenue to cover our expenses.
            Any donation is appreciated and will go directly towards the
            expansion of Robotics for All. Make a difference and donate through
            PayPal by clicking the button below. You also might be able to get
            your donation matched through your employer.
          </p>
          <p
            style={positionsDescription}
            className="text-center header-description-size"
          >
            Robotics for All is a 501(c)(3) non-profit organization. All
            donations are fully tax-deductible.
          </p>
        </Row>
        <br/>
        <Row className="justify-content-center align-items-center">
          <Col md = "auto">
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=N8ZAMTBXH5BQA"
              target = "_blank"
              style={buttonText}
              className="hyperlink"
            >
              <h1 className = "m-0 p-3 long-button header-size border text-center">
                Donate
              </h1>
            </a>
          </Col>
        </Row>
      </Container>
      <br />
    </>
  );
};
