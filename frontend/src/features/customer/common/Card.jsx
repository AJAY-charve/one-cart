// import React, { useContext } from "react";
// import { shopDataContext } from "../../../context/ShopContext";
// import { useNavigate } from "react-router-dom";

// const Card = ({ name, image, id, price }) => {
//   let { currency } = useContext(shopDataContext);
//   let navigate = useNavigate();
//   return (
//     <div
//       className="w-[300px] max-w-[90%] h-[400px] bg-[#ffffff0a] backdrop:blur-lg rounded-lg
//     hover:scale-[102%] flex items-start justify-start flex-col p-[10%]
//     cursor-pointer border-[1px] border-[#80808049]"
//       onClick={() => navigate(`/productdetail/${id}`)}
//     >
//       <img
//         src={image}
//         alt=""
//         className="w-[100%] h-[100%] h-[80%] rounded-sm object-cover"
//       />
//       <div className="text-[#c3f6fa] text-[18px] py-[10px]">{name}</div>
//       <div className="text-[#c3f6fa] text-[14px] ">
//         {currency}
//         {price}
//       </div>
//     </div>
//   );
// };

// export default Card;

import React, { useContext } from "react";
import { shopDataContext } from "../../../context/ShopContext";
import { useNavigate } from "react-router-dom";

const Card = ({ name, image, id, price }) => {
  const { currency } = useContext(shopDataContext);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/productdetail/${id}`)}
      className="group relative w-[280px] max-w-[90%] bg-white/10 border border-white/20 rounded-2xl 
      backdrop-blur-md shadow-lg overflow-hidden cursor-pointer transition-all duration-300 
      hover:scale-105 hover:shadow-2xl"
    >
      {/* Product Image */}
      <div className="w-full h-64 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-white/90 truncate">{name}</h3>
        <p className="text-sm text-white/70">
          {currency}
          {price}
        </p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default Card;
