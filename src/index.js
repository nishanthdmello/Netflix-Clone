import ReactDOM from "react-dom/client";
import {
  NavBar,
  WelcomeSlide,
  Slide,
  Divider,
  Slide1,
  FAQ,
} from "./Components";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <NavBar />
    <WelcomeSlide />
    <Divider />
    <Slide />
    <Divider />
    <Slide1 />
    <Divider />
    <FAQ />
  </div>
);
