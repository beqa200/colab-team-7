import { Route, Routes } from "react-router-dom";
// import Layout from "./Layout";
import MainPage from "./pages/MainPage";

import Cart from "./components/Cart";
import Product from "./pages/product";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route path="/*" element={<Layout />}>
        <Route path="cart" element={<Cart />} />
        <Route path="product/:id" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default App;
