import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  {
    imgSrc: "/assets/cd458ceafc0db91be7e7fa1c37da0f1a_t2.mp4",
    alt: "Category 1",
    isVideo: true,
  },
  {
    imgSrc: "/assets/d2de4cbbe10566e48295f18aec8aee5d.mp4",
    alt: "Category 2",
    isVideo: true,
  },
  {
    imgSrc: "/assets/6515f96e4c623d3095c53e7ae16d6e10.mp4",
    alt: "Category 3",
    isVideo: true,
  },
  {
    imgSrc: "/assets/b86e39b83f210b4df19b46219a1fdda1.mp4",
    alt: "Category 4",
    isVideo: true,
  },
  {
    imgSrc: "public/assets/d4faea6f218208b323211e28d7df9956.mp4",
    alt: "Category 5",
    isVideo: true,
  },
];

export default function CategoryCarousel() {
  const [progress, setProgress] = useState(100);
  const [isChanging, setIsChanging] = useState(false);
  const sliderRef = useRef<Slider | null>(null);
  console.log(isChanging);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    afterChange: () => {
      setIsChanging(false);
      setProgress(100);
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        setIsChanging(true);
        (sliderRef.current as Slider).slickNext();
        setProgress(100);
      }
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(progressInterval);
          return 0;
        }
        return prev - 100 / 5;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="relative group category_card">
            {category.isVideo ? (
              <video
                src={category.imgSrc}
                className="w-full h-[280px] object-cover rounded-lg shadow-lg group-hover:blur-sm"
                autoPlay
                loop
                muted></video>
            ) : (
              <img
                src={category.imgSrc}
                alt={category.alt}
                className="w-full h-auto rounded-lg shadow-lg group-hover:blur-sm"
              />
            )}
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white text-xl font-semibold transition-opacity duration-300">
              {category.alt}
            </span>
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-full max-w-[50px] h-[5px] bg-[white] rounded-full flex items-center justify-center z-10">
        <div
          className="bg-[#2613b6] h-full rounded-full"
          style={{
            width: `${progress}%`,
            transition: "width 1s linear",
          }}
        />
      </div>
    </div>
  );
}
