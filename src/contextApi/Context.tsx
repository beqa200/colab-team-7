import { createContext, useState, ReactNode } from "react";
import { DataType } from "../type";
// Ensure this import is correct for DataType

export interface MycontextType {
  Show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  Counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  Data: DataType[];
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
}

const defaultContextValue: MycontextType = {
  Data: [],
  setData: () => {},
  Counter: 1,
  setCounter: () => {},
  Show: false,
  setShow: () => {},
};

export const MyContext = createContext<MycontextType>(defaultContextValue);

export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [Data, setData] = useState<DataType[]>([]); // Replace DataJSON with an empty array or initial data
  const [Counter, setCounter] = useState<number>(1);
  const [Show, setShow] = useState<boolean>(true);

  return (
    <MyContext.Provider
      value={{ Data, setData, Counter, setCounter, Show, setShow }}
    >
      {children}
    </MyContext.Provider>
  );
};
