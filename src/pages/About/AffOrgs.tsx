import React from "react";
import { Header } from "@/components/Header";
import { Container } from "react-bootstrap";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png";
import MFALogo from "@/media/AffiliatedOrgs/MFA_Logo.png";
import CFCLogo from "@/media/AffiliatedOrgs/CFC_Logo.png";
import TFALogo from "@/media/AffiliatedOrgs/TFA_Logo.png";

import { ColorThemes } from "@/colors";

import { AboutAffOrgsCard } from "@/components/About/AboutAffOrgsCard";

export const AffOrgs: React.FC = () => {
  return (
    <div>
      <Header
        headerTextColor={ColorThemes.mainYellow}
        image={headerBlobYellow}
        title={"Check out our Affiliated Organizations!"}
        description={
          "Learn more about our affiliate organizations started from Robotics for All volunteers! "
        }
      />
      <Container>
        <br />
        <br />
        <AboutAffOrgsCard
          website={"https://www.tutoringforall.org"}
          logo={TFALogo}
          linkColor={ColorThemes.darkOrange}
          orgAbrv={"TFA"}
          mainColor={ColorThemes.mainOrange}
          affOrgName={"Tutoring For All"}
          affOrgsDescription={
            "Tutoring for All is a branch of the non-profit organization Robotics for All. Our goal is to provide free, quality tutoring services to primarily low income and disadvantaged students."
          }
        />
        <br />
        <br />
        <AboutAffOrgsCard
          website={"https://www.mentoringforall.org"}
          logo={MFALogo}
          linkColor={ColorThemes.darkGreen}
          orgAbrv={"MFA"}
          mainColor={ColorThemes.mainGreen}
          affOrgName={"Mentoring For All"}
          affOrgsDescription={
            "Mentoring for All is a branch of the non-profit organization Robotics for All with the goal of providing guidance on the path towards future success for underserved high school students."
          }
        />
        <br />
        <br />
        <AboutAffOrgsCard
          website={"https://craftsforcharity.com/"}
          logo={CFCLogo}
          linkColor={ColorThemes.darkBlue}
          orgAbrv={"CFC"}
          mainColor={ColorThemes.mainBlue}
          affOrgName={"Crafts For Charity"}
          affOrgsDescription={
            "Crafts for Charity is a student-led nonprofit providing classes and opportunities for everyone to give back to their communities through crafting! We help donate handmade goods to charities for causes like homelessness."
          }
        />
      </Container>
      <br />
      <br />
    </div>
  );
};
