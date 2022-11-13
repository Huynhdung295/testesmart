import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutPage } from "./Pages/AboutPage";
import { CateSubPage } from "./Pages/CateSubPage";
import { HomePage } from "./Pages/HomePage";
import { ProductCatePage } from "./Pages/ProductCatePage";
import { StoreListingPage } from "./Pages/StoreListingPage";

import { HomeTemplate } from "./Templates/HomeTemplate";

function App() {
  return (
    <>
      <HomeTemplate>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="shop">
              <Route
                path="products-by-categories"
                element={<ProductCatePage />}
              />
            </Route>
            <Route path="product-category">
              <Route path="phones" element={<CateSubPage />} />
            </Route>
            <Route path="store-listing" element={<StoreListingPage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
      </HomeTemplate>
    </>
  );
}

export default App;
