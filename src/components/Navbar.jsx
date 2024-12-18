import React from "react";
import { HiShoppingCart } from "react-icons/hi2";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <header className="py-6 mx-10 bg-white">
        <nav className="flex flex-row justify-between items-center">
          <div className="logo basis-2/6 text-center text-xl font-semibold cursor-pointer">
            HN-Coffee.
          </div>

          <ul className="hidden basis-3/6 lg:flex lg:items-center lg:justify-end lg:gap-x-8 uppercase text-sm text-gray-500 font-medium">
            <li className="top-menu-item">
              <a href="#">Home</a>
            </li>
            <li className="top-menu-item">
              <a href="#">Our products</a>
            </li>

            <li className="top-menu-item">
              <a href="#">About</a>
            </li>
            <li className="top-menu-item">
              <a href="#">Contact</a>
            </li>
            <li className="top-menu-item">
              <a href="#">StyleGuide</a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>

          <ul className="flex cart basis-3/6 lg:basis-1/6 justify-end lg:justify-start items-center ml-16 uppercase text-sm text-gray-500 font-medium">
            <li className="">
              <a
                href="#"
                className="flex flex-row space-x-2 items-center hover:text-gray-800"
              >
                <HiShoppingCart className="ct-page-icons" />
                <span>Cart</span>
                <span className="ct-badge bg-yellow-300">10</span>
              </a>
            </li>
          </ul>

          <div className="basis-1/6 ct-page-icons cursor-pointer lg:hidden flex items-center px-2 sm:px-4">
            <IoMdMenu id="toggle-top-menu" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
