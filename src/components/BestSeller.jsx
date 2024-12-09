import React, { useContext, useEffect, useState } from "react";
import { ProductItem, Title } from "../components";
import { shopContext } from "../context/ShopContext";

const BestSeller = () => {
  const { products } = useContext(shopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestSellerProducts = products.filter(
      (item) => item.bestseller === true
    );
    setBestSeller(bestSellerProducts);
    console.log(bestSellerProducts);
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Checkout our TOP best seller products here, hope you like it and find
          your best fit
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6">
        {bestSeller.map((item, idx) => (
          <ProductItem
            key={idx}
            id={item._id}
            img={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
