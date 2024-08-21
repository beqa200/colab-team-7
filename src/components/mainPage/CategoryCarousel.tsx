import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  {
    imgSrc: "https://player.vimeo.com/video/998846572",
    alt: "HeadPhone",
    isVideo: true,
    isVimeo: true,
  },
  {
    imgSrc: "https://player.vimeo.com/video/998845896",
    alt: "KeyBoard",
    isVideo: true,
    isVimeo: true,
  },
  {
    imgSrc: "https://player.vimeo.com/video/998842862",
    alt: "Monitor",
    isVideo: true,
    isVimeo: true,
  },
  {
    imgSrc: "https://player.vimeo.com/video/998860095",
    alt: "Mouse",
    isVideo: true,
    isVimeo: true,
  },
  {
    imgSrc: "https://player.vimeo.com/video/998862113",
    alt: "Case",
    isVideo: true,
    isVimeo: true,
  },
];

export default function CategoryCarousel() {
  const [progress, setProgress] = useState(100);
  const sliderRef = useRef<Slider | null>(null);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    afterChange: () => {
      setProgress(100);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
        setProgress(100);
      }
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev <= 0 ? 0 : prev - 100 / 5));
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
          <div key={index} className="relative group category_card" onClick={() => navigate(`/${category.alt}`)}>
            <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
              {category.isVimeo ? (
                <iframe
                  src={`${category.imgSrc}?autoplay=1&loop=1&muted=1&background=1`}
                  className="absolute top-0 left-0 w-full h-full object-cover group-hover:blur-sm"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                ></iframe>
              ) : category.isVideo ? (
                <video
                  src={category.imgSrc}
                  className="absolute top-0 left-0 w-full h-full object-cover group-hover:blur-sm"
                  autoPlay
                  loop
                  muted
                />
              ) : (
                <img
                  src={category.imgSrc}
                  alt={category.alt}
                  className="w-full h-auto rounded-lg shadow-lg group-hover:blur-sm"
                />
              )}
            </div>
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
