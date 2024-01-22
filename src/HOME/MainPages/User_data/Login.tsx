import { Link } from "react-router-dom";
import { useState } from "react";
import Form1 from "./form/form1";
import Form2 from "./form/form2";

const Login: React.FC = () => {
  const [showCompanyForm, setShowCompanyForm] = useState(false);

  const handleCompanyLoginClick = () => {
    setShowCompanyForm(true);
  };

  const handleUserLoginClick = () => {
    setShowCompanyForm(false);
  };

  return (
    <div
      className="w-full overflow-auto"
      style={{
        backgroundImage: `url("https://www.aifats.com/virtual_directory/ui_images/components/assets/imgs/christmas.jpg")`,
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
          <div className="flex flex-col mt-[1rem] items-center justify-center mx-auto md:h-screen lg:py-0">
            <div className="w-full overflow-auto mb-[2rem] bg-gray-50  rounded-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 opacity-80">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl ">
                  Sign in to your account
                </h1>

                <div className="grid grid-cols-2 gap-4">
                  <Link
                    to=""
                    onClick={handleUserLoginClick}
                    type="button"
                    className="text-white rounded-md bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium text-sm text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55"
                    style={{ width: "100%", height: "42px" }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <svg
                        className="w-4 h-4 mr-2 text-white dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 11 14H9a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 10 19Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                      <span>User login</span>
                    </div>
                  </Link>

                  <Link
                    to=""
                    onClick={handleCompanyLoginClick}
                    type="button"
                    className="text-white rounded-md bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium text-sm text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55"
                    style={{ width: "100%", height: "42px" }} // Adjust width and height as needed
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <svg
                        className="w-4 h-4 mr-2 text-white dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-width="2"
                          d="M1 10c1.5 1.5 5.25 3 9 3s7.5-1.5 9-3m-9-1h.01M2 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1ZM14 5V3a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2h8Z"
                        />
                      </svg>
                      <span>company login</span>
                    </div>
                  </Link>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <div className="w-full h-0.5 bg-black"></div>
                  <div className="text-sm font-medium text-black dark:text-gray-400">
                    or
                  </div>
                  <div className="w-full h-0.5 bg-black"></div>
                </div>
                {showCompanyForm ? <Form2 /> : <Form1 />}
                {/* <Form1/>
               <Form2/> */}
              </div>
            </div>
          </div>
        </div>
        {/* {showCompanyForm ? <Form2 /> : <Form1 />} */}
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
export default Login;
