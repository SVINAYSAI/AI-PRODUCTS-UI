import { Link } from "react-router-dom";
import img from "../../../components/assets/imgs/christmas.jpg";
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
                  Sign in to your account
                </h1>

               

                <div className="grid grid-cols-2 gap-4">

                
                <Link
                    to=""
                    onClick={handleCompanyLoginClick}
                    type="button"
                    className="text-white rounded-md bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium text-sm text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55"
                    style={{ width: "100%", height: "42px" }} // Adjust width and height as needed
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <svg
                        className="w-4 h-4 mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 19"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>company login</span>
                    </div>
                  </Link>

                  <Link
                  to=""
                  onClick={handleUserLoginClick}
                  type="button"
                  className="text-white rounded-md bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium text-sm text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55"
                  style={{ width: "100%", height: "42px" }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <svg
                      className="w-4 h-4 mr-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 19"
                    >
                      {/* ... (Google icon path) */}
                    </svg>
                    <span>User login</span>
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
