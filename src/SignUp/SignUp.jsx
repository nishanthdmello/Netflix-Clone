import React, { Component } from "react";
import "./SignUp.css";

class CreateAcc extends Component {
  render() {
    return (
      <div id="signup">
        <div id="signup_form">
            <br />
          <h1 >Sign Up</h1>
          <br />
          <center>
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              required
              autofocus
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              required
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Confirm Password"
              required
            />
            <br />
            <br />
            <br />
            <button>Sign Up</button>
            </center>
        </div>
      </div>
    );
  }
}
export default CreateAcc;
