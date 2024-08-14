import React from "react";
import ImageZoom from "react-image-zooom";
import AnimatedText from "./AnimatedText";

const NewItemInStock: React.FC = () => {
  return (
    <div className=" relative newItemInStock xl:h-[600px] w-full flex flex-col xl:flex-row items-center  my-8 p-[1rem] border-2 border-red-500 rounded-lg shadow-lg bg-gray-800">
      <img
        className="absolute xl:top-[-3rem] hover:opacity-[0.7] cursor-pointer xl:left-[-3rem] top-[-2.2rem] transition-all duration-[1s] ease-in-out left-[-2.1rem] xl:w-[220px] w-[150px]"
        src="/assets/depositphotos_2204833-stock-illustration-new-red-corner-business-ribbon copy.png"
        alt=""
      />
      <div className="flex-1  order-2 pr-4">
        <p className="text-white flex flex-col gap-[8rem] pl-[5rem] mt-2 text-base">
          <span className="text-[white] font-bold hidden xl:flex text-[24px]">
            SteelSeries &nbsp;
            <AnimatedText text={"Aerox 5"} period={1000} /> \
          </span>{" "}
          <div className="newItemDescription ">
            <span>
              {" "}
              Wireless lightweight gaming mouse with a 9-button programmable
              layout
            </span>
          </div>
        </p>
      </div>

      <div className="order-1 xl:order-2 ">
        <div className="flex xl:hidden items-center  justify-center gap-[2rem] pt-[2rem] mb-[-6rem] transition-all duration-[1s] ease-in-out">
          <span className="text-[white]  text-[24px] font-semibold">
            SteelSeries <AnimatedText text={"Aerox 5"} period={1000} /> \
          </span>{" "}
        </div>

        <ImageZoom
          src="/assets/441b7509d792cba6bcc8f150270856be.png"
          alt="Zoomable image"
          zoom={"250"}
          className="NewItemImage   object-cover rounded-md border-2 border-gray-600"
        />
      </div>
    </div>
  );
};

export default NewItemInStock;
