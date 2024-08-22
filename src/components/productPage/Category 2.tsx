import React from "react";
import { useContext } from "react";
import { MyContext } from "../../contextApi/Context";

export default function Category() {
  const { selecetedCategory, setselecetedCategory } = useContext(MyContext);
  const category = [
    "See All",
    "Mouses",
    "Keyboard",
    "Monitors",
    "Headsets",
    "PC",
  ];
  return (
    <>
      <main>
        <section>
          <div className="h-[100px] w-[200px] bg-gray-100">
            <div className="">
              {category.map((items, index) => {
                return (
                  <button
                    className={`${
                      items === selecetedCategory
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    } ${
                      items === "See All" &&
                      selecetedCategory === null &&
                      "!bg-black !text-white "
                    }`}
                    key={index}
                    onClick={() => {
                      if (items === "See All") {
                        setselecetedCategory(null);
                      } else {
                        setselecetedCategory(items);
                      }
                    }}>
                    {items}
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
