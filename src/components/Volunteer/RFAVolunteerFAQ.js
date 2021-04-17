import React from 'react';
import {Container} from "react-bootstrap";
import RFAHeader from '../RFAHeader';
import RFAFAQDropdowns from '../RFAFAQDropdowns';
import headerBlobOrange from '../../media/HeaderBlobs/orange.png'; // add correct image here

export default function RFAVolunteerFAQ(props){


  const heading = {
    fontFamily: 'Oswald',
    color: "#532f0A"
  }

    return (
      <div>
        <RFAHeader headerTextColor = {"#ffcc00"} image = {headerBlobOrange} title = {"Questions?"} description = {"Here are the answers to our commonly asked questions. Please feel free to contact us if your question is not answered here!"}/>
        <br/>

        <Container>
        <h1 style = {heading} class = "mb-4 header-size">Teacher FAQ's</h1>
        {[
            {
              question: "What is the time commitment?",
              answer: "The minimum time commitment is about 3 hours per week. If you choose to take on multiple classes, the time commitment is increased.",
            },
            {
              question: "When would I be volunteering?",
              answer: "The times are flexible but classes are held on either a Monday/Thursday or Tuesday/Friday schedule. They are two times per week, with each class being an hour long.",
            },
            {
              question: "Do you have any curriculum?",
              answer: "Yes! We have a fully formed, ready to use, curriculum.",
            },
            {
              question: "When would I start?",
              answer: "Start times vary but you would probably be starting in March, depending on teacher availability.",
            },
            {
              question: "How will the community service hours be documented? Will I receive official records of service hours from this?",
              answer: "If you are accepted as a teacher, Robotics for All is a 501(c)(3) organization and we will be glad to provide documentation or signatures needed to verify hours!",
            },
            {
              question: "Are there training programs available to the teachers?",
              answer: "If you are accepted as a teacher we will give you some basic training, although it’s primary purpose is to explain our software and policies. We can offer additional support as needed.",
            },

          ].map(QAPair => (
            <RFAFAQDropdowns key = {QAPair.question} question = {QAPair.question} answer = {QAPair.answer}/>
          ))}

          <br/>
          <br/>
          <h1 style = {heading} className = "mb-4 header-size">Publicity Volunteer FAQ's</h1>
          {[
            {
              question: "What is the time commitment?",
              answer: "The minimum time commitment is about 3 hours per week. If you choose to take on multiple classes, the time commitment is increased.",
            },
            {
              question: "When would I start?",
              answer: "The next orientation will be in 1-2 weeks. If accepted, Ben will contact you with details about the orientation. You can start once you go through the orientation!",
            },
            {
              question: "How will the community service hours be documented? Will I receive official records of service hours from this?",
              answer: "If you are accepted as a teacher we will give you some basic training, although it’s primary purpose is to explain our software and policies. We can offer additional support as needed.",
            },

          ].map(QAPair => (
            <RFAFAQDropdowns key = {QAPair.question} question = {QAPair.question} answer = {QAPair.answer}/>
          ))}
        </Container>
      </div>
    );
}
