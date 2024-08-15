import { useParams } from "react-router-dom";
import data from "../productData.json";
// import Footer from "../components/Footer";
// import Accordion from "../components/Accordion";

import GalleryWithPickerZoom from "../components/productPage/GalleryWithPickerZoom";
import NavBar from "../components/productPage/NavBar";
import Stars from "../components/productPage/Stars";

export default function Product() {
  const { id } = useParams<{ id: string }>(); // Get the product ID from the URL
  const productId = parseInt(id!, 10);

  const product = data.find((p) => p.id === productId); // Find the product based on the ID

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <NavBar />

            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-lg mb-4">{product.description}</p>
            <p className="text-xl font-semibold mb-4">${product.price}</p>
            <div className="flex flex-col items-start mb-4">
              <div className="flex items-center">
                <p className="text-sm text-gray-600 mr-2">Rating:</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">Reviews: {product.reviews}</p>
          </article>
        </section>

        <section className="mt-8">{/* <Accordion /> */}</section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
