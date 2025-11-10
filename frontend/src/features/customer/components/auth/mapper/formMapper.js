// Convert API data to Formik form initialValues
export const apiToValueMapper = (apiData = {}) => ({
  name: apiData.full_name || "",
  email: apiData.email || "",
  password: "",
});

// Convert Formik form values to API payload
export const valueToApiMapper = (formValues) => ({
  full_name: formValues.name,
  email: formValues.email,
  password: formValues.password,
});
