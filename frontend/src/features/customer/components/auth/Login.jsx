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
import { showError, showSuccess } from "../../../../../utills/toastUtils";

const Login = () => {
  const [show, setShow] = useState(false);
  const { serverUrl } = useContext(authDataContext);
  const { getCurrentUser } = useContext(userDataContext);
  const navigate = useNavigate();
  const [submitLoading, setSubmitLoading] = useState(false);

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
      showSuccess("Login Successful! 🎉");

      getCurrentUser();
      navigate("/");
    } catch (error) {
      console.log("Google login error:", error);
      showError(
        error.response?.data?.message || "Login Failed! Please try again."
      );
    }
  };

  const handleLogin = async (values, { setSubmitting }) => {
    setSubmitLoading(true);
    try {
      const payload = valueToApiMapper(values);
      console.log("Payload before sending:", payload);

      const result = await axios.post(serverUrl + "/api/auth/login", payload, {
        withCredentials: true,
      });

      console.log("Login result:", result);
      showSuccess("Login Successful! 🎉");
      getCurrentUser();
      navigate("/");
      setSubmitLoading(false);
    } catch (error) {
      showError(
        error.response?.data?.message || "Login Failed! Please try again."
      );
      console.log("Login error:", error);
      setSubmitLoading();
    } finally {
      setSubmitting(false);
      setSubmitLoading(false);
    }
  };

  const initialValues = apiToValueMapper();

  return (
    <div className=" text-white flex flex-col items-center justify-start">
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
