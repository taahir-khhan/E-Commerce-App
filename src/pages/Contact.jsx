import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NewsLetterBox, Title } from "../components";

const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-10 pb-5 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div
        className="flex flex-col md:flex-row items-center
       justify-center gap-10 mb-10"
      >
        <img
          className="w-full max-w-[450px]"
          src={assets.contact_img}
          alt="contact-us-image"
        />

        <div className="flex flex-col gap-2 text-gray-500 max-w-[450px]">
          <b className="text-gray-800">Our Store</b>

          <address className="not-italic py-4">
            At-Bhandaghar, Post-Rasulpur, <br /> Kakatpur, Puri, 752119
          </address>

          <div>
            Tel: 781404-939139-272
            <br />
            Email: tahir@tahir.com
          </div>

          <b className="text-gray-800 py-2">Careers At Forever</b>

          <p className="py-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
            alias.
          </p>

          <button className="border border-black w-1/2  px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default Contact;
