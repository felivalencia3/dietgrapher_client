/* eslint-disable max-len */
import React, {
  Component
} from 'react';
import {
  Redirect
} from 'react-router-dom';
import '../styles/entry.css';
import Input from 'react-toolbox/lib/input';
import Slider from 'react-toolbox/lib/slider';
import Dropdown from 'react-toolbox/lib/dropdown';
import Form from './Form';

export default class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0,
      age: 0,
      gender: '',
      height: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this);
    const {
      weight,
      age,
      gender,
      height
    } = this.state;
    if (!weight && !age && !gender && !height) {
      // eslint-disable-next-line no-alert
      alert('Invalid Input');
      return;
    }
    event.preventDefault();
  }

  render() {
    const {
      weight,
      age,
      gender,
      height
    } = this.state;
    return (
      <Form />
    );
  }
}
/*

*/