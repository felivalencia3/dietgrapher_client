/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, {
  Component
} from 'react';
import Slider from 'rc-slider';
import '../styles/entry.css';
import '../styles/slider.css';

export default class Entry extends Component {
  constructor(props) {
    super(props);
    const {
      location: {
        state: {
          token, email
        }
      }
    } = this.props;
    this.state = {
      name: '',
      weight: 0,
      user: email,
      age: 0,
      gender: 'M',
      height: 0,
      token,
      pageNum: 0
    };
    this.goBack = this.goBack.bind(this);
    this.goForward = this.goForward.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVertical = this.handleVertical.bind(this);
  }

  handleVertical(value) {
    this.setState({ height: value });
  }

  handleSubmit() {
    const {
      name,
      weight,
      user,
      age,
      gender,
      height,
    } = this.state;
    const charGender = gender.charAt(0);
    alert(`Submitted: \nName:${name}\nUser: ${user}, Age: ${age}\nWeight: ${weight}, Gender: ${charGender}\nHeight: ${height}`);
  }

  handleSelect(event) {
    this.setState({ gender: event.target.value });
  }

  handleChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    this.setState({ [name]: value });
  }

  goForward() {
    const {
      pageNum
    } = this.state;
    if (pageNum === 2) {
      this.handleSubmit();
    }
    this.setState({
      pageNum: pageNum + 1
    });
  }

  goBack() {
    const {
      pageNum
    } = this.state;
    this.setState({
      pageNum: pageNum - 1
    });
  }

  render() {
    const page0 = (
      <div>
        <h1>Welcome to DietGrapher!</h1>
        <p>To get started simply enter your full name below:</p>
        <input name="name" type="text" onChange={this.handleChange} value={this.state.name} />
      </div>
    );
    const page1 = (
      <div>
        <h1>Enter your Age</h1>
        <input name="age" type="text" type="number" onChange={this.handleChange} value={this.state.age} placeholder="Age here" />
        <h1>And Gender</h1>
        <select value={this.state.gender} onChange={this.handleSelect} className="minimal">
          <option>Male</option>
          <option>Female</option>
          <option>Other/Not Sure</option>
        </select>

      </div>
    );
    const page2 = (
      <div>
        <h2>Height and Weight:</h2>
        <h2>Height: (cm)</h2>
        <Slider onChange={this.handleVertical} min={50} max={250} />
        <p>Height: {(this.state.height / 100)}m</p>
        <h1>Weight: (kg)</h1>
        <input name="weight" type="number" onChange={this.handleChange} value={this.state.weight} />
      </div>
    );
    const submitPage = (
      <div className="loader">
        <div className="inner one" />
        <div className="inner two" />
        <div className="inner three" />
      </div>

    );
    let currentPage = (<></>);
    const { pageNum } = this.state;
    switch (pageNum) {
      case 0:
        currentPage = page0;
        break;
      case 1:
        currentPage = page1;
        break;
      case 2:
        currentPage = page2;
        break;
      case 3:
        currentPage = submitPage;
        break;
      default:
        this.setState({ pageNum: 0 });
        break;
    }
    return (
      <form>
        <div className="entry">
          <div className="login-page">
            <div className="form">
              {currentPage}
            </div>
            <button className="back" type="button" onClick={this.goBack}>Back</button>
            <button className="next" type="button" onClick={this.goForward}>Next</button>
          </div>
        </div>
      </form>
    );
  }
}