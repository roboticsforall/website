import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "@/components/Header";
import { NewsCard } from "@/components/About/NewsCard";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png"; // add correct image here
import newsletterJSON from "@/posts/newsletters.json";

import { ColorThemes } from "@/colors";

export const PastNewsletter: React.FC = () => {
  return (
    <>
      <Header
        headerTextColor={ColorThemes.mainYellow}
        image={headerBlobYellow}
        title={
          "Read through our past monthly newsletters to learn more about our work!"
        }
        description={
          "Read through our past monthly newsletters to learn more about our work!"
        }
      />
      <Container>
        <h3 className="header3 mt-4">
          Read through our newsletters month by month down below.
        </h3>
        <br />
        <Row>
          {newsletterJSON.newsletters_list
            .slice(4, newsletterJSON.newsletters_list.length)
            .map((newsletter, i) => (
              <Col key={i} md={3}>
                <NewsCard
                  title={newsletter.date}
                  file={newsletter.file_path.replace("/public", "")}
                />
                <br />
              </Col>
            ))}
        </Row>

        <br></br>
        <br></br>
      </Container>
    </>
  );
};
