// import React from "react";

// const NewLetterBox = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="w-[100%] h-[40vh] flex items-center justify-start gap-[10px] flex-col">
//       <p
//         className="md:text-[30px] text-[20px] text-[#a5faf7] font-semibold
//       px-[20px]"
//       >
//         Subscribe now & get 20% off
//       </p>
//       <p
//         className="md:text-[18px] text-[14px] text-center text-blue-200 font-semibold
//       px-[20px]"
//       >
//         Subcribe now and enjoy exclusive savigs, special deals, and early access
//         to new collections.
//       </p>
//       <form
//         action=""
//         onSubmit={handleSubmit}
//         className="w-[100%] h-[30%] md:h-[50%] flex items-center justify-center
//       mt-[20px] gap-[20px] px-[20px]"
//       >
//         <input
//           type="text"
//           placeholder="Enter Your Email"
//           className="placeholder:text-black
//         bg-slate-300 w-[600px] max-w-[60%] h-[40%] px-[20px] rounded-lg shadow-sm shadow-black"
//           required
//         />
//         <button
//           type="submit"
//           className="text-[15px] md:text-[16px] px-[10px] md:px-[30px] py-[12px] md:py-[10px]
//         hover:bg-slate-500 cursor-pointer  bg-[#2e3030c9] text-white flex items-center
//         justify-center gap-[20px] border-[1px] shadow-black border-[#80808049] rounded-lg shadow-sm"
//         >
//           Subscribe
//         </button>
//       </form>
//     </div>
//   );
// };

// export default NewLetterBox;

import React from "react";
import { toast } from "react-toastify";

const NewsletterBox = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for subscribing! 🎉");
  };

  return (
    <div className="w-full h-[40vh] flex flex-col items-center justify-center gap-3 px-4">
      {/* Heading */}
      <p className="text-[#a5faf7] font-semibold text-[20px] md:text-[30px] text-center">
        Subscribe now & get 20% off
      </p>

      {/* Subtext */}
      <p className="text-blue-200 font-semibold text-[14px] md:text-[18px] text-center max-w-[700px]">
        Subscribe now and enjoy exclusive savings, special deals, and early
        access to new collections.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mt-5"
      >
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-[80%] sm:w-[60%] md:w-[40%] bg-slate-200 text-black
          px-4 py-3 rounded-lg shadow-sm shadow-black placeholder:text-gray-600
          focus:outline-none focus:ring-2 focus:ring-cyan-300 transition"
        />

        <button
          type="submit"
          className="bg-[#2e3030c9] text-white font-semibold rounded-lg
          px-6 py-3 border border-[#80808049] shadow-sm shadow-black
          hover:bg-slate-600 transition-all duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
