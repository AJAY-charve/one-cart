// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { shopDataContext } from "../../../../context/ShopContext";
// import { authDataContext } from "../../../../context/authContext";
// import Title from "../../common/Title";

// function Order() {
//   let [orderData, setOrderData] = useState([]);
//   let { currency } = useContext(shopDataContext);
//   let { serverUrl } = useContext(authDataContext);

//   console.log("orderdata", orderData);

//   const loadOrderData = async () => {
//     try {
//       const result = await axios.post(
//         serverUrl + "/api/order/userorder",
//         {},
//         { withCredentials: true }
//       );
//       if (result.data) {
//         let allOrdersItem = [];
//         result.data.map((order) => {
//           order.items.map((item) => {
//             item["status"] = order.status;
//             item["payment"] = order.payment;
//             item["paymentMethod"] = order.paymentMethod;
//             item["date"] = order.date;
//             allOrdersItem.push(item);
//           });
//         });
//         setOrderData(allOrdersItem.reverse());
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     loadOrderData();
//   }, []);

//   return (
//     <div className="w-[99vw] min-h-[100vh] p-[20px] pb-[150px]  overflow-hidden bg-gradient-to-l from-[#141414] to-[#0c2025] ">
//       <div className="h-[8%] w-[100%] text-center mt-[80px]">
//         <Title text1={"MY"} text2={"ORDER"} />
//       </div>
//       <div className=" w-[100%] h-[92%] flex flex-wrap gap-[20px]">
//         {orderData.map((item, index) => (
//           <div key={index} className="w-[100%] h-[10%] border-t border-b ">
//             <div className="w-[100%] h-[80%] flex items-start gap-6 bg-[#51808048]  py-[10px] px-[20px] rounded-2xl relative ">
//               <img
//                 src={item.image1}
//                 alt=""
//                 className="w-[130px] h-[130px] rounded-md "
//               />
//               <div className="flex items-start justify-center flex-col gap-[5px]">
//                 <p className="md:text-[25px] text-[20px] text-[#f3f9fc]">
//                   {item.name}
//                 </p>
//                 <div className="flex items-center gap-[8px]   md:gap-[20px]">
//                   <p className="md:text-[18px] text-[12px] text-[#aaf4e7]">
//                     {currency} {item.price}
//                   </p>
//                   <p className="md:text-[18px] text-[12px] text-[#aaf4e7]">
//                     Quantity: {item.quantity}
//                   </p>
//                   <p className="md:text-[18px] text-[12px] text-[#aaf4e7]">
//                     Size: {item.size}
//                   </p>
//                 </div>
//                 <div className="flex items-center">
//                   <p className="md:text-[18px] text-[12px] text-[#aaf4e7]">
//                     Date:{" "}
//                     <span className="text-[#e4fbff] pl-[10px] md:text-[16px] text-[11px]">
//                       {new Date(item.date).toDateString()}
//                     </span>
//                   </p>
//                 </div>
//                 <div className="flex items-center">
//                   <p className="md:text-[16px] text-[12px] text-[#aaf4e7]">
//                     Payment Method :{item.paymentMethod}
//                   </p>
//                 </div>
//                 <div className="absolute md:left-[55%] md:top-[40%] right-[2%] top-[2%]  ">
//                   <div className="flex items-center gap-[5px]">
//                     <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
//                     <p className="md:text-[17px] text-[10px] text-[#f3f9fc]">
//                       {item.status}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="absolute md:right-[5%] right-[1%] md:top-[40%] top-[70%]">
//                   <button
//                     className="md:px-[15px] px-[5px] py-[3px] md:py-[7px] rounded-md bg-[#101919] text-[#f3f9fc] text-[12px] md:text-[16px] cursor-pointe active:bg-slate-500"
//                     onClick={loadOrderData}
//                   >
//                     Track Order
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Order;

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { shopDataContext } from "../../../../context/ShopContext";
import { authDataContext } from "../../../../context/AuthContext";
import Title from "../../common/Title";

function Order() {
  const [orderData, setOrderData] = useState([]);
  const { currency } = useContext(shopDataContext);
  const { serverUrl } = useContext(authDataContext);

  const loadOrderData = async () => {
    try {
      const result = await axios.post(
        `${serverUrl}/api/order/userorder`,
        {},
        { withCredentials: true }
      );
      if (result.data) {
        let allOrdersItem = [];
        result.data.forEach((order) => {
          order.items.forEach((item) => {
            item.status = order.status;
            item.payment = order.payment;
            item.paymentMethod = order.paymentMethod;
            item.date = order.date;
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] px-4 sm:px-8 md:px-12 pt-24 pb-24">
      {/* ====== Title ====== */}
      <div className="text-center mb-10">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {/* ====== Empty Orders ====== */}
      {orderData.length === 0 && (
        <div className="text-center text-white text-[18px] sm:text-[20px] font-medium mt-10">
          You haven't placed any orders yet 🛍️
        </div>
      )}

      {/* ====== Orders List ====== */}
      <div className="flex flex-col gap-6">
        {orderData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-[#ffffff0f] border border-[#ffffff25] rounded-xl p-5 sm:p-6 backdrop-blur-sm hover:bg-[#ffffff1a] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {/* Image */}
            <img
              src={item.image1}
              alt={item.name}
              className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] rounded-lg object-cover shadow-md"
            />

            {/* Details */}
            <div className="flex-1 w-full flex flex-col gap-2 text-white text-[14px] sm:text-[16px]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <p className="text-[18px] sm:text-[22px] font-semibold text-[#e3f9ff]">
                  {item.name}
                </p>

                {/* Status */}
                <div className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      item.status?.toLowerCase().includes("cancel")
                        ? "bg-red-500"
                        : item.status?.toLowerCase().includes("delivered")
                        ? "bg-green-500"
                        : "bg-yellow-400"
                    }`}
                  ></span>
                  <p className="text-[#dffbff] text-[13px] sm:text-[15px]">
                    {item.status}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-[#aaf4e7]">
                <p>
                  <span className="text-[#bff1f9]">Price:</span> {currency}{" "}
                  {item.price}
                </p>
                <p>
                  <span className="text-[#bff1f9]">Qty:</span> {item.quantity}
                </p>
                <p>
                  <span className="text-[#bff1f9]">Size:</span> {item.size}
                </p>
              </div>

              <div className="text-[#aaf4e7] flex flex-col sm:flex-row sm:items-center gap-2">
                <p>
                  <span className="text-[#bff1f9]">Date:</span>{" "}
                  {new Date(item.date).toDateString()}
                </p>
                <p>
                  <span className="text-[#bff1f9]">Payment:</span>{" "}
                  {item.paymentMethod}
                </p>
              </div>

              {/* Button */}
              <div className="flex justify-start sm:justify-end mt-2">
                <button
                  onClick={loadOrderData}
                  className="bg-[#5180807a] hover:bg-[#5ea6a6c4] border border-[#80808049] text-white text-[13px] sm:text-[15px] font-medium py-2 px-5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
