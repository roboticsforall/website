import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component{

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            bingbongbingbongbingbongbingbongbing bong bing

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
