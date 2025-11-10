import * as Yup from "yup";

export const placeOrderValidation = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  street: Yup.string().required("Street is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  pinCode: Yup.string()
    .matches(/^\d{6}$/, "Pincode must be 6 digits")
    .required("Pincode is required"),
  country: Yup.string().required("Country is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
});
