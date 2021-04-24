import React, { useState } from 'react';
import {Container, Row, Tab, Nav, Button} from "react-bootstrap";
import RFAHeader from "../RFAHeader";
import headerBlobYellow from "../../media/HeaderBlobs/yellow.png";
import RFAPositionCard from "../RFAPositionCard";
import RFAPositionCard1 from "../RFAPositionCard1";
import RFAPositionCard2 from "../RFAPositionCard2";
import Placeholder from "../../media/Graphics/placeholder.png";
import Calendar from "../../media/Graphics/calendar.png";
import Clock from "../../media/Graphics/clock.png";
import Curriculum from "../../media/Graphics/curriculum.png";
import Laptop from "../../media/Graphics/laptop.png";
import Presentation from "../../media/Graphics/presentation.png";
import Tasks from "../../media/Graphics/tasks.png";
import ThumbsUp from "../../media/Graphics/thumbs up.png";

export default function RFATeacherPos(props){
  const [key, setKey] = useState("one")
  const ActiveStyle = {
    color: "#000000",
    background: "#FFCC00",
    border: "none",
    borderRadius: "15px 15px 0 0",
    fontFamily: "Mazzard-H-Extrabold",
    fontSize: "x-large",
    padding: "30px",
    height: "100%",
  };
  const inActiveStyle = {
    color: "#000000",
    background: "#FA8D1F",
    border: "none",
    borderRadius: "15px 15px 0 0",
    fontFamily: "Mazzard-H-Extrabold",
    fontSize: "x-large",
    padding: "30px",
    height: "100%",
  };
  const button = {
    background: "#FA8D1F",
    fontFamily: "Mazzard-H-Extrabold",
    borderRadius: "15px"
  };
    
  return (
    <div>
        <RFAHeader headerTextColor = {"#FA8D1F"} image = {headerBlobYellow} title = {"Volunteer to Teach Students STEM!"} description = {"Volunteer to help with graphic design, curriculum development, and much much more!"}/>
        <br></br>
        <br></br>
        <Container>
        <a className = "hyperlink" href = "#">
            <Row style = {button} className = "p-2 d-flex justify-content-center align-items-center">
                <h2 className = "BeVietnam-ExtraBold text-center">Apply Now!</h2>
            </Row>
        </a>
          <br></br>
          <br></br>
          <Tab.Container activeKey = {key} onSelect = {key => setKey(key)}>
              <Nav justify fill variant = "tabs">
                <Nav.Item>
                  <Nav.Link eventKey = "one" style = {key === "one" ? ActiveStyle : inActiveStyle}>Lead Instructor</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey = "two" style = {key === "two" ? ActiveStyle : inActiveStyle}>Teacher Assistant</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey = "one">
                  <RFAPositionCard posHeader = {"OVERVIEW"} posDescription = {
                    <div>
                      <p>
                        Lead Instructors are responsible for running Robotics for All classes, managing Teacher Assistants, and checking student homework. They also must ensure that classes run smoothly by helping students with debugging, and addressing any issues with student behavior. Lead Instructors are the highest authority in the class, so they must possess strong leadership and independence.
                      </p>
                    </div>
                  }/>
                  <RFAPositionCard2 posHeader = {"SCHEDULING"} posImage = {Calendar} posDescription = {
                    <div>
                      <p>
                        We start class sessions periodically (usually every few months). At the start of each session, accepted teachers may choose to volunteer in the class session. Although we do our best to administer classes efficiently, they are given based on teacher availability, position, and class interest. For that reason, it can take some time to get a class.
                      </p>
                      <p>
                        Classes run on either a Monday/Thursday or Tuesday/Friday schedule, with times ranging from roughly 2:00 pm Pacific Time to 6:00 pm Pacific Time (5:00 pm Eastern Time to 9:00 pm Eastern Time).
                      </p>
                    </div>
                  }/>
                  <RFAPositionCard1 posHeader = {"TASKS"} posImage = {Tasks} posDescription = {
                   <ul>
                    <li>Teach students in synchronous classes</li>
                    <li>Manage any Teacher Assistants</li>
                    <li>Post and review homework assignments</li>
                    <li>Email and respond to emails from parents</li>
                    <li>Answer student questions in a timely manner</li>
                  </ul>
                  }/>
                  <RFAPositionCard2 posHeader = {"CURRICULA"} posImage = {Curriculum} posDescription = {
                   <ul>
                    <li>Our current curricula for online classes include the Code.org Curriculum (for K-3rd graders), Basic Scratch Curriculum (for K-3rd graders), Scratch Curriculum (for 4th-6th graders), Python Curriculum (for 6th-8th graders), and TinkerCAD Curriculum (for 5th-8th graders).</li>
                    <li>Please note that we are not currently accepting applications from people who only are interested in teaching Python.</li>
                  </ul>
                  }/>
                  <RFAPositionCard1 posHeader = {"TIME COMMITMENT"} posImage = {Clock} posDescription = {
                    <ul>
                      <li>The total time commitment is 3 - 4 hours per week (or more if you choose to take on more than one class)</li>
                      <li>There are two, hour-long, synchronous classes per week</li>
                      <li>The rest of the time goes to checking homework and writing emails</li>
                  </ul>
                  }/>
                  <RFAPositionCard2 posHeader = {"BENEFITS"} posImage = {ThumbsUp} posDescription = {
                    <ul>
                      <li>We award community service hours</li>
                      <li>Leading a Robotics for All class will look good on any resume, whether applying for a future internship, job, or college</li>
                      <li>Potential future leadership opportunities (Robotics for All board, etc.) may be offered.</li>
                      <li>Become part of a fun, welcoming community</li>
                      <li>Practical and fulfilling teaching experience</li>
                    </ul>
                  }/>
                  <RFAPositionCard1 posHeader = {"REQUIREMENTS"} posImage = {Laptop} posDescription = {
                    <ul>
                      <li>Be in 10th grade or above (exceptions may be made to 9th graders with a strong background in teaching)</li>
                      <li>Mastery of one or more of the platforms that Robotics for All has curricula in (You can find a list of our curricula here)</li>
                    </ul>
                  }/>
                  <RFAPositionCard2 posHeader = {"BENEFICIAL QUALIFICATIONS"} posImage = {Presentation} posDescription = {
                    <ul>
                      <li>Strong communication skills</li>
                      <li>Good at working with teams</li>
                      <li>Prior teaching experience</li>
                      <li>Leadership or classroom management experience</li>
                    </ul>
                  }/>
                  <RFAPositionCard2 posHeader = {"QUESTIONS"} posDescription = {
                    <ul>
                      <li>If you have any other questions, please visit our <a href="#">teacher FAQ's</a></li>
                      <li>Please direct additional questions to <a href="mailto:info@roboticsforall.net">info@roboticsforall.net</a></li>
                    </ul>
                  }/>
                </Tab.Pane>
                <Tab.Pane eventKey = "two">
                  <RFAPositionCard posHeader = {"OVERVIEW"} posDescription = {
                    <div>
                      <p>
                        The teacher's assistant position is the perfect entry level position to teaching. As a teacher’s assistant, you will assist the lead instructor in classes by answering student questions, leading breakout rooms of 3 - 5 students, and reviewing homework.
                      </p>
                    </div>
                  }/>
                  <RFAPositionCard posHeader = {"SCHEDULING"} posDescription = {
                    <div>
                      <p>
                        We start class sessions periodically (usually every few months). At the start of each session, accepted teachers may choose to volunteer in the class session. Although we do our best to administer classes efficiently, they are given based on teacher availability, position, and class interest. For that reason, it can take some time to get a class.
                      </p>
                      <p>
                        Classes run on either a Monday/Thursday or Tuesday/Friday schedule, with times ranging from roughly 2:00 pm Pacific Time to 6:00 pm Pacific Time (5:00 pm Eastern Time to 9:00 pm Eastern Time).
                      </p>
                    </div>
                  }/>
                  <RFAPositionCard2 posHeader = {"TASKS"} posImage = {Placeholder} posDescription = {
                    <ul>
                      <li>Teach small groups students in synchronous classes using breakout rooms</li>
                      <li>Review homework assignments</li>
                      <li>Answer student questions in a timely manner</li>
                    </ul>
                  }/>
                  <RFAPositionCard1 posHeader = {"CURRICULA"} posImage = {Placeholder} posDescription = {
                    <ul>
                      <li>Our current curricula for online classes include the Code.org Curriculum (for K-3rd graders), Basic Scratch Curriculum (for K-3rd graders), Scratch Curriculum (for 4th-6th graders), Python Curriculum (for 6th-8th graders), and TinkerCAD Curriculum (for 5th-8th graders).</li>
                      <li>Please note that we are not currently accepting applications from people who only are interested in teaching Python.</li>
                    </ul>
                  }/>
                  <RFAPositionCard2 posHeader = {"TIME COMMITMENT"} posImage = {Clock} posDescription = {
                    <ul>
                      <li>The total time commitment is 3 - 4 hours per week (or more if you choose to take on more than one class)</li>
                      <li>There are two, hour-long, synchronous classes per week</li>
                      <li>The rest of the time goes to checking homework and writing emails</li>
                    </ul>
                  }/>
                  <RFAPositionCard1 posHeader = {"BENEFITS"} posImage = {ThumbsUp} posDescription = {
                    <ul>
                      <li>We award community service hours</li>
                      <li>Leading a Robotics for All class will look good on any resume, whether applying for a future internship, job, or college</li>
                      <li>Potential future leadership opportunities (Robotics for All board, etc.) may be offered.</li>
                      <li>Become part of a fun, welcoming community</li>
                      <li>Practical and fulfilling teaching experience</li>
                    </ul>
                  }/>
                  <RFAPositionCard2 posHeader = {"REQUIREMENTS"} posImage = {Laptop} posDescription = {
                    <ul>
                      <li>Be in 10th grade or above (exceptions may be made to 9th graders with a strong background in teaching)</li>
                      <li>Mastery of one or more of the platforms that Robotics for All has curricula in (You can find a list of our curricula here)</li>
                    </ul>
                  }/>
                  <RFAPositionCard1 posHeader = {"BENEFICIAL QUALIFICATIONS"} posImage = {Presentation} posDescription = {
                    <ul>
                      <li>Strong communication skills</li>
                      <li>Good at working with teams</li>
                      <li>Prior teaching experience</li>
                      <li>Leadership or classroom management experience</li>
                    </ul>
                  }/>
                  <RFAPositionCard2 posHeader = {"QUESTIONS"} posDescription = {
                    <ul>
                      <li>If you have any other questions, please visit our <a href="#">teacher FAQ's</a></li>
                      <li>Please direct additional questions to <a href="mailto:info@roboticsforall.net">info@roboticsforall.net</a></li>
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
