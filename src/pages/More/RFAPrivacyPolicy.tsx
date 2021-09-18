import React from "react";
import { Container, Row, Tab, Nav } from "react-bootstrap";
import { RFAHeader } from "@/components/RFAHeader";
import headerBlobYellow from "../../media/HeaderBlobs/yellow.png";
import { RFAWebsiteTOSCard } from "@/components/RFAWebsiteTOSCard";
import { RFAWebsiteTOSCard2 } from "@/components/RFAWebsiteTOSCard2";
import { ColorThemes } from "@/colors";

export const RFAPrivacyPolicy: React.FC = () => {
  const ActiveStyle: React.CSSProperties = {
    color: "#000000",
    background: ColorThemes.lightYellow,
    border: 0,
    borderRadius: "15px 15px 0 0",
    fontFamily: "Oswald-Medium",
    fontSize: "3vmax",
    padding: "20px",
    textAlign: "left",
    width: "auto"
  };

  const ActiveStyle2: React.CSSProperties = {
    color: "#000000",
    background: ColorThemes.lightOrange,
    border: 0,
    borderRadius: "15px 15px 0 0",
    fontFamily: "Oswald-Medium",
    fontSize: "3vmax",
    padding: "20px",
    textAlign: "left",
  };

  const inActiveStyle: React.CSSProperties = {
    color: "#000000",
    background: ColorThemes.white,
    border: 0,
    borderRadius: "15px 15px 0 0",
    fontFamily: "Oswald-Medium",
    fontSize: "3vmax",
    padding: "30px",
    textAlign: "left",
  };

  const positionsDescription: React.CSSProperties = {
    fontFamily: "BeVietnam-SemiBold",
    fontWeight: 600,
    color: "black",
  };

  return (
    <div>
      <RFAHeader
        headerTextColor={ColorThemes.mainYellow}
        image={headerBlobYellow}
        title={"Website Privacy Policy"}
        description={"Learn more about Robotics for All's privacy policies!"}
      />
      <br />
      <br />
      <Container>
        <Nav justify fill variant="tabs">
          <Nav.Item>
            <Nav.Link style={ActiveStyle} disabled>
              Privacy Notice
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={inActiveStyle} disabled></Nav.Link>
          </Nav.Item>
          <Tab.Pane>
            <RFAWebsiteTOSCard
              posDescription={
                <div>
                  <p>
                    This privacy notice discloses the privacy practices for
                    www.roboticsforall.net. This privacy notice applies solely
                    to information collected by this website. It will notify you
                    of the following:
                  </p>
                  <ol>
                    <li>
                      What personally identifiable information is collected from
                      you through the website, how it is used, and with whom it
                      may be shared.
                    </li>
                    <li>
                      What choices are available to you regarding the use of
                      your data.
                    </li>
                    <li>
                      The security procedures in place to protect against the
                      misuse of your information.
                    </li>
                    <li>
                      How you can correct any inaccuracies in the information.
                    </li>
                  </ol>
                </div>
              }
            />
          </Tab.Pane>
        </Nav>

        <Nav justify fill variant="tabs">
          <Nav.Item>
            <Nav.Link style={ActiveStyle2} disabled>
              Information Collection, Use, and Sharing
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={inActiveStyle} disabled></Nav.Link>
          </Nav.Item>
          <Tab.Pane>
            <RFAWebsiteTOSCard2
              posDescription={
                <div>
                  <p>
                    We are the sole owners of the information collected on this
                    site. We only have access to/collect information that you
                    voluntarily give us via email or other direct contact from
                    you. We will not sell or rent this information to anyone.
                  </p>
                  <p>
                    We will use your information to respond to you regarding the
                    reason you contacted us. We will not share your information
                    with any third party outside of our organization, other than
                    as necessary to fulfill your request.
                  </p>
                  <p>
                    Unless you ask us not to, we may contact you via email in
                    the future to tell you about specials, new products or
                    services, or changes to this privacy policy.
                  </p>
                </div>
              }
            />
          </Tab.Pane>
        </Nav>

        <Nav justify fill variant="tabs">
          <Nav.Item>
            <Nav.Link style={ActiveStyle} disabled>
              Your Access to and Control Over Information
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={inActiveStyle} disabled></Nav.Link>
          </Nav.Item>
          <Tab.Pane>
            <RFAWebsiteTOSCard
              posDescription={
                <div>
                  <p>
                    You may opt out of any future contacts from us at any time.
                    You can do the following at any time by contacting us via
                    the email address or phone number given on our website:
                  </p>
                  <ul>
                    <li>See what data we have about you, if any.</li>
                    <li>Change/correct any data we have about you.</li>
                    <li>Have us delete any data we have about you.</li>
                    <li>
                      Express any concern you have about our use of your data.
                    </li>
                  </ul>
                </div>
              }
            />
          </Tab.Pane>
        </Nav>
        <Nav justify fill variant="tabs">
          <Nav.Item>
            <Nav.Link style={ActiveStyle2} disabled>
              Security
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={inActiveStyle} disabled></Nav.Link>
          </Nav.Item>
          <Tab.Pane eventKey="one">
            <RFAWebsiteTOSCard2
              posDescription={
                <div>
                  <p>
                    We take precautions to protect your information. When you
                    submit sensitive information via the website, your
                    information is protected both online and offline. Wherever
                    we collect sensitive information (such as credit card data),
                    that information is encrypted and transmitted to us in a
                    secure way. You can verify this by looking for a lock icon
                    in the address bar and looking for "https" at the beginning
                    of the address of the Web page.
                  </p>
                  <p>
                    While we use encryption to protect sensitive information
                    transmitted online, we also protect your information
                    offline. Only employees who need the information to perform
                    a specific job (for example, billing or customer service)
                    are granted access to personally identifiable information.
                    The computers/servers in which we store personally
                    identifiable information are kept in a secure environment.
                  </p>
                </div>
              }
            />
          </Tab.Pane>
        </Nav>
        <Nav justify fill variant="tabs">
          <Nav.Item>
            <Nav.Link style={ActiveStyle} disabled>
              Links
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={inActiveStyle} disabled></Nav.Link>
          </Nav.Item>
          <Tab.Pane>
            <RFAWebsiteTOSCard
              posDescription={
                <div>
                  <p>
                    This website contains links to other sites. Please be aware
                    that we are not responsible for the content or privacy
                    practices of such other sites. We encourage our users to be
                    aware when they leave our site and to read the privacy
                    statements of any other site that collects personally
                    identifiable information.
                  </p>
                </div>
              }
            />
          </Tab.Pane>
        </Nav>
        <Row className="justify-content-center align-items-center">
          <p
            style={positionsDescription}
            className="text-center header-description-size"
          >
            If you feel that we are not abiding by this privacy policy, you
            should contact us immediately via telephone at (650) 665-9734 or via
            email at info@roboticsforall.net.
          </p>
        </Row>
      </Container>
    </div>
  );
};
