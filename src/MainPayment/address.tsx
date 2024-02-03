import React, { useState } from "react";

export default function Address() {
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    gender: "",
    country: "",
    address: "",
    address_2: "",
    city: "",
    state: "",
    postal_code: "",
    currency_codes: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Form Data:", formData); // Log the form data before sending it
      const response = await fetch(
        "http://127.0.0.1:5000/razorpay/address_update",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log("Response from server:", data); // Log the response from the server
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancel = () => {
    // Reset the form fields or perform any other action needed
    setFormData({
      email: "",
      first_name: "",
      last_name: "",
      phone: "",
      gender: "",
      country: "",
      address: "",
      address_2: "",
      city: "",
      state: "",
      postal_code: "",
      currency_codes: "", // Ensure currency_codes is included
    });
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
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-8">
            <div className=" mb-2 ">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Frist name <span className=" text-red-600 text-base">*</span>
              </label>
              <input
                id="first_name"
                type="text"
                name="first_name"
                className="py-2 px-3 border pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Maria"
                value={formData.first_name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className=" mb-2 ">
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last name <span className=" text-red-600 text-base">*</span>
              </label>
              <input
                id="last_name"
                type="text"
                name="last_name"
                className="py-2 px-3 border pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Boone"
                value={formData.last_name}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className=" mb-2">
              <label
                htmlFor="email"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
              >
                Email <span className=" text-red-600 text-base">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="maria@site.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className=" mb-2">
              <label
                htmlFor="phone"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
              >
                Phone <span className=" text-red-600 text-base">*</span>
              </label>
              <input
                id="phone"
                type="text"
                name="phone"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="+91 8106465916"
                value={formData.phone}
                onChange={handleInputChange}
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
                id="gender"
                required
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="py-2 px-3 pe-11 block w-full text-gray-500 border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              >
                <option value="">Select Gender</option>
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
                currency codes{" "}
                <span className=" text-red-600 text-base">*</span>
              </label>
              <select
                id="currency_codes"
                required
                name="currency_codes"
                value={formData.currency_codes}
                onChange={handleInputChange}
                className="py-2 px-3 pe-11 block w-full text-gray-500 border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              >
                <option value={""}>Select Currency Codes</option>
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
                Country/Region{" "}
                <span className=" text-red-600 text-base">*</span>
              </label>
            </div>
          </div>

          <div className="sm:col-span-9">
            <select
              id="country"
              required
              placeholder="Choose a country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="py-2 px-3 pe-11 block w-full text-gray-500 border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            >
              <option value="">Select a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="address"
              className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
            >
              Address <span className=" text-red-600 text-base">*</span>
            </label>
          </div>

          <div className="sm:col-span-9">
            <div className="sm:flex">
              <input
                id="address"
                type="text"
                className="py-2 px-3 border pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="address_2"
              className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
            >
              Address 2 <span className=" text-red-600 text-base">*</span>
            </label>
          </div>

          <div className="sm:col-span-9">
            <div className="sm:flex">
              <input
                type="text"
                id="address_2"
                required
                className="py-2 px-3 border pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Address 2"
                name="address_2"
                value={formData.address_2}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className=" mb-2">
              <label
                htmlFor="city"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
              >
                City <span className=" text-red-600 text-base">*</span>
              </label>

              <input
                id="city"
                type="text"
                required
                className="py-2 px-3 border pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="state"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
              >
                Province <span className=" text-red-600 text-base">*</span>
              </label>

              <input
                id="state"
                type="text"
                required
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="py-2 px-3 border pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Province"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="postal_code"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
              >
                Post Code <span className=" text-red-600 text-base">*</span>
              </label>
              <input
                id="postal_code"
                name="postal_code"
                value={formData.postal_code}
                onChange={handleInputChange}
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
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit" // Change type to submit to trigger form submission
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent bg-blue-600 text-white shadow hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              onClick={handleSubmit} // Add handleSubmit as onClick event handler
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
