import React, { useState, useEffect } from "react";
import "../../../../components/CSS/sketchfab.css";
import ModelViewerModal from "./k"; // Import the modal component
import { Link } from "react-router-dom";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const SketchfabSearch: React.FC = () => {
  const [data, setData] = useState<{
    next: string;
    thumbnail_images: { url: string }[];
    models: { name: string; viewerUrl: string; uid: string }[];
  } | null>(null);

  const [searchQuery, setSearchQuery] = useState("house");
  const [triggerFetch, setTriggerFetch] = useState(true);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(24);
  const [cursor, setCursor] = useState(24);
  const [nextClickCount, setNextClickCount] = useState(0);
  const [modelName, setModelName] = useState<string | null>(null);
  const [glbUrl, setGlbUrl] = useState<string | null>(null);
  const [gltfUrl, setGltfUrl] = useState<string | null>(null);
  const [sourceUrl, setSourceUrl] = useState<string | null>(null);
  const [usdzUrl, setUsdzUrl] = useState<string | null>(null);
  const [modelDescription, setModelDescription] = useState<string | null>(null); // Define and initialize the modelDescription state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModelUid, setSelectedModelUid] = useState<string | null>(null);
  const [glbSize, setGlbSize] = useState<number | null>(null);
  const [gltfSize, setGltfSize] = useState<number | null>(null);
  const [sourceSize, setSourceSize] = useState<number | null>(null);
  const [usdzSize, setUsdzSize] = useState<number | null>(null);

  useEffect(() => {
    if (triggerFetch) {
      console.log("Triggering fetch with:", { searchQuery, count, cursor });
      const url = `https://www.aifats.com/api/get_next_sketchfab_data?q=${searchQuery}&count=${count}&cursor=${cursor}`;
      console.log("URL:", url);
      setLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
      setTriggerFetch(false);
    }
  }, [searchQuery, triggerFetch, count, cursor]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    setCount(24);
    setCursor(0);
    setTriggerFetch(true);
  };

  const handleNextClick = () => {
    setNextClickCount((prev) => prev + 1);
    setCount((prev) => prev + 24);
    if (nextClickCount >= 0) {
      setCursor((prev) => prev + 24);
    }
    setTriggerFetch(true);
  };

  const handleBackClick = () => {
    setCount((prev) => (prev - 24 >= 24 ? prev - 24 : prev));

    if (nextClickCount > 1) {
      setCursor((prev) => prev - 24);
    } else {
      setCursor(0);
    }

    if (nextClickCount > 0) {
      setNextClickCount((prev) => prev - 1);
    }

    setTriggerFetch(true);
  };

  const handleThumbnailClick = (modelUid: string) => {
    fetch(`https://www.aifats.com/api/get_download_info?uid=${modelUid}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Handle the download information (e.g., display size)
        console.log("Download Info:", data);

        setGlbUrl(data.glb.url);
        setGltfUrl(data.gltf.url);
        setSourceUrl(data.source.url);
        setUsdzUrl(data.usdz.url);
        // Ensure that the size values are converted to numbers
        const glbSize = parseFloat(data.glb.size);
        const gltfSize = parseFloat(data.gltf.size);
        const sourceSize = parseFloat(data.source.size);
        const usdzSize = parseFloat(data.usdz.size);

        // Now, you can use these numeric values to display the download size
        setGlbSize(glbSize);
        setGltfSize(gltfSize);
        setSourceSize(sourceSize);
        setUsdzSize(usdzSize);
      })
      .catch((error) => {
        console.error("Error fetching download information:", error);
        // Handle the error, e.g., show an error message to the user
      });

    // Send a request to fetch the model description
    fetch(
      `https://www.aifats.com/api/sketchfab/get_model_description?uid=${modelUid}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const description = data.description || "No description available"; // Provide a default if description is missing
        const name = data.name || "no name";
        setModelDescription(description);
        setModelName(name);
        setSelectedModelUid(modelUid);
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.error("Error fetching model description:", error);
        // Handle the error, e.g., show an error message to the user
      });
  };

  function formatSize(sizeInBytes: number | null): string {
    if (sizeInBytes === null) {
      return "N/A";
    }

    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(sizeInBytes) / Math.log(1024));

    if (i === 0) {
      return `${sizeInBytes} ${sizes[i]}`;
    }

    return `${(sizeInBytes / 1024 ** i).toFixed(2)} ${sizes[i]}`;
  }

  return (
    <>
      <main className="p-4 md:ml-64 h-auto pt-20 mt-[5%]">
        <div className="container">
          <div className="grid grid-cols-2 gap-4">
            <h1 className="text-2xl font-bold mb-4 pt-[3%]">3D Models</h1>
            <div className="">
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
                  value={searchQuery}
                  onChange={handleSearchChange}
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
                  <div
                    key={index}
                    className="mb-1"
                    onClick={() => handleThumbnailClick(data.models[index].uid)}
                  >
                    {image ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                      >
                        <img src={image.url} alt={`Thumbnail ${index}`} />
                        <p className="text-center text-sm mt-1">
                          {data.models[index].name}
                        </p>
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
      </main>
      {/* Modal for model viewer */}
      {isModalOpen && selectedModelUid && (
        <ModelViewerModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          modelUid={selectedModelUid}
          modelDescription={modelDescription}
          modelName={modelName}
          formatDetails={{
            glb: {
              size: glbSize !== null ? formatSize(glbSize) : "N/A",
              url: glbUrl,
            },
            gltf: {
              size: gltfSize !== null ? formatSize(gltfSize) : "N/A",
              url: gltfUrl,
            },
            source: {
              size: sourceSize !== null ? formatSize(sourceSize) : "N/A",
              url: sourceUrl,
            },
            usdz: {
              size: usdzSize !== null ? formatSize(usdzSize) : "N/A",
              url: usdzUrl,
            },
          }}
        />
      )}
    </>
  );
};

export default SketchfabSearch;
