import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

interface FormData {
  email: string;
  name: string;
  password: string;
}

export default function Form2() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    password: "",
  });
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [cookies, setCookie] = useCookies(["formData"]); // Define the cookie named 'formData'

  const [captcha, setCaptcha] = useState<string>("");
  const [enteredCaptcha, setEnteredCaptcha] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [captchaImage, setCaptchaImage] = useState<string | null>(null);
  const [remainingTime, setRemainingTime] = useState(0);
  const [showGenerateCaptcha, setShowGenerateCaptcha] = useState(true);

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
    canvas.width = context.measureText(newCaptcha).width;
    canvas.height = 25;
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#000000";
    context.fillText(newCaptcha, 0, 20);
    const captchaDataURL = canvas.toDataURL();
    setCaptchaImage(captchaDataURL);

    // Update state values
    setCaptcha(newCaptcha);
    setEnteredCaptcha("");
    setStatus("");

    // Disable the generateCaptcha button
    setShowGenerateCaptcha(false);

    // Start the timer
    setRemainingTime(99);
  };

  // useEffect to generate captcha when the component mounts
  useEffect(() => {
    generateCaptcha();
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;

    if (!showGenerateCaptcha && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (remainingTime === 0) {
      clearInterval(timer);
      setShowGenerateCaptcha(true);
    }

    // Cleanup the timer on component unmount
    return () => clearInterval(timer);
  }, [remainingTime, showGenerateCaptcha]);

  useEffect(() => {
    const storedFormData = cookies.formData;
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []); // Run only once when the component mounts

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if the entered captcha is correct
    if (enteredCaptcha !== captcha) {
      setStatus("Incorrect Captcha. Please try again.!!");
      return;
    }

    // Show loading page during the loading state
    setLoading(true);

    // Simulate an asynchronous operation (e.g., API request) for 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Save form data in the cookie
    setCookie("formData", formData, { path: "/" });

    // Continue with your existing logic...
    const response = await fetch(
      "http://127.0.0.1:5000/company_login/check_credentials",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    // Check if credentials match
    if (data.credentials_match) {
      // Navigate to the loading page
      navigate("/loading");

      // Delay the actual navigation to the dashboard for 3 seconds
      setTimeout(() => {
        navigate("/our_dash@board/dash@board");
      }, 3000);
    } else {
      // Display an alert if credentials do not match
      alert("Details are not matching");

      // Hide loading page
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className="space-y-4 md:space-y-6" action="" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
        >
          Your name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 rounded-md flex items-center pl-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input
            type="name"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
        >
          Your Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 rounded-md flex items-center pl-3.5 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@aifact.com"
          />
        </div>
      </div>

      <div className="relative">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          // onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-12"
        />
        <label
          htmlFor="password"
          className="absolute inset-y-0 right-0 pr-2 flex items-center"
        >
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-[40px] right-0 pr-2 flex items-center"
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 20 14"
              >
                <g
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                </g>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-gray-800 dark:text-white"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </button>
        </label>
      </div>

      <div className="flex items-center">
        <div className="w-[54%] border">
          {captchaImage && (
            <img
              className="w-full h-11"
              src={captchaImage}
              alt="Captcha Image"
            />
          )}
        </div>
        {showGenerateCaptcha ? (
          <div className="mt-1 ml-1" onClick={generateCaptcha}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="30px"
              height="18px"
            >
              <path d="M 25 2 A 1.0001 1.0001 0 1 0 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 18.307314 7.130711 12.364806 12 8.5195312 L 12 15 A 1.0001 1.0001 0 1 0 14 15 L 14 6.5507812 L 14 5 L 4 5 A 1.0001 1.0001 0 1 0 4 7 L 10.699219 7 C 5.4020866 11.214814 2 17.712204 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z" />
            </svg>
          </div>
        ) : (
          <div className="mt-1 ml-1">
            {`Please wait ${remainingTime} seconds`}
          </div>
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
        <div className="grid grid-cols-1 gap-4">
          <span style={{ color: "#ee7e6a" }}>{status}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="remember" className="text-black dark:text-gray-300">
              Remember me
            </label>
          </div>
        </div>
        <Link
          to="/log/forgot"
          className="text-sm font-medium text-primary-400 hover:underline dark:text-primary-500"
        >
          Forgot password?
        </Link>
      </div>

      <button
        type="submit"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2"
        disabled={loading}
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>

      <p className="text-sm font-light text-black dark:text-gray-400">
        Don’t have an account yet?{" "}
        <Link
          to="/log/sign-up"
          className="font-medium text-primary-400 hover:underline dark:text-primary-500"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}
