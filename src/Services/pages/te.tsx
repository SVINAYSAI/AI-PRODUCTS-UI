import { Link } from "react-router-dom";
import { SetStateAction, useState } from "react";
import Selaction from "./selaction";
import Backgroung from "./background";

export default function Services() {
  const [message, setMessage] = useState("");
  const [aspectRatio, setAspectRatio] = useState("");
  const [mediaPath, setMediaPath] = useState<string | null>(null);

  // Define the minimum and maximum character limits
  const minCharacterLimit = 1;
  const maxCharacterLimit = 1000; // You can set your desired maximum character limit

  // Handle textarea input
  const handleInputChange = (event: { target: { value: any } }) => {
    const inputText = event.target.value;

    // Check if the input text meets the character limits
    if (
      inputText.length >= minCharacterLimit &&
      inputText.length <= maxCharacterLimit
    ) {
      setMessage(inputText);
    } else if (inputText.length > maxCharacterLimit) {
      // If the input exceeds the maximum character limit, truncate it
      setMessage(inputText.slice(0, maxCharacterLimit));
    } else {
      setMessage(""); // Clear the message if it doesn't meet the limits
    }
  };

  // Determine if the "Next" button should be disabled
  const isNextButtonDisabled = message.length < minCharacterLimit;

  // Tooltip message when hovering over the disabled "Next" button
  const tooltipMessage = "At least one character is required.";

  const submitStory = async () => {
    const data = {
      story: message,
      aspect_ratio: aspectRatio, // Placeholder for now
      media_path: mediaPath, // Placeholder for now
    };
    console.log("Sending data to backend:", data);
    try {
      const response = await fetch("http://localhost:5000/story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        console.log(result);
        // Navigate to another page or show a success message
      } else {
        console.error("Error:", result.error);
      }
    } catch (error) {
      console.error("There was an error sending the request", error);
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAspectRatio(e.target.value);
  };

  const handleMediaSelected = (selectedPath: string) => {
    setMediaPath(selectedPath);
  };

  const aspectRatios: string[] = [
    "4:3",
    "16:9",
    "1.85:1",
    "2.35:1",
    "2:1",
    "1:1",
    "9:16",
  ];

  return (
    <>
      <div className="container p-[3%]relative m-auto">
        {/* <Selaction/> */}
        <div className="pt-[3%] pl-[10%] pr-[20%]">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your text
          </label>
          <textarea
            id="message"
            className="w-full p-[2%] text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            style={{ width: "100%", height: "230px" }}
            placeholder="Write your thoughts here..."
            value={message}
            onChange={handleInputChange}
            minLength={minCharacterLimit} // Set the minimum character limit
            maxLength={maxCharacterLimit} // Set the maximum character limit
          />
          {/* <div className="grid grid-rows-4 gap-4"> */}

          {/* Input field */}
          <p className="text-gray-500 text-sm">
            Characters remaining: {maxCharacterLimit - message.length}
          </p>

          {/* Radio button */}
          <div className="grid grid-cols-7 gap-3">
            {aspectRatios.map((ratio, index) => (
              <div className="flex items-center mr-4" key={index}>
                <input
                  id={`inline-${index}-radio`}
                  type="radio"
                  value={ratio}
                  name="inline-radio-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  onChange={handleRadioChange}
                />
                <label
                  htmlFor={`inline-${index}-radio`}
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {ratio}
                </label>
              </div>
            ))}
          </div>
          <Backgroung onMediaSelected={handleMediaSelected} />

          <div className="p-3 absolute right-72">
            <Link
              // to="/services/choose/radio"
              className={` text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-7 py-2 text-center mr-2 mb-2 ${
                isNextButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              title={isNextButtonDisabled ? tooltipMessage : ""}
              onClick={(e) => {
                e.preventDefault();
                if (!isNextButtonDisabled) {
                  submitStory();
                }
              }}
              to={""}
            >
              Next
            </Link>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
