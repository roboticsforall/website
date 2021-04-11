import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Container} from 'react-bootstrap';

import RFANavbar from "./components/RFANavbar";
import RFAAffOrgs from "./components/About/RFAAffOrgs";
import RFAHomePage from './components/RFAHomePage';
import RFAFooter from "./components/RFAFooter";
import RFAClassFAQ from "./components/Enroll/RFAClassFAQ";
import RFAVolunteerFAQ from "./components/Volunteer/RFAVolunteerFAQ";


export default class App extends React.Component{

  render() {
    return (
      <Router>
        <Container fluid>
          <RFANavbar/>
          <Switch>
            <Route exact path = "/" component = {RFAHomePage}/>
            <Route path = "/enroll/classfaq" component = {RFAClassFAQ}/>
            <Route path = "/volunteer/volunteerfaq" component = {RFAVolunteerFAQ}/>
            <Route path = "/about/afforgs" component = {RFAAffOrgs}/>
          </Switch>
          <br/>
          <br/>
          <br/>
          <RFAFooter/>
        </Container>
      </Router>
    );
  }
}
