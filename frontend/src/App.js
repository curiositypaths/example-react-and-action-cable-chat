import React, { Component } from 'react';
import Login from './components/Login.js';
import Chat from './components/Chat.js';
import './App.css';
import { Switch } from 'react-router'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h2>A little action, part cably, party reactive but mostly chatty</h2>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/chat" component={Chat}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
