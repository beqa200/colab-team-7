export interface DataType {
  id: number;
  name: string;
  title: string;
  price: number;
  storage: string;
  img: string;
}

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

export type CategoryType = string | null;

export interface MyContextType {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  data: DataType[];
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
  recentlyAdded?: boolean; // Optional property
  selecetedCategory: CategoryType;
  setSelecetedCategory: React.Dispatch<React.SetStateAction<CategoryType>>;
}

// types for static brands.json
export interface BrandsType {
  name: string;
  image: string;
  url: string;
}
