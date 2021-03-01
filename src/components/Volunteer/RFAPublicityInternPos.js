import React, { useState } from 'react';
import {Container, Row, Tab, Nav} from "react-bootstrap";
import RFAPositionCard from "../RFAPositionCard";
import RFAPositionCard1 from "../RFAPositionCard1";
import RFAPositionCard2 from "../RFAPositionCard2";
import Placeholder from "../../media/placeholder.png";
import RFAHeader from '../RFAHeader';
import headerBlob from '../../media/HeaderBlobs/Blob-RFA.PNG';

export default function RFAPublicityInternPos(props){
  const [key, setKey] = useState("one")
  const ActiveStyle = {
    color: "#000000",
    background: "#FFCC00",
    border: 0,
    borderRadius: "15px 15px 0 0"
  };
  const inActiveStyle = {
    color: "#000000",
    background: "#FA8D1F",
    border: 0,
    borderRadius: "15px 15px 0 0"
  };

    return (
      <div>
      <RFAHeader headerTextColor = {"#FA8D1F"} image = {headerBlob} title = {"Volunteer to Teach Students STEM!"} description = {"Volunteer to help with graphic design, curriculum development, and much much more!"}/>
        <br></br>
        <br></br>
        <Container>
          <Tab.Container activeKey = {key} onSelect = {key => setKey(key)}>
              <Nav justify fill variant = "tabs">
                <Nav.Item>
                  <Nav.Link eventKey = "one" className = "pos" style = {key === "one" ? ActiveStyle : inActiveStyle}>Publicity Intern</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey = "one">
                  <RFAPositionCard posHeader = {"OVERVIEW"} posDescription = {
                    <div>
                      <p>
                        Publicity Interns are specialized Business Development Interns, who are specifically dedicated to helping the publicity team.
                        These volunteers are super important to our organization, as they increase the professionalism and personality of our whole
                        organization with their talents. You may apply in one of two categories: Graphic Design (Puts graphics together into finished
                        products like Instagram posts, flyers, and much more), and Illustrators (Illustrates new graphics). Please only apply if you
                        are skilled in one of the two above categories. They also may complete <u>Business Development Intern tasks</u>.
                      </p>
                    </div>
                  }/>
                  <RFAPositionCard1 posHeader = {"TASKS"} posImage = {Placeholder} posDescription = {
                  <div>
                    <p>
                      You are not required to know how to do all of these tasks, but you must be able to do at least one specific task.
                    </p>
                    <ul>
                      <li>Illustrate custom graphics for Robotics for All’s website and graphic design team</li>
                      <li>Proficient in graphic design. Create various assemblies of graphics including things like flyers, social media posts, and more</li>
                      <li>Crafting short stories and videos for Robotics for All</li>
                      <li>Build connections with corporate companies and organizations to form partnerships, host events and more</li>
                      <li>Other various Business Development Internship tasks</li>
                    </ul>
                  </div>
                  }/>
                  <RFAPositionCard2 posHeader = {"TIME COMMITMENT"} posImage = {Placeholder} posDescription = {
                    <ul>
                        <li>The minimum time commitment for this position is 3 hours per week, for one month</li>
                        <li>The total time commitment varies depending on which tasks you take and time of year</li>
                        <li>Interns are expected to attend bimonthly meetings</li>
                    </ul>
                  }/>
                  <RFAPositionCard1 posHeader = {"BENEFITS"} posImage = {Placeholder} posDescription = {
                    <ul>
                      <li>This is an unpaid position. Due to that, we can offer community service hours</li>
                      <li>Interning with Robotics for All looks great on any resume, whether applying for a future internship, job, or college</li>
                      <li>PotPotential future leadership opportunities (Robotics for All board, etc.) may be offered.</li>
                      <li>Experience the satisfaction of improving your local community.</li>
                      <li>Earn a recommendation letter from one of Robotics for All's leadership members.</li>
                    </ul>
                  }/>
                  <RFAPositionCard2 posHeader = {"REQUIREMENTS"} posImage = {Placeholder} posDescription = {
                    <ul>
                      <li>9th grade or above (exceptions may be made, on occasion, for 8th graders with a volunteering background)</li>
                      <li>Consistent access to a computer and stable WiFi</li>
                      <li>Have skills in one of the following categories:</li>
                        <ul>
                        <li>Illustration (Creating Graphics)</li>
                        <li>Graphic Design (Putting graphics together)</li>
                        </ul>
                    </ul>
                  }/>
                  <RFAPositionCard1 posHeader = {"BENEFICIAL QUALIFICATIONS"} posImage = {Placeholder} posDescription = {
                    <ul>
                      <li>Strong communication skills</li>
                      <li>Good at working with teams</li>
                      <li>Strong work ethic and responsibility</li>
                      <li>Well organized</li>
                    </ul>
                  }/>
                  <RFAPositionCard2 posHeader = {"QUESTIONS"} posImage = {Placeholder} posDescription = {
                    <ul>
                      <li>If you have any other questions, please visit our <a href="#">intern FAQ's</a></li>
                      <li>Please direct additional questions to a href="mailto:info@roboticsforall.net">info@roboticsforall.net</a></li>
                    </ul>
                  }/>
                  <Button size="lg" style={button} block>Apply Now!</Button>
                  <br></br>
                  <br></br>
                </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
          </Container>
        </div>
    );
}
