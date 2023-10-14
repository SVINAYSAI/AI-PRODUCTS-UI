import { Link } from "react-router-dom";
import React, { useState } from "react";
import img from "../../components/assets/imgs/christmas.jpg";

const NewPassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <div
      className="w-full overflow-y-auto"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col-reverse md:flex-row">
        {/* Right side login container */}
        <div
          className="w-full md:w-1/2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-gray-50  rounded-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 opacity-80">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl ">
                  Enter Your Password
                </h1>

                <form className="space-y-4 md:space-y-6" action="">

                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      New Password
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

                  <div className="relative">
                    <label
                      htmlFor="confirmpassword"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm Password
                    </label>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmpassword"
                      id="confirmpassword"
                      value={confirmPassword}
                      placeholder="••••••••"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-12"
                    />
                    <label
                      htmlFor="confirmpassword"
                      className="absolute inset-y-0 right-0 pr-2 flex items-center"
                    >
                      <button
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                        className="absolute top-[40px] right-0 pr-2 flex items-center"
                      >
                        {showConfirmPassword ? (
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

                  <Link
                    to="/log/otp"
                    type="submit"
                    className="w-full text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Send
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Left side content */}
        <div
          className="w-full md:w-1/2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className=" pt-28">
            <h1 className="fables-second-text-color mt-3 font-30 font-weight-bold text-center text-white pt-[10%]">
              Provide you the great Services
            </h1>
          </div>
          <h3 className="fables-second-text-color mt-3 font-30 font-weight-bold text-center text-white pt-[10%]">
            Log-in to our website for limitless creativity.
          </h3>
        </div>
      </div>
    </div>
  );
};
export default NewPassword;
