import React from 'react';
import {Container} from "react-bootstrap";
import RFAHeader from '../RFAHeader';
import RFAFAQDropdowns from '../RFAFAQDropdowns';
import headerBlobOrange from '../../media/HeaderBlobs/orange.png'; // add correct image here
import classFAQJSON from "../../posts/class_faqs.json";

export default function RFAClassFAQ(props){

    console.log(classFAQJSON)

    return (
      <div>
        <RFAHeader headerTextColor = {"#fa8d1f "} image = {headerBlobOrange} title = {"Questions?"} description = {"Here are the answers to our commonly asked questions. Please feel free to contact us if your question is not answered here!"}/>
        <br/>
        <Container>
            {classFAQJSON.class_faq_list.map(QAPair => (
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