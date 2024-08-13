import { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DataJSON from "./data.json";
import { DataType, MycontextType } from "./type";
import Cart from "./components/Cart";

export const MyContext = createContext<MycontextType>({
  Data: [{}],
  setData: () => {},
  Counter: 1,
  setCounter: () => {},
  Show: false,
  setShow: () => {},
});

export default function Layout() {
  const [Data, setData] = useState<DataType[]>(DataJSON);
  const [Counter, setCounter] = useState<number>(1);
  const [Show, setShow] = useState<boolean>(true);

  console.log(Data);
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
        }}>
        <Routes>
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}
