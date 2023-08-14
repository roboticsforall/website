import React from "react";
import { Container, Tab } from "react-bootstrap";
import { Header } from "@/components/Header";
import headerBlobOrange from "@/media/HeaderBlobs/orange.png";
import { TabCardsNoImage } from "@/components/Volunteer/TabCards";
import { InternDescriptionTabs } from "../../components/Volunteer/InternDescriptionTabs";

import Markdown from "markdown-to-jsx";

import internfaqsJSON from "@/posts/faqs/recruitment_faqs.json";

import { ColorThemes } from "@/colors";
import { FAQDropdowns } from "@/components/FAQDropdowns";
import internOverviewJSON from "@/posts/intern_overview.json";

export const InternOverview: React.FC = () => {
  const positionsTitle: React.CSSProperties = {
    color: ColorThemes.mainYellow,
    textAlign: "center",
    wordBreak: "break-word",
  };

  return (
    <>
      <Header
        headerTextColor={"#FA8D1F"}
        image={headerBlobOrange}
        title={"Intern at Robotics for All in 20+ groups."}
        description={
          "Interns work on anything from graphic design to curriculum development!"
        }
      />
      <section>
        <Container>
          <Tab.Container>
            <Tab.Content>
              <TabCardsNoImage
                posHeader={"OVERVIEW"}
                generalColor={ColorThemes.mainYellow}
                posDescription={
                  <div>
                    <p>
                      <Markdown>{internOverviewJSON.overview}</Markdown>
                    </p>
                  </div>
                }
              />
              <InternDescriptionTabs
                publicityDescription={
                  <Markdown>{internOverviewJSON.publicity_path}</Markdown>
                }
                technicalDescription={
                  <Markdown>{internOverviewJSON.technical_path}</Markdown>
                }
                businessDescription={
                  <Markdown>
                    {internOverviewJSON.general_business_path}
                  </Markdown>
                }
                addButtons={true}
              />
              <TabCardsNoImage
                posHeader={"SCHEDULING"}
                generalColor={ColorThemes.lightYellow}
                posDescription={
                  <div>
                    <Markdown>{internOverviewJSON.scheduling}</Markdown>
                  </div>
                }
              />
              <TabCardsNoImage
                posHeader={"TIME COMMITMENT"}
                generalColor={ColorThemes.mainYellow}
                posDescription={
                  <Markdown>{internOverviewJSON.time_commitment}</Markdown>
                }
              />
              <TabCardsNoImage
                posHeader={"BENEFITS"}
                generalColor={ColorThemes.lightYellow}
                posDescription={
                  <Markdown>{internOverviewJSON.benefits}</Markdown>
                }
              />
              <TabCardsNoImage
                posHeader={"REQUIREMENTS"}
                generalColor={ColorThemes.mainYellow}
                posDescription={
                  <Markdown>{internOverviewJSON.requirments}</Markdown>
                }
              />
              <TabCardsNoImage
                posHeader={"BENEFICIAL QUALIFICATIONS"}
                generalColor={ColorThemes.lightYellow}
                posDescription={
                  <Markdown>
                    {internOverviewJSON.beneficial_qualifications}
                  </Markdown>
                }
              />
              <section>
                <h2 style={positionsTitle}>FAQs</h2>
                <FAQDropdowns data={internfaqsJSON.intern_faqs} />
              </section>
            </Tab.Content>
          </Tab.Container>
        </Container>
      </section>
    </>
  );
};
