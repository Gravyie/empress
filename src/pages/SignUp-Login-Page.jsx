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

  const inputClasses = "text-white w-full px-4 py-3 border border-black/10 dark:border-white/10 bg-[#f8f9fa] dark:bg-black/60 text-sm placeholder:text-white/25 focus:outline-none focus:border-white/30 transition-colors";

  return (
    <div className="min-h-screen pt-12 pb-12 flex items-center justify-center px-4 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-10] brightness-[0.3]"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full max-w-sm">
        {/* Go Back Button */}
        <div className="mb-4">
          <button
            onClick={handleBack}
            className="text-xs uppercase tracking-wider text-gray-500 dark:text-white/40 hover:text-white transition-colors"
          >
            ← Go Back
          </button>
        </div>

        {/* Card */}
        <div className="bg-[#f8f9fa] dark:bg-black/40 backdrop-blur-xl border border-white/[0.08] p-7">
          <h2 className="text-lg font-semibold text-white mb-6">
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange("name")}
                className={inputClasses}
                required
              />
            )}
            <input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange("email")}
              className={inputClasses}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange("password")}
              className={inputClasses}
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-white hover:bg-gray-200 text-black text-xs uppercase tracking-[0.15em] font-semibold transition-colors"
            >
              {mode === "login" ? "Log in" : "Sign Up"}
            </button>
          </form>

          {mode === "login" && (
            <div className="text-center mt-3">
              <p className="text-xs text-gray-400 dark:text-white/30 hover:text-white/60 cursor-pointer transition-colors">
                Forgotten password?
              </p>
            </div>
          )}

          <div className="border-t border-white/[0.06] my-5" />

          {mode === "login" ? (
            <div className="text-center">
              <button
                onClick={() => setMode("signup")}
                className="w-full py-3 border border-white/15 text-gray-700 dark:text-white/70 hover:text-white hover:border-white/30 text-xs uppercase tracking-[0.15em] font-semibold transition-all"
              >
                Create new account
              </button>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-xs text-gray-400 dark:text-white/30 mb-3">
                Already have an account?
              </p>
              <button
                onClick={() => setMode("login")}
                className="w-full py-3 border border-white/15 text-gray-700 dark:text-white/70 hover:text-white hover:border-white/30 text-xs uppercase tracking-[0.15em] font-semibold transition-all"
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
