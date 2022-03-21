import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import landing_img from "./Background.png";
import logo from "./logo.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  render() {
    const SendEmail = () => {
      axios.post("http://10.10.13.166:4000/sendMail", { email: this.state.email }).then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    };

    return (
      <div className="root">
        <img className="main" src={landing_img} />
        <div className="content">
          <img className="logo" src={logo} />
          <br />
          <div className="titleText">Coming Soon</div>
          <br />
          <div className="subText">The future for digital advertising</div>
          <br />
          <div className="emailContent">
            <div className="emailContentText">Get Notified</div>
            <div className="inputContent">
              <input
                type="email"
                className="inputText"
                placeholder="Your Email"
                onChange={(e) => {
                  this.setState({ email: e.currentTarget.value });
                }}
              />
              <button className="submitButton" onClick={SendEmail}>
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
