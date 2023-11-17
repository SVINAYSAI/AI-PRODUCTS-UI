import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Mail from "./Mail";

interface Complaint {
  complaint: string;
  datetime: string;
}

export default function CompanyUserPreview() {
  const location = useLocation();
  const user = location.state?.user;
  const complaints: Complaint[] = location.state?.complaints || [];

  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(
    null
  );

  useEffect(() => {
    // Reset selected complaint when user changes
    setSelectedComplaint(null);
  }, [user]);

  const handleComplaintClick = (complaint: Complaint) => {
    // Set the selected complaint when clicked
    setSelectedComplaint(complaint);
  };

  return (
    <>
      <main className="p-4 md:ml-64 h-auto mt-14">
        <div className="container mx-auto mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Complaints for {user?.name || "User"}
          </h2>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr className="bg-gray-200 border-b">
                <th scope="col" className="px-6 py-3">
                  Complaint
                </th>
                <th scope="col" className="px-6 py-3">
                  Datetime
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td className="px-6 py-4">{complaint.complaint}</td>
                  <td className="px-6 py-4">{complaint.datetime}</td>
                  <td className="px-6 py-4">{user?.name || "User"}</td>
                  <td className="px-6 py-4">
                    {user?.email || "Email not available"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <main
            className="p-4 h-auto mt-14 flex w-full shadow-lg rounded-3xl"
            style={{ maxHeight: "50%", maxWidth: "100%" }}
          >
            <section className="overflow-y-auto overflow-x-hidden border-r-2 w-[30%] pt-3 bg-gray-50 h-full">
              <ul className="mt-6">
                {complaints.map((complaint, index) => (
                  <li
                    key={index}
                    className="border-b p-3 transition hover:bg-indigo-100"
                    onClick={() => handleComplaintClick(complaint)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="grid grid-rows-2">
                        <h3 className="text-lg font-semibold">
                          {user?.name || "User"}
                        </h3>
                        <p className="text-md text-gray-400">
                          {complaint.datetime}
                        </p>
                      </div>
                    </div>
                    <div className="text-md italic text-gray-400">
                      New Complaint
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="px-4 flex flex-col w-[70%] bg-gray-50 rounded-r-3xl">
              <div className="flex justify-between items-center h-48 border-b-2 mb-8">
                <div className="flex space-x-4 items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img
                      src="https://bit.ly/2KfKgdy"
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-lg">
                      {user?.name || "User"}
                    </h3>
                    <p className="text-gray-800">
                      {user?.email || "Email not available"}
                    </p>
                  </div>
                </div>
                <div>
                  <ul className="flex text-gray-400 space-x-4">
                    <li className="w-6 h-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                        />
                      </svg>
                    </li>
                    <li className="w-6 h-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </li>

                    <li className="w-6 h-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                        />
                      </svg>
                    </li>
                    <li className="w-6 h-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </li>
                    <li className="w-6 h-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                {selectedComplaint ? (
                  <>
                    <h3 className="font-semibold text-lg">
                      {user?.name || "User"} - {selectedComplaint.datetime}
                    </h3>
                    <p className="text-md text-gray-400">
                      {selectedComplaint.complaint}
                    </p>
                  </>
                ) : (
                  <p>Select a complaint to view details</p>
                )}
              </div>

              <section className="mt-6 border rounded-xl bg-gray-50 mb-3" style={{ maxHeight: "50%", maxWidth: "100%" }}>
                <Mail />
              </section>
            </section>
          </main>
        </div>
      </main>
    </>
  );
}
