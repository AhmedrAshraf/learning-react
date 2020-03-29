import React from "react";

import Home from "./Screens/Home";
import About from "./Screens/About";
import Contact from "./Screens/Contact";

import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Contact" component={Contact} />
      </Router>
    );
  }
}
