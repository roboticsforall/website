import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useLocation, BrowserRouter as Router, Switch, Route} from "react-router-dom";
import RFANavbar from "./components/RFANavbar";
// Base Pages
import RFAHomePage from './components/RFAHomePage';
import RFAFooter from "./components/RFAFooter";
//Enroll
import RFAClassFAQ from "./components/Enroll/RFAClassFAQ";
import RFARegister from "./components/Enroll/RFARegister";
//Volunteer
import RFATeacherPos from "./components/Volunteer/RFATeacherPos";
import RFAPublicityInternPos from "./components/Volunteer/RFAPublicityInternPos";
import RFAVolunteerFAQ from "./components/Volunteer/RFAVolunteerFAQ";
import RFAVolunteerApp from "./components/Volunteer/RFAVolunteerApp";
//About
import RFAAffOrgs from "./components/About/RFAAffOrgs";
import RFAAbtOverview from "./components/About/RFAAbtOverview";
//News
import RFANews from "./components/News/RFANews";
//More
import RFACorpBylaws from "./components/More/RFACorpBylaws";
import RFAMeetingRecords from "./components/More/RFAMeetingRecords";



export default function App(props){

  let location = useLocation();

  return (
      <Router>
          <RFANavbar/>
          <Route render = {({location}) => (
          <TransitionGroup>
              <CSSTransition
                key = {location.key}
                classNames = "fade"
                timeout={300}
              >
              <Switch location = {location}>
                <Route exact path = "/" component = {RFAHomePage}/>
                <Route path = "/about-overview" component = {RFAAbtOverview}/>
                <Route path = "/enroll-classfaq" component = {RFAClassFAQ}/>
                <Route path = "/enroll-register" component = {RFARegister}/>
                <Route path = "/volunteer-volunteerfaq" component = {RFAVolunteerFAQ}/>
                <Route path = "/volunteer-teacherpos" component = {RFATeacherPos}/>
                <Route path = "/volunteer-publicitypos" component = {RFAPublicityInternPos}/>
                <Route path = "/volunteer-volunteerapp" component = {RFAVolunteerApp}/>
                <Route path = "/about-afforgs" component = {RFAAffOrgs}/>
                <Route path = "/news" component = {RFANews}/>
                <Route path = "/more-privacypolicy" component = {RFANews}/>
                <Route path = "/more-websitetos" component = {RFANews}/>
                <Route path = "/more-bylaws" component = {RFACorpBylaws}/>
                <Route path = "/more-privacypolicy" component = {RFANews}/>
                <Route path = "/more-meetingrecords" component = {RFAMeetingRecords}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          )}/>
          <br/>
          <br/>
          <br/>
          <RFAFooter/>
      </Router>
    );
}
