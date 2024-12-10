import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-15 sm:mt-30">
        <div>
          <img src={assets.logo} alt="page-logo" className="w-32 mb-5" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            iure sequi laudantium nisi iusto consequatur suscipit aut magnam qui
            aliquam, sed explicabo a accusamus repudiandae excepturi inventore
            deleniti esse atque!
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-3">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-3">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+ 36728 19379 193</li>
            <li>example@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="text-sm my-5 text-center">
          Copyright 2024 @forever.com - All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
