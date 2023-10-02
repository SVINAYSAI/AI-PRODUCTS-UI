import React, { useState, useEffect } from "react";
import "../../../../Components/CSS/sketchfab.css";

const SketchfabSearch: React.FC = () => {
  const [data, setData] = useState<{
    next: string;
    thumbnail_images: { url: string }[];
  } | null>(null);

  const [searchQuery, setSearchQuery] = useState("house");
  const [triggerFetch, setTriggerFetch] = useState(true);
  const [loading, setLoading] = useState(false); // New loading state
  const [count, setCount] = useState(24); // New state for count
  const [cursor, setCursor] = useState(24); // New state for cursor
  const [nextClickCount, setNextClickCount] = useState(0); // New state to track the number of "Next" button clicks

  useEffect(() => {
    if (triggerFetch) {
      console.log("Triggering fetch with:", { searchQuery, count, cursor }); // Log the values being used
      const url = `http://localhost:5000/get_next_sketchfab_data?q=${searchQuery}&count=${count}&cursor=${cursor}`;
      console.log("URL:", url); // Log the URL being used
      setLoading(true); // Set loading to true when fetching data
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false); // Set loading to false when data is received
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false); // Set loading to false if an error occurs
        });
      setTriggerFetch(false);
    }
  }, [searchQuery, triggerFetch, count, cursor]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    setCount(24); // Reset count to initial value
    setCursor(0); // Reset cursor to initial value
    setTriggerFetch(true); // Trigger a new fetch
  };

  const handleNextClick = () => {
    setNextClickCount((prev) => prev + 1); // Increment the nextClickCount
    setCount((prev) => prev + 24); // Always increment count by 24
    if (nextClickCount >= 0) {
      setCursor((prev) => prev + 24); // Increment cursor by 24 if nextClickCount is 1 or more
    }
    setTriggerFetch(true); // Trigger a new fetch
  };

  const handleBackClick = () => {
    setCount((prev) => (prev - 24 >= 24 ? prev - 24 : prev)); // Decrement count by 24 if result is >= 24

    if (nextClickCount > 1) {
      setCursor((prev) => prev - 24); // Decrement cursor by 24 if nextClickCount > 1
    } else {
      setCursor(0); // Reset cursor to 0 if nextClickCount is 1 or less
    }

    if (nextClickCount > 0) {
      setNextClickCount((prev) => prev - 1); // Decrement nextClickCount if it's > 0
    }

    setTriggerFetch(true); // Trigger a new fetch
  };

  return (
    <>
      <div className="relative pt-[5%] w-[80%] bg-gray-50 lg:ml-64 dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-2 gap-4">
            <h1 className="text-2xl font-bold mb-4 pt-[3%]">Sketchfab Data</h1>
            <div className="" style={{ paddingLeft: "32%" }}>
              <div className="p-[1%] relative flex">
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
                  value={searchQuery} // Controlled input value
                  onChange={handleSearchChange} // New event handler for input changes
                  className="block w-full pl-10 p-[2%] text-sm text-gray-900 border border-gray-300 rounded-l-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
                <button
                  type="button"
                  onClick={handleSearchSubmit}
                  className="text-white bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          {loading ? (
            <div className="loading-icon-container">
              <div className="loading-icon"></div>
            </div>
          ) : data ? (
            <div
              className="container"
              style={{ maxHeight: "425px", overflowY: "auto" }}
            >
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
          <div className="pt-[1%] flex justify-center">
            <div className="fixed bottom-0">
              <button
                type="button"
                onClick={handleBackClick}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2 mr-4 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNextClick}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2 mr-4 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SketchfabSearch;
