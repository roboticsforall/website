import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import { RFAHeader } from "@/components/RFAHeader";
import { RFANewsCard } from '@/components/RFANewsCard';
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png"; // add correct image here
import newsletterJSON from "@/posts/newsletters.json";

import { ColorThemes } from '@/colors';
export const RFAPastNewsletter: React.FC = (props) => {

    const heading3 = {
      fontFamily: "BeVietnam-ExtraBold"
    }

    return (
      <>
        <RFAHeader headerTextColor = {ColorThemes.mainYellow} image = {headerBlobYellow} title = {"Read through our past monthly newsletters to learn more about our work!"} description = {"Read through our past monthly newsletters to learn more about our work!"}/>
        <Container>
            <h3 style = {heading3} className = "mt-4">Read through our newsletters month by month down below.</h3>
          <br/>
          <Row>
            {newsletterJSON.newsletters_list.slice(4, newsletterJSON.newsletters_list.length).map((newsletter, i) => (
              <Col key = {i} md = {3}>
                <RFANewsCard title = {newsletter.date} file = {newsletter.file_path.replace("/public", "")}/>
                <br/>
              </Col>
            ))}
          </Row>

          <br></br>
          <br></br>
          
        </Container>
      </>
    );  
}
