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
    workStatus: "working", // Default to 'working'
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
    <div className="flex justify-center items-center min-h-screen bg-blue-200">
      <div className="bg-blue-50 p-8 rounded-lg mt-14 mb-14 shadow-md w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Alumni Registration
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label htmlFor="contactNo" className="block text-sm font-medium text-gray-600">
              Contact Number
            </label>
            <input
              type="text"
              name="contactNo"
              id="contactNo"
              placeholder="Enter your contact number"
              value={formData.contactNo}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Degree */}
          <div>
            <label htmlFor="degree" className="block text-sm font-medium text-gray-600">
              Degree
            </label>
            <input
              type="text"
              name="degree"
              id="degree"
              placeholder="Enter your degree"
              value={formData.degree}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Passing Year */}
          <div>
            <label htmlFor="passingYear" className="block text-sm font-medium text-gray-600">
              Passing Year
            </label>
            <input
              type="text"
              name="passingYear"
              id="passingYear"
              placeholder="Enter your passing year"
              value={formData.passingYear}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Joining Year */}
          <div>
            <label htmlFor="joiningYear" className="block text-sm font-medium text-gray-600">
              Joining Year
            </label>
            <input
              type="text"
              name="joiningYear"
              id="joiningYear"
              placeholder="Enter your joining year"
              value={formData.joiningYear}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* College Name */}
          <div>
            <label htmlFor="collegeName" className="block text-sm font-medium text-gray-600">
              College Name
            </label>
            <input
              type="text"
              name="collegeName"
              id="collegeName"
              placeholder="Enter your college name"
              value={formData.collegeName}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Organization */}
          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-gray-600">
              Organization
            </label>
            <select
              name="organization"
              id="organization"
              value={formData.organization}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Organization</option>
              <option value="Google">Google</option>
              <option value="Microsoft">Microsoft</option>
              <option value="Amazon">Amazon</option>
              <option value="Apple">Apple</option>
            </select>
          </div>

          {/* Work Status */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Work Status</label>
            <div className="mt-1 flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="workStatus"
                  value="working"
                  checked={formData.workStatus === "working"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Working
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="workStatus"
                  value="worked"
                  checked={formData.workStatus === "worked"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Worked
              </label>
            </div>
          </div>

          {/* Joining Date */}
          <div>
            <label htmlFor="joiningDate" className="block text-sm font-medium text-gray-600">
              Joining Date
            </label>
            <input
              type="date"
              name="joiningDate"
              id="joiningDate"
              value={formData.joiningDate}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Leaving Date */}
          <div>
            <label htmlFor="leavingDate" className="block text-sm font-medium text-gray-600">
              Leaving Date
            </label>
            <input
              type="date"
              name="leavingDate"
              id="leavingDate"
              value={formData.leavingDate}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Position */}
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-600">
              Position
            </label>
            <select
              name="position"
              id="position"
              value={formData.position}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Position</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Team Lead">Team Lead</option>
              <option value="Manager">Manager</option>
              <option value="Intern">Intern</option>
            </select>
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">
              Address
            </label>
            <textarea
              name="address"
              id="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
