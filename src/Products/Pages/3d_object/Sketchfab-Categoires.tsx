import React, { useEffect, useState } from "react";
import axios from "axios";

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("https://www.aifats.com/api/categories")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Filter data based on the search query
    const filtered = data.filter((category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery, data]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      {/* <div className="relative pt-[5%] w-[80%] bg-gray-50 lg:ml-64 dark:bg-gray-900"
      > */}
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-2 gap-4">
          <h1 className="text-2xl font-bold mb-4 pt-[3%]">Categories</h1>
          <div className="fables-blog-search">
            <div className="container w-full p-[1%] relative flex">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full pl-10 p-[2%] text-sm text-gray-900 border border-gray-300 rounded-l-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="text-white bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : filteredData.length === 0 ? (
          <p>No matching data found.</p>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {filteredData.map((category: any, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <img
                  src={category.thumbnails[0].url}
                  alt={category.name}
                  className="w-full h-auto mb-2 rounded-md"
                />
                <p className="text-lg font-semibold text-center">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="pt-[2%] p-[2%] flex justify-center">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Back
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Next
        </button>
      </div>
      {/* </div> */}
    </>
  );
};

export default App;
