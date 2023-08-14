import React from "react";
import { Header } from "@/components/Header";
import { Container } from "react-bootstrap";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png";
import CFCLogo from "@/media/AffiliatedOrgs/CFC_Logo.png";

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
        <section>
          <AboutAffOrgsCard
            website={"https://craftsforcharity.com/"}
            logo={CFCLogo}
            linkColor={ColorThemes.darkBlue}
            orgAbrv={"CFC"}
            mainColor={ColorThemes.mainBlue}
            affOrgName={"Crafts For Charity"}
            affOrgsDescription={
              "Crafts for Charity is a student-led nonprofit providing classes and opportunities for everyone to give back to their communities through crafting! They help donate handmade goods to charities for causes like homelessness and we are their primary fiscal sponsor."
            }
            alt={"Crafts for Charity Logo"}
          />
        </section>
      </Container>
    </div>
  );
};
