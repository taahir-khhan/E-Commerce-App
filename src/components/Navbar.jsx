import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img
          className="w-[180px] sm:w-[250px]"
          src={assets.logo}
          alt="page-logo"
        />
      </Link>

      <ul className="hidden lg:flex gap-5  text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden transition-all duration-300" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden transition-all duration-300" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden transition-all duration-300" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden transition-all duration-300" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          className="w-5 cursor-pointer"
          src={assets.search_icon}
          alt="search-icon"
        />

        <div className="group relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt="profile-icon"
          />
          <div className="hidden group-hover:block absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-600 rounded">
              <p className="cursor-pointer hover:text-gray-900">My Profile</p>
              <p className="cursor-pointer hover:text-gray-900">Orders</p>
              <p className="cursor-pointer hover:text-gray-900">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.cart_icon}
            alt="cart-icon"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>

        <img
          className="w-5 cursor-pointer block lg:hidden"
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu-icon-for-mobile"
        />
      </div>

      {/* Side-bar menu for small screen */}

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all border-l-2 ${
          visible ? "w-full sm:w-[65%]" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt="back-icon"
            />
            <p>Back</p>
          </div>

          <NavLink
            to="/"
            onClick={() => setVisible(false)}
            className="py-2 border-b-2 border-t-2 pl-10"
          >
            HOME
          </NavLink>

          <NavLink
            to="/collection"
            onClick={() => setVisible(false)}
            className="py-2 border-b-2 pl-10"
          >
            COLLECTION
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setVisible(false)}
            className="py-2 border-b-2 pl-10"
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setVisible(false)}
            className="py-2 border-b-2 pl-10"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
