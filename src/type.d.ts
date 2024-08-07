type DataType = {
  Name: string;
  Price: number;
  Storage: string;
};
export interface MycontextType {
  Data: array;
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
}
