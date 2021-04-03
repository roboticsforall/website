import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import RFANavbar from "./components/RFANavbar";
import RFAHomePage from './components/RFAHomePage';
import RFAFooter from "./components/RFAFooter";
// import RFACard from "./components/RFACard";
export default class App extends React.Component{

  render() {
    return (
      <Container fluid>
        <RFANavbar/>
        <RFAHomePage/>
        <br/>
        <br/>
        <br/>
        <RFAFooter/>
      </Container>
    );
  }
}
