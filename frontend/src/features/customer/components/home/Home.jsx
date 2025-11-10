// import React, { useEffect, useState } from "react";
// import Background from "./Background";
// import Hero from "./Hero";
// import Product from "./Product";
// import OurPolicy from "./OurPolicy";
// import NewLetterBox from "./NewLetterBox";
// import Footer from "../../common/Footer";

// const Home = () => {
//   let heroData = [
//     { text1: "30% OFF Limited offer", text2: "Style That" },
//     { text1: "Discover the Best of Bold Fashion", text2: "Limited Time Only!" },
//     { text1: "Explore Our Best Collection", text2: "Shop Now!" },
//     { text1: "Choose your Perfect Fit", text2: "Now on Sale!" },
//   ];

//   let [heroCount, setHeroCount] = useState(0);

//   useEffect(() => {
//     let interval = setInterval(() => {
//       setHeroCount((prevCount) => (prevCount === 3 ? 0 : prevCount + 1));
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="overflow-x-hidden relative top-[70%]">
//       <div
//         className="w-[100vw] h-[30vh] md:g-[50vh] lg:h-[100vh] bg-gradient-to-l from-[#141414]
//     to-[#0c2025]"
//       >
//         <Background heroCount={heroCount} />
//         <Hero
//           heroCount={heroCount}
//           setHeroCount={setHeroCount}
//           heroData={heroData[heroCount]}
//         />
//       </div>
//       <Product />
//       <OurPolicy />
//       <NewLetterBox />
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import Background from "../../components/home/Background";
import Hero from "../../components/home/Hero";
import Product from "../../components/home/Product";
import OurPolicy from "../../components/home/OurPolicy";
import NewLetterBox from "../../components/home/NewLetterBox";

const Home = () => {
  const heroData = [
    { text1: "30% OFF Limited offer", text2: "Style That" },
    { text1: "Discover the Best of Bold Fashion", text2: "Limited Time Only!" },
    { text1: "Explore Our Best Collection", text2: "Shop Now!" },
    { text1: "Choose your Perfect Fit", text2: "Now on Sale!" },
  ];

  const [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prev) => (prev === heroData.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-[90vh] lg:h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025]">
        <Background heroCount={heroCount} />
        <Hero
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          heroData={heroData[heroCount]}
        />
      </section>

      {/* Products */}
      <Product />

      {/* Policy Section */}
      <OurPolicy />

      {/* Newsletter */}
      <NewLetterBox />
    </div>
  );
};

export default Home;
