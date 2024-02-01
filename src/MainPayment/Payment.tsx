import React, { useCallback, useEffect, useState } from 'react';
import { initiateRazorpay } from "./logics/Razorpay_logic"
import useRazorpay from "react-razorpay";
import { useCustomerLogic } from './logics/customerLogic';
import OrderSummary from '../HOME/MainPages/pricing_page/pricing_plan/OrderSummary';
import Address from './address';

export default function Creat_Custumer() {
  const {
    currencies,
    selectedCurrencies,
    searchQuery,
    dropdownVisible,
    formData,
    handleSearch,
    handleDropdownClick,
    handleChange,
    handleSubmit,
    payButton,
    setSearchQuery,
  } = useCustomerLogic();
  
  return (
    <>
    <div className='flex grid-cols-2 gap-4'>
    <Address/>
      {/* <section className="container m-4 rounded-md" style={{width:"60rem"}}>
        <form onSubmit={handleSubmit}>
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              id="input-group-search"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setSearchQuery(e.target.value);
                handleSearch(e.target.value); // Pass the current value to handleSearch
              }}
              placeholder="Search currency"
            />
            <div
              id="dropdownSearch"
              className={`z-10 ${dropdownVisible ? '' : 'hidden'} bg-white rounded-lg shadow w-60 dark:bg-gray-700`}
            >
              <div className="p-3">
                <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
                  {selectedCurrencies.map((currency) => (
                    <li key={currency['ISO Code']}>
                      <div
                        className="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                        onClick={() => handleDropdownClick(currency)}
                      >
                        <input
                          id={`checkbox-item-${currency['ISO Code']}`}
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor={`checkbox-item-${currency['ISO Code']}`}
                          className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                        >
                          {`${currency['Currency Name']} (${currency['ISO Code']})`}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <button
            type="submit"
            // onClick={handlePayment}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </section> */}
      <OrderSummary/>
      </div>
      {/* <Address/> */}
    </>
  );
}