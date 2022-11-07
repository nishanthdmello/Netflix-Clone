import React from "react";
import "./FAQpage.css";
import img1 from "../images/Mflix_FAQ_1.png";
import img2 from "../images/Mflix_FAQ_2.jpg";
import img3 from "../images/Mflix_FAQ_3.jpg";
import logo from "../images/Mflix_Brand_Logo2.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function FAQpage() {
  return (
    <div id="main">
      <br />
      <br />
      <table className="table1">
        <tr>
          <td>
            <h1>What is Mflix?</h1>
            <br />
            <p>
              Mflix is a subscription based streaming service that allows our
              members <br />
              to watch their favourite TV shows and movies without commercials
              on an
              <br /> internet-connected device and do so anywhere anytime
              without the traditional worry of late fees like was in the case
              during the CD borrowing era.
              <br /> You can also download your favourite entertainment to your
              Android,
              <br /> iOS or Windows devices and watch without internet
              connection. If you are
              <br /> already a member, go right ahead and
              <a href="/login">Login</a> to watch your favourite shows.
            </p>
          </td>
          <td>
            <img src={img1} alt="missing pic" style={{ width: "600px" }} />
          </td>
        </tr>
      </table>
      <br />
      <hr />
      <br />
      <table className="table2">
        <tr>
          <td>
            <img src={img2} alt="missing pic" />
          </td>
          <td>
            <h1>Supported Devices</h1>
            <br />
            <p>
              You can watch Mflix through any internet-connected devices that
              include smart TVs, streaming media players , set-top boxes,
              smartphones and tablets. You can also watch Mflix on your computer
              or laptop using a internet browser. You can check out the
              <a href="https://fast.com" target="_blank" rel="noreferrer">
                internet speed test
              </a>
              to achieve best resolution.
            </p>
          </td>
        </tr>
      </table>
      <br />
      <hr />
      <br />
      <table className="table1">
        <tr>
          <td>
            <h1>Plans and Pricing</h1>
            <br />
            <p>
              Each Netflix Plan determines the number of devices you can watch
              Mflix <br />
              on at the same time and if your prefer to view in Standard
              Definition SD, <br />
              High Definition HD, or Ultra High Definition UHD. Compare our{" "}
              <a href="/plans">Plans</a> to <br />
              decide which is right for you. Remember you can cancel it online
              anytime.
            </p>
          </td>
          <td>
            <img id="img3" src={img3} alt="missing pic" />
          </td>
        </tr>
      </table>
      <br />
      <hr />
      <br />
      <center>
        <h3>Get Started!</h3>
        <br />
        <img src={logo} alt="missing pic" style={{ width: "100px" }} />
        <p>
          Follow these easy steps to start watching on Mflix today:
          <br />
          1. Visit <a href="/signup">Sign Up</a>.<br />
          2. <a href="/plans">Choose the plan</a> that's right for you. <br />
          3. Enter a payment method. As a Mflix member, you are charged once a
          month on the date you signed up on.
          <br />
          <b>That's it. Enjoy Mflix!</b>
        </p>
      </center>
      <br />
      <br />
      <hr />
    </div>
  );
}

export default function FAQ() {
  return (
    <div>
      <Navbar />
      <FAQpage />
      <Footer />
    </div>
  );
}
