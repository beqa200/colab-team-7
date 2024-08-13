type DataType = {
  Name: string;
  Price: number;
  Storage: string;
  img: string;
};
export interface MycontextType {
  Show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  Counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  Data: array;
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
}
