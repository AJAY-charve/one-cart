import { useField } from "formik";

const TextAreaField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-medium text-gray-700">{label}</label>}
      <textarea
        {...field}
        {...props}
        className={`border rounded-md p-2 ${
          meta.touched && meta.error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {meta.touched && meta.error && (
        <p className="text-sm text-red-500">{meta.error}</p>
      )}
    </div>
  );
};

export default TextAreaField;
