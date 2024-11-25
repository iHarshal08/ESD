import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-600">Alumni Portal</h1>   
      <div className="mt-10 space-x-4">
        <Link
          to="/search"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Search Alumni
        </Link>
      </div>   
      <h5 className="text-4xl font-semibold text-gray-800 mt-10 mb-4"> Welcome to the Alumni Portal! </h5>
      <p className="text-xl text-center text-gray-600 mb-6"> Stay connected, & explore opportunities..... </p>
      
    </div>
  );
}

export default Home;
