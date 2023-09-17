import { Link } from "react-router-dom";
import { useState } from "react";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className="navbar custom-navbar navbar-expand-lg navbar-dark"
        data-spy="affix"
        data-offset-top="20"
      >
        <div className="container mx-auto py-3">
          <div className="flex items-center justify-between">
            <button
              className="text-white lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="menu w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2 4a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm1 5a1 1 0 100 2h14a1 1 0 100-2H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className={`${isOpen ? "block" : "hidden"} lg:flex`}>
            <ul className="lg:flex lg:items-center lg:justify-between w-full text-lg font-semibold text-white lg:text-sm lg:mx-auto">
              <li className="lg:mx-4 my-2 lg:my-0">
                <Link to="#" className="block py-1 px-4 rounded ">
                  Home
                </Link>
              </li>

              <li className="lg:mx-4 my-2 lg:my-0">
                <Link to="/about" className="block py-1 px-4 rounded ">
                  About
                </Link>
              </li>

              <li className="lg:mx-4 my-2 lg:my-0">
                <Link className="block py-1 px-4 rounded " to="/products">
                  Products
                </Link>
              </li>

              <li className="lg:mx-4 my-2 lg:my-0">
                <Link className="block py-1 px-4 rounded " to="/ser/services">
                  Services
                </Link>
              </li>

              <li className="lg:mx-4 my-2 lg:my-0">
                <Link className="block py-1 px-4 rounded " to="/pricing">
                  Pricing
                </Link>
              </li>

              <li className="lg:mx-4 my-2 lg:my-0">
                <Link className="block py-1 px-4 rounded " to="/contactus">
                  Contact Us
                </Link>
              </li>

              <li className="lg:mx-4 my-2 lg:my-0">
                <Link className="block py-1 px-2 rounded " to="/blog">
                  Blog
                </Link>
              </li>

              <li className="lg:mx-4 my-2 lg:my-0">
                <Link className="block py-1 px-4 rounded " to="/api">
                  API
                </Link>
              </li>

              <li className="lg:mx-4 my-2 lg:my-0">
                <Link className="block py-1 px-4 rounded " to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
