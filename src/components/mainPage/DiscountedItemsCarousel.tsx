import { useState, useEffect } from "react";
import Data from "../../data.json";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function DiscountedItemsCarousel() {
  const [itemsPerRow, setItemsPerRow] = useState(4);
  const [rowsPerView, setRowsPerView] = useState(2);
  const [currentRow, setCurrentRow] = useState(0);
  const navigate = useNavigate();

  const updateItemsPerRow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      setItemsPerRow(4);
      setRowsPerView(2);
    } else if (screenWidth >= 768) {
      setItemsPerRow(3);
      setRowsPerView(2);
    } else {
      setItemsPerRow(1);
      setRowsPerView(1);
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
      startIndex + itemsPerRow * rowsPerView,
      totalItems
    );
    return Data.products.slice(startIndex, endIndex);
  };

  const shouldShowPrev = currentRow > 0;
  const shouldShowNext = currentRow < totalRows - 1;

  const visibleItems = getVisibleItems();

  const handleCardClick = (category: string, productId: string) => {
    navigate(`/${category}/${productId}`);
  };

  return (
    <div className="relative flex justify-center items-center overflow-hidden">
      <button
        onClick={handlePrev}
        className={`carousel-arrow left transform -translate-y-1/2 bg-[#353333] text-white p-2 rounded-full shadow-lg hover:text-blue-600 transition mx-2 z-10 ${
          shouldShowPrev ? "opacity-100" : "opacity-0"
        }`}
        disabled={!shouldShowPrev}
      >
        <LeftOutlined />
      </button>

      <div className="flex">
        <div
          className="grid gap-4 w-full salesDiv"
          style={{
            gridTemplateRows: `repeat(${rowsPerView}, 1fr)`,
            gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)`,
          }}
        >
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="card bg-[#041220] md:w-[250px] md:h-[330px] h-[500px] w-[350px] sm:w-[600px] sm:h-[740px] shadow-md rounded-3xl p-2 cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => handleCardClick("discounted", item.id.toString())} // Adjust category name if needed
            >
              <a
                className="relative flex sm:h-[600px] md:h-[200px] rounded-xl overflow-hidden"
                href="#"
              >
                <img
                  className="object-cover w-full"
                  src={item.image}
                  alt="product image"
                />
                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                  39% OFF
                </span>
              </a>
              <div className="mt-4 px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl tracking-tight text-[white]">
                    {item.title}
                  </h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-3xl font-bold text-[white]">
                      ${item.price}
                    </span>
                    <span className="text-sm text-[white] line-through">
                      ${item.price}
                    </span>
                  </p>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, idx) => (
                      <svg
                        key={idx}
                        aria-hidden="true"
                        className="h-5 w-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                    <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                      {item.id}
                    </span>
                  </div>
                </div>
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 lg:px-6 lg:py-3 md:px-5 md:py-2.5 sm:px-4 sm:py-2.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to cart
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        className={`carousel-arrow right bg-[#353333] transform -translate-y-1/2 duration-700 ease-in-out text-white p-2 rounded-full shadow-lg hover:text-blue-600 transition mx-2 z-10 ${
          shouldShowNext ? "opacity-100" : "opacity-0"
        }`}
        disabled={!shouldShowNext}
      >
        <RightOutlined />
      </button>
    </div>
  );
}
