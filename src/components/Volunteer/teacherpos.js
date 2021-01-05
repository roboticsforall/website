import React, { useState } from 'react';
import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
import RFAPositionCard from "../RFAPositionCard";

export default function TeacherPos(props){
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
    <div className = "TeacherPos">
      <Row className = "header-blobs">
        <Container className = "d-flex align-self-end">
          <Row className = "m-4 w-100 justify-content-center">
            <h1 className = "page-header vol_intern_positions">Volunteer to Teach Students STEM!</h1>
            <p className = "page-header-description">Volunteer to help with graphic design, curriculum development, and much much more!</p>
          </Row>
        </Container>
      </Row>
        <Container>
          <Tab.Container activeKey = {key} onSelect = {key => setKey(key)}>
              <Nav justify fill variant = "tabs">
                <Nav.Item>
                  <Nav.Link eventKey = "one" className = "pos" style = {key === "one" ? ActiveStyle : inActiveStyle}>Lead Instructor</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey = "two" className = "pos" style = {key === "two" ? ActiveStyle : inActiveStyle}>Teacher Assistant</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey = "one">
                  <RFAPositionCard posHeader = {"OVERVIEW"} posDescription = {
                    <div>
                      <p>
                        Lead instructors are responsible for leading an 8-week long class. This includes leading two weekly synchronous classes, reviewing student homework, and overseeing teacher's assistants. It will be your responsibility to ensure that the class runs smoothly and take care of any issues, whether related to student behavior or errors in programs the students develop. Teachers will be given a position every few months based on availability, position, and class interest. 
                      </p>
                      <p>
                        We currently offer curricula with the platforms Code.org, Scratch,  Python, and TinkerCAD and will continue to expand our curriculum. You will earn community service hours for the work that you do. Learn more about this position below!
                      </p>
                    </div>
                  }/>
                  <RFAPositionCard posHeader = {"TASKS"} posDescription = {
                    <ul>
                      <li>Work on helping Robotics for All to grow and expand</li>
                      <li>Help with projects you are passionate about</li>
                      <li>Improve outreach to more schools and students</li>
                    </ul>}/>
                  <RFAPositionCard posHeader = {"TIME COMMITMENT"} posDescription = {
                    <ul>
                      <li>3-10 hours a week</li>
                      <li>Spend time on projects of your choice</li>
                      <li>Hours may differ depending on different projects</li>
                    </ul>
                  }/>
                  <RFAPositionCard posHeader = {"BENEFITS"} posDescription = {
                    <ul>
                      <li>Earn community service hours for time spent volunteering with Robotics for All.</li>
                      <li>Leading a Robotics for All class will look good on any resume, whether applying for a future internship, job, or college</li>
                      <li>Potential future leadership positions within Robotics for All may be offered (ex. Board position, sub-director)</li>
                      <li>Learn valuable leadership and teamwork skills.</li>
                    </ul>
                  }/>
                  <RFAPositionCard posHeader = {"REQUIREMENTS"} posDescription = {
                    <ul>
                      <li>8th grade in middle school or above (exceptions may be made to 6th-7th graders with a strong volunteering background.)</li>
                      <li>Strong communication skills and the ability to work effectively in a team</li>
                      <li>Quick response to questions and other communications</li>
                    </ul>
                  }/>
                  <RFAPositionCard posHeader = {"BENEFICIAL QUALIFICATIONS"} posDescription = {
                    <ul>
                      <li>Experience with business development skills (graphic design, curriculum, operations etc)</li>
                    </ul>
                  }/>
                </Tab.Pane>
                <Tab.Pane eventKey = "two">
                  <RFAPositionCard posHeader = {"OVERVIEW"} posDescription = {
                    <div>
                      <p>
                        The teacher's assistant position is the perfect entry level position to teaching! Teacher assistants help the lead instructor teach the 8-week classes, answer student questions, and review homework. Teachers will be given a position every few months based on availability, position, and class interest.
                      </p>
                      <p>
                        We currently offer curricula with the platforms Code.org, Scratch,  Python, and TinkerCAD and will continue to expand our curriculum. You will earn community service hours for the work that you do. Learn more about this position below!
                      </p>
                    </div>
                  }/>
                  <RFAPositionCard posHeader = {"TASKS"} posDescription = {
                    <ul>
                      <li>Help the lead instructor lead the live virtual classes (either once or twice weekly)</li>
                      <ul>
                        <li>Lead breakout rooms with 3-5 students in your class</li>
                      </ul>
                      <li>Review student homework on Google Classroom</li>
                      <li>Answering student questions</li>
                    </ul>
                  }/>
                  <RFAPositionCard posHeader = {"TIME COMMITMENT"} posDescription = {
                    <ul>
                      <li>2-4 hours weekly per class</li>
                      <ul>
                        <li>2 weekly hour-long synchronous class meetings</li>
                        <li>Checking homework, preparing for classes, etc.</li>
                      </ul>
                      <li>Teach for at least one eight-week class session.</li>
                    </ul>
                  }/>
                  <RFAPositionCard posHeader = {"BENEFITS"} posDescription = {
                    <ul>
                      <li>Earn community service hours from Robotics for All</li>
                      <li>Teaching will look good on any resume, whether applying for a future internship, job, or college</li>
                      <li>Potential future leadership positions within Robotics for All may (ex. lead instructor, board position)</li>
                      <li>Learn valuable leadership and teamwork skills.</li>
                    </ul>
                  }/>
                  <RFAPositionCard posHeader = {"REQUIREMENTS"} posDescription = {
                    <ul>
                      <li>8th grade or above (exceptions may be made to 6th-7th graders with a strong volunteering/teaching background.)</li>
                      <li>Familiarity with any of the platforms used for curricula (Code.org, Scratch,  Python, Java, TinkerCAD, Fusion 360, HTML/CSS, and Snap Circuits)</li>
                      <li>Strong communication skills and the ability to work effectively in a team</li>
                    </ul>
                  }/>
                  <RFAPositionCard posHeader = {"BENEFICIAL QUALIFICATIONS"} posDescription = {
                    <ul>
                      <li>Experience teaching STEM classes</li>
                      <li>Past leadership or classroom management experience</li>
                      <li>Experience working with educational institutions</li>
                    </ul>
                  }/>
                </Tab.Pane>
              </Tab.Content>
          </Tab.Container>
        </Container>
    </div>
  ); 
}
