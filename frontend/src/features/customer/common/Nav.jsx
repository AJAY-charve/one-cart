// import React, { useContext, useState } from "react";
// import logo from "../../../assets/logo.png";
// import { IoSearchCircleOutline } from "react-icons/io5";
// import { FaCircleUser } from "react-icons/fa6";
// import { IoCartOutline } from "react-icons/io5";
// import { IoSearchCircle } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { IoMdHome } from "react-icons/io";
// import { BsCollectionFill } from "react-icons/bs";
// import { MdContacts } from "react-icons/md";
// import { shopDataContext } from "../../../context/ShopContext";
// import { userDataContext } from "../../../context/UserContext";
// import { authDataContext } from "../../../context/authContext";

// const Nav = () => {
//   let { userData, getCurrentUser } = useContext(userDataContext);
//   let { showSearch, setShowSearch, search, setSearch, getCartCount } =
//     useContext(shopDataContext);
//   let [showProfile, setShowProfile] = useState(false);
//   let navigate = useNavigate();
//   const { serverUrl } = useContext(authDataContext);

//   const handleLogout = async () => {
//     try {
//       const result = await axios.get(serverUrl + "/api/auth/logout", {
//         withCredentials: true,
//       });
//       console.log("result", result.data);
//       getCurrentUser();
//       navigate("/login");
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   return (
//     <div
//       className="w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between
//     px-[30px] shadow-md shadow-black "
//     >
//       <div className="w-[20%]  lg:w-[30px] flex items-center justify-start gap-[10px]">
//         <img src={logo} alt="" className="w-[30px]" />
//         <h1 className="text-[25px] text-black font-sans">OneCart</h1>
//       </div>
//       <div className="w-[50%] lg:w-[40px] hidden md:flex">
//         <ul className="flex items-center justify-center gap-[19px] text-white">
//           <li
//             onClick={() => navigate("/")}
//             className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9]
//           py-[10px] px-[20px] rounded-2xl"
//           >
//             HOME
//           </li>
//           <li
//             onClick={() => navigate("/collection")}
//             className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9]
//           py-[10px] px-[20px] rounded-2xl"
//           >
//             COLLECTION
//           </li>
//           <li
//             onClick={() => navigate("/about")}
//             className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9]
//           py-[10px] px-[20px] rounded-2xl"
//           >
//             ABOUT
//           </li>
//           <li
//             onClick={() => navigate("/contact")}
//             className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9]
//           py-[10px] px-[20px] rounded-2xl"
//           >
//             CONTACT
//           </li>
//         </ul>
//       </div>
//       <div className="w-[30%] flex items-center justify-end gap-[20px]">
//         {!showSearch && (
//           <IoSearchCircleOutline
//             onClick={() => {
//               setShowSearch((prev) => !prev), navigate("/collection");
//             }}
//             className="w-[38px] h-[38px] text-[#000000] cursor-pointer "
//           />
//         )}
//         {showSearch && (
//           <IoSearchCircle
//             onClick={() => setShowSearch((prev) => !prev)}
//             className="w-[38px] h-[38px] text-[#000000] cursor-pointer"
//           />
//         )}
//         {!userData && (
//           <FaCircleUser
//             onClick={() => setShowProfile((prev) => !prev)}
//             className="w-[29px] h-[29px] text-[#000000] cursor-pointer"
//           />
//         )}
//         {userData && (
//           <div
//             onClick={() => setShowProfile((prev) => !prev)}
//             className="w-[30px] h-[30px] bg-[#080808] text-[white] rounded-full flex items-center
//         justify-center cursor-pointer"
//           >
//             {userData?.name.slice(0, 1)}
//           </div>
//         )}
//         <IoCartOutline
//           onClick={() => navigate("/cart")}
//           className="w-[29px] h-[29px] text-[#000000] cursor-pointer hidden md:block"
//         />
//         <p
//           className="absolute w-[18px] h-[18px] items-center md:flex justify-center bg-black
//         px-[5px] py-[2px] text-white rounded-full text-[9px] top-[10px]
//         right-[23px] hidden"
//         >
//           {getCartCount()}
//         </p>
//       </div>

//       {showSearch && (
//         <div
//           className="w-[100%] h-[80px] bg-[#d8f6f9dd] absolute top-[100%] left-0 right-0
//       flex items-center justify-center"
//         >
//           <input
//             type="text"
//             className="w-[50%] h-[60%] bg-[#233533] rounded-[30px] px-[50px]
//         placeholder:text-white text-white text-[18px]"
//             placeholder="Search Here"
//             onChange={(e) => {
//               setSearch(e.target.value);
//             }}
//             value={search}
//           />
//         </div>
//       )}

//       {showProfile && (
//         <div
//           className="absolute w-[220px] h-[150px] bg-[#000000d7] top-[110%] right-[4%] border-[1px]
//       border-[#aaa9a9] rounded-[10px] z-10"
//         >
//           <ul
//             className="w-[100%] h-[100%] flex items-start justify-around flex-col
//           text-[17px] py-[10px] text-[white]"
//           >
//             {!userData && (
//               <li
//                 className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px]
//             cursor-pointer"
//                 onClick={() => {
//                   navigate("/login");
//                   setShowProfile(false);
//                 }}
//               >
//                 Login
//               </li>
//             )}
//             {userData && (
//               <li
//                 className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px]
//             cursor-pointer"
//                 onClick={() => {
//                   handleLogout();
//                   setShowProfile(false);
//                 }}
//               >
//                 Logout
//               </li>
//             )}
//             <li
//               onClick={() => navigate("/order")}
//               className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px]
//             cursor-pointer"
//             >
//               Orders
//             </li>
//             <li
//               onClick={() => navigate("/about")}
//               className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px]
//             cursor-pointer"
//             >
//               About
//             </li>
//           </ul>
//         </div>
//       )}
//       <div
//         className="w-[100vw] h-[90px] flex items-center justify-between px-[20px]
//       fixed bottom-0 left-0 bg-[#191818] md:hidden text-[12px]"
//       >
//         <button
//           onClick={() => navigate("/")}
//           className="text-white flex items-center justify-center flex-col gap-[2px]"
//         >
//           <IoMdHome className="w-[28px] h-[28px] text-[white] md:hidden" />
//           Home
//         </button>
//         <button
//           onClick={() => navigate("/collection")}
//           className="text-white flex items-center justify-center flex-col gap-[2px]"
//         >
//           <BsCollectionFill className="w-[28px] h-[28px] text-[white] md:hidden" />
//           Collection
//         </button>
//         <button
//           onClick={() => navigate("/contact")}
//           className="text-white flex items-center justify-center flex-col gap-[2px]"
//         >
//           <MdContacts className="w-[28px] h-[28px] text-[white] md:hidden" />
//           Contact
//         </button>
//         <button className="text-white flex items-center justify-center flex-col gap-[2px]">
//           <IoCartOutline
//             onClick={() => navigate("/cart")}
//             className="w-[28px] h-[28px] text-[white] md:hidden"
//           />
//           Cart
//         </button>
//         <p
//           className="absolute w-[18px] h-[18px] flex items-center justify-center bg-white px-[5px]
//         py-[2px] text-black font-semibold rounded-full text-[9px] top-[8px] right-[18px]"
//         >
//           {getCartCount()}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Nav;

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
import { authDataContext } from "../../../context/authContext";

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
      getCurrentUser();
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error);
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
              onClick={() => navigate("/order")}
            >
              Orders
            </li>
            <li
              className="px-4 py-3 hover:bg-[#2f2f2f] cursor-pointer"
              onClick={() => navigate("/about")}
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
