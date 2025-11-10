// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { shopDataContext } from "../../../../context/ShopContext";
// import Title from "../../common/Title";
// import CartTotal from "./CartTotal";

// function Cart() {
//   const { products, currency, cartItem, updateQuantity } =
//     useContext(shopDataContext);
//   const [cartData, setCartData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const tempData = [];
//     for (const items in cartItem) {
//       for (const item in cartItem[items]) {
//         if (cartItem[items][item] > 0) {
//           tempData.push({
//             _id: items,
//             size: item,
//             quantity: cartItem[items][item],
//           });
//         }
//       }
//     }
//     setCartData(tempData);
//   }, [cartItem]);
//   return (
//     <div className="w-[99vw] min-h-[100vh] p-[20px] overflow-hidden bg-gradient-to-l from-[#141414] to-[#0c2025] ">
//       <div className="h-[8%] w-[100%] text-center mt-[80px]">
//         <Title text1={"YOUR"} text2={"CART"} />
//       </div>

//       <div className="w-[100%] h-[92%] flex flex-wrap gap-[20px]">
//         {cartData.map((item, index) => {
//           const productData = products.find(
//             (product) => product._id === item._id
//           );

//           return (
//             <div key={index} className="w-[100%] h-[10%] border-t border-b  ">
//               <div className="w-[100%] h-[80%] flex items-start gap-6 bg-[#51808048]  py-[10px] px-[20px] rounded-2xl relative ">
//                 <img
//                   className="w-[100px] h-[100px] rounded-md "
//                   src={productData.image1}
//                   alt=""
//                 />
//                 <div className="flex items-start justify-center flex-col gap-[10px]">
//                   <p className="md:text-[25px] text-[20px] text-[#f3f9fc]">
//                     {productData.name}
//                   </p>
//                   <div className="flex items-center   gap-[20px]">
//                     <p className="text-[20px] text-[#aaf4e7]">
//                       {currency} {productData.price}
//                     </p>
//                     <p
//                       className="w-[40px] h-[40px] text-[16px] text-[white]
//                       bg-[#518080b4] rounded-md mt-[5px] flex items-center justify-center border-[1px] border-[#9ff9f9]"
//                     >
//                       {item.size}
//                     </p>
//                   </div>
//                 </div>
//                 <input
//                   type="number"
//                   min={1}
//                   defaultValue={item.quantity}
//                   className=" md:max-w-20 max-w-10 md:px-2 md:py-2 py-[5px] px-[10px] text-[white] text-[18px] font-semibold bg-[#518080b4] absolute md:top-[40%] top-[46%] left-[75%] md:left-[50%] border-[1px] border-[#9ff9f9] rounded-md "
//                   onChange={(e) =>
//                     e.target.value === " " || e.target.value === "0"
//                       ? null
//                       : updateQuantity(
//                           item._id,
//                           item.size,
//                           Number(e.target.value)
//                         )
//                   }
//                 />

//                 <RiDeleteBin6Line
//                   className="text-[#9ff9f9] w-[25px] h-[25px] absolute top-[50%] md:top-[40%] md:right-[5%] right-1"
//                   onClick={() => updateQuantity(item._id, item.size, 0)}
//                 />
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <div className="flex justify-start items-end my-20">
//         <div className="w-full sm:w-[450px]">
//           <CartTotal />
//           <button
//             className="text-[18px] hover:bg-slate-500 cursor-pointer bg-[#51808048] py-[10px] px-[50px] rounded-2xl text-white flex items-center justify-center gap-[20px]  border-[1px] border-[#80808049] ml-[30px] mt-[20px]"
//             onClick={() => {
//               if (cartData.length > 0) {
//                 navigate("/placeorder");
//               } else {
//                 console.log("Your cart is empty!");
//               }
//             }}
//           >
//             PROCEED TO CHECKOUT
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { shopDataContext } from "../../../../context/ShopContext";
import Title from "../../common/Title";
import CartTotal from "./CartTotal";

function Cart() {
  const { products, currency, cartItem, updateQuantity } =
    useContext(shopDataContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItem]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] px-4 sm:px-6 md:px-10 pt-24 pb-16">
      {/* Title */}
      <div className="text-center mb-10">
        <Title text1="YOUR" text2="CART" />
      </div>

      {/* Empty Cart */}
      {cartData.length === 0 && (
        <div className="w-full text-center text-white text-[18px] sm:text-[20px] font-medium">
          Your cart is empty 🛒
        </div>
      )}

      {/* Cart Items */}
      <div className="flex flex-col gap-6">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          if (!productData) return null;

          return (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-between gap-5 p-5 rounded-xl bg-[#ffffff0f] border border-[#ffffff25] backdrop-blur-sm hover:bg-[#ffffff1a] transition-all duration-300"
            >
              {/* Product Image */}
              <div className="flex-shrink-0">
                <img
                  src={productData.image1}
                  alt={productData.name}
                  className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] rounded-lg object-cover shadow-md"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col sm:flex-row items-center sm:items-start justify-between w-full sm:gap-10 gap-3 text-white">
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
                  <p className="text-[18px] sm:text-[22px] font-semibold text-[#e3f9ff]">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="text-[16px] sm:text-[18px] text-[#aaf4e7] font-medium">
                      {currency} {productData.price}
                    </p>
                    <p className="text-[14px] sm:text-[16px] text-white bg-[#518080b4] rounded-md border border-[#9ff9f9] px-3 py-1">
                      {item.size}
                    </p>
                  </div>
                </div>

                {/* Quantity Input */}
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                    className="w-[60px] sm:w-[70px] text-center text-[16px] font-semibold text-white bg-[#518080b4] border border-[#9ff9f9] rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-[#9ff9f9]/50"
                    onChange={(e) =>
                      e.target.value === " " || e.target.value === "0"
                        ? null
                        : updateQuantity(
                            item._id,
                            item.size,
                            Number(e.target.value)
                          )
                    }
                  />

                  {/* Delete Icon */}
                  <RiDeleteBin6Line
                    className="text-[#9ff9f9] w-[24px] h-[24px] cursor-pointer hover:scale-110 transition-transform duration-200"
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart Total + Checkout */}
      {cartData.length > 0 && (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-10 mt-12">
          <div className="w-full sm:w-[400px]">
            <CartTotal />
          </div>
          <button
            className="bg-[#5180807a] hover:bg-[#5ea6a6c4] text-white text-[16px] sm:text-[18px] font-medium py-3 px-10 rounded-2xl border border-[#80808049] transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={() => navigate("/placeorder")}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
