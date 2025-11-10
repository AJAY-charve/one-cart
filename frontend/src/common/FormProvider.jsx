import { Formik, Form } from "formik";

const FormProvider = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ handleSubmit }) => (
        <Form
          onSubmit={handleSubmit}
          // className="space-y-4 bg-white p-6 rounded-2xl shadow-md"
        >
          {children}
        </Form>
      )}
    </Formik>
  );
};

export default FormProvider;
