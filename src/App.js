import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import RFANavbar from "./components/RFANavbar";
import RFAHomePage from './components/RFAHomePage';
import RFAFooter from "./components/RFAFooter";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

export default class App extends React.Component{

  render() {
    return (
      <Router>
        <Container fluid>
          <RFANavbar/>
          <Switch>
            <Route exact path = "/" component = {RFAHomePage}/>
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
