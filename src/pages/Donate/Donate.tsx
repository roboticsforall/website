import React from "react";
import { Container, Row } from "react-bootstrap";
import { Header } from "@/components/Header";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png"; // add correct image and filepath here

import { ColorThemes } from "@/colors";

import { ButtonFullWidth } from "../../components/ButtonFullWidth"

export const Donate: React.FC = () => {
  return (
    <>
      <Header
        headerTextColor={ColorThemes.mainYellow}
        image={headerBlobYellow}
        title={"Donate to Support our Programs!"}
        description={
          "Donate to help support Robotics for All continue to teach our students."
        }
      />
      <section>
      <Container>
        <section>
        <Row className="text-center justify-content-center align-items-center">
          <p className="text-center">
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
          <p className="text-center">
            Robotics for All is a 501(c)(3) non-profit organization. All
            donations are fully tax-deductible.
          </p>
        </Row>
        </section>
        <ButtonFullWidth
          variant = "primaryYellow"
          location = "https://www.paypal.com/donate/?hosted_button_id=N8ZAMTBXH5BQA"
          title={"Donate"}
        />
      </Container>
      </section>
    </>
  );
};
