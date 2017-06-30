import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Rooms extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chat">
        <Link to={'/rooms/new'}>New chatroom</Link>
      </div>
    );
  }
}
