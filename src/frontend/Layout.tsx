import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../Components/fats-logo/svg/logo-no-background.svg";

export default function Layout() {
  // State to manage whether the menu is open or closed
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/"; // Check if the current route is "/"

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
        <nav
          className={`navbar ${
            isHomePage
              ? "custom-navbar navbar-expand-lg navbar-dark items-center justify-between mx-auto"
              : "bg-white dark:bg-gray-900"
          }`}
          data-spy="affix"
          data-offset-top="20"
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <Link to="/" className="flex items-center">
              <img className="w-[5rem]" src={logo} alt="logo"></img>
            </Link>
            <div className="flex md:order-2 pl-[20px]">
              <Link
                to="/log/sign-in"
                type="button"
                className="text-white rounded-full shadow-md bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Get started
              </Link>
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded={isOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } items-center justify-between w-full md:flex md:w-auto md:order-1 pt-[1%] pl-[17px]`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col md:p-0 font-medium border  rounded-md shadow-md  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/"
                    className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:hover:text-blue-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 ${
                      isHomePage ? "text-white" : "text-gray-900"
                    }`}
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:hover:text-blue-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 ${
                      isHomePage ? "text-white" : "text-gray-900"
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:hover:text-blue-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 ${
                      isHomePage ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:hover:text-blue-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 ${
                      isHomePage ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/api"
                    className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:hover:text-blue-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 ${
                      isHomePage ? "text-white" : "text-gray-900"
                    }`}
                  >
                    API
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:hover:text-blue-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 ${
                      isHomePage ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:hover:text-blue-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 ${
                      isHomePage ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contactus"
                    className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:hover:text-blue-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700 ${
                      isHomePage ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Contact US
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </body>
      <Outlet />
    </>
  );
}
