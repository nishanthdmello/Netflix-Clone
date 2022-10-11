import React from "react";
import mflixlogo from "./resources/Mflix_Brand_Logo2.png";
import sl1_bg from "./resources/netflix_sl1_bg.jpg";
import netflix_on_tv from "./resources/netflix_on_tv.gif";
import netflix_children_profiles from "./resources/netflix_children_profiles.png";
import "./style.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav
        style={{
          backgroundColor: "#3f053a",
          color: "white",
          display: "inline-block",
        }}>
        <img
          src={mflixlogo}
          alt="demo pic"
          style={{ width: "120px", height: "100px" }}
        />
        <button
          style={{
            backgroundColor: "#db4dce",
            color: "white",
            display: "inline-block",
            width: "100px",
            height: "40px",
            borderRadius: "5px",
            position: "absolute",
            margin: "20px",
            right: "20px",
          }}>
          <b>Sign In</b>
        </button>
      </nav>
    );
  }
}

class WelcomeSlide extends React.Component {
  render() {
    return (
      <div>
        <img
          src={sl1_bg}
          alt="demo pic"
          style={{
            zIndex: "-5",
            width: "1335px",
            height: "575px",
            opacity: "50%",
          }}
        />
        <center
          style={{
            zIndex: "0",
            position: "absolute",
            top: "250px",
            left: "15%",
          }}>
          <p
            style={{
              fontSize: "30px",
              color: "white",
              fontFamily:
                "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
            }}>
            Subscribe to get unlimited access to Movies and TV Shows that you
            can <br />
            watch from anywhere anytime. Cancel Subscription when you want to.
          </p>
          <input
            type="email"
            placeholder="Enter your email address"
            style={{ width: "400px", height: "50px", borderRadius: "10px",padding:"0px 10px",fontSize:"18px" }}
          />
          <button
            style={{
              backgroundColor: "#db4dce",
              color: "white",
              display: "inline-block",
              width: "100px",
              height: "40px",
              borderRadius: "5px",
            }}>
            <b>See Plans</b>
          </button>
        </center>
      </div>
    );
  }
}

class Slide extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "black",
          display: "inline-block",
          height: "350px",
        }}>
        <img src={netflix_on_tv} alt="demo pic" />
        <p
          style={{
            color: "white",
            position: "absolute",
            padding: "100px",
            display: "inline-block",
            fontSize: "30px",
            fontFamily:
              "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
          }}>
          Watch your favourite Movies and TV Shows on your big screen
        </p>
      </div>
    );
  }
}

class Slide1 extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "black",
          display: "inline-block",
          height: "350px",
        }}>
        <img src={netflix_children_profiles} alt="demo pic" />
        <p
          style={{
            color: "white",
            position: "absolute",
            padding: "100px",
            display: "inline-block",
            fontSize: "30px",
            fontFamily:
              "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
          }}>
          Create Profiles for Kids and set
          <br /> them free to play and explore in
          <br /> entertainment made for them
        </p>
      </div>
    );
  }
}

// class FAQButton extends React.Component {
//   render() {
//     const faqb = {};
//     return (
//       <div>
//         <button style={faqb}>{this.props.children}</button>
//       </div>
//     );
//   }
// }

class FAQ extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <button>1. What is MFLIX?</button>
        <button>2. What plans can I choose?</button>
        <button>3. How many devices can I use this on?</button>
        <button>4. When can I cancel my Subscription</button>
        <button>
          5. Are there any hidden charges for deleting my subscription?
        </button>
      </div>
    );
  }
}

class Divider extends React.Component {
  render() {
    return <div style={{ height: "10px", backgroundColor: "grey" }}></div>;
  }
}

export { NavBar, Divider, WelcomeSlide, Slide, Slide1, FAQ };
