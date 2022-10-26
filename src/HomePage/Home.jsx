import WelcomeSlide from "./WelcomeSlide/WelcomeSlide";
import Divider from "./Divider/Divider";
import Slide from "./Slide/Slide";
import Slide1 from "./Slide1/Slide1";
import FAQ from "./FAQ/FAQ";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function Home() {
  return (
    <div>
      <Navbar/>
      <WelcomeSlide />
      <Divider />
      <Slide />
      <Divider />
      <Slide1 />
      <Divider />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
