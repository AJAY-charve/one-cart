import React, { useContext, useEffect, useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { shopDataContext } from "../../../../context/ShopContext";
import Title from "../../common/Title";
import Card from "../../common/Card";

const Collection = () => {
  const [showFilter, setShowFilter] = useState(false);
  const { products, search, showSearch } = useContext(shopDataContext);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  // --- FILTER HANDLERS ---
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    );
  };

  // --- FILTER & SORT LOGIC ---
  const applyFilter = () => {
    let result = [...products];

    if (showSearch && search) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      result = result.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      result = result.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProduct(result);
  };

  const sortProduct = (type) => {
    let sorted = [...filterProduct];
    switch (type) {
      case "low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        applyFilter();
        return;
    }
    setFilterProduct(sorted);
  };

  useEffect(() => {
    sortProduct(sortType);
  }, [sortType]);

  useEffect(() => {
    setFilterProduct(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  return (
    <div className="w-full min-h-[90vh] flex flex-col md:flex-row pt-[80px] text-white">
      {/* FILTER SIDEBAR */}
      <div
        className={`md:w-[25vw] lg:w-[20vw] w-full transition-all duration-500 ease-in-out border-r border-slate-600 px-6 py-5 ${
          showFilter ? "h-auto" : "h-[60px]"
        } md:min-h-screen md:static fixed z-30 bg-slate-900 md:bg-transparent`}
      >
        {/* HEADER */}
        <div
          className="flex items-center justify-between cursor-pointer select-none"
          onClick={() => setShowFilter((prev) => !prev)}
        >
          <h2 className="text-2xl font-semibold tracking-wide">Filters</h2>
          <span className="md:hidden">
            {showFilter ? (
              <FaChevronDown className="text-lg" />
            ) : (
              <FaChevronRight className="text-lg" />
            )}
          </span>
        </div>

        {/* CATEGORY FILTER */}
        <div
          className={`mt-6 transition-all duration-500 ${
            showFilter
              ? "opacity-100"
              : "opacity-0 md:opacity-100 hidden md:block"
          }`}
        >
          <div className="bg-slate-700 p-4 rounded-lg mb-5 shadow-md">
            <p className="text-lg font-medium mb-3 border-b border-slate-500 pb-2">
              Categories
            </p>
            {["Men", "Women", "Kids"].map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-3 py-1 text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  value={cat}
                  onChange={toggleCategory}
                  className="accent-sky-400"
                />
                {cat}
              </label>
            ))}
          </div>

          <div className="bg-slate-700 p-4 rounded-lg shadow-md">
            <p className="text-lg font-medium mb-3 border-b border-slate-500 pb-2">
              Sub Categories
            </p>
            {["TopWear", "BottomWear", "WinterWear"].map((sub) => (
              <label
                key={sub}
                className="flex items-center gap-3 py-1 text-sm cursor-pointer"
              >
                <input
                  type="checkbox"
                  value={sub}
                  onChange={toggleSubCategory}
                  className="accent-sky-400"
                />
                {sub}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUCT SECTION */}
      <div className="flex-1 md:pl-10 px-4 py-5">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 mb-8">
          <Title text1="ALL" text2="COLLECTIONS" />
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="bg-slate-700 text-white px-4 py-3 rounded-lg border border-sky-500 focus:ring-2 focus:ring-sky-400 outline-none cursor-pointer w-full sm:w-[220px]"
          >
            <option value="relavent">Sort By: Relevant</option>
            <option value="low-high">Sort By: Low to High</option>
            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {filterProduct.length > 0 ? (
            filterProduct.map((item, index) => (
              <Card
                key={index}
                name={item.name}
                image={item.image1}
                id={item._id}
                price={item.price}
              />
            ))
          ) : (
            <p className="text-center text-gray-300 col-span-full py-20">
              No products found matching your filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
