// import React, { useContext, useState } from "react";
// import logo from "../../../../assets/logo.png";
// import { useNavigate } from "react-router-dom";
// import google from "../../../../assets/google.png";
// import { IoIosEye } from "react-icons/io";
// import { IoEyeOutline } from "react-icons/io5";
// import { authDataContext } from "../../../../context/authContext";
// import axios from "axios";
// import { signInWithPopup } from "firebase/auth";
// import { auth, provider } from "../../../../../utills/Firebase";
// import { userDataContext } from "../../../../context/UserContext";

// const Login = () => {
//   let [show, setsShow] = useState(false);

//   let { serverUrl } = useContext(authDataContext);
//   let [email, setEmail] = useState("");
//   let [password, setPassword] = useState("");
//   let { getCurrentUser } = useContext(userDataContext);

//   let navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const result = await axios.post(
//         serverUrl + "/api/auth/login",
//         { email, password },
//         { withCredentials: true }
//       );
//       console.log("result", result);
//       getCurrentUser();
//       navigate("/");
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   const googleSignup = async () => {
//     try {
//       const response = await signInWithPopup(auth, provider);
//       // console.log("response", response);
//       let user = response.user;
//       let name = user.displayName;
//       let email = user.email;

//       const result = await axios.post(
//         serverUrl + "/api/auth/googlelogin",
//         { name, email },
//         { withCredentials: true }
//       );

//       console.log("result", result.data);
//       getCurrentUser();
//       navigate("/");
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   return (
//     <div
//       className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white]
//     flex flex-col items-center justify-start"
//     >
//       <div
//         className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer"
//         onClick={() => navigate("/")}
//       >
//         <img src={logo} alt="OneCart" className="w-[40px]" />
//         <h1 className="text-[20px] font-sans">OneCart</h1>
//       </div>
//       <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
//         <span className="text-[25px] font-semibold">Login Page</span>
//         <span className="text-[16px]">
//           Welcome to OneCart, Place your order
//         </span>
//       </div>
//       <div
//         className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635]
//       backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center"
//       >
//         <form
//           action=""
//           onSubmit={handleLogin}
//           className="w-[90%] h-[90%] flex flex-col items-center"
//         >
//           <div
//             onClick={googleSignup}
//             className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center
//           gap-[10px] py-1-[20px] cursor-pointer"
//           >
//             <img src={google} alt="" className="w-[20px]" /> Login account with
//             google
//           </div>
//           <div className="w-[100%] h-[20px] flex items-center justify-center gap-[10px]">
//             <div className="w-[40%] h-[1px] bg-[#98989835]"></div>
//             or
//             <div className="w-[40%] h-[1px] bg-[#98989835]"></div>
//           </div>
//           <div className="w-[90%] relative h-[400px] flex flex-col items-center justify-center gap-[15px]">
//             <input
//               type="text"
//               className="w-[100%] h-[50px] border-[2px] border-[#97979735] backdrop:blur-sm rounded-lg
//              shadow-lg bg-transparent  placeholder-[#ffffffc7] font-semibold px-[20px]"
//               placeholder="Email"
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//             />
//             <input
//               type={show ? "text" : "password"}
//               className="w-[100%] h-[50px] border-[2px] border-[#97979735] backdrop:blur-sm rounded-lg
//              shadow-lg bg-transparent  placeholder-[#ffffffc7] font-semibold px-[20px]"
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//             />
//             {!show && (
//               <IoEyeOutline
//                 className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[57%]"
//                 onClick={() => setsShow((prev) => !prev)}
//               />
//             )}
//             {show && (
//               <IoIosEye
//                 className="w-[20px] h-[20px] cursor-pointer absolute right-[5%] bottom-[55%]"
//                 onClick={() => setsShow((prev) => !prev)}
//               />
//             )}
//             <button
//               className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex
//             items-center justify-center mt-[20px] text-[17px] font-semibold"
//             >
//               Login
//             </button>
//             <p className="flex gap-[10px]">
//               You have no account?
//               <span
//                 className="text-[#5555f6cf] text-[17px] font-semibold cursor-pointer"
//                 onClick={() => navigate("/signup")}
//               >
//                 New Registration
//               </span>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useContext, useState } from "react";
import logo from "../../../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import google from "../../../../assets/google.png";
import { IoIosEye } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { authDataContext } from "../../../../context/AuthContext";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../../../utills/Firebase";
import { userDataContext } from "../../../../context/UserContext";
import { Formik, Form } from "formik";
import InputField from "../../../../common/InputField";
import { apiToValueMapper, valueToApiMapper } from "./mapper/loginFormMapper";
import { loginValidation } from "./validation/loginValidation";

const Login = () => {
  const [show, setShow] = useState(false);
  const { serverUrl } = useContext(authDataContext);
  const { getCurrentUser } = useContext(userDataContext);
  const navigate = useNavigate();

  // 🧠 Google Login
  const googleSignup = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;

      const result = await axios.post(
        serverUrl + "/api/auth/googlelogin",
        { name: user.displayName, email: user.email },
        { withCredentials: true }
      );

      console.log("Google login result:", result.data);
      getCurrentUser();
      navigate("/");
    } catch (error) {
      console.log("Google login error:", error);
    }
  };

  // 🧠 Normal Login
  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const payload = valueToApiMapper(values);
      console.log("Payload before sending:", payload);

      const result = await axios.post(serverUrl + "/api/auth/login", payload, {
        withCredentials: true,
      });

      console.log("Login result:", result);
      getCurrentUser();
      navigate("/");
    } catch (error) {
      console.log("Login error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const initialValues = apiToValueMapper();

  return (
    <div className="w-screen h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start">
      {/* Header */}
      <div
        className="w-full h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="OneCart" className="w-[40px]" />
        <h1 className="text-[20px] font-sans">OneCart</h1>
      </div>

      {/* Title */}
      <div className="w-full h-[100px] flex items-center justify-center flex-col gap-[10px]">
        <span className="text-[25px] font-semibold">Login Page</span>
        <span className="text-[16px]">
          Welcome to OneCart, Place your order
        </span>
      </div>

      {/* Card */}
      <div className="max-w-[600px] w-[90%] h-[450px] bg-[#00000025] border border-[#96969635] rounded-lg shadow-lg flex items-center justify-center">
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidation}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form className="w-[90%] h-[90%] flex flex-col items-center justify-center gap-[15px]">
              {/* Google Login */}
              <div
                onClick={googleSignup}
                className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] cursor-pointer"
              >
                <img src={google} alt="" className="w-[20px]" /> Login with
                Google
              </div>

              {/* Divider */}
              <div className="w-full flex items-center justify-center gap-[10px]">
                <div className="w-[40%] h-[1px] bg-[#98989835]"></div>
                or
                <div className="w-[40%] h-[1px] bg-[#98989835]"></div>
              </div>

              {/* Inputs */}
              <div className="w-full flex flex-col gap-[15px] relative">
                <InputField name="email" placeholder="Email" type="text" />
                <div className="relative">
                  <InputField
                    name="password"
                    placeholder="Password"
                    type={show ? "text" : "password"}
                  />
                  {show ? (
                    <IoIosEye
                      className="absolute right-[15px] top-[15px] w-[20px] h-[20px] cursor-pointer"
                      onClick={() => setShow((prev) => !prev)}
                    />
                  ) : (
                    <IoEyeOutline
                      className="absolute right-[15px] top-[15px] w-[20px] h-[20px] cursor-pointer"
                      onClick={() => setShow((prev) => !prev)}
                    />
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full h-[50px] mt-[10px] rounded-lg flex items-center justify-center text-[17px] font-semibold transition ${
                  isSubmitting
                    ? "bg-[#4a4aed]/60 cursor-not-allowed"
                    : "bg-[#6060f5] hover:bg-[#4a4aed]"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Logging in...
                  </div>
                ) : (
                  "Login"
                )}
              </button>

              {/* Register link */}
              <p className="flex gap-[10px] text-sm mt-2">
                Don't have an account?
                <span
                  className="text-[#5555f6cf] font-semibold cursor-pointer"
                  onClick={() => navigate("/signup")}
                >
                  Register
                </span>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
