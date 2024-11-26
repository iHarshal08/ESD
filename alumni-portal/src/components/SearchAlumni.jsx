import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchAlumni } from "../Utils/api.js";
import SearchUI from "./presentation/SearchUI.jsx";

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
      const response = await searchAlumni(searchData);
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
    <SearchUI searchData={searchData} handleChange={handleChange} handleSubmit={handleSubmit} />
      );
}

export default SearchAlumni;
