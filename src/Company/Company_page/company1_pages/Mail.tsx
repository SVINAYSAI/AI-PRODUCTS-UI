import React, { useState, ChangeEvent, useEffect } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

interface MailProps {
  complaintNumber: string | null;
  userEmail: string | null;
}

const Mail: React.FC<MailProps> = ({ complaintNumber, userEmail }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [filePreviews, setFilePreviews] = useState<(string | ArrayBuffer | null)[]>([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [editorContent, setEditorContent] = useState<string>("");
  const [base64Files, setBase64Files] = useState<string[]>([]);
  console.log("Selected Complaint Email:", userEmail);
  console.log("Selected Complaint number:", complaintNumber);

  const handleFileChangepriview = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setSelectedFiles([...selectedFiles, ...newFiles]);

      const newPreviews = newFiles.map((file) => {
        const reader = new FileReader();

        if (file.type.startsWith("image/")) {
          reader.readAsDataURL(file);
        } else if (file.type.startsWith("video/")) {
          reader.readAsArrayBuffer(file);
        } else {
          setFilePreviews((prevPreviews) => [...prevPreviews, null]);
          return "";
        }

        reader.onload = () => {
          setFilePreviews((prevPreviews) => [...prevPreviews, reader.result]);
        };
        return "";
      });
    }
  };

  const handleEmojiClick = (emojiObject: EmojiClickData, event: MouseEvent) => {
    setEditorContent((prevContent) => prevContent + emojiObject.emoji);
  };

  const handleEmojiButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    const emojiPickerContainer = document.getElementById(
      "emojiPickerContainer"
    );

    if (
      emojiPickerContainer &&
      !emojiPickerContainer.contains(event.target as Node)
    ) {
      setShowEmojiPicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const filesArray = Array.from(files);

      // Convert selected files to base64
      const base64Promises = filesArray.map((file) => {
        return new Promise<string | null>((resolve) => {
          const reader = new FileReader();

          reader.onloadend = () => {
            const base64String = typeof reader.result === "string" ? reader.result : "";
            resolve(base64String.split(",")[1]); // Extract base64 data
          };

          reader.onerror = (error) => {
            console.error("File reading error:", error);
            resolve(null);
          };

          reader.readAsDataURL(file);
        });
      });

      const base64Results = await Promise.all(base64Promises);
      const filteredBase64Results = base64Results.filter((result) => result !== null) as string[];

      // Update state with selected files and corresponding base64 data
      setSelectedFiles([...selectedFiles, ...filesArray]);
      setBase64Files([...base64Files, ...filteredBase64Results]);

      // Clear the file input value
      e.target.value = "";
      console.log("Converted base64:", filteredBase64Results);
    }
  };


  const submitFeedback = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const feedbackData = {
      email: userEmail,
      complaint_number: "COMPLAINT" + complaintNumber,
      files: base64Files,
      feedback: editorContent,
    };

    try {
      // Log the data before sending
      console.log('Sending data to backend:', feedbackData);

      const response = await fetch('http://127.0.0.1:5000/feedback_replay/submit_feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        console.log('Feedback submitted successfully');
        // You can add further logic or UI updates here
      } else {
        console.error('Failed to submit feedback');
        // Handle error scenarios
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      // Handle error scenarios
    }
  };


  return (
    <>
      <form>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
            <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
              <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                <input
                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  onChange={handleFileChange}
                  id="multiple_files"
                  type="file"
                  multiple
                />
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                  />
                </svg>
                <span className="sr-only">Attach file</span>


                <input type="file" id="fileInput" className="hidden" onChange={handleFileChangepriview} multiple />

                <button
                  type="button"
                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                  </svg>
                  <span className="sr-only">Embed map</span>
                </button>

                <button
                  type="button"
                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                  <span className="sr-only">Upload image</span>
                </button>

                <button
                  type="button"
                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                    <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z" />
                  </svg>
                  <span className="sr-only">Format code</span>
                </button>

                <button
                  type="button"
                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  onClick={handleEmojiButtonClick}
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
                  </svg>
                  <span className="sr-only">Add emoji</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
                <button
                  type="button"
                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"
                    />
                  </svg>
                  <span className="sr-only">Add list</span>
                </button>

                <button
                  type="button"
                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                  </svg>
                  <span className="sr-only">Settings</span>
                </button>

                <button
                  type="button"
                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z" />
                    <path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z" />
                  </svg>
                  <span className="sr-only">Timeline</span>
                </button>

                <button
                  type="button"
                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="sr-only">Download</span>
                </button>
              </div>
            </div>

            <button
              type="button"
              data-tooltip-target="tooltip-fullscreen"
              className="p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 19 19"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5"
                />
              </svg>
              <span className="sr-only">Full screen</span>
            </button>

            <div
              id="tooltip-fullscreen"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              Show full screen
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>

          <div className="p-4 bg-white rounded-b-lg dark:bg-gray-800">
            <label htmlFor="editor" className="sr-only">
              Publish post
            </label>
            <div className="relative">
              <textarea
                id="editor"
                className="block p-2 w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write an article..."
                style={{
                  height: "200px",
                  width: "100%",
                  fontFamily: "'Segoe UI Emoji', sans-serif",
                }}
                value={editorContent}
                onChange={(e) => setEditorContent(e.target.value)}
                required
              ></textarea>
              {showEmojiPicker && (
                <div
                  id="emojiPickerContainer"
                  className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-600"
                >
                  <button
                    type="button"
                    className="absolute top-0 right-0 m-2 p-2 text-gray-500 rounded-full cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    onClick={handleEmojiButtonClick}
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.348 5.879a1 1 0 0 0-1.414-1.414L10 8.586l-2.93-2.93a1 1 0 1 0-1.414 1.414L8.586 10l-2.93 2.93a1 1 0 1 0 1.414 1.414L10 11.414l2.93 2.93a1 1 0 1 0 1.414-1.414L11.414 10l2.93-2.93z"
                      ></path>
                    </svg>
                  </button>
                  <EmojiPicker onEmojiClick={handleEmojiClick} />
                </div>
              )}
            </div>
          </div>

          {filePreviews.length > 0 && (
            <div className="mt-2">
              <p>Selected file previews:</p>
              <ul className="grid grid-cols-4 gap-4">
                {filePreviews.map((preview, index) => (
                  <li key={index}>
                    {preview !== null ? (
                      selectedFiles[index].type.startsWith("video/") ? (
                        <video
                          controls
                          width="100"
                          height="100"
                          style={{ width: "124px", height: "100px" }}
                        >
                          <source
                            src={URL.createObjectURL(
                              new Blob([preview as ArrayBuffer], {
                                type: "video/mp4",
                              })
                            )}
                            type="video/mp4"
                          />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img
                          src={preview as string}
                          alt={`Preview ${index + 1}`}
                          style={{ width: "100px", height: "100px" }}
                        />
                      )
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        width="100px"
                        height="100px"
                      >
                        <path d="M 34.179688 10.164062 C 32.103687 10.164062 30.615234 11.426266 30.615234 13.697266 L 30.648438 25.806641 C 30.648438 28.846641 32.770234 30.712891 35.615234 30.712891 C 38.460234 30.712891 40.615234 29.002891 40.615234 25.962891 L 40.615234 14.306641 L 39.613281 14.306641 L 39.523438 25.869141 C 39.523438 28.079141 37.599438 29.808594 35.648438 29.808594 C 33.697437 29.808594 31.615234 28.049844 31.615234 25.839844 L 31.644531 13.611328 C 31.644531 12.304328 33.077484 11.126953 34.271484 11.126953 C 35.465484 11.126953 36.615234 12.275031 36.615234 13.582031 L 36.615234 24.056641 C 36.615234 24.056641 36.139813 25.056641 35.632812 25.056641 C 35.125812 25.056641 34.486234 24.700391 34.615234 24.150391 L 34.615234 14.308594 L 33.615234 14.308594 L 33.582031 23.964844 C 33.582031 25.344844 34.32225 25.964844 35.65625 25.964844 C 36.99025 25.964844 37.615234 25.249141 37.615234 23.869141 L 37.615234 13.664062 C 37.615234 11.393062 36.255687 10.164062 34.179688 10.164062 z M 41.613281 11.306641 C 41.061281 11.306641 40.613281 11.754641 40.613281 12.306641 C 40.613281 12.858641 41.061281 13.306641 41.613281 13.306641 L 59.613281 13.306641 L 59.613281 23.792969 C 59.613281 29.039969 63.881906 33.306641 69.128906 33.306641 L 79.613281 33.306641 L 79.613281 82.574219 C 79.613281 86.837219 76.146812 90.306641 71.882812 90.306641 L 28.347656 90.306641 C 24.084656 90.306641 20.615234 86.838219 20.615234 82.574219 L 20.615234 21.039062 C 20.615234 16.776063 24.083656 13.308594 28.347656 13.308594 L 29.615234 13.308594 C 30.167234 13.308594 30.615234 12.860594 30.615234 12.308594 C 30.615234 11.756594 30.167234 11.308594 29.615234 11.308594 L 28.347656 11.308594 C 22.981656 11.308594 18.615234 15.672062 18.615234 21.039062 L 18.615234 82.574219 C 18.615234 87.940219 22.980656 92.306641 28.347656 92.306641 L 71.882812 92.306641 C 77.248812 92.306641 81.613281 87.940219 81.613281 82.574219 L 81.613281 32.554688 C 81.613281 32.289688 81.508313 32.035656 81.320312 31.847656 L 61.072266 11.599609 C 60.885266 11.411609 60.630234 11.306641 60.365234 11.306641 L 41.613281 11.306641 z M 60.613281 13.966797 L 78.951172 32.306641 L 69.128906 32.306641 C 64.433906 32.306641 60.613281 28.487969 60.613281 23.792969 L 60.613281 13.966797 z M 28.371094 19.505859 C 28.245219 19.481734 28.110094 19.505984 27.996094 19.583984 C 25.878094 21.023984 24.613281 23.406078 24.613281 25.955078 L 24.613281 78.617188 C 24.613281 82.856187 28.048484 86.306641 32.271484 86.306641 L 67.955078 86.306641 C 72.178078 86.306641 75.613234 82.856188 75.615234 78.617188 L 75.615234 60.806641 C 75.615234 60.530641 75.391234 60.306641 75.115234 60.306641 C 74.839234 60.306641 74.615234 60.530641 74.615234 60.806641 L 74.615234 78.617188 C 74.615234 82.305187 71.628031 85.306641 67.957031 85.306641 L 32.273438 85.306641 C 28.602438 85.306641 25.615234 82.305188 25.615234 78.617188 L 25.615234 25.955078 C 25.615234 23.737078 26.714594 21.664156 28.558594 20.410156 C 28.786594 20.255156 28.846406 19.945797 28.691406 19.716797 C 28.613906 19.603297 28.496969 19.529984 28.371094 19.505859 z M 75.113281 47.306641 C 74.837281 47.306641 74.613281 47.530641 74.613281 47.806641 L 74.613281 50.806641 C 74.613281 51.082641 74.837281 51.306641 75.113281 51.306641 C 75.390281 51.306641 75.613281 51.082641 75.613281 50.806641 L 75.613281 47.806641 C 75.613281 47.530641 75.389281 47.306641 75.113281 47.306641 z M 30.113281 51.306641 C 29.837281 51.306641 29.613281 51.530641 29.613281 51.806641 C 29.613281 52.082641 29.837281 52.306641 30.113281 52.306641 L 53.113281 52.306641 C 53.390281 52.306641 53.613281 52.082641 53.613281 51.806641 C 53.613281 51.530641 53.389281 51.306641 53.113281 51.306641 L 30.113281 51.306641 z M 75.113281 52.306641 C 74.837281 52.306641 74.613281 52.530641 74.613281 52.806641 L 74.613281 58.806641 C 74.613281 59.082641 74.837281 59.306641 75.113281 59.306641 C 75.390281 59.306641 75.613281 59.082641 75.613281 58.806641 L 75.613281 52.806641 C 75.613281 52.530641 75.389281 52.306641 75.113281 52.306641 z M 30.113281 58.306641 C 29.837281 58.306641 29.613281 58.530641 29.613281 58.806641 C 29.613281 59.082641 29.837281 59.306641 30.113281 59.306641 L 44.113281 59.306641 C 44.390281 59.306641 44.613281 59.082641 44.613281 58.806641 C 44.613281 58.530641 44.389281 58.306641 44.113281 58.306641 L 30.113281 58.306641 z M 46.113281 58.306641 C 45.837281 58.306641 45.613281 58.530641 45.613281 58.806641 C 45.613281 59.082641 45.837281 59.306641 46.113281 59.306641 L 70.113281 59.306641 C 70.390281 59.306641 70.613281 59.082641 70.613281 58.806641 C 70.613281 58.530641 70.389281 58.306641 70.113281 58.306641 L 46.113281 58.306641 z M 30.113281 65.306641 C 29.837281 65.306641 29.613281 65.530641 29.613281 65.806641 C 29.613281 66.082641 29.837281 66.306641 30.113281 66.306641 L 48.113281 66.306641 C 48.390281 66.306641 48.613281 66.082641 48.613281 65.806641 C 48.613281 65.530641 48.389281 65.306641 48.113281 65.306641 L 30.113281 65.306641 z M 50.113281 65.306641 C 49.837281 65.306641 49.613281 65.530641 49.613281 65.806641 C 49.613281 66.082641 49.837281 66.306641 50.113281 66.306641 L 61.113281 66.306641 C 61.390281 66.306641 61.613281 66.082641 61.613281 65.806641 C 61.613281 65.530641 61.389281 65.306641 61.113281 65.306641 L 50.113281 65.306641 z M 63.113281 65.306641 C 62.837281 65.306641 62.613281 65.530641 62.613281 65.806641 C 62.613281 66.082641 62.837281 66.306641 63.113281 66.306641 L 71.113281 66.306641 C 71.390281 66.306641 71.613281 66.082641 71.613281 65.806641 C 71.613281 65.530641 71.389281 65.306641 71.113281 65.306641 L 63.113281 65.306641 z M 30.113281 72.306641 C 29.837281 72.306641 29.613281 72.530641 29.613281 72.806641 C 29.613281 73.082641 29.837281 73.306641 30.113281 73.306641 L 54.113281 73.306641 C 54.390281 73.306641 54.613281 73.082641 54.613281 72.806641 C 54.613281 72.530641 54.389281 72.306641 54.113281 72.306641 L 30.113281 72.306641 z M 57.113281 72.306641 C 56.837281 72.306641 56.613281 72.530641 56.613281 72.806641 C 56.613281 73.082641 56.837281 73.306641 57.113281 73.306641 L 70.113281 73.306641 C 70.390281 73.306641 70.613281 73.082641 70.613281 72.806641 C 70.613281 72.530641 70.389281 72.306641 70.113281 72.306641 L 57.113281 72.306641 z" />
                      </svg>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button
          type="submit"
          onClick={submitFeedback}
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          Publish post
        </button>
      </form>
    </>
  );
}

export default Mail;
export type { MailProps };