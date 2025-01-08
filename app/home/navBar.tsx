// 'use client';

// /* eslint-disable */

// import React from "react";
// import { useState } from "react";
// import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
// import { BiChevronDown } from "react-icons/bi";
// import SearchBar from "../components/formFields/searchField";
// import LoginButton from "../components/button/loginButton";
// import CartComponent from "../components/card/CartComponent";
// import { useRouter } from "next/router";

// const Navbar = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const router = useRouter();
//   const handleButtonClick = () => {
//       router.push('/cart');
//   };

// const handleSearch = (keyword: string) => {
//   console.log("Searching for:", keyword);
//   // Implement your search logic here (e.g., API call, filter results)
// };
// const logo='https://res.cloudinary.com/dx7bdbfjt/image/upload/v1697117558/ocujkbocis4r09hftbiu.png'

// const [isCartOpen, setIsCartOpen] = useState(false);

// const openCart = () => setIsCartOpen(true);
// const closeCart = () => setIsCartOpen(false);

//   const toggleCart = () => setIsCartOpen(!isCartOpen);

//   return (
//     <div className="bg-transparent bg-opacity-15 backdrop-blur-md  shadow-sm ">
//       <div className="container mx-auto flex items-center justify-between py-2 px-4">
//         {/* Logo Section */}
//         <div className="flex items-center space-x-2">
//           <img
//             src={logo}
//             alt="Logo"
//             className="h-20"
//           />
//           {/* <span className="text-sm text-gray-500">Explore <span className="text-blue-500 font-bold">Plus</span></span> */}
//         </div>

//         {/* Search Section */}

//         <SearchBar
//           value={searchQuery}
//           onSearch={handleSearch}
//           placeholder="Search for Products, Brands and More"
//           liveSearch={false} // Disable live search
//         />

//         {/* Icons and Menu */}
//         <div className="flex items-center space-x-6">
//           <LoginButton />

//           {/* Cart Icon */}
//           {/* <div className="flex items-center text-gray-600 hover:text-blue-500">
//             <AiOutlineShoppingCart size={20} />
//             <span className="ml-1">Cart</span>
//           </div> */}

//           {/* //.................................. */}

//              {/* Cart Button */}
//       {/* <div
//         className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer"
//         onClick={toggleCart}
//       >
//         <AiOutlineShoppingCart size={20} />
//         <span className="ml-1">Cart</span>
//       </div>
//       {isCartOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 mt-80">
//           <div className="relative bg-white rounded-lg shadow-lg  w-full max-w-7xl">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-black"
//               onClick={toggleCart}
//             >
//               ✕
//             </button>
//             <CartComponent />
//           </div>
//         </div>
//       )} */}

// <div>
//       {/* Cart Button */}
//       <div
//         className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer"
//         onClick={handleButtonClick}
//         // onClick={openCart}
//       >
//         <AiOutlineShoppingCart size={20} />
//         <span className="ml-1">Cart</span>
//       </div>

//       {/* Show CartComponent if isCartOpen is true */}
//       {isCartOpen && <CartComponent  />}
//       {/* {isCartOpen && <CartComponent onClose={closeCart} />} */}
//     </div>

//           {/* //.................................. */}
//         </div>
//       </div>

//       {/* Categories Section */}
//       <div className="bg-gray-100 py-2">
//         <div className="container mx-auto flex items-center justify-between px-4">
//           {[
//             "Grocery",
//             "Mobiles",
//             "Fashion",
//             "Electronics",
//             "Home & Furniture",
//             "Appliances",
//             "Flight Bookings",
//             "Beauty, Toys & More",
//             "Two Wheelers",
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="flex items-center text-sm text-gray-700 hover:text-blue-500 cursor-pointer"
//             >
//               <span>{item}</span>
//               {item === "Fashion" ||
//               item === "Electronics" ||
//               item === "Home & Furniture" ||
//               item === "Two Wheelers" ? (
//                 <BiChevronDown size={18} className="ml-1" />
//               ) : null}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
//.....................................................................................................................................................

"use client"; // This directive ensures this code is run client-side in the Next.js App Router

import { useState } from "react";
import { useRouter } from "next/navigation";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import { BiChevronDown } from "react-icons/bi";

import { AiOutlineShoppingCart } from "react-icons/ai";
import CartComponent from "../components/card/CartComponent";
// import SearchBar from "../components/formFields/searchField";
import LoginButton from "../components/button/loginButton";

