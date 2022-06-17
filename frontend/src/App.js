import React from "react";
import "./App.css";
import "@popperjs/core";
import "./bootstrap.min.css";
import Home from "./Pages/Home";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
