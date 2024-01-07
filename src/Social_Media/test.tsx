export default function Socialmedia() {
  return (
    <>
      <section className="py-6">
        <div className="container">
          <div className="rounded-md border border-gray-200 bg-white p-8">
            <div className="basis-2/12 rounded-xl h-52 max-md:w-52 max-md:mx-auto max-md:rounded-full max-md:mb-4 overflow-hidden">
              <img className="w-full h-full object-cover" src="" alt="" />
            </div>
            <div className="basis-10/12 md:flex flex-col">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-bold text-main-600 uppercase">
                  AMDV technologies Pvt. Ltd.
                </h4>
                <div className="flex gap-8 items-center text-sm font-semibold">
                  <span className="bg-green-200 rounded-full px-6 py-1.5">
                    Active
                  </span>
                </div>
              </div>
              <div className="text-main-500 font-medium mt-2 text-sm max-md:overflow-x-scroll max-md:py-3 flex gap-2">
                <span className="rounded-full max-md:flex-none shadow-inner text-main-500 border px-3 py-1">
                  @ Business Plus
                </span>
                <span className="rounded-full shadow-inner max-md:flex-none flex items-center gap-2  text-main-500 border px-3 py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  667-123-4578
                </span>
                <span className="rounded-full shadow-inner max-md:flex-none  text-main-500 border px-3 py-1 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  info@abccompany.com
                </span>
                <span className="rounded-full shadow-inner max-md:flex-none text-main-500 border px-3 py-1 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Boston, AK 9905
                </span>
              </div>
              <span className="w-full rounded-md shadow-inner max-md:flex-none text-main-500 border px-3 py-1 flex gap-2 p-4 mt-4 h-full resize-none bg-altFour/60 max-md:h-32">
                Boi
              </span>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="rounded-md border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-gray-600 dark:text-white">
              Identification
            </h3>
            <ul className="items-center w-full text-sm max-md:overflow-x-scroll font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {/* Facebook */}
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center p-3">
                  <input
                    id="facebook-checkbox-list"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="facebook-checkbox-list"
                    className="ml-2 mt-[8px] text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Facebook
                  </label>
                </div>
              </li>

              {/* Instagram */}
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center p-3">
                  <input
                    id="instagram-checkbox-list"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="instagram-checkbox-list"
                    className="ml-2 mt-[8px] text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Instagram
                  </label>
                </div>
              </li>

              {/* Thread */}
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center p-3">
                  <input
                    id="thread-checkbox-list"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="thread-checkbox-list"
                    className="ml-2 mt-[8px] text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Thread
                  </label>
                </div>
              </li>

              {/* Twitter */}
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center p-3">
                  <input
                    id="twitter-checkbox-list"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="twitter-checkbox-list"
                    className="ml-2 mt-[8px] text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Twitter
                  </label>
                </div>
              </li>

              {/* Linkdin */}
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center p-3">
                  <input
                    id="linkdin-checkbox-list"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="linkdin-checkbox-list"
                    className="ml-2 mt-[8px] text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Linkdin
                  </label>
                </div>
              </li>

              {/* What's App */}
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center p-3">
                  <input
                    id="whatsapp-checkbox-list"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="whatsapp-checkbox-list"
                    className="ml-2 mt-[8px] text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    What's_App
                  </label>
                </div>
              </li>

              {/* Youtube */}
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center p-3">
                  <input
                    id="youtube-checkbox-list"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="youtube-checkbox-list"
                    className="ml-2 mt-[8px] text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Youtube
                  </label>
                </div>
              </li>

              {/* Pinterest */}
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center p-3">
                  <input
                    id="pinterest-checkbox-list"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="pinterest-checkbox-list"
                    className="ml-2 mt-[8px] text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Pinterest
                  </label>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-md border border-gray-200 bg-white p-4 mt-4">
            <h3 className="mb-4 text-gray-600 dark:text-white">
              Put Your Tokens here...
            </h3>
            <div className="mt-2">
              <label
                htmlFor="facebook"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Facebook
              </label>
              <input
                type="text"
                id="facebook"
                placeholder="Facebook Token"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="mt-2">
              <label
                htmlFor="instagram"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Instagram
              </label>
              <input
                type="text"
                id="instagram"
                placeholder="Instagram Token"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="mt-2">
              <label
                htmlFor="thread"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Thread
              </label>
              <input
                type="text"
                id="thread"
                placeholder="Thread Token"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="mt-2">
              <label
                htmlFor="twitter"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Twitter
              </label>
              <input
                type="text"
                id="twitter"
                placeholder="Twitter Token"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="mt-2">
              <label
                htmlFor="linkdin"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Linkdin
              </label>
              <input
                type="text"
                id="linkdin"
                placeholder="Linkdin Token"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="mt-2">
              <label
                htmlFor="whats_app"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                What's App
              </label>
              <input
                type="text"
                id="whats_app"
                placeholder="What's App Token"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="mt-2">
              <label
                htmlFor="youtube"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Youtube
              </label>
              <input
                type="text"
                id="youtube"
                placeholder="Youtube Token"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="mt-2">
              <label
                htmlFor="pinterest"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Pinterest
              </label>
              <input
                type="text"
                id="pinterest"
                placeholder="Pinterest Token"
                className="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
