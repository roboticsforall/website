import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useLocation, BrowserRouter as Router, Switch, Route} from "react-router-dom";
import RFANavbar from "./components/RFANavbar";
import RFAMeetingRecords from "./components/More/RFAMeetingRecords";
import RFATeacherPos from "./components/Volunteer/RFATeacherPos";
import RFAAffOrgs from "./components/About/RFAAffOrgs";
import RFAHomePage from './components/RFAHomePage';
import RFAFooter from "./components/RFAFooter";
import RFAClassFAQ from "./components/Enroll/RFAClassFAQ";
import RFAVolunteerFAQ from "./components/Volunteer/RFAVolunteerFAQ";
import RFAAbtOverview from "./components/About/RFAAbtOverview";
import RFAVolunteerApp from "./components/Volunteer/RFAVolunteerApp";
import RFANews from "./components/News/RFANews";
import RFACorpBylaws from "./components/More/RFACorpBylaws";


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
                <Route path = "/volunteer-volunteerfaq" component = {RFAVolunteerFAQ}/>
                <Route path = "/volunteer-teacherpos" component = {RFATeacherPos}/>
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
