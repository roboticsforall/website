import React from 'react';
import {Container, Row} from "react-bootstrap";
import RFAHeader from '../RFAHeader';
import RFAFAQDropdowns from '../RFAFAQDropdowns';
import headerBlobOrange from '../../media/HeaderBlobs/orange.png'; // add correct image here

export default function RFAClassFAQ(props){

    return (
      <div>
        <RFAHeader headerTextColor = {"#ffcc00"} image = {headerBlobOrange} title = {"Questions?"} description = {"Here are the answers to our commonly asked questions. Please feel free to contact us if your question is not answered here!"}/>
        <br/>
        <Container>
        {[
              {
                question: "When will I know if my class time is confirmed?",
                answer: "You will receive an email a week before the class start date with a final confirmation of the class time.",
              },
              {
                question: "What is the cost of the classes?",
                answer: "Classes cost a minimum of $100, however, we do offer fee waivers if you are unable to pay the class fees.",
              },
              {
                question: "Where can I find more information regarding the class curriculum?",
                answer: "You can learn more in our syllabi's.",
              },
              {
                question: "Can I enroll my students in multiple classes?",
                answer: "Yes, there is no limit to the amount of classes you may enroll your student in.",
              },

            ].map(QAPair => (
              <RFAFAQDropdowns key = {QAPair.question} question = {QAPair.question} answer = {QAPair.answer}/>
            ))}


            {[
              {
                question: "When will more courses be offered?",
                answer: "We are planning on launching more courses including:",
                season: 'Summer',
                year: 2021,
                date: '*insert date',
                typeOfQuestion: "courses",
                coursesList: [
                  "Basic Scratch (K-3) Part 2", 
                  "Project-Based Learning Scratch (3rd-8th)", 
                  "Advanced Python (6th-8th)",
                  "Advanced CAD with Fusion 360 (6th-8th)",
                  "HTML/CSS (5th-8th)",
                  "Java (6th - 8th)"
                ]
              },

            ].map(QAPair => (
              <RFAFAQDropdowns key = {1} coursesList = {QAPair.coursesList} typeOfQuestion = {QAPair.typeOfQuestion} question = {QAPair.question} answer = {QAPair.answer}
                season = {QAPair.season} year = {QAPair.year} date = {QAPair.date}/>
            ))}
        </Container>
      </div>
    );
}