import { useState, useEffect } from "react";
import Data from "../../data.json";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../contextApi/Context";
import { useContext } from "react";

export default function DiscountedItemsCarousel() {
  const [itemsPerRow, setItemsPerRow] = useState(4);
  const [rowsPerView, setRowsPerView] = useState(2);
  const [currentRow, setCurrentRow] = useState(0);
  const updateItemsPerRow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      setItemsPerRow(4);
      setRowsPerView(2);
    } else if (screenWidth <= 700) {
      setItemsPerRow(2);
      setRowsPerView(2);
    }
  };

  useEffect(() => {
    updateItemsPerRow();
    window.addEventListener("resize", updateItemsPerRow);
    return () => window.removeEventListener("resize", updateItemsPerRow);
  }, []);

  const totalItems = Data.products.length;
  const totalRows = Math.ceil(totalItems / (itemsPerRow * rowsPerView));

  const handlePrev = () => {
    setCurrentRow((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentRow((prev) => Math.min(prev + 1, totalRows - 1));
  };

  const getVisibleItems = () => {
    const startIndex = currentRow * itemsPerRow * rowsPerView;
    const endIndex = Math.min(
      +startIndex + itemsPerRow * rowsPerView,
      totalItems
    );
    return prodcutCopy.slice(startIndex, endIndex);
  };

  const shouldShowPrev = currentRow > 0;
  const shouldShowNext = currentRow < totalRows - 1;

  const visibleItems = getVisibleItems();

  const handleCardClick = (category: string, productId: number) => {
    navigate(`/${category}/${productId}`);
  };
  return (
    <div className="relative flex flex-col">
      <div className="self-end mr-[2rem]">
        <button
          onClick={handlePrev}
          className={`carousel-arrow bg-[#F5F5F5] p-[1rem] rounded-[50%]`}
          disabled={!shouldShowPrev}
        >
          <LeftOutlined />
        </button>
        <button
          onClick={handleNext}
          className={`carousel-arrow bg-[#F5F5F5] p-[1rem] rounded-[50%]`}
          disabled={!shouldShowNext}
        >
          <RightOutlined />
        </button>
      </div>
      <div className="flex">
        <div
          className="grid gap-4 w-full salesDiv"
          style={{
          {visibleItems.map((item, index) => (
            <div
              className="p-[1rem] carousel-item fixed-size-item"
              key={index}
              onClick={() => handleCardClick(item.category, item.id)}
            >
                <img
                  className={`cartIcon w-[45px] h-[35px] transition-transform duration-300 ${
                    cartItems.includes(item.id)
                      ? "text-green-500"
                      : "hover:scale-105"
                  }`}
                  src={
                    cartItems.includes(item.id)
                      ? "/shared/shopping_bag_24dp_48752C_FILL0_wght400_GRAD0_opsz24.png"
                      : "/shared/shopping_bag_24dp_999999_FILL0_wght400_GRAD0_opsz24.png"
                  }
                  alt={cartItems.includes(item.id) ? "Green Cart" : "Grey Cart"}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (cartItems.includes(item.id)) {
                      handleRemoveFromCart(item.id);
                    } else {
                      handleAddToCart(item.id);
                    }
                  }}
                />
                <img
                  className={`absolute top-[3px] hover:scale-105 right-[4rem] w-[35px] h-[35px] p-[0.5rem] transition-transform duration-300 ${
                    favorites.includes(item.id)
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                  src={`/shared/favorite_24dp_${
                    favorites.includes(item.id) ? "EA3323" : "999999"
                  }_FILL0_wght400_GRAD0_opsz24.png`}
                  alt={favorites.includes(item.id) ? "Red Heart" : "Gray Heart"}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(item.id);
                  }}
                />
                <img
                  className="rounded-[5px] w-full h-full object-cover"
                  src={item.image}
                  alt={item.title}
                />

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
