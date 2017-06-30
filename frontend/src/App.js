import React, { Component } from 'react';
import Login from './components/Login.js';
import NewRoom from './components/newRoom.js';
import Rooms from './components/rooms.js';
import './App.css';
import { Switch } from 'react-router'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.setCurrentUder = this.setCurrentUder.bind(this)
    this.state={user:''}
  }

  setCurrentUder(user) {
    this.setState( Object.assign( {},this.state,{user:user.id} ) )
  }

  render() {
    return (
      <Router>
        <div className="App">
          <h2>A little action, part cably, party reactive but mostly chatty</h2>
          <Switch>
            <Route exact appState={this.state} path="/" render={() => <Login setCurrentUder={this.setCurrentUder} />}/>
            <Route exact path="/rooms/new" component={NewRoom}/>
            <Route exact path="/rooms" component={Rooms}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
