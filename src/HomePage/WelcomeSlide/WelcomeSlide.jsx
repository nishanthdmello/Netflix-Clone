import React from "react";
// import sl1_bg from "/home/nishanth/wt_project-1/src/images/netflix_sl1_bg.jpg";
import "./WelcomeSlide.css";
export default class WelcomeSlide extends React.Component {
  render() {
    return (
      <div className="welcome">
        {/* <img src={sl1_bg} alt="demo pic" /> */}
        <center>
          <p>
            Subscribe to get unlimited access to Movies and TV Shows that you
            can <br /> watch from anywhere anytime. Cancel Subscription when you want to.
          </p>
          <br />
          <br />
          <input type="email" placeholder="Enter your email address" />
          <button>
            <b>See Plans</b>
          </button>
        </center>
      </div>
    );
  }
}
