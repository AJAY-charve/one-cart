// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { FaStar } from "react-icons/fa";
// import { FaStarHalfAlt } from "react-icons/fa";
// import { shopDataContext } from "../../../../context/ShopContext";
// import RelatedProduct from "./RelatedProduct";
// // import Loading from "../component/Loading";

// function ProductDetail() {
//   let { productId } = useParams();
//   let {
//     products,
//     currency,
//     //  addtoCart,
//     //   loading
//     cartItem,
//     addtoCart,
//     getCartCount,
//     setCartItem,
//   } = useContext(shopDataContext);
//   let [productData, setProductData] = useState(false);

//   const [image, setImage] = useState("");
//   const [image1, setImage1] = useState("");
//   const [image2, setImage2] = useState("");
//   const [image3, setImage3] = useState("");
//   const [image4, setImage4] = useState("");
//   const [size, setSize] = useState("");

//   const fetchProductData = async () => {
//     products.map((item) => {
//       if (item._id === productId) {
//         setProductData(item);
//         console.log(productData);
//         setImage1(item.image1);
//         setImage2(item.image2);
//         setImage3(item.image3);
//         setImage4(item.image4);
//         setImage(item.image1);

//         return null;
//       }
//     });
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]);
//   return productData ? (
//     <div>
//       <div className=" w-[99vw] h-[130vh] md:h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-start flex-col lg:flex-row gap-[20px]">
//         <div className="lg:w-[50vw] md:w-[90vw] lg:h-[90vh] h-[50vh] mt-[70px] flex items-center justify-center md:gap-[10px] gap-[30px] flex-col-reverse lg:flex-row">
//           <div className="lg:w-[20%] md:w-[80%] h-[10%] lg:h-[80%] flex items-center justify-center gap-[50px] lg:gap-[20px] lg:flex-col flex-wrap ">
//             <div className="md:w-[100px]  w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md">
//               <img
//                 src={image1}
//                 alt=""
//                 className="w-[100%] h-[100%]  cursor-pointer rounded-md"
//                 onClick={() => setImage(image1)}
//               />
//             </div>
//             <div className="md:w-[100px]  w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md">
//               <img
//                 src={image2}
//                 alt=""
//                 className="w-[100%] h-[100%]  cursor-pointer rounded-md"
//                 onClick={() => setImage(image2)}
//               />
//             </div>
//             <div className="md:w-[100px]  w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md">
//               <img
//                 src={image3}
//                 alt=""
//                 className="w-[100%] h-[100%]  cursor-pointer rounded-md"
//                 onClick={() => setImage(image3)}
//               />
//             </div>
//             <div className="md:w-[100px]  w-[50px] h-[50px] md:h-[110px] bg-slate-300 border-[1px] border-[#80808049] rounded-md">
//               <img
//                 src={image4}
//                 alt=""
//                 className="w-[100%] h-[100%]  cursor-pointer rounded-md"
//                 onClick={() => setImage(image4)}
//               />
//             </div>
//           </div>
//           <div className="lg:w-[60%] w-[80%] lg:h-[78%] h-[70%] border-[1px] border-[#80808049] rounded-md  overflow-hidden">
//             <img
//               src={image}
//               alt=""
//               className=" w-[100%] lg:h-[100%] h-[100%] text-[30px] text-white  text-center rounded-md object-fill "
//             />
//           </div>
//         </div>

//         <div className="lg:w-[50vw] w-[100vw] lg:h-[75vh] h-[40vh] lg:mt-[80px] flex items-start justify-start flex-col py-[20px] px-[30px] md:pb-[20px] md:pl-[20px] lg:pl-[0px] lg:px-[0px] lg:py-[0px] gap-[10px]">
//           <h1 className="text-[40px] font-semibold text-[aliceblue]">
//             {productData.name.toUpperCase()}
//           </h1>
//           <div className="flex items-center gap-1 ">
//             <FaStar className="text-[20px] fill-[#FFD700]" />
//             <FaStar className="text-[20px] fill-[#FFD700]" />
//             <FaStar className="text-[20px] fill-[#FFD700]" />
//             <FaStar className="text-[20px] fill-[#FFD700]" />
//             <FaStarHalfAlt className="text-[20px] fill-[#FFD700]" />
//             <p className="text-[18px] font-semibold pl-[5px] text-[white]">
//               (124)
//             </p>
//           </div>
//           <p className="text-[30px] font-semibold pl-[5px] text-[white]">
//             {currency} {productData.price}
//           </p>

//           <p className=" w-[80%] md:w-[60%] text-[20px] font-semibold pl-[5px] text-[white]">
//             {productData.description} and Stylish, breathable cotton shirt with
//             a modern slim fit. Easy to wash, super comfortable, and designed for
//             effortless style.
//           </p>
//           <div className="flex flex-col gap-[10px] my-[10px] ">
//             <p className="text-[25px] font-semibold pl-[5px] text-[white]">
//               Select Size
//             </p>
//             <div className="flex gap-2">
//               {productData.sizes.map((item, index) => (
//                 <button
//                   key={index}
//                   className={`border py-2 px-4 bg-slate-300 rounded-md
//                   ${
//                     item === size ? "bg-black text-[#2f97f1] text-[20px]" : ""
//                   }`}
//                   onClick={() => setSize(item)}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//             <button
//               className="text-[16px] active:bg-slate-500 cursor-pointer bg-[#495b61c9] py-[10px] px-[20px] rounded-2xl mt-[10px] border-[1px] border-[#80808049] text-white shadow-md shadow-black"
//               onClick={() => addtoCart(productData._id, size)}
//             >
//               {/* {loading ? <Loading /> : "Add to Cart"} */}
//               Add to cart
//             </button>
//           </div>
//           <div className="w-[90%] h-[1px] bg-slate-700"></div>
//           <div className="w-[80%] text-[16px] text-white ">
//             <p>100% Original Product.</p>
//             <p>Cash on delivery is available on this product</p>
//             <p>East return and exchange policy within 7 days</p>
//           </div>
//         </div>
//       </div>

