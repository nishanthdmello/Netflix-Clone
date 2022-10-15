import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from 'react-router-dom';
// import {
//   NavBar,
//   WelcomeSlide,
//   Slide,
//   Divider,
//   Slide1,
//   FAQ,
// } from "./Components";
import NavBar from "./Components"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    {/* <NavBar />
    <WelcomeSlide />
    <Divider />
    <Slide />
    <Divider />
    <Slide1 />
    <Divider />
    <FAQ /> */}
    <NavBar/>
  </Router>
);
