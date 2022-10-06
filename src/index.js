import ReactDOM from 'react-dom/client';
import {NavBar, WelcomeSlide, Slide, Divider} from './Welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div style={{backgroundColor:"black"}}>
    <NavBar/>
    <WelcomeSlide/>
    <Divider/>
    <Slide/>
    <Divider/>
  </div>
);
