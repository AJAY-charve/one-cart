import React from "react";
import about from "../../../../assets/about.jpg";
import Title from "../../common/Title";
import NewLetterBox from "../home/NewLetterBox";

function About() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center  pt-20 pb-10">
      {/* ====== ABOUT US ====== */}
      <Title text1="ABOUT" text2="US" />

      <div className="w-[90%] max-w-[1200px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 mt-10">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={about}
            alt="About OneCart"
            className="w-[85%] sm:w-[70%] lg:w-[90%] rounded-lg shadow-lg shadow-black/50 hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5 text-white text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
          <p>
            <b className="text-[#bff1f9]">OneCart</b> was born for smart,
            seamless shopping—bringing quality products, trending styles, and
            everyday essentials together. With reliable service, fast delivery,
            and great value, OneCart makes your online shopping simple,
            satisfying, and stress-free.
          </p>
          <p>
            Designed for modern shoppers—combining style, convenience, and
            affordability. Whether it’s fashion, essentials, or trends, we bring
            everything you need to one trusted platform with fast delivery, easy
            returns, and a customer-first experience.
          </p>
          <div>
            <h3 className="text-[#bff1f9] text-[18px] sm:text-[20px] font-semibold mt-2">
              Our Mission
            </h3>
            <p>
              Our mission is to redefine online shopping by delivering quality,
              affordability, and convenience. OneCart connects customers with
              trusted products and brands, offering a seamless, customer-focused
              experience that saves time, adds value, and fits every lifestyle.
            </p>
          </div>
        </div>
      </div>

      {/* ====== WHY CHOOSE US ====== */}
      <div className="w-full flex flex-col items-center mt-20">
        <Title text1="WHY" text2="CHOOSE US" />
        <div className="w-[90%] max-w-[1200px] flex flex-col lg:flex-row items-stretch justify-between gap-8 py-10">
          {[
            {
              title: "Quality Assurance",
              desc: "We guarantee quality through strict checks, reliable sourcing, and a commitment to customer satisfaction.",
            },
            {
              title: "Convenience",
              desc: "Shop easily with fast delivery, simple navigation, secure checkout, and everything you need in one place.",
            },
            {
              title: "Exceptional Customer Service",
              desc: "Our dedicated support team ensures quick responses, helpful solutions, and a smooth shopping experience every time.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center text-white border border-gray-300 rounded-xl p-8 bg-[#ffffff0b] backdrop-blur-md shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <h4 className="text-[#bff1f9] text-[18px] sm:text-[20px] font-semibold mb-3">
                {item.title}
              </h4>
              <p className="text-[14px] sm:text-[15px] leading-relaxed text-gray-200">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ====== NEWSLETTER ====== */}
      <NewLetterBox />
    </div>
  );
}

export default About;
