import React, { useState } from 'react';
import {Container, Row, Tab, Nav, Button} from "react-bootstrap";
import RFAHeader from '../RFAHeader';
import headerBlobYellow from "../../media/HeaderBlobs/yellow.png";
import RFAPositionCard from "../RFAPositionCard";
import RFAPositionCard1 from "../RFAPositionCard1";
import RFAPositionCard2 from "../RFAPositionCard2";
import Scheduling from "../../media/VolunteerPos/Scheduling.png";
import TimeCommitment from "../../media/VolunteerPos/Time Commitment.png";
import Curriculum from "../../media/VolunteerPos/Curriculum.png";
import Requirements from "../../media/VolunteerPos/Requirements.png";
import BeneficialQualifications from "../../media/VolunteerPos/Beneficial Qualifications.png";
import Tasks from "../../media/VolunteerPos/tasks.png";
import Benefits from "../../media/VolunteerPos/Benefits.png";
import Questions from "../../media/VolunteerPos/Questions.png"

export default function RFAPublicityInternPos(props){
  const [key, setKey] = useState("one")
  const ActiveStyle = {
    color: "#000000",
    background: "#FFCC00",
    border: 0,
    borderRadius: "15px 15px 0 0",
    fontFamily: "mazzard-h-extrabold",
    fontSize: "x-large",
    padding: "30px",
  };
  const inActiveStyle = {
    color: "#000000",
    background: "#FA8D1F",
    border: 0,
    borderRadius: "15px 15px 0 0",
    fontFamily: "mazzard-h-extrabold",
    fontSize: "x-large",
    padding: "30px",
  };
  const button = {
    color: "#000000",
    background: "#FA8D1F",
    fontFamily: "mazzard-h-extrabold",
    fontSize: "45px",
    borderColor: "#FA8D1F",
    width: "75%",
    borderRadius: "15px",
    margin: "auto",
  };
  const black = {
    color: "#000000",
  };
  const con = {
    width: "75%",
    margin: "auto",
  };

    return (
      <div>
      <RFAHeader headerTextColor = {"#FA8D1F"} image = {headerBlobYellow} title = {"Volunteer to Build Our Outreach!"} description = {"Volunteer to help with graphic design, illustrations, and much much more!"}/>
        <Container>
          <br></br>
          <br></br>
        <a className = "hyperlink" href = "#">
            <Row style = {button} className = "p-2 d-flex justify-content-center align-items-center">
                <h2 className = "BeVietnam-ExtraBold text-center">Apply Now!</h2>
            </Row>
        </a>
          <br></br>
          <br></br>
          <Tab.Container activeKey = {key} onSelect = {key => setKey(key)}>
              <Nav justify fill variant = "tabs" style = {con}>
                <Nav.Item>
                  <Nav.Link eventKey = "one" className = "pos" style = {key === "one" ? ActiveStyle : inActiveStyle}><p style = {black}>Publicity Intern</p></Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey = "one">
                  <RFAPositionCard posHeader = {"OVERVIEW"} posDescription = {
                    <div>
                      <p>   
                        Publicity Interns are specialized Business Development Interns, who are specifically dedicated to helping the publicity team. These volunteers are super important to our organization, as they increase the professionalism and personality of our whole organization with their talents. You may apply in one of two categories: Graphic Design (Puts graphics together into finished products like Instagram posts, flyers, and much more), and Illustrators (Illustrates new graphics). Please only apply if you are skilled in one of the two above categories. 
                      </p>
                    </div>
                  }/>
                  <RFAPositionCard1 posHeader = {"TASKS"} posImage = {Tasks} posDescription = {
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
                  <RFAPositionCard2 posHeader = {"TIME COMMITMENT"} posImage = {TimeCommitment} posDescription = {
                    <ul>
                        <li>The minimum time commitment for this position is 3 hours per week, for one month</li>
                        <li>The total time commitment varies depending on which tasks you take and time of year</li>
                        <li>Interns are expected to attend bimonthly meetings</li>
                    </ul>
                  }/>
                  <RFAPositionCard1 posHeader = {"BENEFITS"} posImage = {Benefits} posDescription = {
                    <ul>
                      <li>This is an unpaid position. Due to that, we can offer community service hours</li>
                      <li>Interning with Robotics for All looks great on any resume, whether applying for a future internship, job, or college</li>
                      <li>PotPotential future leadership opportunities (Robotics for All board, etc.) may be offered.</li>
                      <li>Experience the satisfaction of improving your local community.</li>
                      <li>Earn a recommendation letter from one of Robotics for All's leadership members.</li>
                    </ul>
                  }/>
                  <RFAPositionCard2 posHeader = {"REQUIREMENTS"} posImage = {Requirements} posDescription = {
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
                  <RFAPositionCard1 posHeader = {"BENEFICIAL QUALIFICATIONS"} posImage = {BeneficialQualifications} posDescription = {
                    <ul>
                      <li>Strong communication skills</li>
                      <li>Good at working with teams</li>
                      <li>Strong work ethic and responsibility</li>
                      <li>Well organized</li>
                    </ul>
                  }/>
                  <RFAPositionCard2 posHeader = {"QUESTIONS"} posImage = {Questions} posDescription = {
                    <ul>
                      <li>If you have any other questions, please visit our <a href="#" style={black}>intern FAQ's</a></li>
                      <li>Please direct additional questions to <a href="mailto:info@roboticsforall.net" style={black}>info@roboticsforall.net</a></li>
                    </ul>
                  }/>
                  <br></br>
                  <br></br>
                </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
          </Container>
        </div>
    );
}
