import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./images/TAB-logo.png";
import "./App.css";
import homePage from "./HomePage";
import peopleAnalytics from "./PeopleAnalytics";
import leadershipPrograms from "./LeadershipPrograms";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
            <nav>
              <ul className="Nav-Menu">
                <li>
                  <Link to="/" />
                  Home Page
                </li>
                <li>
                  <Link to="/peopleanalytics">People Analytics</Link>
                </li>
                <li>
                  <Link to="/leadership">Leadership</Link>
                </li>
              </ul>
            </nav>
          <Switch>
            <Route path="/" exact component={homePage} />
            <Route path="/peopleanalytics" exact component={peopleAnalytics} />
            <Route path="/leadership" exact component={leadershipPrograms} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
