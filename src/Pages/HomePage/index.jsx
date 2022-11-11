import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeaderTop } from "./HeaderTop";
// import { Slider } from "./Slider";

export const HomePage = () => {
  return (
    <div id="page" className="hfeed site">
      <HeaderTop />
      <Header />
      {/* <Slider /> */}
      <div>Slider coming...</div>
      <Content />
      <Footer />
    </div>
  );
};
