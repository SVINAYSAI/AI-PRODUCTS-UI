import { Link } from "react-router-dom";
import Detail1 from "./Pages/Detail1";
import Detail2 from "./Pages/Detail2";
import Detail3 from "./Pages/Detail3";
import Detail4 from "./Pages/Detail4";
import Detail5 from "./Pages/Detail5";

export default function Plaindetails1() {
  return (
    <div className="mt-[4%] ml-[4%] mr-[4%]">
      <div id="detailed-pricing" className="w-full overflow-x-auto">
        <div className="overflow-hidden min-w-max">
          <Detail1 />

          <Detail2 />

          <Detail3 />

          <Detail4 />

          <Detail5 />

          {/* <div className="grid grid-cols-4 px-4 py-5 mr-32 text-sm text-gray-700 border-gray-200 gap-x-16 dark:border-gray-700">
            <div className="text-gray-500 dark:text-gray-400"></div>
            <div>
              <Link
                to=""
                className="text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-md text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900"
              >
                Buy now
              </Link>
            </div>
            <div>
              <Link
                to=""
                className="text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-md text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900"
              >
                Buy now
              </Link>
            </div>
            <div>
              <Link
                to=""
                className="text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-md text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900"
              >
                Buy now
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
