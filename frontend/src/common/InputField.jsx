// import { useField } from "formik";

// const InputField = ({ label, ...props }) => {
//   const [field, meta] = useField(props);

//   return (
//     <div className="flex flex-col gap-1">
//       {label && (
//         <label
//           htmlFor={props.id || props.name}
//           className="font-medium text-gray-700"
//         >
//           {label}
//         </label>
//       )}
//       <input
//         // className={`border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500
//         // ${meta.touched && meta.error ? "border-red-500" : "border-gray-300"}`}
//         className={`w-full h-[50px] border-[2px] border-[#97979735] rounded-lg
//           shadow-lg bg-transparent placeholder-[#ffffffc7] font-semibold px-[20px]
//           focus:outline-none focus:ring-2 focus:ring-[#5555f6cf]
//           ${meta.touched && meta.error ? "border-red-500" : ""}`}
//         {...field}
//         {...props}
//       />
//       {meta.touched && meta.error && (
//         <span className="text-sm text-red-500">{meta.error}</span>
//       )}
//     </div>
//   );
// };

// export default InputField;

import { useField } from "formik";

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={props.id || props.name}
          className="font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <input
        className={`w-full h-[50px] border-[2px] border-[#97979735] rounded-lg
          shadow-lg bg-transparent placeholder-[#ffffffc7] font-semibold px-[20px]
          focus:outline-none focus:ring-2 focus:ring-[#5555f6cf]
          ${meta.touched && meta.error ? "border-red-500" : ""}`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <span className="text-sm text-red-500">{meta.error}</span>
      )}
    </div>
  );
};

export default InputField;
