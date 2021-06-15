import React from "react";
import ReactDOM from "preact/compat";
import "./index.css";
import { App } from "./App";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById("root")!
);
