import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <BrowserRouter>
      <MyContext.Provider
        value={{
          Show,
          setShow,
          Counter,
          setCounter,
          Data,
          setData,
        }}
      >
        <Routes>
          <Route path="/Cart" element={<Cart />} />

          <Route path="/Product/:id" element={<Product />} />

        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}
