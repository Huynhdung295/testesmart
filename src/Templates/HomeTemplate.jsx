import { Footer } from "../Elements/Footer";
import { Header } from "../Elements/Header";
import { HeaderTop } from "../Elements/HeaderTop";

export const HomeTemplate = ({ children }) => {
  return (
    <div id="page" className="hfeed site">
      <HeaderTop />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
