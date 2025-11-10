export const apiToValueMapper = (apiData = {}) => ({
  email: apiData.email || "",
  password: "",
});

export const valueToApiMapper = (formValues) => ({
  email: formValues.email,
  password: formValues.password,
});
