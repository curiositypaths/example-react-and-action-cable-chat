import React, { Component } from 'react'
import RoomsAdapter from '../adapters/roomsAdapter.js'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomName:'',
      roomOwner:''
    };
    this.adapter = RoomsAdapter
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      roomName:document.getElementById('room-name').value
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    const roomParams = {room: {
      name:this.state.roomName
    }}
    //this.adapter.loginUser(loginParams).then( userData => {})
  }


  render() {
    return (
      <div className="new-room">
        <form onSubmit={this.handleSubmit}>
          <label>
            New room name:
            <input id="room-name" type="text" value={this.state.roomName} onChange={this.handleChange} /><br/>
          </label>
          <input type="submit" value="Create room"/>
        </form>
      </div>
    );
  }
}
