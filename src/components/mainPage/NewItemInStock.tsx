import React, { useState, useEffect } from "react";
import AnimatedText from "./AnimatedText";
import Data from "../../data.json";
import ImageZoom from "react-image-zooom";
import { useNavigate } from "react-router-dom";

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
  recently_added: string;
}

const NewItemInStock: React.FC = () => {
  const [newProduct, setNewProduct] = useState<ProductItem | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const recentlyAddedItems = Data.products.filter(
      (product) => product.recently_added === "true"
    );

    const randomItem =
      recentlyAddedItems[Math.floor(Math.random() * recentlyAddedItems.length)];

    setNewProduct(randomItem);
  }, []);

  if (!newProduct) {
    return <div>Loading...</div>;
  }

  const handleSeeDetailsClick = () => {
    navigate(`/${newProduct.category}/${newProduct.id}`);
  };

  return (
    <div className="relative xl:h-[600px] w-full flex flex-col xl:flex-row items-center my-8 p-4 border-2 border-red-500 rounded-lg shadow-lg bg-gray-800">
      <img
        className="absolute xl:top-[-3rem] xl:left-[-3rem] top-[-2.2rem] left-[-2.1rem] xl:w-[220px] w-[150px] hover:opacity-70 cursor-pointer transition-all duration-1000 ease-in-out"
        src="/assetsForMainPage/depositphotos_2204833-stock-illustration-new-red-corner-business-ribbon copy.png"
        alt="New item ribbon"
      />
      <div className="flex-1 order-2 w-full pr-4">
        <p className="text-white w-full flex flex-col gap-4 pl-4 mt-2 text-base">
          <span className="text-white w-full pl-[2rem] font-bold hidden xl:flex text-2xl">
            {newProduct.title} &nbsp;
            <AnimatedText text={"Aerox 5"} period={1000} /> \
          </span>
          <div className="newItemDescription w-full flex flex-col gap-[3rem]">
            <span
              style={{
                width: "100%",
                lineHeight: "1.6",
                fontSize: "1.3rem",
                fontWeight: "500",
              }}
            >
              {newProduct.description}
            </span>

            <a onClick={handleSeeDetailsClick} className="arrow-link">
              See more<span className="arrow"></span>
            </a>
          </div>
        </p>
      </div>

      <div className="order-1 xl:order-2 flex flex-col items-center">
        <div className="flex xl:hidden w-full items-center justify-center gap-4 pt-4 mb-[-6rem] transition-all duration-1000 ease-in-out">
          <span className="text-white text-center w-full pl-[2rem] text-2xl font-semibold">
            {newProduct.title} <AnimatedText text={"Aerox 5"} period={1000} /> \
          </span>
        </div>

        <ImageZoom
          src={newProduct.image}
          alt="Zoomable product image"
          zoom={"250"}
          className="NewItemImage object-cover rounded-md border-2 border-gray-600"
        />
      </div>
    </div>
  );
};

export default NewItemInStock;
