// src/components/form/formMapper.js

export const valueToApiMapper = (values) => {
  return {
    address: {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      street: values.street,
      city: values.city,
      state: values.state,
      pinCode: values.pinCode,
      country: values.country,
      phone: values.phone,
    },
  };
};

export const apiToValueMapper = (data) => {
  if (!data || !data.address) return {};
  return {
    firstName: data.address.firstName || "",
    lastName: data.address.lastName || "",
    email: data.address.email || "",
    street: data.address.street || "",
    city: data.address.city || "",
    state: data.address.state || "",
    pinCode: data.address.pinCode || "",
    country: data.address.country || "",
    phone: data.address.phone || "",
  };
};
