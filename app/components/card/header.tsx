export const imagesData = [
  {
    _id: 1,
    src: "https://res.cloudinary.com/dx7bdbfjt/image/upload/v1734681657/DALL_E_2024-12-20_13.29.09_-_A_visually_stunning_banner_for_an_e-commerce_website_featuring_electronic_gadgets._The_scene_includes_modern_gadgets_like_smartphones_smartwatches_l_zy8cbc.webp",
    title: "SALE IS LIVE",
    subtitle: "Lowest Prices Best Quality Shopping",
    description: "Lowest Prices Best Quality Shopping",
  },
  {
    _id: 2,
    src: "https://res.cloudinary.com/dx7bdbfjt/image/upload/v1734687749/DALL_E_2024-12-20_15.12.09_-_A_visually_striking_e-commerce_website_banner_featuring_high-tech_gadgets_such_as_laptops_smartphones_smartwatches_tablets_and_headphones._Ensure_q7lvoo.webp",
    title: "NEW ARRIVALS",
    subtitle: "Exclusive Deals on Latest Trends",
    description: "Exclusive Deals on Latest Trends",
  },
  {
    _id: 3,
    src: "https://via.placeholder.com/800x600",
    title: "LIMITED TIME OFFER",
    subtitle: "Don't Miss Out on Special Discounts",
    description: "Don't Miss Out on Special Discounts",
  },
];

// import React, { useState, useEffect } from "react";

// const CarouselHeader = ({  interval = 3000 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
//     }, interval);

//     return () => clearInterval(slideInterval);
//   }, [imagesData, interval]);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Slides */}
//       <div
//         className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
//         style={{
//           transform: `translateX(-${currentIndex * 100}%)`,
//         }}
//       >
//         {imagesData.map((item) => (
//           <div
//             key={item._id}
//             className="relative w-full h-screen flex-shrink-0 bg-cover bg-center"
//             style={{
//               backgroundImage: `url(${item.src})`,
//               backgroundAttachment: "fixed",
//             }}
//           >
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
//               <p className="text-lg font-light">{item.subtitle}</p>
//               <h1 className="text-4xl md:text-6xl font-bold mb-4">
//                 {item.title}
//               </h1>
//               <p className="text-sm md:text-lg max-w-2xl">{item.subtitle}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Indicators */}
//       <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {imagesData.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full ${
//               index === currentIndex ? "bg-white" : "bg-gray-500"
//             }`}
//             onClick={() => setCurrentIndex(index)}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CarouselHeader;

// import React, { useState, useEffect } from "react";

// export const CarouselHeader = ({ interval = 3000 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
//     }, interval);

//     return () => clearInterval(slideInterval);
//   }, [interval]);

//   return (
//     <div className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden">
//       {/* Slides */}
//       <div
//         className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
//         style={{
//           transform: `translateX(-${currentIndex * 100}%)`,
//         }}
//       >
//         {imagesData.map((item) => (
//           <div
//             key={item._id}
//             className="relative w-full h-screen flex-shrink-0 bg-cover bg-center"
//             style={{
//               backgroundImage: `url(${item.src})`,
//             }}
//           >
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
//               <p className="text-lg font-light">{item.subtitle}</p>
//               <h1 className="text-4xl md:text-6xl font-bold mb-4">
//                 {item.title}
//               </h1>
//               <p className="text-sm md:text-lg max-w-2xl">{item.subtitle}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Indicators */}
//       <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {imagesData.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full ${
//               index === currentIndex ? "bg-white" : "bg-gray-500"
//             }`}
//             onClick={() => setCurrentIndex(index)}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";

export const CarouselHeader = ({ interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [interval]);

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden">
      {/* Background Image Slider */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {imagesData.map((item) => (
          <div
            key={item._id}
            className="relative w-full h-screen flex-shrink-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.src})`,
            }}
          ></div>
        ))}
      </div>

      {/* Fixed Text Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-4">
        <p className="text-lg font-light">
          {imagesData[currentIndex].subtitle}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {imagesData[currentIndex].title}
        </h1>
        <p className="text-sm md:text-lg max-w-2xl">
          {imagesData[currentIndex].description}
        </p>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {imagesData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};
