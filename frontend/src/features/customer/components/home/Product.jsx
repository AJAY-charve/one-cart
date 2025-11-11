import React from "react";
import LatestCollection from "./LatestCollection";
import BestSeller from "./BestSeller";

const Product = () => {
  return (
    <div className="flex items-center justify-center flex-col py-[20px]">
      <div className="flex items-center justify-center gap-[10px] flex-col">
        <LatestCollection />
      </div>
      <div className=" flex items-center justify-center gap-[10px] flex-col">
        <BestSeller />
      </div>
    </div>
  );
};

export default Product;
