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
              Now is the winter of our discontent
              Made glorious summer by this sun of York;
              And all the clouds that lour'd upon our house
              In the deep bosom of the ocean buried.
              Now are our brows bound with victorious wreaths;
              Our bruised arms hung up for monuments;
              Our stern alarums changed to merry meetings,
              Our dreadful marches to delightful measures.
              Grim-visaged war hath smooth'd his wrinkled front;
              And now, instead of mounting barded steeds
              To fright the souls of fearful adversaries,
              He capers nimbly in a lady's chamber
              To the lascivious pleasing of a lute.
              But I, that am not shaped for sportive tricks,
              Nor made to court an amorous looking-glass;
              I, that am rudely stamp'd, and want love's majesty
              To strut before a wanton ambling nymph;
              I, that am curtail'd of this fair proportion,

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
