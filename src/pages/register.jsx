import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Rocket, Eye, EyeOff, Loader2, CheckCircle2, XCircle } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Simple client-side validation
  const validateForm = () => {
    if (!form.name || !form.email || !form.password) {
      setMessage({ type: "error", text: "Please fill in all fields." });
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setMessage({ type: "error", text: "Please enter a valid email." });
      return false;
    }
    if (form.password.length < 6) {
      setMessage({ type: "error", text: "Password must be at least 6 characters." });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      // Simulate registration API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setMessage({ type: "success", text: "Account created successfully!" });
      setTimeout(() => navigate("/auth/login"), 2000);
    } catch (err) {
      setMessage({ type: "error", text: "Something went wrong. Try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f8f8] px-4">
      <div className="bg-white shadow-[0_0_15px_#a1a1a1] rounded-[20px] w-full max-w-md p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#242424] mb-6 flex items-center gap-3 justify-center">
          Create an Account <Rocket className="text-[#242424]" />
        </h2>

        {/* Feedback message */}
        {message.text && (
          <div
            className={`flex items-center gap-2 text-sm font-medium mb-4 p-3 rounded-md ${
              message.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.type === "success" ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
            {message.text}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[#444] font-medium mb-1">Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-[10px] border border-gray-300 focus:outline-none focus:border-[#242424]"
            />
          </div>

          <div>
            <label className="block text-[#444] font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-[10px] border border-gray-300 focus:outline-none focus:border-[#242424]"
            />
          </div>

          <div className="relative">
            <label className="block text-[#444] font-medium mb-1">Password</label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-[10px] border border-gray-300 focus:outline-none focus:border-[#242424] pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[35px] text-gray-500 hover:text-[#242424]"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 bg-[#242424] text-white font-semibold py-2 rounded-[10px] hover:bg-[#333] transition ${
              loading && "opacity-70 cursor-not-allowed"
            }`}
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-[#242424] font-semibold hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
