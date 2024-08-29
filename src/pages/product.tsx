import { useParams } from "react-router-dom";
import data from "../data.json";
// import Footer from "../components/Footer";
// import Accordion from "../components/Accordion";

import GalleryWithPickerZoom from "../components/productPage/GalleryWithPickerZoom";
import NavBar from "../components/productPage/NavBar";
import Stars from "../components/productPage/Stars";
import TrustedBrandsSlider from "../components/productPage/TrustedBrandsSlider";
import Slider_3d from "../components/productPage/Slider_3d";
import D3_Rotate from "../components/productPage/D3_Rotate";
import Footer from "../components/productPage/Footer";

export default function Product() {
  const { id } = useParams<{ id: string }>(); // Get the product ID from the URL
  const productId = parseInt(id!, 10);

  const product = data.products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <NavBar />

      <main className="max-w-screen-2xl mx-auto p-6 flex-1 mt-6">
        <section className="flex flex-col md:flex-row place-items-start">
          <aside className="w-full md:w-[70%]">
            <GalleryWithPickerZoom images={product.additionalImages} mainImage={product.image} />
          </aside>

          <article className="w-full md:w-[40%] md:pl-6">
            <h1 className="text-4xl font-bold mb-4 mt-32 ">{product.title}</h1>
            <p className="text-2xl mb-4">{product.description}</p>

            <span className={product.discount ? "line-through text-2xl " : ""}>${product.price}</span>
            {product.discount && <div className="text-red-500 text-2xl">${product.discount}</div>}

            <div className="flex flex-col items-start mb-4 mt-4">
              <div className="flex items-center">
                <p className="text-2xl text-gray-600 mr-2">Rating:</p>
                <Stars rating={product.rating} />
                <p className="text-2xl text-gray-600 ml-2">{product.rating} / 5</p>
              </div>
            </div>
            <p className="text-2xl text-gray-600">Reviews: {product.reviews}</p>

            <div className="mt-4">
              <h2 className="text-lg font-semibold">Available Colors</h2>
              <ul className="flex gap-2">
                {product.colorOptions.map((color) => (
                  <li key={color} className="border p-2 rounded">
                    {color}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold">Warranty</h2>
              <p>{product.warranty}</p>
            </div>
            <div className="mt-6">
              <h2 className="text-lg font-semibold">Delivery Time</h2>
              <p>{product.deliveryTime}</p>
            </div>
            <p className="mt-4 text-green-500">{product.stock}</p>
          </article>
        </section>

        <Slider_3d />

        <section className="mt-12">
          <TrustedBrandsSlider />
        </section>

        <section className="hidden md:block">
          <D3_Rotate />
        </section>

        <section className="  mt-8">{/* <Accordion /> */}</section>
      </main>

      <Footer />
    </div>
  );
}
