import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../Utils/api.js";
import LoginUI from "./presentation/LoginUI.jsx";

function Login() {
  const { state } = useLocation();
  const [email, setEmail] = useState(state?.email || ""); 
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await loginUser(email, password);//api call
      setMessage(response.data === "Invalid Credential" ? "Incorrect Password" : "Login Successful");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <LoginUI
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
      message={message}
    />
  );
}

export default Login;