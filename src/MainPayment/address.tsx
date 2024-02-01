import React, { useState } from "react";

export default function Address() {
    const [value, setValue] = useState<string | undefined>();

    const handlePhoneChange = (newValue: string | undefined) => {
        setValue(newValue); // Update the phone number state with the new value
    };

    return (
        <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="bg-gray-50 border rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                        Profile
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Manage your name, password and account settings.
                    </p>
                </div>
                <form>

                    <div className="grid grid-cols-2 gap-8">
                        <div className=" mb-2 ">
                            <label
                                htmlFor="af-account-first-name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Frist name <span className=" text-red-600 text-base">*</span>
                            </label>
                            <input
                                id="af-account-first-name"
                                type="text"
                                className="py-2 px-3 border pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                placeholder="Maria"
                                required
                            />
                        </div>
                        <div className=" mb-2 ">
                            <label
                                htmlFor="af-account-last-name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Last name <span className=" text-red-600 text-base">*</span>
                            </label>
                            <input
                                type="text"
                                className="py-2 px-3 border pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                placeholder="Boone"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div className=" mb-2">
                            <label
                                htmlFor="af-account-email"
                                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                            >
                                Email <span className=" text-red-600 text-base">*</span>
                            </label>
                            <input
                                id="af-account-email"
                                type="email"
                                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                placeholder="maria@site.com"
                                required
                            />
                        </div>
                        <div className=" mb-2">
                            <label
                                htmlFor="af-account-phone"
                                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                            >
                                Phone <span className=" text-red-600 text-base">*</span>
                            </label>
                            <input
                                id="af-account-phone"
                                type="text"
                                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                placeholder="+91 8106465916"
                                value={value || ""}
                                onChange={(e) => handlePhoneChange(e.target.value)}
                                required
                            />
                        </div>
                    </div>




                    <div className=" grid grid-cols-2 gap-8">
                        <div className="mb-2">
                            <label
                                htmlFor="af-account-phone"
                                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                            >
                                Gender <span className=" text-red-600 text-base">*</span>
                            </label>
                            <select
                                id="countries"
                                required
                                className="py-2 px-3 pe-11 block w-full text-gray-500 border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                            >
                            
                                <option value="US">Male</option>
                                <option value="CA">Female</option>
                                <option value="FR">Other</option>
                               

                            </select>
                        </div>

                        <div className="mb-2">
                            <label
                                htmlFor="af-account-phone"
                                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                            >
                                currency codes <span className=" text-red-600 text-base">*</span>
                            </label>
                            <select
                                id="countries"
                                required
                                className="py-2 px-3 pe-11 block w-full text-gray-500 border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                            >
                                
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>

                    </div>
                    <div className="sm:col-span-3">
                        <div className="inline-block">
                            <label
                                htmlFor="af-account-phone"
                                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                            >
                                Country/Region <span className=" text-red-600 text-base">*</span>
                            </label>
                        </div>
                    </div>



                    <div className="sm:col-span-9">
                        <select
                            id="countries"
                            required
                            placeholder="Choose a country"
                            className="py-2 px-3 pe-11 block w-full text-gray-500 border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        >
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>

                    <div className="sm:col-span-3">
                        <label
                            htmlFor="af-account-address1"
                            className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                        >
                            Address <span className=" text-red-600 text-base">*</span>
                        </label>
                    </div>



                    <div className="sm:col-span-9">
                        <div className="sm:flex">
                            <input
                                type="text"
                                className="py-2 px-3 border pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                placeholder="Address"
                                required
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label
                            htmlFor="af-account-address2"
                            className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                        >
                            Address 2 <span className=" text-red-600 text-base">*</span>
                        </label>
                    </div>

                    <div className="sm:col-span-9">
                        <div className="sm:flex">
                            <input
                                type="text"
                                required
                                className="py-2 px-3 border pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                placeholder="Address 2"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div className=" mb-2">
                            <label
                                htmlFor="af-account-city"
                                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                            >
                                City <span className=" text-red-600 text-base">*</span>
                            </label>



                            <input
                                type="text"
                                required
                                className="py-2 px-3 border pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                placeholder="City"
                            />
                        </div>

                        <div className="mb-2">
                            <label
                                htmlFor="af-account-province"
                                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                            >
                                Province <span className=" text-red-600 text-base">*</span>
                            </label>


                            <input
                                type="text"
                                required
                                className="py-2 px-3 border pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                placeholder="Province"
                            />
                        </div>


                        <div className="mb-2">
                            <label
                                htmlFor="af-account-postal-code"
                                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                            >
                                Post Code <span className=" text-red-600 text-base">*</span>
                            </label>
                            <input
                                type="number"
                                required
                                className="py-2 px-3 border pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                placeholder="Post Code"
                            />
                        </div>
                    </div>






                    <div className="mt-5 flex justify-end gap-x-2">
                        <button
                            type="button"
                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-800 shadow hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent bg-blue-600 text-white shadow hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                            Save changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
