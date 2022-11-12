import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CateSubPage } from "./Pages/CateSubPage";
import { HomePage } from "./Pages/HomePage";
import { ProductCatePage } from "./Pages/ProductCatePage";

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
          </Route>
        </Routes>
      </HomeTemplate>
    </>
  );
}

export default App;
