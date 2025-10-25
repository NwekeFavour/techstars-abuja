import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f8f8] px-4 text-center">
      <div className="bg-white shadow-[0_0_15px_#a1a1a1] rounded-[20px] p-10 max-w-md w-full">
        <h1 className="text-[90px] md:text-[120px] font-extrabold text-[#242424] leading-none mb-4">
          404
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-[#444] mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block bg-[#242424] text-white font-semibold py-2 px-6 rounded-[10px] hover:bg-[#333] transition"
        >
          Go Home
        </Link>
      </div>

      <p className="text-gray-400 text-sm mt-6">
        © {new Date().getFullYear()} TechStars Abuja. All rights reserved.
      </p>
    </div>
  );
};

export default Error;
