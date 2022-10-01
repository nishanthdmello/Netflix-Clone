import React from "react";
import netflixlogo from "./resources/Netflix-Brand-Logo.png";
import sl1_bg from "./resources/netflix_sl1_bg.jpg";

class NavBar extends React.Component {
    render() {
        return(
            <nav style={{backgroundColor:"black", color:"white", display:"inline-block"}}>
                <img src={netflixlogo} alt="demo pic" width="150px" height="80px"/>
                <button style={{backgroundColor:"red", color:"white", display:"inline-block", width:"100px", height:"40px",borderRadius:"50px",position:"absolute", margin:"20px", right:"20px"}}>Login</button>    
            </nav>
        )
    }
}

class Slide1 extends React.Component {
    render() {
        return(
            <div>
                <img src={sl1_bg} alt="demo pic" style={{zIndex:"-5", width:"1335px", height:"575px"}} />
                <center style={{zIndex:"0", position:"absolute", top:"300px", left:"20%"}}>
                    <input type="email" placeholder="Enter your email address" style={{width:"400px", height:"50px", borderRadius:"10px"}}/>
                    <p style={{fontColor:"white", fontSize:"30px", color:"white"}}>
                        Subscribe to get unlimited access to Movies and TV Shows that you can <br/>
                        watch from anywhere anytime. Cancel Subscription when you want to.
                    </p>
                </center>
            </div>
        )
    }
}

export {
    NavBar,
    Slide1
}