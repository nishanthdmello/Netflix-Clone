import ReactDOM from 'react-dom/client';
import {NavBar, WelcomeSlide, Slide2, Divider} from './Welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div style={{backgroundColor:"black"}}>
    <NavBar/>
    <WelcomeSlide/>
    <Divider/>
    <Slide2/>
    <Divider/>
  </div>
);
