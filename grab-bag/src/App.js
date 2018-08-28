import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Team Name Raffle</h1>
        </header>
        <label for="example">Enter your team name</label>
        <input id="example" type="text" name="text"></input>
        <button>Submit</button>
        <p className="App-intro"></p>
      </div>
    );
  }
}

export default App;
