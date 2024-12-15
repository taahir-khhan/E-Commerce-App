import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { RelatedProducts } from "../components";
import { shopContext } from "../context/ShopContext";

const Product = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const { products, currency, addToCart } = useContext(shopContext);
  const [image, setImage] = useState(null);
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    setLoading(true); // Start loading
    setTimeout(() => {
      const selectedProduct = products.find((item) => item._id === productId);
      if (selectedProduct) {
        setProductData(selectedProduct);
        setImage(selectedProduct.image[0]);
      }
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return loading ? (
    <div className="flex items-center justify-center min-h-[30vh] sm:min-h-[80vh]">
      <p className="text-lg font-medium">Loading...</p>
    </div>
  ) : productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* ----------- Product Data ----------- */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* ----------- Product Images ----------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex flex-row gap-1 sm:flex-col overflow-x-hidden  justify-between sm:justify-normal w-full sm:w-[18.7%]">
            {productData.image.map((item, idx) => (
              <img
                src={item}
                key={idx}
                className="w-[24%] sm:w-full sm:mb-2 flex-shrink-0 cursor-pointer"
                alt=""
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>

        {/* ----------- Product Details ----------- */}
        <div className="flex-1">
          <h1 className="text-2xl font-medium mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 8" />
            <img src={assets.star_icon} alt="" className="w-3 8" />
            <img src={assets.star_icon} alt="" className="w-3 8" />
            <img src={assets.star_icon} alt="" className="w-3 8" />
            <img src={assets.star_dull_icon} alt="" className="w-3 8" />
            <p className="pl-2">(102)</p>
          </div>
          <p className="text-3xl font-medium mt-5">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className="font-medium">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSize(item)}
                  className={`bg-gray-200 px-4 py-2 box-border ${
                    item === size ? "border-black border-2" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="px-8 py-3 bg-black text-white text-sm active:bg-gray-500 transition-colors duration-300 ease-in-out"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-gray-500 mt-5 flex flex-col gap-1 ">
            <p>100% Original Product.</p>
            <p>Cash on Delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 Days</p>
          </div>
        </div>
      </div>

      {/* ----------- Description and review section ----------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border border-r-0 border-black px-6 py-3 text-sm">
            Description
          </b>
          <p className="border border-black px-6 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col px-6 py-6 border border-black gap-4 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
            porro distinctio voluptas numquam tenetur aut illo animi aliquam
            maiores perspiciatis est veritatis consectetur quaerat, nobis neque
            magni expedita, quos corporis eligendi? Earum tempora nobis minima
            eaque optio soluta nostrum maiores animi at veniam praesentium
            magni, porro quam fuga magnam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Asperiores, error.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            provident fugiat a sint? Velit repellat atque explicabo cum
            doloribus eos ipsum animi, dolores est aut. Sequi excepturi eveniet
            saepe placeat.
          </p>
        </div>
      </div>

      {/* ----------- display related Products ----------- */}
      <div>
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
