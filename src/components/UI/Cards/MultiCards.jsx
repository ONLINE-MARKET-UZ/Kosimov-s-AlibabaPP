import React from "react";

const MultiCards = ({ state: { title, image, price } }) => {
  return (
    <div className="card w-[220px] py-[10px] px-[15px] border border-[#E0E0E0] rounded-md">
      <img className="w-full h-[170px] object-contain" src={image} alt="#" />
      <div className="card-body">
        <h2 className="text-[16px] leading-[22px]">${price}</h2>
        <p className="text-[#8B96A5] leading-[24px] tracking-think ">{title.slice(0, 20)}...</p>
      </div>
    </div>
  );
};

export default MultiCards;
