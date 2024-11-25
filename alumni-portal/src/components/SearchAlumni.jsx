import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SearchAlumni() {
  const [searchData, setSearchData] = useState({
    passingYear: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/alumni/search", searchData);
      if (response.data) {
        navigate("/login", { state: { email: searchData.email } });
      } else {
        navigate("/register");
      }
    } catch (error) {
      console.error("Search failed", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-200">
      <div className="bg-blue-50 p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
          Search Alumni
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
              value={searchData.firstName}
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
              placeholder="Enter last name"
              value={searchData.lastName}
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
              placeholder="Enter email"
              value={searchData.email}
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
              type="number"
              name="passingYear"
              id="passingYear"
              placeholder="Enter passing year"
              value={searchData.passingYear}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchAlumni;
