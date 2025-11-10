import { useField } from "formik";

const CheckboxField = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" {...field} {...props} />
      {label && <label className="text-gray-700">{label}</label>}
      {meta.touched && meta.error && (
        <p className="text-sm text-red-500">{meta.error}</p>
      )}
    </div>
  );
};

export default CheckboxField;
