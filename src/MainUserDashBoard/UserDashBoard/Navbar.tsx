import { useState, useRef, useEffect } from "react";
import ComponentNotification from "../Components/Pages/Notification";
import UserMiniProfile from "../Components/Pages/UserMiniProfile";
import SideNavbarComponents from "../Components/Pages/SideNavbarComponents";
import Body from "../Components/Body";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const notificationRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
    setIsDropdownOpen(false); // Close dropdown when opening notification
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsNotificationOpen(false); // Close notification when opening dropdown
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsNotificationOpen(false);
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${
          isSidebarOpen ? "ml-[16rem]" : ""
        }`}
      >
        <div className="px-3 border py-3 lg:px-5 lg:pl-3">
          <div
            className={`flex items-center justify-between ${
              isSidebarOpen ? " mr-64" : ""
            }`}
          >
            <div className="flex items-center justify-start rtl:justify-end">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className="bi bi-text-indent-left text-muted text-gray-600"
                  viewBox="0 0 16 16"
                  onClick={toggleDrawer}
                >
                  <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
                </svg>
              </div>

              <form className="flex items-center ml-3">
                <label htmlFor="voice-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="voice-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pr-12 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos, Design Templates..."
                    required
                  />
                  <button
                    type="button"
                    className="absolute border border-gray-300 border-l-gray-400 p-2 inset-y-0 end-0 flex items-center "
                  >
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            <div className="flex items-center">
              <div className="flex items-center ms-3 mr-3">
                <button
                  type="button"
                  aria-expanded={isNotificationOpen}
                  onClick={toggleNotification}
                >
                  <svg
                    className="w-[21px] h-[21px] text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                      d="M12 5.4V3m0 2.4a5.3 5.3 0 0 1 5.1 5.3v1.8c0 2.4 1.9 3 1.9 4.2 0 .6 0 1.3-.5 1.3h-13c-.5 0-.5-.7-.5-1.3 0-1.2 1.9-1.8 1.9-4.2v-1.8A5.3 5.3 0 0 1 12 5.4ZM8.7 18c.1.9.3 1.5 1 2.1a3.5 3.5 0 0 0 4.6 0c.7-.6 1.3-1.2 1.4-2.1h-7Z"
                    />
                  </svg>
                </button>

                {isNotificationOpen && (
                  <div
                    ref={notificationRef}
                    className={`z-50 absolute border mt-64 py-2 w-1/3 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 ${
                      isSidebarOpen ? "right-[21rem]" : "right-[5rem]"
                    }`}
                  >
                    <ComponentNotification />
                  </div>
                )}
              </div>

              <div className="flex items-center ms-3">
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded={isDropdownOpen}
                  onClick={toggleDropdown}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </button>

                {isDropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className={`z-50 absolute border mt-72 py-2 w-48 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 ${
                      isSidebarOpen ? "right-[18rem]" : "right-[2rem]"
                    }`}
                  >
                    <UserMiniProfile />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-64 border h-screen p-4 overflow-y-auto transition-transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } bg-gray-50 dark:bg-gray-800`}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <SideNavbarComponents />
      </div>

      <div className={`p-4 mt-16 ${isSidebarOpen ? "ml-[16rem]" : ""}`}>
        <Body />
      </div>
    </>
  );
}
