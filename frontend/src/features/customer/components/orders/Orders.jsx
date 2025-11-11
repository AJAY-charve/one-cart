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
