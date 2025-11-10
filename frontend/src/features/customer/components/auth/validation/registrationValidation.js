import * as Yup from "yup";

export const registrationValidation = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Minimum 3 characters required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});
