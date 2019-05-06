import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';

import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

class App extends Component {
  render() {
    return (
      <Router>
          <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
            </Switch>
          <Footer />
      </Router>
    );
  }

}

export default App;
