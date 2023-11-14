import { Link } from "react-router-dom";

export default function Plain3() {
  return (
    <div className="flex flex-col mx-auto max-w-lg text-center text-gray-900 bg-white rounded-md border border-gray-300 shadow dark:border-gray-600 p-4 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold text-gray-900">Enterprise</h3>
      <p className="font-light text-gray-900 sm:text-lg ">
        (Recomended) Best option for personal use & for your next project.
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold text-blue-500">$912</span>
        <span className="text-gray-900 ">/Year</span>
      </div>

      <div className="container flex justify-center">
        <ul className="mb-8 space-y-4 text-left">
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-gray-900">Image Genration</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-gray-900">Video Subtitles</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-gray-900">Pretrained Voice </span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-gray-900">Chart Generation </span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-gray-900">Music Generation</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M15.293 4.293a1 1 0 010 1.414L6.414 13 15.293 21.879a1 1 0 11-1.414 1.414L5 14.414l-8.879 8.879a1 1 0 11-1.414-1.414L3.586 13 .293 9.707a1 1 0 011.414-1.414L5 11.586l3.293-3.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-gray-900">Real time voice clone </span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M15.293 4.293a1 1 0 010 1.414L6.414 13 15.293 21.879a1 1 0 11-1.414 1.414L5 14.414l-8.879 8.879a1 1 0 11-1.414-1.414L3.586 13 .293 9.707a1 1 0 011.414-1.414L5 11.586l3.293-3.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-gray-900">3d object Genration </span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M15.293 4.293a1 1 0 010 1.414L6.414 13 15.293 21.879a1 1 0 11-1.414 1.414L5 14.414l-8.879 8.879a1 1 0 11-1.414-1.414L3.586 13 .293 9.707a1 1 0 011.414-1.414L5 11.586l3.293-3.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-gray-900">3d Assets </span>
          </li>
          {/* <li className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-green-500 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-gray-900">
              Total Credits: <span className="font-semibold">444 credits</span>
            </span>
          </li> */}
        </ul>
      </div>

      <Link
        to="/Payment"
        className="text-white bg-blue-700 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2"
      >
        Get started
      </Link>
    </div>
  );
}
