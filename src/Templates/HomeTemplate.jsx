import { Link } from "react-router-dom";
import { Footer } from "../Elements/Footer";
import { Header } from "../Elements/Header";
import { HeaderTop } from "../Elements/HeaderTop";

export const HomeTemplate = ({ children }) => {
  return (
    <div id="page" className="hfeed site">
      <div
        style={{
          possiton: "fixed",
          zIndex: 999,
          top: 0,
          left: 0,
          display: 'flex',
          gap: '15px'
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/shop/products-by-categories">Product Cate</Link>
        <Link to="/product-category/phones">Product Phone</Link>
        <Link to="/store-listing">Store</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

      </div>
      <HeaderTop />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
