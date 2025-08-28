import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../../api/auth";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const response = await register(username, email, password, fullName);
      setSuccess(
        response.message ||
          "Registration successful! Please check your email to verify your account."
      );
      setTimeout(() => {
        navigate("/admin/login");
      }, 3000);
    } catch (err) {
      setError(err.message || "An error occurred during registration.");
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="bg-white/10 shadow-xl rounded-2xl p-10 w-[350px] text-white flex flex-col gap-4 backdrop-blur-md">
        <div className="mb-2">
          <span className="text-sm text-gray-300 tracking-wider">
            CREATE AN ACCOUNT
          </span>
          <h2 className="mt-2 text-lg font-semibold">Sign up to get started</h2>
        </div>
        {error && (
          <div className="bg-red-500 text-white p-2 rounded">{error}</div>
        )}
        {success && (
          <div className="bg-green-500 text-white p-2 rounded">{success}</div>
        )}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label
            htmlFor="fullName"
            className="mt-3 text-sm text-white text-left"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="John Doe"
            className="w-full px-3 py-2 mt-1 mb-2 rounded-lg border border-blue-400 bg-white/20 text-white placeholder-black focus:outline-none"
            style={{ "::placeholder": { color: "black" } }}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <label
            htmlFor="username"
            className="mt-3 text-sm text-white text-left"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="johndoe"
            className="w-full px-3 py-2 mt-1 mb-2 rounded-lg border border-blue-400 bg-white/20 text-white placeholder-black focus:outline-none"
            style={{ "::placeholder": { color: "black" } }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="email" className="mt-3 text-sm text-white text-left">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="johnsandoe8@mail.com"
            className="w-full px-3 py-2 mt-1 mb-2 rounded-lg border border-blue-400 bg-white/20 text-white placeholder-black focus:outline-none"
            style={{ "::placeholder": { color: "black" } }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label
            htmlFor="password"
            className="mt-2 text-sm text-white text-left"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="************"
              autoComplete="new-password"
              className="w-full px-3 py-2 mt-1 mb-2 rounded-lg border border-blue-400 bg-white/20 text-white placeholder-black focus:outline-none pr-10"
              style={{ "::placeholder": { color: "black" } }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black hover:text-gray-800 z-10"
              aria-label={showPassword ? "Hide password" : "Show password"}
              tabIndex={-1}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1.5 12s4-7 10.5-7 10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12z"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-[#FD7401] text-white rounded-lg font-semibold text-base hover:bg-orange-500 transition"
          >
            CREATE ACCOUNT
          </button>
        </form>
        <p className="text-center text-sm text-white mt-4">
          Already have an account?{" "}
          <a href="/admin/login" className="text-orange-400 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
