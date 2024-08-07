import { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DataJSON from "./data.json";
import { DataType, MycontextType } from "./type";
import Cart from "./components/Cart";

export const MyContext = createContext<MycontextType>({
  Data: [{}],
  setData: () => {},
});

export default function Layout() {
  const [Data, setData] = useState<DataType[]>(DataJSON);
  console.log(Data);
  return (
    <BrowserRouter>
      <MyContext.Provider
        value={{
          Data,
          setData,
        }}>
        <Routes>
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}
