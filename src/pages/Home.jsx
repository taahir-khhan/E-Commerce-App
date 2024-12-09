import React from "react";
import { BestSeller, Hero, LatestCollection } from "../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
    </div>
  );
};

export default Home;
