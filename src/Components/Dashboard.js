/* eslint-disable react/prop-types */
import React, { Component } from 'react';
// import { Line } from 'react-chartjs';
import axios from 'axios';
import '../styles/dashboard.css';
import GraphController from './GraphController';
import NavigationController from './NavigationController';
import CalculatorController from './CalculatorController';
// import { Redirect } from 'react-router-dom';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/destructuring-assignment
      token: this.props.location.state.token,
      auth: false,
    };
  }

  componentDidMount() {
    const { token } = this.state;

    axios.get('https://dietgrapher-server.herokuapp.com/api/users/redirect', { headers: { Authorization: `Token ${token}` } })
      .then((response) => {
        if (response.data) {
          this.setState({ auth: true });
        }
      })
      .then((error) => {
        console.log(error);
      });
  }

  render() {
    const { auth } = this.state;
    return (
      <div className="wrapper">
        <nav><NavigationController /></nav>
        <section><GraphController auth={auth} /></section>
        <header><CalculatorController /></header>
      </div>
    );
  }
}