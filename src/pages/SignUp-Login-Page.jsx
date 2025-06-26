import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function SignupLoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "signup" && !form.name) {
      alert("Please enter your name to sign up.");
      return;
    }
    login(form);
    navigate("/account");
  };

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-[65vh] flex items-center justify-center px-4">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-10]"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full max-w-sm">
        {/* Go Back Button */}
        <div className="mb-4">
          <button
            onClick={handleBack}
            className="text-sm text-gray-400 hover:text-gray-600 hover:underline"
          >
            ← Go Back
          </button>
        </div>

        {/* Card */}
        <div className="bg-transparent p-6 rounded-xl shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange("name")}
                className="text-white w-full px-4 py-2 border border-gray-500 rounded-md bg-[#1a1a2f] focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            )}
            <input
              type="email"
              placeholder="Email address or phone number"
              value={form.email}
              onChange={handleChange("email")}
              className="text-white w-full px-4 py-2 border border-gray-500 rounded-md bg-[#1a1a2f] focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange("password")}
              className="text-white w-full px-4 py-2 border border-gray-500 rounded-md bg-[#1a1a2f] focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className={`w-full py-2 font-semibold rounded-md transition ${
                mode === "login"
                  ? "bg-[#F47C5A] hover:bg-orange-500 text-white"
                  : "bg-[#F47C5A] hover:bg-orange-500 text-white"
              }`}
            >
              {mode === "login" ? "Log in" : "Sign Up"}
            </button>
          </form>

          {mode === "login" && (
            <div className="text-center mt-3">
              <p className="text-sm text-blue-800 hover:underline cursor-pointer">
                Forgotten password?
              </p>
            </div>
          )}

          <hr className="my-4" />

          {mode === "login" ? (
            <div className="text-center">
              <button
                onClick={() => setMode("signup")}
                className="w-full bg-white hover:bg-gray-300 text-[#F47C5A] font-semibold py-2 rounded-md transition"
              >
                Create new account
              </button>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">
                Already have an account?
              </p>
              <button
                onClick={() => setMode("login")}
                className="w-full bg-white hover:bg-gray-300 text-[#F47C5A] font-semibold py-2 rounded-md transition"
              >
                Back to Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
