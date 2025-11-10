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

// const Registration = () => {
//   let [show, setsShow] = useState(false);
//   let { serverUrl } = useContext(authDataContext);
//   let [name, setName] = useState("");
//   let [email, setEmail] = useState("");
//   let [password, setPassword] = useState("");
//   let { getCurrentUser } = useContext(userDataContext);

//   let navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const result = await axios.post(
//         serverUrl + "/api/auth/registration",
//         { name, email, password },
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
//         <span className="text-[25px] font-semibold">Registration Page</span>
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
//           onSubmit={handleSignup}
//           className="w-[90%] h-[90%] flex flex-col items-center"
//         >
//           <div
//             onClick={googleSignup}
//             className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center
//           gap-[10px] py-1-[20px] cursor-pointer"
//           >
//             <img src={google} alt="" className="w-[20px]" /> Registration with
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
//               placeholder="User Name"
//               onChange={(e) => setName(e.target.value)}
//               value={name}
//             />
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
//                 className="w-[20px] h-[20px] cursor-pointer absolute right-[5%]"
//                 onClick={() => setsShow((prev) => !prev)}
//               />
//             )}
//             {show && (
//               <IoIosEye
//                 className="w-[20px] h-[20px] cursor-pointer absolute right-[5%]"
//                 onClick={() => setsShow((prev) => !prev)}
//               />
//             )}
//             <button
//               className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex
//             items-center justify-center mt-[20px] text-[17px] font-semibold"
//             >
//               Create Account
//             </button>
//             <p className="flex gap-[10px]">
//               You have any account?
//               <span
//                 className="text-[#5555f6cf] text-[17px] font-semibold cursor-pointer"
//                 onClick={() => navigate("/login")}
//               >
//                 Login
//               </span>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Registration;

import React, { useContext, useState, useEffect } from "react";
import logo from "../../../../assets/logo.png";
import google from "../../../../assets/google.png";
import { IoIosEye } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { authDataContext } from "../../../../context/authContext";
import { userDataContext } from "../../../../context/UserContext";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../../../utills/Firebase";
import { Formik, Form } from "formik";
import { registrationValidation } from "./validation/registrationValidation";
import InputField from "../../../../common/InputField";
import { apiToValueMapper, valueToApiMapper } from "./mapper/formMapper";

const Registration = () => {
  const [show, setShow] = useState(false);
  const { serverUrl } = useContext(authDataContext);
  const { getCurrentUser } = useContext(userDataContext);
  const navigate = useNavigate();

  // 🧠 Step 1: Load default data (like edit profile or prefills)
  const [initialApiData, setInitialApiData] = useState(null);

  useEffect(() => {
    // Example: agar future me profile edit mode ho, to yaha API call karke data fetch karna
    // For now we mock it:
    const mockApiResponse = {
      full_name: "",
      email: "",
    };
    setInitialApiData(mockApiResponse);
  }, []);

  // 🧠 Step 2: Google Signup
  const googleSignup = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;

      const result = await axios.post(
        serverUrl + "/api/auth/googlelogin",
        { name: user.displayName, email: user.email },
        { withCredentials: true }
      );

      console.log("Google signup result:", result.data);
      getCurrentUser();
      navigate("/");
    } catch (error) {
      console.log("Google signup error:", error);
    }
  };

  // 🧠 Step 3: Handle Normal Signup
  const handleSignup = async (values, { setSubmitting }) => {
    try {
      const payload = valueToApiMapper(values); // 🪄 MAPPER USE HERE
      console.log("Payload before sending:", payload);

      // const result = await axios.post(
      //   serverUrl + "/api/auth/registration",
      //   payload,
      //   {
      //     withCredentials: true,
      //   }
      // );

      // console.log("Signup result:", result);
      // getCurrentUser();
      // navigate("/");
    } catch (error) {
      console.log("Signup error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  // 🧠 Step 4: Handle Loading
  if (!initialApiData)
    return <div className="text-white text-center mt-20">Loading...</div>;

  const initialValues = apiToValueMapper(initialApiData); // 🪄 MAPPER USE HERE

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start">
      {/* Header */}
      <div
        className="w-full h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="OneCart" className="w-[40px]" />
        <h1 className="text-[20px] font-sans">OneCart</h1>
      </div>

      {/* Title */}
      <div className="w-full h-[100px] flex flex-col items-center justify-center gap-[10px]">
        <span className="text-[25px] font-semibold">Registration Page</span>
        <span className="text-[16px]">
          Welcome to OneCart, Place your order
        </span>
      </div>

      {/* Form Card */}
      <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border border-[#96969635] rounded-lg shadow-lg flex items-center justify-center">
        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={registrationValidation}
          onSubmit={handleSignup}
        >
          {({ isSubmitting }) => (
            <Form className="w-[90%] h-[90%] flex flex-col items-center gap-5">
              {/* Google Signup */}
              <div
                onClick={googleSignup}
                className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] cursor-pointer"
              >
                <img src={google} alt="" className="w-[20px]" /> Sign up with
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
                <InputField name="name" placeholder="User Name" />
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
                className="w-full h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[10px] text-[17px] font-semibold hover:bg-[#4a4aed] transition"
              >
                {isSubmitting ? "Creating..." : "Create Account"}
              </button>

              <p className="flex gap-[10px] text-sm">
                Already have an account?
                <span
                  className="text-[#5555f6cf] font-semibold cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Registration;
