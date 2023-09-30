import React, { useState, useEffect } from "react";

const SketchfabSearch: React.FC = () => {
  const [data, setData] = useState<{
    next: string;
    thumbnail_images: { url: string }[];
  } | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/get_sketchfab_data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {/* <div className="relative pt-[5%] w-[80%] bg-gray-50 lg:ml-64 dark:bg-gray-900"> */}
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">
            <h1 className="text-2xl font-bold mb-4 pt-[3%]">Sketchfab Data</h1>
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
          {data ? (
            <div>
              <p className="mb-2">Next URL: {data.next}</p>
              <div className="grid grid-cols-4 gap-4">
                {data.thumbnail_images.map((image, index) => (
                  <div key={index} className="mb-1">
                    {image ? (
                      <a
                        href={image.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                      >
                        <img src={image.url} alt={`Thumbnail ${index}`} />
                      </a>
                    ) : (
                      <p>No image available</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      {/* </div> */}
    </>
  );
};

export default SketchfabSearch;
