import { useState, useEffect } from "react";
import Data from "../../data.json";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function DiscountedItemsCarousel() {
  const [itemsPerRow, setItemsPerRow] = useState(4);
  const [rowsPerView, setRowsPerView] = useState(2);
  const [currentRow, setCurrentRow] = useState(0);
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      const storedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
      setFavorites(storedFavorites);
      setCartItems(storedCartItems);
    } catch (error) {
      console.error("Error loading data from localStorage", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (error) {
      console.error("Error saving favorites to localStorage", error);
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error saving cart items to localStorage", error);
    }
  }, [cartItems]);

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
    const endIndex = Math.min(startIndex + itemsPerRow * rowsPerView, totalItems);
    return Data.products.slice(startIndex, endIndex);
  };

  const shouldShowPrev = currentRow > 0;
  const shouldShowNext = currentRow < totalRows - 1;

  const visibleItems = getVisibleItems();

  const handleCardClick = (category: string, productId: number) => {
    navigate(`/${category}/${productId}`);
  };

  const handleAddToCart = (productId: number) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, productId];
      localStorage.setItem("cartItems", JSON.stringify(updatedItems)); // Update localStorage
      return updatedItems;
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((id) => id !== productId);
      localStorage.setItem("cartItems", JSON.stringify(updatedItems)); // Update localStorage
      return updatedItems;
    });
  };

  const toggleFavorite = (productId: number) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.includes(productId) ? prevFavorites.filter((id) => id !== productId) : [...prevFavorites, productId];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return (
    <div className="relative flex flex-col">
      <div className="self-end mr-[2rem]">
        <button onClick={handlePrev} className={`carousel-arrow bg-[#F5F5F5] p-[1rem] rounded-[50%]`} disabled={!shouldShowPrev}>
          <LeftOutlined />
        </button>
        <button onClick={handleNext} className={`carousel-arrow bg-[#F5F5F5] p-[1rem] rounded-[50%]`} disabled={!shouldShowNext}>
          <RightOutlined />
        </button>
      </div>
      <div className="flex">
        <div
          className="grid gap-4 w-full salesDiv"
          style={{
            gridTemplateRows: `repeat(${rowsPerView}, minmax(0, 1fr))`,
            gridTemplateColumns: `repeat(${itemsPerRow}, minmax(0, 1fr))`,
          }}
        >
          {visibleItems.map((item, index) => (
            <div className="p-[1rem] carousel-item fixed-size-item" key={index} onClick={() => handleCardClick(item.category, item.id)}>
              <div className="bg-[#e3e1e1] relative fixed-size-content">
                <img
                  className={`cartIcon w-[45px] h-[35px] transition-transform duration-300 ${
                    cartItems.includes(item.id) ? "text-green-500" : "hover:scale-105"
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
                    favorites.includes(item.id) ? "text-red-500" : "text-gray-500"
                  }`}
                  src={`/shared/favorite_24dp_${favorites.includes(item.id) ? "EA3323" : "999999"}_FILL0_wght400_GRAD0_opsz24.png`}
                  alt={favorites.includes(item.id) ? "Red Heart" : "Gray Heart"}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(item.id);
                  }}
                />
                <img className="rounded-[5px] w-full h-full object-cover" src={item.image} alt={item.title} />
                <button className="see-details-btn">See Details</button>
              </div>
              <div className="mt-[0.5rem]">
                <span>{item.title}</span>
                <p className="text-[1.2rem] flex gap-[1rem]">
                  <span className="text-[red]">{`$${item.discount}`}</span> <span className="text-[grey] line-through">{`$${item.price}`}</span>
                </p>
                <div className="flex">
                  {Array.from({ length: 5 }, (_, idx) => (
                    <svg
                      key={idx}
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.668 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
