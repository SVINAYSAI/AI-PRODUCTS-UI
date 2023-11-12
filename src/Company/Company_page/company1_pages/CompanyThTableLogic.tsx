// CompanyThTableLogic.tsx
import { useState, useEffect } from "react";

interface User {
  name?: string;
  username?: string;
  email: string;
  COMPLAINT?: string;
  complaint: string | { COMPLAINT: string; _id: string; email: string; name: string };
  rows: string;
  textarea: string;
}

export const useCompanyThTableLogic = () => {
  const [userStatus, setUserStatus] = useState<string>("Active");
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const usersPerPage = 5;
  const [showPreviewPopup, setShowPreviewPopup] = useState<boolean>(false);
  const [showPreviewPopup1, setShowPreviewPopup1] = useState<boolean>(false);
  const [selectedUserComplaint, setSelectedUserComplaint] = useState<string>("");
  const [selectedUserComplaintfeedback, setSelectedUserComplaintfeedback] = useState<string>("");

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserStatus(event.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((response) => response.json())
      .then((data: User[]) => setUsers(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handlePreviewButtonClick = (user: User) => {
    console.log("Clicked on Preview Complaint. User:", user);
    // Check if the user has a complaint and it's an object
    if (typeof user.complaint === "object" && user.complaint !== null) {
      const complaint = user.complaint.COMPLAINT || "Complaint not available";
      setSelectedUserComplaint(complaint);
    } else {
      setSelectedUserComplaint("Complaint not available");
    }
    setShowPreviewPopup(true);
  };

  const handleComplaintfeedbackButtonClick1 = (user: User) => {
    console.log("Clicked on Preview Complaint. User:", user);
    // Check if the user has a complaint and it's an object
    if (typeof user.complaint === "object" && user.complaint !== null) {
      const complaint = user.complaint.COMPLAINT || "Complaint not available";
      setSelectedUserComplaintfeedback(complaint);
    } else {
      setSelectedUserComplaintfeedback("Complaint not available");
    }
    setShowPreviewPopup1(true);
  };

  const closePreviewPopup1 = () => {
    setShowPreviewPopup1(false);
  };

  const closePreviewPopup = () => {
    setShowPreviewPopup(false);
  };

  return {
    userStatus,
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
  };
};
