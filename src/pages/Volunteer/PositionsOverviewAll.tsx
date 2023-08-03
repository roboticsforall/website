import React from "react";
import { PosOverview } from "@/components/Volunteer/PosOverview";
import { ColorThemes } from "@/colors";
import generalInternJSON from "@/posts/business_intern_position_description.json";
import publicityInternJSON from "@/posts/publicity_intern_position_description.json";
import technicalInternJSON from "@/posts/technical_intern_position_description.json";
import curricdevpositionsJSON from "@/posts/curriculum_developer_position_description.json";

import headerBlobBlue from "@/media/HeaderBlobs/blue.png";
import headerBlobOrange from "@/media/HeaderBlobs/orange.png";
import headerBlobGreen from "@/media/HeaderBlobs/green.png";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png";

const options = {
  businessProps: {
    color: ColorThemes.mainBlue,
    variant: "primaryBlue",
    position: "Business Development Intern",
    headerTitle: "Become a General Business Intern!",
    headerDescription:
      "General Business Interns help with a variety of tasks from recruitment to data analysis!",
    data: generalInternJSON,
    headerBlob: headerBlobBlue,
  },
  publicityProps: {
    color: ColorThemes.mainOrange,
    variant: "primaryOrange",
    position: "Publicity Intern",
    headerTitle: "Volunteer to Build Our Outreach!",
    headerDescription:
      "Volunteer to help with graphic design, illustrations, and much much more!",
    data: publicityInternJSON,
    headerBlob: headerBlobOrange,
  },
  technicalProps: {
    color: ColorThemes.mainGreen,
    variant: "primaryGreen",
    position: "Technical Intern",
    headerTitle: "Help develop curriculum and software!",
    headerDescription:
      "Technical interns use their STEM skills to create and revise curriculum and make custom software.",
    data: technicalInternJSON,
    headerBlob: headerBlobGreen,
  },
  curricDevProps: {
    color: ColorThemes.mainYellow,
    variant: "primaryYellow",
    position: "Curriculum Developer",
    headerTitle: "Help develop curriculum!",
    headerDescription:
      "Curriculum developers construct the diverse set of curriculum at Robotics For All",
    data: curricdevpositionsJSON,
    headerBlob: headerBlobYellow,
  },
};

export const PositionsOverviewAll = ({
  path,
}: {
  path: string;
}): JSX.Element => {
  switch (path) {
    case "/volunteer/publicitypositions":
      return <PosOverview {...options.publicityProps} />;
    case "/volunteer/technicalpositions":
      return <PosOverview {...options.technicalProps} />;
    case "/volunteer/businesspositions":
      return <PosOverview {...options.businessProps} />;
    case "/volunteer/curricdevpositions":
      return <PosOverview {...options.curricDevProps} />;
    default:
      console.error("No webpage setup for this link");
      break;
  }

  return <></>;
};
