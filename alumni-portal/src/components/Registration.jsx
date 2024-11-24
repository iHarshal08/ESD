import { useState } from "react";
import axios from "axios";

function Registration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactNo: "",
    degree: "",
    passingYear: "",
    joiningYear: "",
    collegeName: "",
    organization: "",
    position: "",
    address: "",
    joiningDate: "",
    leavingDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/alumni/register", formData);
      alert(response.data);
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h2 className="text-2xl font-bold">Register</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        {/* Add inputs for all form fields */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        {/* Repeat for all fields */}
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;
