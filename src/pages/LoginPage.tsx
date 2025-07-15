import { useState, useEffect } from "react";
import { Link } from "react-router";
import { loginUser } from "../services/api";

function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [submit, setSubmit] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmit(submit + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await loginUser(formData.username, formData.password);
        localStorage.setItem("token", response.token);

        const protectedRes = await fetch("http://localhost:8000/protected", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!protectedRes.ok) {
          console.error("Unauthorized access to protected route");
          return;
        }

        const message = await protectedRes.text();
        console.log("Protected route says:", message);
      } catch (error) {
        console.error("Login or protected fetch failed:", error);
      }
    };

    if (submit) {
      fetchData();
    }
  }, [submit]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-700 shadow-lg rounded-xl px-8 py-10 w-full max-w-sm flex flex-col items-center space-y-6">
        <h1 className="text-2xl font-bold text-gray-100">Login</h1>

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-300 mb-1 text-center">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="w-full px-4 py-2 border text-gray-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            required
          />
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-300 mb-1 text-center">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="w-full px-4 py-2 border text-gray-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          onClick={handleSubmit}
        >
          Login
        </button>
        <Link to="/register" className="text-gray-300 hover:underline">
          Don't have an account? Register
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
