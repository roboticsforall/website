import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { RFAAboutAffOrgsCard } from "@/components/RFAAboutAffOrgsCard";
import { RFAHeader } from "@/components/RFAHeader";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png";
import MFALogo from "@/media/AffiliatedOrgs/MFA_Logo.png";
import CFCLogo from "@/media/AffiliatedOrgs/CFC_Logo.png";
import TFALogo from "@/media/AffiliatedOrgs/TFA_Logo.png";

export const RFAAffOrgs: React.FC<{}> = (props) => {
  return (
    <div>
      <RFAHeader
        headerTextColor={"#ffcc00"}
        image={headerBlobYellow}
        title={"Check out our Affiliated Organizations!"}
        description={
          "Learn more about our affiliate organizations started from Robotics for All volunteers! "
        }
      />
      <Container>
        <br />
        <br />
        <RFAAboutAffOrgsCard
          website={"https://www.tutoringforall.org"}
          logo={TFALogo}
          linkColor={"#c06204"}
          orgAbrv={"TFA"}
          mainColor={"#fa8d1f"}
          affOrgName={"Tutoring For All"}
          affOrgsDescription={
            "Tutoring for All is a branch of the non-profit organization Robotics for All. Our goal is to provide free, quality tutoring services to primarily low income and disadvantaged students."
          }
        />
        <br />
        <br />
        <RFAAboutAffOrgsCard
          website={"https://www.mentoringforall.org"}
          logo={MFALogo}
          linkColor={"#248f47"}
          orgAbrv={"MFA"}
          mainColor={"#33cc66"}
          affOrgName={"Mentoring For All"}
          affOrgsDescription={
            "Mentoring for All is a branch of the non-profit organization Robotics for All with the goal of providing guidance on the path towards future success for underserved high school students."
          }
        />
        <br />
        <br />
        <RFAAboutAffOrgsCard
          website={"https://craftsforcharity.com/"}
          logo={CFCLogo}
          linkColor={"#006bd6"}
          orgAbrv={"CFC"}
          mainColor={"#3399ff"}
          affOrgName={"Crafts For Charity"}
          affOrgsDescription={
            "Crafts for Charity is a student-led nonprofit providing classes and opportunities for everyone to give back to their communities through crafting! We help donate handmade goods to charities for causes like homelessness."
          }
        />
      </Container>
    </div>
  );
};