//       <div className="w-[100%] min-h-[70vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-start justify-start flex-col  overflow-x-hidden">
//         <div className="flex px-[20px] mt-[90px] lg:ml-[80px] ml-[0px]  lg:mt-[0px]  ">
//           <p className="border px-5 py-3 text-sm text-white">Description</p>
//           <p className="border px-5 py-3 text-sm text-white">Reviews (124)</p>
//         </div>

//         <div className="w-[80%] md:h-[150px] h-[220px] bg-[#3336397c] border text-white text-[13px] md:text-[15px] lg:text-[20px] px-[10px] md:px-[30px] lg:ml-[100px] ml-[20px]">
//           <p className="w-[95%] h-[90%] flex items-center justify-center ">
//             Upgrade your wardrobe with this stylish slim-fit cotton shirt,
//             available now on OneCart. Crafted from breathable, high-quality
//             fabric, it offers all-day comfort and effortless style. Easy to
//             maintain and perfect for any setting, this shirt is a must-have
//             essential for those who value both fashion and function.
//           </p>
//         </div>

//         <RelatedProduct
//           category={productData.category}
//           subCategory={productData.subCategory}
//           currentProductId={productData._id}
//         />
//       </div>
//     </div>
//   ) : (
//     <div className="opacity-0"></div>
//   );
// }

// export default ProductDetail;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { shopDataContext } from "../../../../context/ShopContext";
import RelatedProduct from "./RelatedProduct";

function ProductDetail() {
  const { productId } = useParams();
  const { products, currency, addtoCart } = useContext(shopDataContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image1);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!productData) return <div className="h-screen bg-slate-900"></div>;

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white min-h-screen w-full pt-[80px]">
      {/* MAIN SECTION */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-5 md:px-10 lg:px-16 pb-10">
        {/* LEFT IMAGES */}
        <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-1/2">
          {/* Thumbnail Gallery */}
          <div className="flex lg:flex-col gap-3 justify-center">
            {[
              productData.image1,
              productData.image2,
              productData.image3,
              productData.image4,
            ].map((img, i) => (
              <div
                key={i}
                className={`border rounded-lg cursor-pointer overflow-hidden w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] hover:ring-2 hover:ring-sky-400 ${
                  img === image ? "ring-2 ring-sky-400" : ""
                }`}
                onClick={() => setImage(img)}
              >
                <img
                  src={img}
                  alt={`thumb-${i}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 border rounded-xl overflow-hidden shadow-lg">
            <img
              src={image}
              alt={productData.name}
              className="w-full h-[400px] md:h-[500px] object-contain bg-slate-950"
            />
          </div>
        </div>

        {/* RIGHT PRODUCT INFO */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5 px-2">
          <h1 className="text-3xl md:text-4xl font-semibold">
            {productData.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStarHalfAlt className="text-yellow-400" />
            <span className="ml-2 text-gray-300 text-sm">(124 Reviews)</span>
          </div>

          {/* Price */}
          <p className="text-2xl font-semibold text-sky-400">
            {currency} {productData.price}
          </p>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            {productData.description ||
              "Premium quality, stylish and comfortable apparel designed for everyday wear. Perfect blend of fashion and comfort."}
          </p>

          {/* Size Selection */}
          <div className="mt-3">
            <p className="font-semibold mb-2 text-lg">Select Size</p>
            <div className="flex flex-wrap gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    item === size
                      ? "bg-sky-500 text-white border-sky-500"
                      : "bg-slate-700 border-slate-600 hover:bg-slate-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addtoCart(productData._id, size)}
            className="mt-5 bg-sky-500 hover:bg-sky-600 active:scale-[0.98] transition-all text-white font-medium px-6 py-3 rounded-xl shadow-md w-fit"
          >
            Add to Cart
          </button>

          {/* Product Info */}
          <div className="mt-6 text-gray-300 text-sm space-y-1">
            <p>✅ 100% Original Product</p>
            <p>💰 Cash on Delivery available</p>
            <p>🔁 Easy returns & exchange within 7 days</p>
          </div>
        </div>
      </div>

      {/* DESCRIPTION / REVIEWS */}
      <div className="border-t border-slate-700 mt-10 pt-10 px-5 md:px-10 lg:px-20">
        <div className="flex gap-5 mb-6">
          <button className="border-b-2 border-sky-400 pb-2 px-2 text-sky-400 font-medium">
            Description
          </button>
          <button className="text-gray-400 hover:text-white transition-all">
            Reviews (124)
          </button>
        </div>

        <div className="bg-slate-800 rounded-lg p-5 md:p-8 text-gray-300 text-sm md:text-base leading-relaxed shadow-inner">
          Upgrade your wardrobe with this stylish slim-fit cotton shirt,
          available now on{" "}
          <span className="text-sky-400 font-semibold">OneCart</span>. Crafted
          from breathable, high-quality fabric, it offers all-day comfort and
          effortless style. Easy to maintain and perfect for any setting, this
          shirt is a must-have essential for those who value both fashion and
          function.
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="mt-16 pb-10">
        <RelatedProduct
          category={productData.category}
          subCategory={productData.subCategory}
          currentProductId={productData._id}
        />
      </div>
    </div>
  );
}

export default ProductDetail;
