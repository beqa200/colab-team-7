import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { stack as Menu } from "react-burger-menu"; // Use bubble type menu
import "./NavBar.css"; // Import styles for react-burger-menu
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuToggle = (state: { isOpen: boolean }) => {
    setIsOpen(state.isOpen);
  };

  return (
    <>
      <nav className="p-4 ">
        <div className="container mx-auto flex justify-between items-center ">
          <Link to={"/"}>
            <div className="text-black text-lg">CREATIVE</div>
          </Link>
          <ul className="flex space-x-4 ">
            <li className="pt-2">
              <a href="#" className="text-white">
                <img src="/icons8-search-50.png" alt="" className="w-[26px]" />
              </a>
            </li>
            <li className="pt-2">
              <a href="#" className="text-white">
                <img src="/icons8-shopping-trolley-64.png" alt="" className="w-[26px]" />
              </a>
            </li>
            <li className=" pt-2">
              <a href="#" className="text-white">
                <img src="/icons8-user-32.png" alt="" className="w-[26px]" />
              </a>
            </li>
            <li className="">
              <a href="#">
                <Hamburger
                  label="Show menu"
                  toggled={isOpen}
                  toggle={setIsOpen}
                  size={30}
                  direction="right"
                  distance="lg"
                  onToggle={(toggled) => {
                    setIsOpen(toggled);
                  }}
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Menu right isOpen={isOpen} onStateChange={handleMenuToggle}>
        <a id="shop" className="menu-item" href="/shop">
          Shop
        </a>
        <a id="ai" className="menu-item" href="/ai">
          AI
        </a>
        <a id="mobile" className="menu-item" href="/mobile">
          Mobile
        </a>
        <a id="tv-audio" className="menu-item" href="/tv-audio">
          TV & Audio
        </a>
        <a id="appliances" className="menu-item" href="/appliances">
          Appliances
        </a>
        <a id="computing" className="menu-item" href="/computing">
          Computing
        </a>
        <a id="displays" className="menu-item" href="/displays">
          Displays
        </a>
        <a id="accessories" className="menu-item" href="/accessories">
          Accessories
        </a>
        <a id="smartthings" className="menu-item" href="/smartthings">
          SmartThings
        </a>
      </Menu>
    </>
  );
};

export default NavBar;
