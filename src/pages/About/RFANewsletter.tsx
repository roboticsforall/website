import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import { RFAHeader } from "@/components/RFAHeader";
import { RFANewsCard } from '@/components/RFANewsCard';
import { RFALongButton } from '@/components/RFALongButton';
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png"; // add correct image here

export const RFANewsletter: React.FC = (props) => {

    const heading3 = {
      fontFamily: "BeVietnam-ExtraBold"
    }
    return (
      <>
        <RFAHeader headerTextColor = {"#ffcc00"} image = {headerBlobYellow} title = {"Read more about our work!"} description = {"Read through our monthly newsletter to learn more about our work!"}/>
        <Container>
          <Row>
            <h3 style = {heading3} className = "mt-4">Read through our newsletters month by month down below.</h3>
          </Row>
          <br/>
          <Row>
            {[
              {
                date: "November 2020",
                pdfLink: "https://www.urbandictionary.com/define.php?term=dodo%20head",
              },
              {
                date: "December 2020",
                pdfLink: "https://www.urbandictionary.com/define.php?term=dodo%20head",
              },
              {
                date: "January 2021",
                pdfLink: "https://www.urbandictionary.com/define.php?term=dodo%20head",
              },
              {
                date: "February 2021",
                pdfLink: "https://www.urbandictionary.com/define.php?term=dodo%20head",
              }

            ].map(newsletter => (
              <Col key = {newsletter.date} md>
                <RFANewsCard key = {newsletter.pdfLink} title = {newsletter.date} link = {newsletter.pdfLink}/>
                <br/>
              </Col>
            ))}
          </Row>

          {/* Read Previous News Button */}
          <RFALongButton title = {"Read Previous Newsletters"} backgroundColor = {"#ffcc00"} link = "https://www.google.com/"/>
          <br></br>
          <br></br>
          <Row>
          {/* Begin Mailchimp Signup Form */}



          <div id="mc_embed_signup">

<form action="https://roboticsforall.us3.list-manage.com/subscribe/post?u=3ef87e40741b0c3fadf90e578&amp;id=0ec3a22201" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
    
<div id="mc_embed_signup_scroll">

	<h2>Subscribe</h2>

<div className="indicates-required"><span className="asterisk">*</span> indicates required</div>

<div className="mc-field-group">

	<label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
	
  <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL"/>

</div>

<div className="mc-field-group">

	<label htmlFor="mce-FNAME">Name  <span className="asterisk">*</span></label>

	<input type="text" value="" name="FNAME" className="required" id="mce-FNAME"/>

</div>

<div className="mc-field-group input-group">

    <strong>Which of the following best describes you? </strong>

    <ul>
      <li><input type="checkbox" value="1" name="group[24981][1]" id="mce-group[24981]-24981-0"/><label htmlFor="mce-group[24981]-24981-0">Volunteers</label></li>
      <li><input type="checkbox" value="2" name="group[24981][2]" id="mce-group[24981]-24981-1"/><label htmlFor="mce-group[24981]-24981-1">Donors and Mentors</label></li>
      <li><input type="checkbox" value="4" name="group[24981][4]" id="mce-group[24981]-24981-2"/><label htmlFor="mce-group[24981]-24981-2">Parents and Students</label></li>
    </ul>

</div>

	<div id="mce-responses" className="clear"> {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}

		<div className = "response" id="mce-error-response" style = {{display: "none"}}></div>

		<div className = "response" id="mce-success-response" style= {{display: "none"}}></div>

	</div>  
    
    <div style = {{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_3ef87e40741b0c3fadf90e578_0ec3a22201" tabIndex="-1" value=""/></div>
    
    <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
    
</div>

</form>

</div>
{/* End mc_embed_signup */}
          </Row>
          
        </Container>
      </>
    );  
}
