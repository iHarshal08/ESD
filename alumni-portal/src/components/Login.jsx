import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Login() {
  const { state } = useLocation();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/alumni/login", {
        email: state.email,
        password,
      });
      setMessage(response.data === "Invalid Credential" ? "Incorrect Password" : "Login Successful");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h2 className="text-2xl font-bold">Login</h2>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-4 px-4 py-2 border rounded"
      />
      <button
        onClick={handleLogin}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Login
      </button>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
}

export default Login;
