/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, {
  Component
} from 'react';
import '../styles/entry.css';

export default class Entry extends Component {
  constructor(props) {
    super(props);
    const {
      location: {
        state: {
          token
        }
      }
    } = this.props;
    const {
      location: {
        state: {
          email
        }
      }
    } = this.props;
    this.state = {
      name: '',
      weight: 0,
      user: email,
      age: 0,
      gender: '',
      height: 0,
      token,
      pageNum: 0
    };
    this.goBack = this.goBack.bind(this);
    this.goForward = this.goForward.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      <h1>Page 2</h1>
    );
    const page2 = (
      <h1>Page 3</h1>
    );
    const submitPage = (
      <h1>Submitted!</h1>
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
      <div className="entry">
        <div className="login-page">
          <div className="form">
            {currentPage}
          </div>
          <button className="back" type="button" onClick={this.goBack}>Back</button>
          <button className="next" type="button" onClick={this.goForward}>Next</button>
        </div>
      </div>
    );
  }
}