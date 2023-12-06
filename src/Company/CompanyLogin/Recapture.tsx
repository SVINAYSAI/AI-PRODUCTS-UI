import React, { useState, useEffect } from "react";

// Define the component
const CaptchaGenerator: React.FC = () => {
  // State to manage the generated captcha and user-entered value
  const [captcha, setCaptcha] = useState<string>("");
  const [enteredCaptcha, setEnteredCaptcha] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [captchaImage, setCaptchaImage] = useState<string | null>(null);

  // Function to generate a new captcha
  const generateCaptcha = () => {
    const alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    const first = alphabets[Math.floor(Math.random() * alphabets.length)];
    const second = Math.floor(Math.random() * 10);
    const third = Math.floor(Math.random() * 10);
    const fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
    const fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
    const sixth = Math.floor(Math.random() * 10);
    const newCaptcha = `${first}${second}${third}${fourth}${fifth}${sixth}`;

    // Convert captcha to base64 image
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d")!;
    context.font = "20px Arial";

    // Calculate canvas width based on text width
    const textWidth = context.measureText(newCaptcha).width;
    canvas.width = textWidth + 10; // Add some padding
    canvas.height = 30;
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#000000";

    // Calculate x-coordinate to center the text
    const x = (canvas.width - textWidth) / 2;

    // Use the calculated x-coordinate
    context.fillText(newCaptcha, x, 20); // Use the calculated x-coordinate

    const captchaDataURL = canvas.toDataURL();
    setCaptchaImage(captchaDataURL);

    // Update state values
    setCaptcha(newCaptcha);
    setEnteredCaptcha("");
    setStatus("");
  };

  // Function to check the entered captcha
  const checkCaptcha = () => {
    if (enteredCaptcha === captcha) {
      setStatus("Correct!!");
    } else {
      setStatus("Try Again!!");
      setEnteredCaptcha("");
    }
  };

  // useEffect to generate captcha when the component mounts
  useEffect(() => {
    generateCaptcha();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <div
        className="container rounded-md p-[1%] mt-4 border"
        style={{ width: "245px", height: "250px" }}
      >
        <div className="">
          {captchaImage && (
            <img className="w-full" src={captchaImage} alt="Captcha Image" />
          )}
        </div>

        <div className="mb-3">
          <input
            type="text"
            id="entered-captcha"
            placeholder="Enter the captcha.."
            value={enteredCaptcha}
            onChange={(e) => setEnteredCaptcha(e.target.value)}
            className="border-2 border-c5c7f7 font-mono outline-none rounded-md px-2 py-1"
          />
          <div className="grid grid-cols-2 gap-4">
            <span style={{ color: "#ee7e6a" }}>{status}</span>
            <div className="mt-1 ml-5" onClick={generateCaptcha}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="30px"
                height="18px"
              >
                <path d="M 25 2 A 1.0001 1.0001 0 1 0 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 18.307314 7.130711 12.364806 12 8.5195312 L 12 15 A 1.0001 1.0001 0 1 0 14 15 L 14 6.5507812 L 14 5 L 4 5 A 1.0001 1.0001 0 1 0 4 7 L 10.699219 7 C 5.4020866 11.214814 2 17.712204 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z" />
              </svg>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={checkCaptcha}
          className="border px-4 py-1 rounded-md font-bold text-14px font-mono outline-none bg-64f394"
        >
          Check
        </button>
      </div>
    </>
  );
};

export default CaptchaGenerator;
