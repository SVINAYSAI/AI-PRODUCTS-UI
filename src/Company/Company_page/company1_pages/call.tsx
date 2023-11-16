import React from "react";
import CompanyUserPreview from "./Companyuser";

export default function Callcompanyuser() {
  // Define a dummy user and complaintClick handler for demonstration purposes
  const dummyUser = { complaints: { "1": { COMPLAINT: "Dummy Complaint", datetime: "2023-01-01" } } };
  const handleComplaintClick = (complaint: any) => {
    console.log("Clicked on complaint:", complaint);
  };

  return (
    <></>
  );
}
