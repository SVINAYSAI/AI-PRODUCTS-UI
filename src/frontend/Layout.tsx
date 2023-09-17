// import { Link, Outlet } from "react-router-dom";
// import { useState } from "react";
// import "../assets/frontend/css/style1.css"
import logo from "../components/fats-logo/svg/logo-no-background.svg"

// export default function Layout() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <nav
//         className="navbar "
//       >
//         <div className="container mx-auto ">
//           <div className="flex items-center justify-between">
//             <button
//               className="text-black lg:hidden"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               <svg
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 className="menu w-6 h-6"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M2 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm1 5a1 1 0 100 2h14a1 1 0 100-2H3z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//           <div className={`${isOpen ? "block" : "hidden"} lg:flex`}>
//             <ul className="lg:flex lg:items-center lg:justify-between w-full text-lg font-semibold text-white lg:text-sm lg:mx-auto">
//               <li className="  w-24">
//                 <img className=" w-[5rem]" src={logo} alt="logo"></img>
//               </li>
//               <li className="lg:mx-4 my-2 lg:my-0">
//                 <Link to="#" className="block py-1 px-4 rounded ">
//                   Home
//                 </Link>
//               </li>

//               <li className="lg:mx-4 my-2 lg:my-0">
//                 <Link to="/about" className="block py-1 px-4 rounded ">
//                   About
//                 </Link>
//               </li>

//               <li className="lg:mx-4 my-2 lg:my-0">
//                 <Link className="block py-1 px-4 rounded " to="/products">
//                   Products
//                 </Link>
//               </li>

//               <li className="lg:mx-4 my-2 lg:my-0">
//                 <Link className="block py-1 px-4 rounded " to="/ser/services">
//                   Services
//                 </Link>
//               </li>

//               <li className="lg:mx-4 my-2 lg:my-0">
//                 <Link className="block py-1 px-4 rounded " to="/pricing">
//                   Pricing
//                 </Link>
//               </li>

//               <li className="lg:mx-4 my-2 lg:my-0">
//                 <Link className="block py-1 px-4 rounded " to="/contactus">
//                   Contact Us
//                 </Link>
//               </li>

//               <li className="lg:mx-4 my-2 lg:my-0">
//                 <Link className="block py-1 px-2 rounded " to="/blog">
//                   Blog
//                 </Link>
//               </li>

//               <li className="lg:mx-4 my-2 lg:my-0">
//                 <Link className="block py-1 px-4 rounded " to="/api">
//                   API
//                 </Link>
//               </li>

//               <li className="lg:mx-4 my-2 lg:my-0">
//                 <Link className="block py-1 px-4 rounded " to="/login">
//                   Login
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <Outlet />
//     </>
//   );
// }

import "../components/frontend/assets/css/style1.css";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 w-full top-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link to="/" className="flex items-center">
          <img className=" w-[5rem]" src={logo} alt="logo"></img>
          </Link>
          <div className="flex md:order-2 rounded-lg">
            <Link
              to="/login"
              type="button"
              className="text-white shadow-md bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/ser/services"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/api"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  API
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contactus"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
