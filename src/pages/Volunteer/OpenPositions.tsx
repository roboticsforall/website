import React from "react";
import { Container, Tab } from "react-bootstrap";
import { Header } from "@/components/Header";
import headerBlobOrange from "@/media/HeaderBlobs/orange.png";

import Markdown from "markdown-to-jsx";

import { ColorThemes } from "@/colors";
import { FAQDropdowns } from "@/components/FAQDropdowns";
import internOverviewJSON from "@/posts/intern_overview.json";

export const OpenPositions: React.FC = () => {
  return (
    <>
      <Header
        headerTextColor={"#FA8D1F"}
        image={headerBlobOrange}
        title={"Intern at Robotics for All in 20+ groups"}
        description={
          "Interns work on anything from graphic design to curriculum development!"
        }
      />

      <section></section>
    </>
  );
};
