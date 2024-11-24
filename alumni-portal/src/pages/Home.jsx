import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-600">Alumni Portal</h1>
      <div className="mt-6 space-x-4">
        <Link
          to="/search"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Search Alumni
        </Link>
      </div>
    </div>
  );
}

export default Home;
