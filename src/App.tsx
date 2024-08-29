import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Cart from "./components/Cart";
import Layout from "./Layout";
import Product from "./pages/product";
import Category from "./pages/Category"; // Import your Category page
import RegistrationDemo from "./components/mainPage/RegistrationDemo";
import SignIn from "./components/mainPage/SighInDemo";
import SignUp from "./components/mainPage/RegistrationDemo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="category/:categoryName" element={<Category />} />
        <Route path="registration" element={<RegistrationDemo />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
