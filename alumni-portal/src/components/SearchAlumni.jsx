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
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h2 className="text-2xl font-bold">Search Alumni</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={searchData.firstName}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={searchData.lastName}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={searchData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="number"
          name="passingYear"
          placeholder="Passing Year"
          value={searchData.passingYear}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchAlumni;