const Navbar = () => {
  /* eslint-disable */

  const [isCartOpen, setIsCartOpen] = useState(false);
  /* eslint-enable */
  // const [searchQuery, setSearchQuery] = useState("");

  // const toggleCart = () => setIsCartOpen(!isCartOpen);

  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/cart");
  };
  // const handleSearch = (keyword: string) => {
  //   // console.log("Searching for:", keyword);
  //   // Implement your search logic here (e.g., API call, filter results)
  // };
  const logo =
    "https://res.cloudinary.com/dx7bdbfjt/image/upload/v1697117558/ocujkbocis4r09hftbiu.png";

  // const openCart = () => setIsCartOpen(true);
  // const closeCart = () => setIsCartOpen(false);

  //   return (
  //     <div>
  //       <button onClick={handleButtonClick}  className="btn bg-red-700">
  //         Go to Cart
  //       </button>
  //     </div>
  //   );
  // };
  return (
    <div className="bg-transparent bg-opacity-15 backdrop-blur-md  shadow-sm ">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-20" />
          {/* <span className="text-sm text-gray-500">Explore <span className="text-blue-500 font-bold">Plus</span></span> */}
        </div>

        {/* Search Section */}

        {/* <SearchBar
          value={searchQuery}
          onSearch={handleSearch}
          placeholder="Search for Products, Brands and More"
          liveSearch={false} // Disable live search
        /> */}

        {/* Icons and Menu */}
        <div className="flex items-center space-x-6">
          <LoginButton />

          {/* Cart Icon */}
          {/* <div className="flex items-center text-gray-600 hover:text-blue-500">
            <AiOutlineShoppingCart size={20} />
            <span className="ml-1">Cart</span>
          </div> */}

          {/* //.................................. */}

          {/* Cart Button */}
          {/* <div
        className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer"
        onClick={toggleCart}
      >
        <AiOutlineShoppingCart size={20} />
        <span className="ml-1">Cart</span>
      </div>
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 mt-80">
          <div className="relative bg-white rounded-lg shadow-lg  w-full max-w-7xl">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={toggleCart}
            >
              ✕
            </button>
            <CartComponent />
          </div>
        </div>
      )} */}

          <div>
            {/* Cart Button */}
            <div
              className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer"
              onClick={handleButtonClick}
              // onClick={openCart}
            >
              <AiOutlineShoppingCart size={20} />
              <span className="ml-1">Cart</span>
            </div>

            {/* Show CartComponent if isCartOpen is true */}
            {isCartOpen && (
              <div className="-mt-72 -pt-96">
                {" "}
                <CartComponent />
              </div>
            )}
            {/* {isCartOpen && <CartComponent onClose={closeCart} />} */}
          </div>

          {/* //.................................. */}
        </div>
      </div>

      {/* Categories Section */}
      {/* <div className="bg-gray-100 py-2">
        <div className="container mx-auto flex items-center justify-between px-4">
          {[
            "Grocery",
            "Mobiles",
            "Fashion",
            "Electronics",
            "Home & Furniture",
            "Appliances",
            "Flight Bookings",
            "Beauty, Toys & More",
            "Two Wheelers",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center text-sm text-gray-700 hover:text-blue-500 cursor-pointer"
            >
              <span>{item}</span>
              {item === "Fashion" ||
              item === "Electronics" ||
              item === "Home & Furniture" ||
              item === "Two Wheelers" ? (
                <BiChevronDown size={18} className="ml-1" />
              ) : null}
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;

//.......................................................................................................................................

// 'use client';

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import CartComponent from "../components/card/CartComponent";
// import SearchBar from "../components/formFields/searchField";
// import LoginButton from "../components/button/loginButton";

// const Navbar = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isMounted, setIsMounted] = useState(false);
//   const router = useRouter();  // Call useRouter directly inside the component

//   // UseEffect to ensure we are only running client-side logic after mounting
//   useEffect(() => {
//     setIsMounted(true);  // Mark component as mounted
//   }, []);

//   const handleButtonClick = () => {
//     if (router) {
//       router.push("/cart");  // Use router directly as it's now available
//     }
//   };

//   const handleSearch = (keyword: string) => {
//     console.log("Searching for:", keyword);
//     // Implement your search logic here (e.g., API call, filter results)
//   };

//   const logo = "https://res.cloudinary.com/dx7bdbfjt/image/upload/v1697117558/ocujkbocis4r09hftbiu.png";
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const toggleCart = () => setIsCartOpen(!isCartOpen);

//   // Render nothing or a loading indicator while waiting for the component to mount
//   if (!isMounted) {
//     return null; // Or render a loading spinner
//   }

//   return (
//     <div className="bg-transparent bg-opacity-15 backdrop-blur-md shadow-sm">
//       <div className="container mx-auto flex items-center justify-between py-2 px-4">
//         {/* Logo Section */}
//         <div className="flex items-center space-x-2">
//           <img src={logo} alt="Logo" className="h-20" />
//         </div>

//         {/* Search Section */}
//         <SearchBar
//           value={searchQuery}
//           onSearch={handleSearch}
//           placeholder="Search for Products, Brands and More"
//           liveSearch={false} // Disable live search
//         />

//         {/* Icons and Menu */}
//         <div className="flex items-center space-x-6">
//           <LoginButton />

//           {/* Cart Button */}
//           <div
//             className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer"
//             onClick={handleButtonClick} // Directly use the router.push
//           >
//             <AiOutlineShoppingCart size={20} />
//             <span className="ml-1">Cart</span>
//           </div>

//           {/* Show CartComponent if isCartOpen is true */}
//           {isCartOpen && <CartComponent />}
//         </div>
//       </div>

//       {/* Categories Section */}
//       <div className="bg-gray-100 py-2">
//         <div className="container mx-auto flex items-center justify-between px-4">
//           {[
//             "Grocery",
//             "Mobiles",
//             "Fashion",
//             "Electronics",
//             "Home & Furniture",
//             "Appliances",
//             "Flight Bookings",
//             "Beauty, Toys & More",
//             "Two Wheelers",
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="flex items-center text-sm text-gray-700 hover:text-blue-500 cursor-pointer"
//             >
//               <span>{item}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
