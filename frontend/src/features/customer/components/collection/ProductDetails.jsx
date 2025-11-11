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
    <div className=" text-white min-h-screen w-full pt-[80px]">
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
