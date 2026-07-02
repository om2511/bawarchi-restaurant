import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../api/authApi";
import { useAuth } from "../context/AuthContext";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await loginAdmin(email, password);
      login(data);
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-gradient px-6 relative overflow-hidden">
      
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-teal-900/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-olive-700/20 rounded-full blur-3xl pointer-events-none" />

      <form
        onSubmit={handleSubmit}
        className="bg-cream-100/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 w-full max-w-sm border border-teal-100/30 relative z-10 flex flex-col items-center"
      >
        {/* Brand Logo */}
        <div className="mb-6 flex flex-col items-center">
          <img
            src="/images/logo.jpg"
            alt="Bawarchi Restaurant & Banquet Logo"
            className="h-16 w-16 rounded-full object-cover border border-olive-300 shadow-md mb-3"
          />
          <h1 className="font-display text-4xl text-teal-900 leading-none">Bawarchi</h1>
          <p className="text-olive-600 font-heading text-[10px] tracking-widest uppercase mt-1">Management Portal</p>
        </div>

        {/* Input fields */}
        <div className="w-full space-y-4">
          
          {/* Email input */}
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-teal-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </span>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-teal-200 focus:outline-none focus:border-teal-600 text-sm bg-white"
            />
          </div>

          {/* Password input */}
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-teal-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-teal-200 focus:outline-none focus:border-teal-650 text-sm bg-white"
            />
          </div>
        </div>

        {/* Error message */}
        {error && (
          <p className="text-red-600 text-xs mt-3 text-center font-medium bg-red-50 border border-red-100 rounded-lg py-1.5 px-3 w-full">
            {error}
          </p>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-teal-950 font-heading font-bold py-3 rounded-full mt-6 shadow-glow transition-all active:scale-95"
        >
          {loading ? "Verifying..." : "Access Dashboard"}
        </button>

      </form>
    </div>
  );
}