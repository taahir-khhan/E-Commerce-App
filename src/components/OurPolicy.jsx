import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-12 sm:gap-2 justify-around text-center py-10">
      <div>
        <img
          className="w-12 m-auto mb-5"
          src={assets.exchange_icon}
          alt="exchange-icon"
        />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>

      <div>
        <img
          className="w-12 m-auto mb-5"
          src={assets.quality_icon}
          alt="exchange-icon"
        />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provie 7 days free return policy</p>
      </div>

      <div>
        <img
          className="w-12 m-auto mb-5"
          src={assets.support_img}
          alt="exchange-icon"
        />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
