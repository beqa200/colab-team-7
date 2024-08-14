type DataType = {
  Name: string;
  Price: number;
  Storage: string;
  img: string;
};
// productData
export interface Product {
  id: number;
  image: string;
  title: string;
  rating: number;
  price: string;
  reviews: number;
  description: string;
  category: string;
  discount: string;
  additionalImages: string[];
  colorOptions: string[];
  warranty: string;
  deliveryTime: string;
  stock: string;
  recentlyAdded: boolean;
}

export interface MycontextType {
  Show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  Counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  Data: array;
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
}
