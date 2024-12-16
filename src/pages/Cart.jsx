import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { CartTotal, Title } from "../components";
import { shopContext } from "../context/ShopContext";

const Cart = () => {
  const {
    products,
    cartItems,
    currency,
    updateQuantity,
    navigate,
    cartData,
    setCartData,
  } = useContext(shopContext);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-10">
      <div className="text-2xl md:text-3xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      {cartData.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-6 h-[35vh]">
          <p className="text-2xl text-gray-600">Your Cart is Empty</p>
          <button
            onClick={() => navigate("/collection")}
            className="border bg-black text-white px-6 py-3 text-sm"
          >
            Shop Here
          </button>
        </div>
      )}

      <div>
        {cartData.map((item, idx) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={idx}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-[150px]"
                  src={productData.image[0]}
                  alt=""
                />
                <div>
                  <p className="text-sm sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <p className="mt-2 font-bold">
                    {currency}
                    {productData.price}
                  </p>
                  <p className="mt-2">
                    Size: <span className="pl-2 font-bold">{item.size}</span>
                  </p>
                </div>
              </div>
              <input
                className="border border-black max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                defaultValue={item.quantity}
                onChange={(e) =>
                  updateQuantity(item._id, item.size, Number(e.target.value))
                }
              />
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
      </div>

      {cartData.length > 0 && (
        <div className="flex justify-end">
          <div className="w-full sm:w-[400px]">
            <CartTotal />
            <div className="w-full text-end">
              <button
                onClick={() => navigate("/place-order")}
                className="bg-black text-white text-sm my-8 px-8 py-3"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
