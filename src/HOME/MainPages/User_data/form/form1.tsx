import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

export default function Form1() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [cookies, setCookie] = useCookies(["userinfo"]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Check if "userinfo" cookie exists and has email and password values
  useEffect(() => {
    const userinfoCookie = cookies["userinfo"];
    if (
      userinfoCookie &&
      userinfoCookie.email &&
      userinfoCookie.password &&
      userinfoCookie.rememberMe
    ) {
      setEmail(userinfoCookie.email);
      setPassword(userinfoCookie.password);
      setRememberMe(true);
    }
  }, [cookies]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://191.101.233.212:5000/user_details/verify_user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const result = await response.json();

      console.log("Request Data:", { email, password });

      console.log("Server Response:", result);

      if (response.ok) {
        const { picture, ...userWithoutPicture } = result.user;
        setCookie(
          "userinfo",
          {
            email,
            password,
            rememberMe,
            ...userWithoutPicture,
            isBase64: true,
          },
          { path: "/" }
        );
        localStorage.setItem("userPicture", picture);

        navigate("/loading");

        setTimeout(() => {
          navigate("/products/settings");
        }, 3000);
      } else {
        alert("Details are not matching");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error during authentication:", error);
    }
  };

  const handleGoogleLoginSuccess = async (credentialResponse: any) => {
    try {
      // Assume credentialResponse is available here
      if (credentialResponse.credential) {
        const decoded = jwt_decode(credentialResponse.credential) as Record<
          string,
          unknown
        >;
        const email = decoded.email; // Assuming email is present in the decoded JWT
        console.log("Email being sent to Flask:", email); // Log the email

        // Send a POST request to your Flask server using fetch
        const response = await fetch(
          "https://191.101.233.212:5000/user_check/verify_email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const userWithoutPicture = await response.json();

        // Save the user info in a cookie
        setCookie(
          "userinfo",
          { email, password, rememberMe, ...userWithoutPicture },
          { path: "/" }
        );

        navigate("/loading");

        setTimeout(() => {
          navigate("/products/settings");
        }, 3000);
      } else {
        // Display an alert if credentials do not match
        alert("Details are not matching");

        // Hide loading page
        setLoading(false);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error saving data:", error.message);
      } else {
        console.error("An unknown error occurred:", error);
      }
    }
  };

  return (
    <>
      <div className="">
        <GoogleOAuthProvider clientId="536585599787-4a44c9aq46ifgsm66mfriea6uuvnuft2.apps.googleusercontent.com">
          <div className=" w-96">
            <GoogleLogin onSuccess={handleGoogleLoginSuccess} />
          </div>
        </GoogleOAuthProvider>
      </div>
      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
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

        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={handleCheckboxChange}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="text-black dark:text-gray-300"
              >
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
        >
          Sign in
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
    </>
  );
}
