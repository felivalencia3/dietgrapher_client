/* eslint-disable no-return-assign */
import React, {
  Component,
} from 'react';
import {
  Redirect,
  Route
} from 'react-router-dom';
import '../styles/app.css';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
      token: '',
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }


  handlePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleSubmit(event) {
    const {
      redirect
    } = this.state;
    if (redirect) {
      this.setState({
        redirect: false
      });
    }
    const {
      email,
      password,
    } = this.state;
    axios.post('https://dietgrapher-server.herokuapp.com/api/users/login', {
      user: {
        email,
        password
      }
    })
      .then((response) => {
        this.setState({
          redirect: true,
          token: response.data.user.token
        });
      })
      .then((error) => {
        console.log(error);
      });
    event.preventDefault();
  }

  render() {
    const {
      redirect,
      email,
      password,
      token,
    } = this.state;
    let reroute;
    if (redirect) {
      reroute = (
        <Route
          path="/dashboard"
          component={
          () => {
            window.location = 'https://dietgrapher-dashboard.tk';
          }
        }
        />
      );
    }
    return (
      <div className="login-container">
        <form onSubmit={this.handleSubmit} method="POST" netlify>
          {reroute}
          <input value={email} onChange={this.handleEmail} type="text" placeholder="Email" name="email" />
          <input value={password} onChange={this.handlePassword} type="password" placeholder="Password" name="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
