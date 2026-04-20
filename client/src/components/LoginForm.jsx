import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff, Loader2, Loader2Icon } from "lucide-react";
import LoginLeftSide from "./LoginLeftSide";

const LoginForm = ({ role = "user", title, subtitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

   
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />

      <div className="w-full md:w-1/2 flex items-center justify-center bg-slate-50 p-6 sm:p-12 lg:p-16 relative">
        <Link
          to="/login"
          className="absolute top-6 left-6 flex items-center gap-2 text-slate-400 hover:text-indigo-600 transition"
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">Back to Portal</span>
        </Link>

        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-indigo-500/90 to-purple-500/90 text-white shadow-sm tracking-wide">
              <span className="font-bold">{role.toUpperCase()}</span>
            </span>
          </div>

          <div className="mb-6">
            <h2 className="text-3xl font-bold text-slate-800">{title}</h2>
            <p className="text-slate-500 mt-2">{subtitle}</p>
          </div>

          {error && (
            <div className="mt-4 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 shadow-sm animate-fade-in">
              <svg
                className="w-5 h-5 mt-0.5 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.72-1.36 3.485 0l6.516 11.59c.75 1.335-.213 2.99-1.742 2.99H3.483c-1.53 0-2.492-1.655-1.743-2.99l6.517-11.59zM11 14a1 1 0 10-2 0 1 1 0 002 0zm-1-2a1 1 0 01-1-1V8a1 1 0 012 0v3a1 1 0 01-1 1z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="font-medium">{error}</span>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder={`Enter your ${role} email`}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-slate-600 mb-1">
                Password
              </label>

              <input
                type={showpassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-9 text-slate-500 hover:text-indigo-600"
              >
                {showpassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-indigo-600/90 backdrop-blur text-white font-semibold hover:bg-indigo-700 transition shadow-md flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                "Continue"
              )}
            </button>
          </form>

          <p className="text-center text-sm text-slate-400 mt-6">
            Secure access for authorized users only
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
