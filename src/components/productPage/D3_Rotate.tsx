import React from "react";
import "./D3_Rotate.css";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="">
      <div className="left  mt-8">
        <h1>razer viper</h1>
        <img src="/assetsForProductPage/3dRotate/2.png" alt="CSS Only" />
      </div>
      <div className="author">
        <h3>Top Product</h3>
        <div>
          <p>`</p>
          <p>of the day</p>
        </div>
        <div></div>
        <img src="/assetsForProductPage/3dRotate/code.png" alt="Code By Lun Dev" />
      </div>
    </header>
  );
};

const Banner: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/product/10");
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100); // Adjust the delay if needed
  };

  return (
    <div className="banner  border pt-10 mt-10 " onClick={handleClick}>
      <div className="product hover:cursor-pointer">
        <div className="soda" style={{ "--url": "url(/images/razer-viper-mini-png.png)" } as React.CSSProperties}></div>
        <div className="soda" style={{ "--url": "url(/images/razer-viper-mini-png.png)" } as React.CSSProperties}></div>
      </div>

      <div className="rock">
        <img src="/assetsForProductPage/3dRotate/rock1.png" alt="Rock 1" />
        <img src="/assetsForProductPage/3dRotate/rock2.png" alt="Rock 2" />
        <img src="/assetsForProductPage/3dRotate/rock3.png" alt="Rock 3" />
      </div>
    </div>
  );
};

const d3Rotate: React.FC = () => {
  return (
    <div className="D3_Rotate border">
      <Header />
      <Banner />
    </div>
  );
};

export default d3Rotate;
