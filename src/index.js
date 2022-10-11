import ReactDOM from 'react-dom/client';
import {NavBar, WelcomeSlide, Slide, Divider, Slide1, FAQ} from './Welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div style={{backgroundColor:"#3f053a"}}>
    <NavBar/>
    <WelcomeSlide/>
    <Divider/>
    <Slide/>
    <Divider/>
    <Slide1/>
    <Divider/>
    <FAQ/>
  </div>
);
