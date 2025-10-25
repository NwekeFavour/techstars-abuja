import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation for demo
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    console.log("Logging in with:", formData);
    // Add your login logic here (API call or Firebase auth, etc.)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f8f8] px-4">
      <div className="bg-white shadow-[0_0_15px_#a1a1a1] rounded-[20px] w-full max-w-md p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#242424] mb-6">
          Welcome Back 👋
        </h2>

        {error && (
          <div className="bg-red-100 text-red-600 text-sm p-3 rounded-lg mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[#444] font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-[10px] border border-gray-300 focus:outline-none focus:border-[#242424]"
            />
          </div>

          <div>
            <label className="block text-[#444] font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full px-4 py-2 rounded-[10px] border border-gray-300 focus:outline-none focus:border-[#242424]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#242424] text-white font-semibold py-2 rounded-[10px] hover:bg-[#333] transition"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-5">
          Don’t have an account?{" "}
          <Link
            to="/auth/register"
            className="text-[#242424] font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
