/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import '../styles/signup.css';
import {
  Redirect,
} from 'react-router-dom';
// import PropTypes from 'prop-types';
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      redirect: false,
      match: false,
      valid: false,
      disabled: true,
      token: '',
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
  }

  componentDidUpdate() {
    const { match, valid, disabled } = this.state;
    if (match && valid && disabled) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ disabled: false });
    }
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handlePassword(event) {
    if (event.target.value.length >= 6) {
      this.setState({ valid: true });
    }
    this.setState({
      password: event.target.value,
    });
  }

  handleConfirmPassword(event) {
    const { password } = this.state;
    if (event.target.value === password) {
      this.setState({ match: true });
    }
    this.setState({
      confirmPassword: event.target.value,
    });
  }

  handleSubmit(event) {
    const {
      email,
      password,
    } = this.state;
    axios.post('http://127.0.0.1:8081/api/users/', { user: { email, password } })
      .then((response) => {
        alert('Your account has been created.');
        // eslint-disable-next-line prefer-destructuring
        const token = response.data.user.token;
        this.setState({ redirect: true, token });
      })
      .catch((error) => {
        alert(error);
      });
    event.preventDefault();
  }


  render() {
    const {
      email, password, confirmPassword, redirect, token, script, match, disabled, valid
    } = this.state;
    if (email.length >= 1 && !script) {
      this.setState({ script: true });
    }
    let toDashboard;
    let showScript;
    if (script) {
      showScript = (
        <script src={`${process.env.PUBLIC_URL}/signup.js`} />
      );
    }
    if (redirect) {
      toDashboard = (
        <Redirect to={{
          pathname: '/start',
          state: { token, email }
        }}
        />
      );
    }
    return (
      <div id="upbody">
        {showScript}
        {toDashboard}
        <form id="upform" action="#" method="post" onSubmit={this.handleSubmit}>
          <h2 id="formh2">Sign Up</h2>
          <p className="formp">
            <label htmlFor="Email" className="floatLabel">Email</label>
            <input onChange={this.handleEmail} value={email} className="forminput" id="Email" name="Email" type="text" />
          </p>
          <p className="formp">
            <label htmlFor="password" className="floatLabel">Password</label>
            <input onChange={this.handlePassword} value={password} className="forminput" id="password" name="password" type="password" />
            {valid ? <></> : <span>Enter a password longer than 6 characters</span>}
          </p>
          <p className="formp">
            <label htmlFor="confirm_password" className="floatLabel">Confirm Password</label>
            <input onChange={this.handleConfirmPassword} value={confirmPassword} className="forminput" id="confirm_password" name="confirm_password" type="password" />
            {match ? <></> : <span>Your passwords do not match</span>}
          </p>
          <p className="formp">
            <input disabled={disabled} className="forminput" type="submit" value="Create My Account" id="submit" />
          </p>
        </form>
      </div>
    );
  }
}
