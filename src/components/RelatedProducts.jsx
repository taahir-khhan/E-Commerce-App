import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContext";
import { ProductItem, Title } from "./index";

const RelatedProducts = ({ category, subCategory }) => {
  const [relatedProduct, setRelatedProduct] = useState([]);
  const { products } = useContext(shopContext);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();
      productCopy = productCopy.filter((item) => item.category === category);
      productCopy = productCopy.filter(
        (item) => item.subCategory === subCategory
      );
      setRelatedProduct(productCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-20">
      <div className="text-4xl text-center my-5">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {relatedProduct.map((item) => (
          <ProductItem
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

export default RelatedProducts;
