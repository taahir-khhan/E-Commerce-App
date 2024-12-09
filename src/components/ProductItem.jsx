import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { shopContext } from "../context/ShopContext";

const ProductItem = ({ id, img, name, price }) => {
  const { currency } = useContext(shopContext);
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={img[0]}
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
