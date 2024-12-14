import React, { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(shopContext);

  return (
    <div className="w-full my-5">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal: </p>
          <p className="font-bold">
            {currency}
            {getCartAmount()}.00
          </p>
        </div>
        <div className="flex justify-between">
          <p>Shipping fee: </p>
          <p className="font-bold">
            {currency}
            {delivery_fee}.00
          </p>
        </div>
        <div className="h-[1px] bg-gray-800"></div>
        <div className="flex justify-between font-bold">
          <p>Total</p>
          <p>
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
