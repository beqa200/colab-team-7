import { createContext, useState, ReactNode } from "react";
import { MyContextType, DataType, CategoryType } from "../types/type"; // Adjust the path as needed

// Ensure this import is correct for DataType
const defaultContextValue: MyContextType = {
  data: [],
  setData: () => {},
  counter: 1,
  setCounter: () => {},
  show: false,
  setShow: () => {},
  recentlyAdded: false,
  selecetedCategory: null,
  setSelecetedCategory: () => {},
};

export const MyContext = createContext<MyContextType>(defaultContextValue);

export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<DataType[]>([]); // Replace DataJSON with an empty array or initial data
  const [counter, setCounter] = useState<number>(1);
  const [show, setShow] = useState<boolean>(true);
  const [selecetedCategory, setSelecetedCategory] = useState<CategoryType>(null);

  return (
    <MyContext.Provider
      value={{
        data,
        setData,
        counter,
        setCounter,
        show,
        setShow,
        selecetedCategory,
        setSelecetedCategory,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
