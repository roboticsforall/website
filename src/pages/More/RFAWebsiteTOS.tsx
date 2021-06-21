import React from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { RFAHeader } from "@/components/RFAHeader";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png";
import { RFAWebsiteTOSCard } from "@/components/RFAWebsiteTOSCard";
import { RFAWebsiteTOSCard2 } from "@/components/RFAWebsiteTOSCard2";

export const RFAWebsiteTOS: React.FC = () => {
  /*light yellow
  #ffcc00
  rgb(255, 204, 0, 0.5)
  */
  const ActiveStyle: React.CSSProperties = {
    color: "#000000",
    background: "rgb(255, 204, 0, 0.5)",
    border: 0,
    borderRadius: "15px 15px 0 0",
    fontFamily: "Oswald-Medium",
    fontSize: "3vmax",
    padding: "20px",
    textAlign: "left",
  };
  /*light orange
  #fcaf62
  rgb(252, 175, 98, 0.5)
  */

  const ActiveStyle2: React.CSSProperties = {
    color: "#000000",
    background: "rgb(252, 175, 98, 0.5)",
    border: 0,
    borderRadius: "15px 15px 0 0",
    fontFamily: "Oswald-Medium",
    fontSize: "3vmax",
    padding: "20px",
    textAlign: "left",
  };

  /*right side with no styling, inactive*/
  const inActiveStyle: React.CSSProperties = {
    color: "#000000",
    background: "#fff",
    border: 0,
    borderRadius: "15px 15px 0 0",
    fontFamily: "Oswald-Medium",
    fontSize: "10vmax",
    padding: "20px",
    textAlign: "left",
  };

  return (
    <div>
      <RFAHeader
        headerTextColor={"#ffcc00"}
        image={headerBlobYellow}
        title={"Website Terms of Use"}
        description={"Learn more about Robotics for All's terms of use!"}
      />
      <br />
      <br />
      <Container>
        <Nav justify fill variant="tabs">
          <Nav.Item>
            <Nav.Link style={ActiveStyle} disabled>
              1. Introduction
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
                    These Website Standard Terms And Conditions (these “Terms”
                    or these “Website Standard Terms And Conditions”) contained
                    herein on this webpage, shall govern your use of this
                    website (www.roboticsforall.net), including all pages within
                    this website (collectively referred to herein below as this
                    “Website”). These Terms apply in full force and effect to
                    your use of this Website and by using this Website, you
                    expressly accept all terms and conditions contained herein
                    in full. You must not use this Website, if you have any
                    objection to any of these Website Standard Terms And
                    Conditions.
                  </p>
                </div>
              }
            />
          </Tab.Pane>
        </Nav>

        <Nav justify fill variant="tabs">
          <Nav.Item>
            <Nav.Link style={ActiveStyle2} disabled>
              2. Intellectual Property Rights
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
                    Other than content you own, which you may have opted to
                    include on this Website, under these Terms, Robotics for All
                    and/or its licensors own all rights to the intellectual
                    property and material contained in this Website, and all
                    such rights are reserved. You are granted a limited license
                    only, subject to the restrictions provided in these Terms,
                    for purposes of viewing the material contained on this
                    Website.
                  </p>
                </div>
              }
            />
          </Tab.Pane>
        </Nav>

        <Nav justify fill variant="tabs">
          <Nav.Item>
            <Nav.Link style={ActiveStyle} disabled>
              3. Restrictions
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
                    You are expressly and emphatically restricted from all of
                    the following:
                  </p>
                  <ol>
                    <li>publishing any Website material in any media;</li>
                    <li>
                      selling, sublicensing and/or otherwise commercializing any
                      Website material;
                    </li>
                    <li>
                      publicly performing and/or showing any Website material;
                    </li>
                    <li>
                      using this Website in any way that is, or may be, damaging
                      to this Website;
                    </li>
                    <li>
                      using this Website in any way that impacts user access to
                      this Website;
                    </li>
                    <li>
                      using this Website contrary to applicable laws and
                      regulations, or in a way that causes, or may cause, harm
                      to the Website, or to any person or business entity;
                    </li>
                    <li>
                      engaging in any data mining, data harvesting, data
                      extracting or any other similar activity in relation to
                      this Website, or while using this Website;
                    </li>
                  </ol>
                  <p>
                    Certain areas of this Website are restricted from access by
                    you and Robotics for All may further restrict access by you
                    to any areas of this Website, at any time, in its sole and
                    absolute discretion. Any user ID and password you may have
                    for this Website are confidential and you must maintain
                    confidentiality of such information.
                  </p>
                </div>
              }
            />
          </Tab.Pane>
        </Nav>

        <Nav justify fill variant="tabs">
          <Nav.Item>
            <Nav.Link style={ActiveStyle2} disabled>
              4. No Warranties
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
                    This Website is provided “as is,” with all faults, and
                    Robotics for All makes no express or implied representations
                    or warranties, of any kind related to this Website or the
                    materials contained on this Website. Additionally, nothing
                    contained on this Website shall be construed as providing
                    consult or advice to you.
                  </p>
                </div>
              }
            />
          </Tab.Pane>
        </Nav>

        <Nav justify fill variant="tabs">
          <Nav.Item>
            <Nav.Link style={ActiveStyle} disabled>
              5. Limitation of Liability
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
                    In no event shall Robotics for All, nor any of its officers,
                    directors and employees, be liable to you for anything
                    arising out of or in any way connected with your use of this
                    Website, whether such liability is under contract, tort or
                    otherwise, and Robotics for All, including its officers,
                    directors and employees shall not be liable for any
                    indirect, consequential or special liability arising out of
                    or in any way related to your use of this Website.
                  </p>
                </div>
              }
            />
          </Tab.Pane>
        </Nav>

        <Nav justify fill variant="tabs">
          <Nav.Item>
            <Nav.Link style={ActiveStyle2} disabled>
              6. Indemnification
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
                    You hereby indemnify to the fullest extent Robotics for All
                    from and against any and all liabilities, costs, demands,
                    causes of action, damages and expenses (including reasonable
                    attorney’s fees) arising out of or in any way related to
                    your breach of any of the provisions of these Terms.
                  </p>
                </div>
              }
            />
          </Tab.Pane>
        </Nav>

        <Nav justify fill variant="tabs">
          <Nav.Item>
            <Nav.Link style={ActiveStyle} disabled>
              7. Severability
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
                    If any provision of these Terms is found to be unenforceable
                    or invalid under any applicable law, such unenforceability
                    or invalidity shall not render these Terms unenforceable or
                    invalid as a whole, and such provisions shall be deleted
                    without affecting the remaining provisions herein.
                  </p>
                </div>
              }
            />
          </Tab.Pane>
        </Nav>

        <Nav justify fill variant="tabs">
          <Nav.Item>
            <Nav.Link style={ActiveStyle2} disabled>
              8. Variation of Terms
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
                    Robotics for All is permitted to revise these Terms at any
                    time as it sees fit, and by using this Website you are
                    expected to review such Terms on a regular basis to ensure
                    you understand all terms and conditions governing use of
                    this Website.
                  </p>
                </div>
              }
            />
          </Tab.Pane>
        </Nav>

        <Nav justify fill variant="tabs">
          <Nav.Item>
            <Nav.Link style={ActiveStyle} disabled>
              9. Assignment
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
                    Robotics for All shall be permitted to assign, transfer, and
                    subcontract its rights and/or obligations under these Terms
                    without any notification or consent required. However, you
                    shall not be permitted to assign, transfer, or subcontract
                    any of your rights and/or obligations under these Terms.
                  </p>
                </div>
              }
            />
          </Tab.Pane>
        </Nav>

        <Nav justify fill variant="tabs">
          <Nav.Item>
            <Nav.Link style={ActiveStyle2} disabled>
              10. Entire Agreement
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
                    These Terms, including any legal notices and disclaimers
                    contained on this Website, constitute the entire agreement
                    between Robotics for All and you in relation to your use of
                    this Website, and supersede all prior agreements and
                    understandings with respect to the same.
                  </p>
                </div>
              }
            />
          </Tab.Pane>
        </Nav>

        <Nav justify fill variant="tabs">
          <Nav.Item>
            <Nav.Link style={ActiveStyle} disabled>
              11. Applicable Law
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
                    These Terms will be governed by and construed in accordance
                    with the laws of the State of California, and you submit to
                    the non-exclusive jurisdiction of the state and federal
                    courts located in California for the resolution of any
                    disputes.
                  </p>
                </div>
              }
            />
          </Tab.Pane>
        </Nav>
      </Container>
    </div>
  );
};