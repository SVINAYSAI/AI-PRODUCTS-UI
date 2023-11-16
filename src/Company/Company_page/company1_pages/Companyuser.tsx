import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface Complaint {
  complaint: string;
  datetime: string;
}

export default function CompanyUserPreview() {
  const location = useLocation();
  const user = location.state?.user;
  const complaints: Complaint[] = location.state?.complaints || [];

  return (
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
              <td className="px-6 py-4">{user?.email || "Email not available"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
