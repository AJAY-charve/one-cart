import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosEye } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import axios from "axios";
import logo from "../assets/logo.png";
import { authDataContext } from "../context/AuthContext";
import { adminDataContext } from "../context/AdminContext";

const Login = () => {
  let [show, setsShow] = useState(false);
  let { serverUrl } = useContext(authDataContext);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { adminData, getAdmin } = useContext(adminDataContext);

  let navigate = useNavigate();

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        serverUrl + "/api/auth/adminlogin",
        { email, password },
        { withCredentials: true }
      );
      console.log("result", result);
      getAdmin();
      navigate("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  // const googleSignup = async () => {
  //   try {
  //     const response = await signInWithPopup(auth, provider);
  //     // console.log("response", response);
  //     let user = response.user;
  //     let name = user.displayName;
  //     let email = user.email;

  //     const result = await axios.post(
  //       serverUrl + "/api/auth/googlelogin",
  //       { name, email },
  //       { withCredentials: true }
  //     );

  //     console.log("result", result.data);
  //     getCurrentUser();
  //     navigate("/");
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  return (
    <div
      className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white]
    flex flex-col items-center justify-start"
    >
      <div className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer">
        <img src={logo} alt="OneCart" className="w-[40px]" />
        <h1 className="text-[20px] font-sans">OneCart</h1>
      </div>
      <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
        <span className="text-[25px] font-semibold">Login Page</span>
        <span className="text-[16px]">
          Welcome to OneCart, Apply to admin login
        </span>
      </div>
      <div
        className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635]
      backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center"
      >
        <form
          action=""
          onSubmit={handleAdminLogin}
          className="w-[90%] h-[90%] flex flex-col items-center"
        >
          {/* <div className="w-[100%] h-[20px] flex items-center justify-center gap-[10px]">
            <div className="w-[40%] h-[1px] bg-[#98989835]"></div>
            or
            <div className="w-[40%] h-[1px] bg-[#98989835]"></div>
          </div> */}
          <div className="w-[90%] relative h-[400px] flex flex-col items-center justify-center gap-[15px]">
            <input
              type="text"
              className="w-[100%] h-[50px] border-[2px] border-[#97979735] backdrop:blur-sm rounded-lg
             shadow-lg bg-transparent  placeholder-[#ffffffc7] font-semibold px-[20px]"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type={show ? "text" : "password"}
              className="w-[100%] h-[50px] border-[2px] border-[#97979735] backdrop:blur-sm rounded-lg
             shadow-lg bg-transparent  placeholder-[#ffffffc7] font-semibold px-[20px]"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {!show && (
              <IoEyeOutline
                className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[50%]"
                onClick={() => setsShow((prev) => !prev)}
              />
            )}
            {show && (
              <IoIosEye
                className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[50%]"
                onClick={() => setsShow((prev) => !prev)}
              />
            )}
            <button
              className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex
            items-center justify-center mt-[20px] text-[17px] font-semibold"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
