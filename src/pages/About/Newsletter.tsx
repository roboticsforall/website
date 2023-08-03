import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "@/components/Header";
import { NewsCard } from "@/components/About/NewsCard";
import { ButtonFullWidth } from "@/components/ButtonFullWidth";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png"; // add correct image here
import newsletterJSON from "@/posts/newsletters.json";

import { ColorThemes } from "@/colors";

export const Newsletter: React.FC = () => {
  return (
    <>
      <Header
        headerTextColor={ColorThemes.mainYellow}
        image={headerBlobYellow}
        title={"Read more about our work!"}
        description={
          "Read through our monthly newsletter to learn more about our work!"
        }
      />
      <section>
        <Container>
          <h2>Read through our newsletters month by month down below.</h2>
          <section>
            <Row className="g-3">
              {newsletterJSON.newsletters_list
                .slice(0, 4)
                .map((newsletter, i) => (
                  <Col key={i} md>
                    <NewsCard
                      title={newsletter.date}
                      file={newsletter.file_path}
                      variant={"primaryYellow"}
                    />
                  </Col>
                ))}
            </Row>
          </section>

          {/* Read Previous News Button */}
          <ButtonFullWidth
            title={"Read Previous Newsletters"}
            location="/about/pastnewsletter"
            variant="primaryYellow"
          />
          <br />
          <br />

          <section>
            <Row>
              <h2>Subscribe for Updates!</h2>
              <iframe
                title="Mail Chimp Subscribe Form"
                height="1000vh"
                scrolling="yes"
                src="https://roboticsforall.us3.list-manage.com/subscribe/post?u=3ef87e40741b0c3fadf90e578&amp;id=0ec3a22201"
              />
            </Row>
          </section>
        </Container>
      </section>
    </>
  );
};
