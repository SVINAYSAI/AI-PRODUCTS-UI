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
  userStatus: string;
}

interface UserWithStatus extends User {
  userStatus: string;
}

export const useCompanyThTableLogic = () => {
  // Inside useCompanyThTableLogic
  const [users, setUsers] = useState<UserWithStatus[]>([]);
  // const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const usersPerPage = 5;
  const [showPreviewPopup, setShowPreviewPopup] = useState<boolean>(false);
  const [showPreviewPopup1, setShowPreviewPopup1] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null); // Updated state

  const [selectedUserComplaint, setSelectedUserComplaint] = useState<string>("");
  const [selectedUserComplaintfeedback, setSelectedUserComplaintfeedback] = useState<string>("");

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>, username: string) => {
    const updatedUsers = users.map((user) => {
      if (user.username === username) {
        return { ...user, userStatus: event.target.value };
      }
      return user;
    });
    setUsers(updatedUsers);
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
    console.log("Data sent to MongoDB for user:", user);
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

  const handleUserSelection = (user: User) => {
    setSelectedUser(user);
  };

  return {
    useState,
    users,
    currentPage,
    usersPerPage,
    showPreviewPopup,
    showPreviewPopup1,
    selectedUserComplaint,
    selectedUserComplaintfeedback,
    selectedUser,
    handleStatusChange,
    handleUserSelection,
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
