import React from 'react';
import {Container} from "react-bootstrap";
import RFAHeader from '@/components/RFAHeader';
import RFAFAQDropdowns from '@/components/RFAFAQDropdowns';
import headerBlobOrange from '@/media/HeaderBlobs/orange.png'; // add correct image here
import volunteerFAQJSON from "@/posts/faqs/volunteer_faqs.json";

export default function RFAVolunteerFAQ(props){


  const heading = {
    fontFamily: 'Oswald-Medium',
    color: "#532f0A"
  }

    return (
      <div>
        <RFAHeader headerTextColor = {"#ffcc00"} image = {headerBlobOrange} title = {"Questions?"} description = {"Here are the answers to our commonly asked questions. Please feel free to contact us if your question is not answered here!"}/>
        <br/>

        <Container>
        <h1 style = {heading} className = "mb-4 header-size">Teacher FAQ's</h1>
        {volunteerFAQJSON.teacher_faq_list.map(QAPair => (
            <RFAFAQDropdowns key = {QAPair.question} question = {QAPair.question} answer = {QAPair.answer}/>
        ))}

          <br/>
          <br/>
          <h1 style = {heading} className = "mb-4 header-size">Publicity Volunteer FAQ's</h1>
          {volunteerFAQJSON.publicity_faq_list.map(QAPair => (
              <RFAFAQDropdowns key = {QAPair.question} question = {QAPair.question} answer = {QAPair.answer}/>
          ))}
        </Container>
      </div>
    );
}
