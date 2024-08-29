import { useParams, useNavigate } from "react-router-dom";
import Data from "../data.json"; // Adjust the path to your data file

const Category = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  // Decode the categoryName from the URL
  const decodedCategoryName = decodeURIComponent(categoryName || "");

  // Filter products based on category
  const filteredProducts = Data.products.filter((product) => product.category === decodedCategoryName);

  // Handle click to navigate to product details page
  const handleClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="container mx-auto mt-32 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 opacity-80 drop-shadow-lg">{decodedCategoryName} Products</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border p-6 rounded-lg shadow-lg bg-white transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => handleClick(product.id)}
            >
              <img src={product.image} alt={product.title} className="w-full h-auto object-cover mb-4 rounded" />
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{product.title}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-xl font-bold mb-2 text-gray-900">${product.price}</p>
              {product.discount && <p className="text-red-500 text-lg font-bold">${product.discount}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
