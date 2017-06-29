import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

export default class Chat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chat">
        <h1>Chat</h1>
      </div>
    );
  }
}
