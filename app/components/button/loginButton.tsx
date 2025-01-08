"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineUser } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

const LoginButton = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("user/login");
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsLoginOpen(!isLoginOpen)}
        className="flex items-center text-gray-600 hover:text-blue-500"
      >
        <AiOutlineUser size={20} />
        <span className="ml-1">Login</span>
        <BiChevronDown size={18} />
      </button>
      {isLoginOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg">
          <button
            onClick={handleLoginClick}
            className="block w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-100"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginButton;
