import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Contact() {
  return (
    <div>
      <h3>Call us:</h3>7892896964
      <br />
      <h3>Email us:</h3>nihaltm2002@gmail.com
      <br />
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
