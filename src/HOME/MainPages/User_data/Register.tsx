import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import React, { useEffect, useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider  } from "@react-oauth/google";
import img from "../../../components/assets/imgs/christmas.jpg";
import jwt_decode from "jwt-decode";
import axios from 'axios';

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [, setCookie] = useCookies(['user']);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      firstname: (event.target as any).firstname.value,
      lastname: (event.target as any).lastname.value,
      username: (event.target as any).username.value,
      email: (event.target as any).email.value,
      password: (event.target as any).password.value,
    };

    try {
      const response = await axios.post('http://191.101.233.212:5000/save_user_data', formData);
      console.log(response.data.message);

      setCookie('user', response.data.user, { path: '/' });
      // If the submission is successful, redirect to /log/otp
      navigate('/log/otp');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error saving data:', error.message);
      } else {
        console.error('An unknown error occurred:', error);
      }
    }
  };



  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const generateRandomPassword = (length: number = 8): string => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  };

  const handleGoogleLoginSuccess = async (credentialResponse: any) => {
    try {
      // Assume credentialResponse is available here
      if (credentialResponse.credential) {
        const decoded = jwt_decode(credentialResponse.credential) as Record<string, unknown>;
        console.log(decoded);
  
        // Generate a random password
        const randomPassword = generateRandomPassword();
        console.log("Generated Password:", randomPassword);
  
        // Send the decoded data and the random password to the server using fetch
        const response = await fetch('http://191.101.233.212:5000/google_login/insert_data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...decoded, password: randomPassword }),
        });
  
        const responseData = await response.json();
  
        console.log(responseData.message);
        
        // Check if the data was inserted successfully
        if (responseData.message === 'Data inserted successfully') {
          console.log("Data inserted successfully. Navigating to /log/otp");
          setCookie('user', responseData.user, { path: '/' });
          navigate('/log/otp');
        } else {
          console.log("Submission not successful.");
        }
      } else {
        console.error('Credential is undefined');
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error saving data:', error.message);
      } else {
        console.error('An unknown error occurred:', error);
      }
    }
  };
  

//   useEffect(() => {
//     // Assume credentialResponse is passed as a prop or from state
//     handleGoogleLoginSuccess(credentialResponse);
//   }, [credentialResponse]); // Run the effect whenever credentialResponse changes

//   // Your remaining code
// };


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
          className="w-full md:w-1/2 pt-[10%] pb-[10%]"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-gray-50  rounded-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 opacity-80">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl ">
                  Sign up Your account
                </h1>
                <div className="flex flex-col sm:flex-row sm:space-x-2">
                  <GoogleOAuthProvider clientId="536585599787-4a44c9aq46ifgsm66mfriea6uuvnuft2.apps.googleusercontent.com">
                    <div className=" w-96">
                      <GoogleLogin
                        onSuccess={handleGoogleLoginSuccess}
                      />
                    </div>
                  </GoogleOAuthProvider>
                </div>

                {/* <EmailSender/> */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-full h-0.5 bg-black"></div>
                  <div className="text-sm font-medium text-black dark:text-gray-400">
                    or
                  </div>
                  <div className="w-full h-0.5 bg-black"></div>
                </div>

                <form className="space-y-4 md:space-y-6" action="" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label
                        htmlFor="firstname"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                      >
                        Frist Name
                      </label>
                      <input
                        className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="firstname"
                        id="firstname"
                        placeholder=""
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastname"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Last Name
                      </label>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        name="lastname"
                        id="lastname"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Username
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 border border-r-0 border-gray-300 rounded-l-md dark:text-gray-400 dark:border-gray-600">
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder=""
                        className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                        <label
                          htmlFor="remember"
                          className="text-black dark:text-gray-300"
                        >
                          terms & conditions
                        </label>
                      </div>
                    </div>
                  </div>
                  <button type="submit"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2"

                  >Sign up</button>
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
export default Register;

