// CompanyThTableLogic.tsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Complaint {
  COMPLAINT: string;
  datetime: string;
}

interface User {
  _id: string;
  name?: string;
  username?: string;
  email: string;
  complaints?: Record<string, Complaint>;
  userStatus: string;
}

interface UserWithStatus extends User {
  userStatus: string;
}

export const useCompanyThTableLogic = () => {
  const [users, setUsers] = useState<UserWithStatus[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const usersPerPage = 5;
  const [showPreviewPopup, setShowPreviewPopup] = useState<boolean>(false);
  const [showPreviewPopup1, setShowPreviewPopup1] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedUserComplaint, setSelectedUserComplaint] = useState<string>("");
  const [selectedUserComplaintfeedback, setSelectedUserComplaintfeedback] = useState<string>("");

  const navigate = useNavigate();

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

    const complaints: string[] = [];

    // Check if user.complaints is defined before iterating
    if (user.complaints) {
      for (const key in user.complaints) {
        const complaint = user.complaints[key];
        complaints.push(`${complaint.COMPLAINT} (${complaint.datetime})`);
      }
    }

    const formattedComplaints = complaints.length > 0 ? complaints.join(", ") : "No complaints available";
    setSelectedUserComplaint(formattedComplaints);

    // Use useNavigate to navigate to the desired page
    navigate("/our_dash@board/companyuser");

    console.log("Data sent to MongoDB for user:", user);
  };
  const handleComplaintfeedbackButtonClick1 = (user: User) => {
    console.log("Clicked on Preview Complaint. User:", user);

    // Check if user.complaints is defined
    if (user.complaints) {
      const complaintKeys = Object.keys(user.complaints);
      
      // Check if there are any complaint keys before accessing the last one
      if (complaintKeys.length > 0) {
        const lastComplaintKey = complaintKeys[complaintKeys.length - 1];
        const lastComplaint = user.complaints[lastComplaintKey];
        setSelectedUserComplaintfeedback(`${lastComplaint.COMPLAINT} (${lastComplaint.datetime})`);
      } else {
        setSelectedUserComplaintfeedback("No complaints available");
      }
    } else {
      setSelectedUserComplaintfeedback("No complaints available");
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
