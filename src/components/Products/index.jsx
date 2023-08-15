import React, { useEffect, useState } from "react";
import API from "../../server/api";
import MultiCards from "../UI/Cards/MultiCards";

const index = () => {
  const [product, setProduct] = useState([]);

  function getProducts() {
    API.getProduct()
      .then((response) => {
        setProduct(response.data.splice(5));
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-[24px] leading-[32px] tracking-[-0.2px] mb-6">
        Recommended items
      </h1>
      <div className="grid grid-cols-5 gap-5">
        {product.length &&
          product.map((el, index) => {
            return <MultiCards key={index} state={el} />;
          })}
      </div>
    </div>
  );
};

export default index;
