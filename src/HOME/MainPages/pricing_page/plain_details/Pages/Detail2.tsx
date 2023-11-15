import { Link } from "react-router-dom";

export default function Detail2() {
  return (
    <>
      <div className="grid grid-cols-4 px-4 py-5 text-sm text-gray-700 border-b gap-x-16 dark:border-gray-700 border border-black-300">
        <div className="text-gray-500 dark:text-gray-400">
          Basic components (
          <Link to="" className="text-blue-600 hover:underline">
            view all
          </Link>
          )
        </div>
        <div>
          <svg
            className="w-3 h-3 text-green-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
        </div>
        <div>
          <svg
            className="w-3 h-3 text-green-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
        </div>
        <div>
          <svg
            className="w-3 h-3 text-green-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
