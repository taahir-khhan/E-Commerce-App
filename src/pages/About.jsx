import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NewsLetterBox, Title } from "../components";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center border-t pt-8">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col items-center justify-center md:flex-row gap-16">
        <img
          className="w-full max-w-[450px]"
          src={assets.about_img}
          alt="about-image"
        />
        <div className="flex flex-col  justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            inventore hic eaque praesentium ut incidunt aliquid deserunt fugit!
            Recusandae veritatis aspernatur quod. Placeat laborum atque ipsa
            aliquid eaque architecto repellat repudiandae dolores esse? Dicta et
            illo doloremque aliquam incidunt atque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit
            a consequatur nesciunt harum deserunt omnis earum quaerat beatae
            repudiandae reprehenderit cupiditate, mollitia iusto libero modi
            aperiam vero cum deleniti?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
            numquam? Laudantium minus suscipit reprehenderit odio aspernatur
            cupiditate nam harum magni?
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance: </b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            aspernatur harum dolorem velit dignissimos deserunt temporibus
            neque, debitis autem ab.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinience: </b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            aspernatur harum dolorem velit dignissimos deserunt temporibus
            neque, debitis autem ab.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional customer Service: </b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            aspernatur harum dolorem velit dignissimos deserunt temporibus
            neque, debitis autem ab.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
