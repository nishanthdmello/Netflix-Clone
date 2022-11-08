import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact_page">
      <h3>Call us:</h3>7892896964
      <br />
      <h3>Email us:</h3>nihaltm2002@gmail.com
      <br />
      <h3>Instagram:</h3><a href="https://www.instagram.com/nihalmurthy10/" target="_blank" rel="noreferrer">Nihal T M</a>
      <br />
      <h3>Twitter:</h3><a href="https://twitter.com/Nihal32327127/" target="_blank" rel="noreferrer">Nihal T M</a>
    </div>
  );
}
export default function ContactUs(){
    return(
        <div>
            <Navbar/>
            <Contact/>
            <div style={{position:"absolute",bottom:"0px",width:"100vw",}}>
            <Footer/>
            </div>
        </div>
    )
}
