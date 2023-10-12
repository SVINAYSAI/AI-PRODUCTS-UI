import React, { useState } from "react";
import Modal from "react-modal";

interface FormatData {
  size: string;
  url: string | null;
}

type FormatName = "glb" | "gltf" | "source" | "usdz";

interface ModelViewerModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  modelUid: string;
  modelDescription: string | null;
  modelName: string | null;
  formatDetails: Record<FormatName, FormatData>;
}

const ModelViewerModal: React.FC<ModelViewerModalProps> = ({
  isOpen,
  onRequestClose,
  modelUid,
  modelDescription,
  modelName,
  formatDetails,
}) => {
  const [selectedFormat, setSelectedFormat] = useState<FormatName>("glb");

  // Use the nullish coalescing operator (??) to provide a default empty string
  const descriptionToShow = modelDescription ?? "";
  const nameToShow = modelName ?? "";

  const handleFormatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFormat(e.target.value as FormatName); // Casting the value to FormatName type
  };

  const getSizeString = (size: string): string => {
    const parsedSize = parseFloat(size);
    if (parsedSize < 1024) return `${parsedSize} KB`;
    if (parsedSize < 1048576) return `${(parsedSize / 1024).toFixed(2)} MB`;
    return `${(parsedSize / 1048576).toFixed(2)} GB`;
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Model Viewer"
      style={{
        overlay: {
          paddingTop: "3%",
          paddingLeft: "10%",
        },
        content: {
          position: "relative",
          width: "100%",
          maxWidth: "1045px",
          padding: "20px",
          paddingTop: "2%",
        },
      }}
    >
      <div
        className="container"
        style={{ maxHeight: "425px", overflowY: "auto" }}
      >
        <button
          className="absolute top-0 right-2 h-8 w-8"
          onClick={onRequestClose}
        >
          <svg
            className="w-[23px] h-[14px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.4"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>

        <iframe
          title="Sketchfab Model Viewer"
          width="100%"
          height="500px"
          src={`https://sketchfab.com/models/${modelUid}/embed`}
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <div className="model-name grid grid-cols-1 pt-[3%]">
          <span className="text-black font-bold">Name :-</span>
          <p> {nameToShow} </p>
        </div>

        <div className="pt-[3%] grid grid-cols-2 gap-16">
          <div className="grid grid-cols-3">
            <label htmlFor="formatDropdown pt-[3%]">
              <span className="text-black font-bold flex justify-center">
                Select Format :-{"     "}
              </span>
            </label>

            <select
              className="border rounded-md p-[2%] px-4"
              style={{ width: "180%", height: "35px" }}
              id="formatDropdown"
              onChange={handleFormatChange}
              value={selectedFormat}
            >
              {(["glb", "gltf", "source", "usdz"] as FormatName[]).map(
                (format) => (
                  <option key={format} value={format}>
                    {format}
                  </option>
                )
              )}
            </select>
          </div>

          <div className="grid grid-cols-3">
            <span className="text-black font-bold flex justify-center pt-[3%]">
              Download :-
            </span>

            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              style={{ width: "180%", height: "35px" }}
              onClick={() =>
                window.open(formatDetails[selectedFormat].url ?? "", "_blank")
              }
            >
              <p className="text-white font-bold">
                {selectedFormat.toUpperCase()} Size:{" "}
                {getSizeString(formatDetails[selectedFormat].size)}
              </p>
              {selectedFormat.toUpperCase()}
            </button>
          </div>
        </div>

        <div className="model-description pt-[2%]">
          <span className="text-black font-bold">Description</span>
          <p className="">{descriptionToShow}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ModelViewerModal;
