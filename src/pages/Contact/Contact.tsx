import React from "react";
import { Container, Image } from "react-bootstrap";
import { Header } from "@/components/Header";

import headerBlobYellow from "@/media/HeaderBlobs/yellow.png"; // add correct image and filepath here
import facebookIcon from "@/media/SocialMediaLogos/facebook-320w.png";
import instagramIcon from "@/media/SocialMediaLogos/instagram-320w.png";
import linkedin from "@/media/SocialMediaLogos/linkedin-320w.png";
import orgLogisticsJSON from "@/posts/org_logistics.json";

import { ColorThemes } from "@/colors";

export const Contact: React.FC = () => {
  const linkStyle = {
    color: ColorThemes.darkOrange,
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
          <section>
            <div className="d-flex">
              <a
                target="_blank"
                href="https://www.facebook.com/roboticsforalleducation/"
                rel="noreferrer"
              >
                <Image src={facebookIcon} alt="Facebook Logo" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/roboticsforall/"
                rel="noreferrer"
              >
                <Image src={instagramIcon} alt="Instagram Logo" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/robotics-for-all"
                rel="noreferrer"
              >
                <Image src={linkedin} alt="LinkedIn Logo" />
              </a>
            </div>
          </section>
          <br></br>
        </Container>
      </section>
    </>
  );
};
