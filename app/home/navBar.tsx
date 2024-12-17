"use client";
/* eslint-disable */

import React from "react";
import { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import SearchBar from "../components/formFields/searchField";
import LoginButton from "../components/button/loginButton";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (keyword: string) => {
    console.log("Searching for:", keyword);
    // Implement your search logic here (e.g., API call, filter results)
  };
  return (
    <div className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="https://res.cloudinary.com/dx7bdbfjt/image/upload/v1734323816/uploads/jdjt3v7kkmrtyvjee30c.png"
            alt="Logo"
            className="h-20"
          />
          {/* <span className="text-sm text-gray-500">Explore <span className="text-blue-500 font-bold">Plus</span></span> */}
        </div>

        {/* Search Section */}

        <SearchBar
          value={searchQuery}
          onSearch={handleSearch}
          placeholder="Search for Products, Brands and More"
          liveSearch={false} // Disable live search
        />

        {/* Icons and Menu */}
        <div className="flex items-center space-x-6">
          <LoginButton />

          {/* Cart Icon */}
          <div className="flex items-center text-gray-600 hover:text-blue-500">
            <AiOutlineShoppingCart size={20} />
            <span className="ml-1">Cart</span>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-gray-100 py-2">
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
      </div>
    </div>
  );
};

export default Navbar;
