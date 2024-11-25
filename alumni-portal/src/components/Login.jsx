import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Login() {
  const { state } = useLocation();
  const [email, setEmail] = useState(state?.email || ""); 
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/alumni/login", {
        email,
        password,
      });
      setMessage(response.data === "Invalid Credential" ? "Incorrect Password" : "Login Successful");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen bg-blue-200">
      <div className="bg-blue-50 p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Login</h2>
        <form>
        <p className="text-lg text-center text-gray-600 mb-4">
        Access your account and reconnect with the alumni network.
      </p>
      <p className="text-md text-center text-gray-600 mb-6">
        Log in to access your personalized dashboard.
      </p>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        {message && (
          <p className={`mt-4 text-center ${message.includes("Successful") ? "text-green-500" : "text-red-500"}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;