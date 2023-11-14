import { useState, useEffect } from "react";
import CompanyTextarea from "./company1_pages/textarea";
import { useCompanyThTableLogic } from "./company1_pages/CompanyThTableLogic";
interface User {
  name?: string;
  username?: string;
  email: string;
  COMPLAINT?: string;
  complaint: string | { COMPLAINT: string; _id: string; email: string; name: string };
  rows: string;
  textarea: string,
}

export default function CompanyThTable() {
  const {
    useState,
    users,
    currentPage,
    usersPerPage,
    showPreviewPopup,
    showPreviewPopup1,
    selectedUserComplaint,
    selectedUserComplaintfeedback,
    handleStatusChange,
    indexOfLastUser,
    indexOfFirstUser,
    currentUsers,
    handlePageChange,
    handlePreviewButtonClick,
    handleComplaintfeedbackButtonClick1,
    closePreviewPopup1,
    closePreviewPopup,
  } = useCompanyThTableLogic();
  return (
    <div className="mb-2 text-xl font-semibold dark:text-black p-[2%]">
      <div className="relative overflow-y-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="rounded-md">
              <th scope="col" className="px-6 py-3 rounded-l-md">
                User name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                pricing
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                complaint
              </th>
              <th scope="col" className="px-6 py-3">
                complaint feedback
              </th>
              <th scope="col" className="px-6 py-3">
                complaint Status
              </th>
              <th scope="col" className="px-6 py-3 rounded-r-md">
                send
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.username} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                >
                  {(user.username || user.name)?.trim() ||
                    "Name not available"}
                </th>
                <td className="px-6 py-4 dark:text-black">
                  {user.email || "email not available"}
                </td>
                <td className="px-6 py-4 dark:text-black">pricing</td>

                <td className="px-6 py-4 dark:text-black">
                  <select
                  value={user.userStatus}
                  onChange={(e) => user.username && handleStatusChange(e, user.username)}
                 
                    className="bg-white rounded-md py-1"
                  >
                    <option value="Active">Active</option>
                    <option value="Deactivated">Deactivated</option>
                  </select>
                </td>
                <td className="px-6 py-4 dark:text-black">
                  <button
                    type="button"
                    onClick={() => handlePreviewButtonClick(user)}
                    className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Preview Complaint
                  </button>
                </td>
                <td className="px-6 py-4 dark:text-black">
                  <button
                    type="button"
                    onClick={() => handleComplaintfeedbackButtonClick1(user)}
                    className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    feedback complaint
                  </button>
                </td>
                <td className="px-6 py-4 dark:text-black">
                  <select
                    value={user.userStatus}
                    onChange={(e) => user.username && handleStatusChange(e, user.username)}
                   
                    className="bg-white rounded-md py-1"
                  >
                    <option value="Active">resolved</option>
                    <option value="Deactivated">not resolved</option>
                  </select>
                </td>
                <td className="px-6 py-4 dark:text-black">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    send
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {showPreviewPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg w-[50%]">
                <h2 className="text-2xl font-bold mb-4">Complaint Preview</h2>
                <p>{selectedUserComplaint}</p>
                <button
                  onClick={closePreviewPopup}
                  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-4"
                >
                  Close
                </button>
              </div>
            </div>
          )}
          {showPreviewPopup1 && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Complaint Preview</h2>
                <CompanyTextarea />
                <button
                  onClick={closePreviewPopup1}
                  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-4"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </table>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="mx-4">
          Page {currentPage} of {Math.ceil(users.length / usersPerPage)}
        </span>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(users.length / usersPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  )
}