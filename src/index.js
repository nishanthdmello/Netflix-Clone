import ReactDOM from 'react-dom/client';
import {NavBar,Slide1} from './Welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div style={{backgroundColor:"black"}}>
    <NavBar/>
    <Slide1/>
  </div>
);
