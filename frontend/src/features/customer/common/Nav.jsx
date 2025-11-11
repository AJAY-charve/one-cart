import React, { useContext, useState } from "react";
import logo from "../../../assets/logo.png";
import {
  IoSearchCircleOutline,
  IoSearchCircle,
  IoCartOutline,
} from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { BsCollectionFill } from "react-icons/bs";
import { MdContacts } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { shopDataContext } from "../../../context/ShopContext";
import { userDataContext } from "../../../context/UserContext";
import { authDataContext } from "../../../context/AuthContext";
import { showError, showSuccess } from "../../../../utills/toastUtils";

const Nav = () => {
  const navigate = useNavigate();
  const { userData, getCurrentUser } = useContext(userDataContext);
  const { showSearch, setShowSearch, search, setSearch, getCartCount } =
    useContext(shopDataContext);
  const { serverUrl } = useContext(authDataContext);

  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.get(`${serverUrl}/api/auth/logout`, {
        withCredentials: true,
      });
      showSuccess("Logout Successfully...");
      getCurrentUser();
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error);
      showError("Something went wrong. Please try again letter");
    }
  };

  return (
    <nav className="w-full h-[70px] fixed top-0 left-0 z-50 flex items-center justify-between px-6 bg-[#ecfafaec] shadow-md">
      {/* Logo */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="logo" className="w-[35px]" />
        <h1 className="text-[22px] font-semibold text-black">OneCart</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-5">
        {["HOME", "COLLECTION", "ABOUT", "CONTACT"].map((item, idx) => (
          <li
            key={idx}
            className="text-[15px] bg-[#000000c9] text-white px-4 py-2 rounded-xl cursor-pointer hover:bg-slate-500"
            onClick={() =>
              navigate(item === "HOME" ? "/" : `/${item.toLowerCase()}`)
            }
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Icons Section */}
      <div className="flex items-center gap-4 relative">
        {/* Search */}
        {showSearch ? (
          <IoSearchCircle
            onClick={() => setShowSearch(false)}
            className="w-9 h-9 text-black cursor-pointer"
          />
        ) : (
          <IoSearchCircleOutline
            onClick={() => {
              setShowSearch(true);
              navigate("/collection");
            }}
            className="w-9 h-9 text-black cursor-pointer"
          />
        )}

        {/* User */}
        {userData ? (
          <div
            onClick={() => setShowProfile(!showProfile)}
            className="w-8 h-8 bg-black text-white flex items-center justify-center rounded-full cursor-pointer"
          >
            {userData?.name?.slice(0, 1).toUpperCase()}
          </div>
        ) : (
          <FaCircleUser
            onClick={() => setShowProfile(!showProfile)}
            className="w-7 h-7 text-black cursor-pointer"
          />
        )}

        {/* Cart */}
        <div
          className="relative cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <IoCartOutline className="w-7 h-7 text-black" />
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {getCartCount()}
          </span>
        </div>
      </div>

      {/* Search Box */}
      {showSearch && (
        <div className="absolute top-[70px] left-0 w-full bg-[#d8f6f9dd] py-4 flex justify-center">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Here"
            className="w-[60%] md:w-[40%] bg-[#233533] text-white rounded-3xl px-6 py-2 placeholder:text-gray-300 focus:outline-none"
          />
        </div>
      )}

      {/* Profile Dropdown */}
      {showProfile && (
        <div className="absolute top-[75px] right-[5%] w-[220px] bg-[#000000d7] text-white rounded-lg overflow-hidden border border-gray-600">
          <ul className="flex flex-col">
            {!userData && (
              <li
                className="px-4 py-3 hover:bg-[#2f2f2f] cursor-pointer"
                onClick={() => {
                  navigate("/login");
                  setShowProfile(false);
                }}
              >
                Login
              </li>
            )}
            {userData && (
              <li
                className="px-4 py-3 hover:bg-[#2f2f2f] cursor-pointer"
                onClick={() => {
                  handleLogout();
                  setShowProfile(false);
                }}
              >
                Logout
              </li>
            )}
            <li
              className="px-4 py-3 hover:bg-[#2f2f2f] cursor-pointer"
              onClick={() => {
                navigate("/order"), setShowProfile(false);
              }}
            >
              Orders
            </li>
            <li
              className="px-4 py-3 hover:bg-[#2f2f2f] cursor-pointer"
              onClick={() => {
                navigate("/about"), setShowProfile(false);
              }}
            >
              About
            </li>
          </ul>
        </div>
      )}

      {/* Bottom Nav (Mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full h-[70px] bg-[#191818] flex justify-around items-center text-white">
        {[
          { icon: <IoMdHome />, label: "Home", path: "/" },
          {
            icon: <BsCollectionFill />,
            label: "Collection",
            path: "/collection",
          },
          { icon: <MdContacts />, label: "Contact", path: "/contact" },
          { icon: <IoCartOutline />, label: "Cart", path: "/cart" },
        ].map((item, idx) => (
          <button
            key={idx}
            className="flex flex-col items-center text-xs"
            onClick={() => navigate(item.path)}
          >
            {React.cloneElement(item.icon, { className: "w-6 h-6" })}
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
