import React, { useContext, useState, useEffect } from "react";
import logo from "../../../../assets/logo.png";
import google from "../../../../assets/google.png";
import { IoIosEye } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { authDataContext } from "../../../../context/AuthContext";
import { userDataContext } from "../../../../context/UserContext";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../../../utills/Firebase";
import { Formik, Form } from "formik";
import { registrationValidation } from "./validation/registrationValidation";
import InputField from "../../../../common/InputField";
import { apiToValueMapper, valueToApiMapper } from "./mapper/formMapper";
import { showError, showSuccess } from "../../../../../utills/toastUtils";

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

      const result = await axios.post(
        serverUrl + "/api/auth/registration",
        payload,
        {
          withCredentials: true,
        }
      );

      console.log("Signup result:", result);
      showSuccess("User Register Successfully...")
      getCurrentUser();
      navigate("/");
    } catch (error) {
      console.log("Signup error:", error);
      showError("Techinal Error Please trye again letter")
    } finally {
      setSubmitting(false);
    }
  };

  // 🧠 Step 4: Handle Loading
  if (!initialApiData)
    return <div className="text-white text-center mt-20">Loading...</div>;

  const initialValues = apiToValueMapper(initialApiData); // 🪄 MAPPER USE HERE

  return (
    <div
     className=" text-white flex flex-col items-center justify-start">
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
