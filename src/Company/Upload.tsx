import React, { useState, ChangeEvent } from "react";

interface UploadProps {}

const Upload: React.FC<UploadProps> = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [base64Files, setBase64Files] = useState<string[]>([]);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files; 
    if (files) {
      const filesArray = Array.from(files);

      // Convert selected files to base64
      const base64Promises = filesArray.map((file) => {
        return new Promise<string | null>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64String = reader.result as string;
            resolve(base64String.split(",")[1]); // Extract base64 data
          };
          reader.readAsDataURL(file);
        });
      });

      const base64Results = await Promise.all(base64Promises);
      const filteredBase64Results = base64Results.filter(
        (result) => result !== null
      ) as string[];

      // Update state with selected files and corresponding base64 data
      setSelectedFiles([...selectedFiles, ...filesArray]);
      setBase64Files([...base64Files, ...filteredBase64Results]);
    }
  };

  return (
    <>
      <div className="container mt-6">
        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="fileInput"
          >
            Select Files
          </label>
          <input
            id="fileInput"
            type="file"
            multiple
            onChange={handleFileChange}
          />
          {selectedFiles.length > 0 && (
            <div className="mb-2">
              <strong>Selected Files:</strong>
              <ul>
                {selectedFiles.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
          {base64Files.length > 0 && (
            <div className="mb-2">
              <strong>Base64 Data:</strong>
              <ul>
                {base64Files.map((base64, index) => (
                  <li key={index}>{base64}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="mt-6">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            sumbit
          </button>
        </div>
      </div>
    </>
  );
};

export default Upload;
