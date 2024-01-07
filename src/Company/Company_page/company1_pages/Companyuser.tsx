import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Mail, { MailProps } from "./Mail";

interface Complaint {
  complaint: string;
  datetime: string;
}

interface BackendResponse {
  feedback: string;
}

interface BackendResponse {
  feedback: string;
}

export default function CompanyUserPreview() {
  const location = useLocation();
  const user = location.state?.user;
  const complaints: Complaint[] = location.state?.complaints || [];
  const [mailProps, setMailProps] = useState<MailProps | null>(null);

  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(
    null
  );

  useEffect(() => {
    // Reset selected complaint when user changes
    setSelectedComplaint(null);
    setMailProps(null);
    console.log("userinfo", user)
  }, [user]);

  const handleComplaintClick = (complaint: Complaint, complaintKey: string) => {
    // Set the selected complaint when clicked
    setSelectedComplaint(complaint);

    // Extract complaint number using regular expression
    const match = complaintKey.match(/\d+/);
    const complaintNumber = match ? match[0] : null;

    console.log("complaint", complaint)
    console.log("Clicked Complaint Number:", complaintNumber);
    console.log("User Email:", user?.email || "Email not available");

    if (complaintNumber && user?.email) {
      fetchData(user.email, complaintNumber);
    }
  };

  const fetchData = async (email: string, complaintNumber: string) => {
    try {
      const requestData = {
        email: email,
        complaint_number: complaintNumber,
      };
  
      console.log("Sending request data to backend:", requestData);
  
      const response = await fetch("http://127.0.0.1:5000/feedback_view", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
  
      if (response.ok) {
        const feedbackData: BackendResponse = await response.json();
        console.log("Feedback Data:", feedbackData);
  
        // Use a type assertion to access the dynamic property
        const selectedFeedback = (feedbackData as any)[`feedback${complaintNumber}`];
  
        // Update the state with mailProps
        setMailProps({
          feedback: selectedFeedback?.feedback || "No feedback available",
          complaintNumber: complaintNumber || null,
          userEmail: email || null,
          feedbackDatetime: selectedFeedback?.feedback_datetime || "N/A",
          files: selectedFeedback?.files || {},
        });
      } else {
        console.error("Failed to fetch feedback");
      }
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };
  
  
  return (
    <>
      <main className="p-4 md:ml-64 h-auto mt-14">
        <div className="container mx-auto mt-8">
          <main
            className="p-4 h-auto mt-14 flex w-full shadow-lg rounded-3xl"
            style={{ maxHeight: "50%", maxWidth: "100%" }}
          >
            <div className="grid-rows-2 ">
              <h2 className="text-2xl font-bold mb-4">
                Complaints for {user?.name || "User"}
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="...">
                  <section className="overflow-y-auto overflow-x-hidden border-r-2 pt-3 bg-gray-50 h-full">

                    <ul className="mt-6">
                      {complaints.map((complaint, index) => {
                        // Check if any of the required fields is empty
                        if (!user?.name || !complaint.datetime || !complaint.complaint) {
                          return null; // Skip rendering this list item
                        }
                        const complaintKey = `COMPLAINT${index + 1}`;

                        return (
                          <li
                            key={index}
                            className="border-b p-3 transition hover:bg-indigo-100"
                            onClick={() => handleComplaintClick(complaint, complaintKey)}
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
                        );
                      })}

                    </ul>
                  </section>
                </div>
                <div className="">
                  <section className="px-4 flex flex-col bg-gray-50 rounded-r-3xl">
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
                    <section
              className="mt-6 border rounded-xl bg-gray-50 mb-3"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            >
              {selectedComplaint && mailProps && (
                <>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Feedback Details
                    </h3>
                    <p>
                      Feedback: {mailProps.feedback}
                    </p>
                    <p>
                      Complaint Number: {mailProps.complaintNumber}
                    </p>
                    <p>
                      User Email: {mailProps.userEmail}
                    </p>
                    <p>
                      Feedback Datetime: {mailProps.feedbackDatetime}
                    </p>
                  </div>
                  {/* Add logic to display files as needed */}
                </>
              )}
            </section>
                    <section
                      className="mt-6 border rounded-xl bg-gray-50 mb-3"
                      style={{ maxHeight: "100%", maxWidth: "100%" }}
                    >
                      {selectedComplaint && mailProps && (
                        <Mail {...mailProps} />
                      )}
                    </section>
                  </section>
                </div>
              </div>
            </div>
          </main>
        </div>
      </main>
    </>
  );
}