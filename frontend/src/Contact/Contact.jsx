import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import twitter_logo from "../images/twitter_logo.png";
import phone_logo from "../images/phone_logo.png";
import gmail_logo from "../images/gmail_logo.jpg";
import github_logo from "../images/github_logo.png";
import insta_logo from "../images/insta_logo.jpg";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact_page">
      <h3>Call us:</h3>
      <img src={phone_logo} alt="demo pic" />
      <br />
      <br />
      <p>Nihal:7892896964</p>
      <p>Nishanth:7676034782</p>
      <p>Digvijay:9353717275</p>
      <br />
      <br />
      <h3>Email us:</h3>
      <img src={gmail_logo} alt="demo pic" />
      <p>nihaltm2002@gmail.com</p>
      <p>nishanthdmello2003@gmail.com</p>
      <p>digvijayn1993@gmail.com</p>
      <br />
      <h3>socials</h3>
      <img src={insta_logo} alt="demo pic" />
      <a href="https://www.instagram.com/nihalmurthy10/" target="_blank" rel="noreferrer">Nihal T M</a>
      <br />
      <a href="https://www.instagram.com/chessticles_02/" target="_blank" rel="noreferrer">Digvijay</a>
      <br />
      <br />
      <img src={twitter_logo} alt="demo pic" />
      <a href="https://twitter.com/Nihal32327127/" target="_blank" rel="noreferrer">Nihal T M</a>
      <br />
      <br />
      <img src={github_logo} alt="demo pic" />
      <a href="https://github.com/n1haldev">Nihal</a>
      <br />
      <a href="https://github.com/ndigvijay">Digvijay</a>
      <br />
      <a href="https://github.com/nishanthdmello">Nishanth</a>
    </div>
  );
}
export default function ContactUs(){
    return(
        <div>
            <Navbar/>
            <Contact/>
            <Footer/>
        </div>
    )
}
