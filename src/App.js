import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, CardDeck} from 'react-bootstrap';
import RFANavbar from "./components/RFANavbar";
import RFACard from "./components/RFACard";

export default class App extends React.Component{

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This is the staging branch

            http://DevSandboxx.github.io/RFA_website_design

          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
