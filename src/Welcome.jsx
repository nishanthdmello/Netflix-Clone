import React from "react";
import netflixlogo from "./resources/Netflix-Brand-Logo.png";
import sl1_bg from "./resources/netflix_sl1_bg.jpg";
import netflix_on_tv from "./resources/netflix_on_tv.gif";

class NavBar extends React.Component {
    render() {
        return(
            <nav style={{backgroundColor:"black", color:"white", display:"inline-block"}}>
                <img src={netflixlogo} alt="demo pic" style={{width:"150px", height:"80px"}}/>
                <button style={{backgroundColor:"red", color:"white", display:"inline-block", width:"100px", height:"40px",borderRadius:"5px",position:"absolute", margin:"20px", right:"20px"}}><b>Sign In</b></button>    
            </nav>
        )
    }
}

class WelcomeSlide extends React.Component {
    render() {
        return(
            <div>
                <img src={sl1_bg} alt="demo pic" style={{zIndex:"-5", width:"1335px", height:"575px", opacity:"50%"}} />
                <center style={{zIndex:"0", position:"absolute", top:"300px", left:"20%"}}>
                    <p style={{fontSize:"30px", color:"white", fontFamily: "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif"}}>
                        Subscribe to get unlimited access to Movies and TV Shows that you can <br/>
                        watch from anywhere anytime. Cancel Subscription when you want to.
                    </p>
                    <input type="email" placeholder="Enter your email address" style={{width:"400px", height:"50px", borderRadius:"10px"}}/>

                </center>
            </div>
        )
    }
}

class Slide extends React.Component {
    render() {
        return(
            <div style={{backgroundColor:"black", display:"inline-block"}}>
                <img src={netflix_on_tv} alt="demo pic"/>
                <p style={{color:"white", position:"absolute", padding:"100px", display:"inline-block", fontSize:"30px", fontFamily: "Netflix Sans,Helvetica Neue,Helvetica,Arial,sans-serif"}}>
                    Watch your favourite Movies and TV Shows on your big screen
                </p>
            </div>
        )
    }
}

class Divider extends React.Component {
    render() {
        return(
            <div style={{height:"10px", backgroundColor:"grey"}}></div>
        )
    }
}

export {
    NavBar,
    Divider,
    WelcomeSlide,
    Slide
}