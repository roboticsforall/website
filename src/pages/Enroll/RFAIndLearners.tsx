import React from "react";
import { Container } from "react-bootstrap";
import headerBlobGreen from "@/media/HeaderBlobs/green.png";
import { RFAHeader } from "@/components/RFAHeader";

export const RFAIndLearners: React.FC = () => {

  const positionsTitle: React.CSSProperties = {
    fontFamily: "Oswald-Medium",
    fontSize: "5.5vmax",
    color: "#3399ff",
    textAlign: "center",
    // letterSpacing: "0.1em",
  };
  const boldNote = {
    fontFamily: "BeVietnam-ExtraBold"
  }
  const bodyText = {
    fontFamily: "BeVietnam-Medium",
    lineHeight: 1.5
  }

  return (
    <>
      <RFAHeader
        headerTextColor={"#3399ff"}
        image={headerBlobGreen}
        title={"Take a Class with us Today!"}
        description={"Learn from any of our 12 levels of curriculum and join the community of 1027 students we've taught!"}
      />
      <Container>
        <h2 style={positionsTitle}>COURSE OVERVIEWS</h2>
        <br/>
        <h3 style = {boldNote}>Course Enrollments for Spring courses starting March 15th are open until March 5th, 2020!</h3>
        <br/>
        <h5 style = {bodyText}>
          Since July 2020, Robotics for All has provided online courses for students from Kindergarten to 8th grade.
          All classes run for eight weeks and have virtual hour-long meetings with teachers twice a week!
        <br></br>
        <br></br>
          Spring courses will run from the week of March 15th to the week of May 3rd. 
          All courses have pre-class orientations on the week of March 8th. Current class time offerings for each course are:
        <br></br>
        <ul>
          <li>Mondays/Thursdays 2 pm Pacific/5 pm Eastern Time</li>
          <li>Mondays/Thursdays 4 pm Pacific/7 pm Eastern Time</li>
          <li>Tuesdays/Fridays 4 pm Pacific/7 pm Eastern Time</li>
          <li>Tuesdays/Fridays 6 pm Pacific/9 pm Eastern Time</li>
        </ul>
        <br></br>
          Class times may vary for different courses due to enrollments and some class times may not run if there are not enough enrollments.
          View our detailed syllabi below:
        </h5>
        
      </Container>
    </>
  );
};
