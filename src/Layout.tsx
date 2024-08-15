import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/mainPage/Header";

export default function Layout() {
  return (
    <>
      <header className="w-full absolute z-50">
        <HeaderComponent />
      </header>
      <Outlet />
      <footer></footer>
    </>
  );
}
