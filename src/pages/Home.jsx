import React from "react";
import {
  BestSeller,
  Footer,
  Hero,
  LatestCollection,
  NewsLetterBox,
  OurPolicy,
} from "../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
