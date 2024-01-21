import { useCustomerLogic } from "./logics/customerLogic";

export default function CreateCustomer() {
  const {
    currencies,
    selectedCurrencies,
    searchQuery,
    dropdownVisible,
    dropdownVisible1,
    formData,
    handleSearch,
    handleDropdownClick,
    toggleDropdownVisibility1,
    handleChange,
    handleSubmit,
    payButton,
    setSearchQuery,
  } = useCustomerLogic();

  return (
    <>
      <section className="container m-4 rounded-md">
        <form>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="Name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>

            <div>
              <label
                htmlFor="Contact"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone number
              </label>
              <input
                id="Contact"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                type="number"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="Email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>

            <form>
              <div className="grid gap-6 md:grid-cols-1">
                <form>
                  <label
                    htmlFor="dropdownSearch"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select currency
                  </label>

                  <div className="flex">
                    <button
                      id="dropdown-button"
                      data-dropdown-toggle="dropdown"
                      className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                      type="button"
                      onClick={toggleDropdownVisibility1}
                    >
                      All Currency{" "}
                      <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    <div className="relative w-full">
                      <input
                        type="search"
                        id="search-dropdown"
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          handleSearch(e.target.value); // Pass the current value to handleSearch
                        }}
                        placeholder="Search currency"
                      />
                      <span className="sr-only">Search</span>
                    </div>
                  </div>

                  <div
                    id="dropdownSearch"
                    className={`z-10 transition-opacity transition-max-height ${
                      dropdownVisible1
                        ? "opacity-100 max-h-48"
                        : "opacity-0 max-h-0"
                    } bg-white rounded-lg shadow w-full dark:bg-gray-700`}
                  >
                    <ul className="h-48 px-3 mt-[3px] overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
                      {currencies.map((currency) => (
                        <li key={currency["ISO Code"]}>
                          <div
                            className="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                            onClick={() => handleDropdownClick(currency)}
                          >
                            <input
                              id={`checkbox-item-${currency["ISO Code"]}`}
                              type="checkbox"
                              value=""
                              className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              htmlFor={`checkbox-item-${currency["ISO Code"]}`}
                              className="w-full ms-2 mt-[8px] text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                            >
                              {`${currency["Currency Name"]} (${currency["ISO Code"]})`}
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="ml-36">
                    <div
                      id="dropdownSearch"
                      className={`transition-opacity transition-max-height ${
                        dropdownVisible && searchQuery.length >= 3
                          ? "opacity-100 max-h-xxl" // Set max height based on your needs, e.g., max-h-full
                          : "opacity-0 max-h-0"
                      } bg-white rounded-lg shadow w-full dark:bg-gray-700`}
                    >
                      <ul className="px-3 mt-[3px] overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
                        {selectedCurrencies.map((currency) => (
                          <li key={currency["ISO Code"]}>
                            <div
                              className="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                              onClick={() => handleDropdownClick(currency)}
                            >
                              <input
                                id={`checkbox-item-${currency["ISO Code"]}`}
                                type="checkbox"
                                value=""
                                className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                              />
                              <label
                                htmlFor={`checkbox-item-${currency["ISO Code"]}`}
                                className="w-full mt-[8px] ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                              >
                                {`${currency["Currency Name"]} (${currency["ISO Code"]})`}
                              </label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </form>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
