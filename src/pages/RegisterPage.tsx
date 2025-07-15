import { Link } from "react-router";

function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-gray-700 shadow-lg rounded-xl px-8 py-10 w-full max-w-sm flex flex-col items-center space-y-6">
        <h1 className="text-2xl font-bold text-gray-100">Register</h1>

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-300 mb-1 text-center">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="w-full px-4 py-2 border text-gray-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
            required
          />
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-300 mb-1 text-center">
            Repete Password
          </label>
          <input
            type="password"
            name="password"
            className="w-full px-4 py-2 border text-gray-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Register
        </button>
        <Link to="/login" className="text-gray-300 hover:underline">
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
}

export default RegisterPage;
