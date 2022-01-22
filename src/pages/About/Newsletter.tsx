import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "@/components/Header";
import { NewsCard } from "@/components/About/NewsCard";
import { LongButton } from "@/components/LongButton";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png"; // add correct image here
import { SubmitButton } from "@/components/SubmitButton";
import newsletterJSON from "@/posts/newsletters.json";

import { ColorThemes } from "@/colors";

export const Newsletter: React.FC = () => {
  const heading3: React.CSSProperties = {
  };

  const subscribe: React.CSSProperties = {
    color: "#554400",
    textAlign: "center",
  };

  const ofsubscriber: React.CSSProperties = {
    color: "#b38f00",
  };

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
      <Container>
        <Row>
          <h3 style={heading3} className="mt-4">
            Read through our newsletters month by month down below.
          </h3>
        </Row>
        <br />
        <Row>
          {newsletterJSON.newsletters_list.slice(0, 4).map((newsletter, i) => (
            <Col key={i} md>
              <NewsCard
                title={newsletter.date}
                file={newsletter.file_path.replace("/public", "")}
              />
              <br />
            </Col>
          ))}
        </Row>

        {/* Read Previous News Button */}
        <LongButton
          title={"Read Previous Newsletters"}
          location="/about/pastnewsletter"
        />
        <br></br>
        <br></br>
        <Row>
          {/* Begin Mailchimp Signup Form */}

          <div id="mc_embed_signup">
            <form
              action="https://roboticsforall.us3.list-manage.com/subscribe/post?u=3ef87e40741b0c3fadf90e578&amp;id=0ec3a22201"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <h2 style={subscribe}> Subscribe for Updates!</h2>

                <br></br>

                <Row>
                  <Col md={8}>
                    <div className="mc-field-group">
                      <label htmlFor="mce-FNAME">
                        <span className="asterisk"></span>
                      </label>
                      <input
                        type="text"
                        required
                        value=""
                        name="FNAME"
                        className="required"
                        id="mce-FNAME"
                        placeholder="Name"
                      />
                    </div>

                    <div className="mc-field-group ">
                      <label htmlFor="mce-EMAIL">
                        <span className="asterisk"></span>
                      </label>
                      <input
                        type="email"
                        value=""
                        required
                        name="EMAIL"
                        className="required email"
                        id="mce-EMAIL"
                        placeholder="Email"
                      />
                    </div>
                  </Col>

                  <Col md={4}>
                    <div
                      style={{ display: "initial" }}
                      className="mc-field-group input-group"
                    >
                      <strong style={ofsubscriber}>I am a... </strong>
                      <ul>
                        <li>
                          <input
                            type="checkbox"
                            className="checkbox"
                            value="4"
                            name="group[24981][4]"
                            id="mce-group[24981]-24981-2"
                          />
                          <label htmlFor="mce-group[24981]-24981-2">
                            Parent/Student
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            className="checkbox"
                            value="1"
                            name="group[24981][1]"
                            id="mce-group[24981]-24981-0"
                          />
                          <label htmlFor="mce-group[24981]-24981-0">
                            Volunteer
                          </label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            className="checkbox"
                            value="2"
                            name="group[24981][2]"
                            id="mce-group[24981]-24981-1"
                          />
                          <label htmlFor="mce-group[24981]-24981-1">
                            Donor/Mentor
                          </label>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>

                <div id="mce-responses" className="clear">
                  {" "}
                  {/* real people should not fill this in and expect good things - do not emove this or risk form bot signups*/}
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  ></div>
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  ></div>
                </div>

                <br></br>
                <br></br>
                <br></br>

                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_3ef87e40741b0c3fadf90e578_0ec3a22201"
                    tabIndex={-1}
                    value=""
                  />
                </div>

                <SubmitButton
                  className="clear button"
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                />
              </div>
            </form>
          </div>
          {/* End mc_embed_signup */}
        </Row>
        <br></br>
        <br></br>
      </Container>
    </>
  );
};
