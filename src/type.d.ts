type DataType = {
  Name: string;
  Price: number;
  Storage: string;
  img: string;
};

interface ProductItem {
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
  recently added?: boolean; // Optional property
}
