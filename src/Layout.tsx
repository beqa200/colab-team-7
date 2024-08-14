import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header></header>
      <Outlet />
      <footer></footer>
    </>
  );
}
