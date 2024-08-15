import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Cart from "./components/Cart";

import Layout from "./Layout";
import Product from "./pages/product";
import RegistrationDemo from "./components/mainPage/RedistrationDemo";
import SignIn from "./components/mainPage/SighInDemo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="registration" element={<RegistrationDemo />} />
        <Route path="SignIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
