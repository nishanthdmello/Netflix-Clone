import WelcomeSlide from "./WelcomeSlide/WelcomeSlide";
import Divider from "./Divider/Divider";
import Slide from "./Slide/Slide";
import Slide1 from "./Slide1/Slide1";
import FAQ from "./FAQ/FAQ";
function Home() {
  return (
    <div>
      <WelcomeSlide />
      <Divider />
      <Slide />
      <Divider />
      <Slide1 />
      <Divider />
      <FAQ />
    </div>
  );
}

export default Home;
