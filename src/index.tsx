import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import "./custom.scss";

// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById("root")!
);
