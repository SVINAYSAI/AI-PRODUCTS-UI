import React, { useEffect, useState } from "react";
import loadImagePaths from "./loadImages";
import loadVideoPaths from "./loadVideos";

interface BackgroundProps {
  onMediaSelected: (path: string) => void;
}


export default function Background({ onMediaSelected }: BackgroundProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [imagePaths, setImagePaths] = useState<string[]>([]);
  const [videoPaths, setVideoPaths] = useState<string[]>([]);
  const [clickedPath, setClickedPath] = useState<string | null>(null);
  // const BASE_DIR =
  //   "D:\\MY UI\\NEW\\AI-PRODUCTS-UI\\src\\components\\assets\\background video\\images\\";

  const BASE_DIR = "C:\\Users\\mahesh\\Desktop\\AI-PRODUCTS-UI\\AI-PRODUCTS-UI\\src\\components\\assets\\background video\\images\\";



  const [selectedMedia, setSelectedMedia] = useState<{
    type: string;
    index: number;
  } | null>(null);

  useEffect(() => {
    const imgs = loadImagePaths();
    const vids = loadVideoPaths();
    setImagePaths(imgs);
    setVideoPaths(vids);
  }, []);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    setSelectedMedia(null); // Reset selected media when changing the option
  };

  const handleMediaClick = (path:string, index: number, type: string) => {
    // Remove "/static/media/" from the path if it exists
    const cleanPath = path.replace(/\/static\/media\//, '');

    // Extract the filename without the hash and also the extension using regex
    const regexPattern = /([^\/]+?)(?:\.[0-9a-f]{8,})?(\.\w+)$/;
    const matches = cleanPath.match(regexPattern);

    let fileNameWithExtension = '';
    if (matches && matches[1] && matches[2]) {
        fileNameWithExtension = matches[1] + matches[2];
    }

    const fullPath = `${BASE_DIR}${fileNameWithExtension}`;
    setClickedPath(fullPath);
    onMediaSelected(fullPath);
    setSelectedMedia({ type, index });
};
  return (
    <>
      <h3 className="mb-3 mt-5 text-lg font-medium text-gray-900 dark:text-white">
        Choose your video background:
      </h3>
      <ul className="grid w-full gap-6 md:grid-cols-2">
        <li>
          <input
            type="radio"
            id="hosting-small"
            name="hosting"
            value="hosting-small"
            className="hidden peer"
            onChange={handleOptionChange}
            required
          />
          <label
            htmlFor="hosting-small"
            className="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border border-gray-200 rounded-md cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="block">
              <div className="w-full">background with images</div>
            </div>
            <svg
              className="w-5 h-5 ml-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </label>
        </li>

        <li>
          <input
            type="radio"
            id="hosting-big"
            name="hosting"
            value="hosting-big"
            className="hidden peer"
            onChange={handleOptionChange}
          />
          <label
            htmlFor="hosting-big"
            className="inline-flex items-center justify-between w-full p-3 text-gray-500 bg-white border border-gray-200 rounded-md cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="block">
              <div className="w-full">background with video</div>
            </div>
            <svg
              className="w-5 h-5 ml-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </label>
        </li>
      </ul>
      <div
        className="container"
        style={{ maxHeight: "425px", overflowY: "auto" }}
      >
        {selectedOption === "hosting-small" && (
          <div className="images grid grid-cols-2 gap-3">
            {imagePaths.map((path, index) => (
              <img
                key={index}
                src={path}
                alt={`${index + 1}`}
                className={`w-full mb-3 cursor-pointer rounded-md ${
                  selectedMedia &&
                  selectedMedia.type === "image" &&
                  selectedMedia.index === index
                    ? "border-4 border-red-800" // Apply a red border for testing
                    : ""
                }`}
                style={{ width: "100%", height: "230px" }}
                onClick={() => handleMediaClick(path, index, "image")}
              />
            ))}
          </div>
        )}

        {selectedOption === "hosting-big" && (
          <div className="videos grid grid-cols-2 gap-3">
            {videoPaths.map((path, index) => (
              <video
                key={index}
                src={path}
                controls
                className={`w-full mb-3 cursor-pointer rounded-md ${
                  selectedMedia &&
                  selectedMedia.type === "video" &&
                  selectedMedia.index === index
                    ? "border-4 border-blue-800"
                    : ""
                }`}
                style={{ width: "100%", height: "230px" }}
                onClick={() => handleMediaClick(path, index, "video")}
              ></video>
            ))}
          </div>
        )}
        {clickedPath && <p className="mt-5">Clicked on: {clickedPath}</p>}
      </div>
    </>
  );
}
