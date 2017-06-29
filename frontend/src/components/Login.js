import React, { Component } from 'react'
import LoginAdapter from '../adapters/loginAdapter.js'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userPassword: ''
    };
    this.adapter = LoginAdapter
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      userName: document.getElementById('username').value,
      userPassword: document.getElementById('password').value
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    const loginParams = {user: {
      name: this.state.userName,
      password: this.state.userPassword
      }
    }
    this.adapter.loginUser(loginParams).then( userData => {
      sessionStorage.setItem("jwt", userData.jwt)
      sessionStorage.setItem("userName", userData.user.name)
      console.log('You are logged in')
    })
  }


  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input id="username" type="text" value={this.state.userName} onChange={this.handleChange} /><br/>
          </label>
          <label>
            Password:
            <input id="password"  type="password" value={this.state.userPassword} onChange={this.handleChange} /><br/>
          </label>
          <input type="submit" value="Signin"/>
        </form>
      </div>
    );
  }
}
