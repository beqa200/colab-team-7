import React from "react";
import "./Slider_3d.css"; // Import the CSS file for custom styles
import { useNavigate } from "react-router-dom";

const Slider3D: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div className="relative-3d ">
      <div className="banner-slider">
        <div className="slider " style={{ "--quantity": 9 } as React.CSSProperties}>
          <div className="item" style={{ "--position": 2 } as React.CSSProperties}>
            <img src="/assetsForProductPage/productImages/3watches.png" alt="watches" onClick={() => handleClick("/product/1")} />
          </div>
          <div className="item" style={{ "--position": 3 } as React.CSSProperties}>
            <img src="/assetsForProductPage/productImages/drone.png" alt="drone" onClick={() => handleClick("/product/2")} />
          </div>
          <div className="item" style={{ "--position": 4 } as React.CSSProperties}>
            <img src="/assetsForProductPage/productImages/earbuds.png" alt="earbuds" onClick={() => handleClick("/product/3")} />
          </div>
          <div className="item" style={{ "--position": 5 } as React.CSSProperties}>
            <img src="/assetsForProductPage/productImages/razer-viper-mini-png.png" alt="mouse" onClick={() => handleClick("/product/8")} />
          </div>
          <div className="item" style={{ "--position": 6 } as React.CSSProperties}>
            <img src="/assetsForProductPage/productImages/pcblk.png" alt="pc" onClick={() => handleClick("/product/10")} />
          </div>
          <div className="item" style={{ "--position": 7 } as React.CSSProperties}>
            <img src="/assetsForProductPage/productImages/aerox_5_wl_black_png.png" alt="mouse" onClick={() => handleClick("/product/9")} />
          </div>
          <div className="item" style={{ "--position": 8 } as React.CSSProperties}>
            <img src="/assetsForProductPage/productImages/screen.png" alt="screen" onClick={() => handleClick("/product/7")} />
          </div>
          <div className="item" style={{ "--position": 9 } as React.CSSProperties}>
            <img src="/assetsForProductPage/productImages/speaker.png" alt="speaker" onClick={() => handleClick("/product/4")} />
          </div>
          <div className="item" style={{ "--position": 10 } as React.CSSProperties}>
            <img src="/assetsForProductPage/productImages/NANOTECH_ASUS_PWD_2.png" alt="PC" onClick={() => handleClick("/product/6")} />
          </div>
        </div>
        <div className="content">
          <h1 data-content="CREATIVE">CREATIVE</h1>
          <div className="author">
            <h2>shopping</h2>
            <p>
              <b>Top Sellers</b>
            </p>
          </div>
          <div className="model"></div>
        </div>
      </div>
    </div>
  );
};

export default Slider3D;
