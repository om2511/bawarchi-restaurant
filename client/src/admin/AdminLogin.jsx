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
    <div className="min-h-screen flex items-center justify-center bg-teal-gradient px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-cream-100 rounded-2xl shadow-card p-8 w-full max-w-sm"
      >
        <h1 className="font-display text-4xl text-teal-900 text-center mb-1">Bawarchi</h1>
        <p className="text-center text-teal-700/70 text-sm mb-6">Admin Login</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-teal-200 rounded-lg px-4 py-3 text-sm mb-4 focus:outline-none focus:border-teal-600"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border border-teal-200 rounded-lg px-4 py-3 text-sm mb-4 focus:outline-none focus:border-teal-600"
        />
        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-teal-900 font-heading font-semibold py-3 rounded-full transition-colors"
        >
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>
    </div>
  );
}