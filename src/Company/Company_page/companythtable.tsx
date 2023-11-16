import CompanyTextarea from "./company1_pages/textarea";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CompanyUserPreview from "./company1_pages/Companyuser";


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

export default function CompanyThTable() {
  const [users, setUsers] = useState<UserWithStatus[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showPreview, setShowPreview] = useState(false);
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
    console.log("Clicked on Preview. User:", user);
  
    // Check if user.complaints is defined
    if (user.complaints) {
      const complaintKeys = Object.keys(user.complaints);
  
      // Check if there are any complaint keys before accessing the last one
      if (complaintKeys.length > 0) {
        const lastComplaintKey = complaintKeys[complaintKeys.length - 1];
        const lastComplaint = user.complaints[lastComplaintKey];
        setSelectedUserComplaint(`${lastComplaint.COMPLAINT} (${lastComplaint.datetime})`);
      } else {
        setSelectedUserComplaint("No complaints available");
      }
    } else {
      setSelectedUserComplaint("No complaints available");
    }
  
    // Set the selected user and show the preview popup
    handleUserSelection(user);
    setShowPreviewPopup(true);
    navigate('/our_dash@board/companyuser');
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

  const handleUserSelection = (user: User | null) => {
    setSelectedUser(user);
  };

  return (
    <div className="mb-2 text-xl font-semibold dark:text-black p-[2%]">
      <div className="relative overflow-y-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-md shadow-md">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="col" className="px-6 py-3">
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
              <tr
                key={user.username}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                >
                  {(user.username || user.name)?.trim() || "Name not available"}
                </th>
                <td className="px-6 py-4 dark:text-black">
                  {user.email || "email not available"}
                </td>
                <td className="px-6 py-4 dark:text-black">pricing</td>

                <td className="px-6 py-4 dark:text-black">
                  <select
                    value={user.userStatus}
                    onChange={(e) =>
                      user.username && handleStatusChange(e, user.username)
                    }
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
                    className="text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-blue-500 dark:hover:bg-blue-500 focus:outline-none dark:focus:ring-blue-500"
                  >
                    Preview
                  </button>
                </td>
                <td className="px-6 py-4 dark:text-black">
                  <button
                    type="button"
                    onClick={() => handleComplaintfeedbackButtonClick1(user)}
                    className="text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-blue-500 dark:hover:bg-blue-500 focus:outline-none dark:focus:ring-blue-500"
                  >
                    feedback
                  </button>
                </td>
                <td className="px-6 py-4 dark:text-black">
                  <select
                    value={user.userStatus}
                    onChange={(e) =>
                      user.username && handleStatusChange(e, user.username)
                    }
                    className="bg-white rounded-md py-1"
                  >
                    <option value="Active">resolved</option>
                    <option value="Deactivated">not resolved</option>
                  </select>
                </td>
                <td className="px-6 py-4 dark:text-black">
                  <button
                    type="button"
                    className="text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-blue-500 dark:hover:bg-blue-500 focus:outline-none dark:focus:ring-blue-500"
                  >
                    send
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {showPreview && <CompanyUserPreview />}
          {showPreviewPopup1 && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg">
                <div className="ml-[100%] mt-[-4%]">
                  <button onClick={closePreviewPopup1}>
                    <svg
                      fill="#000000"
                      height="20px"
                      width="15px"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 460.775 460.775"
                      xmlSpace="preserve"
                    >
                      <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
                    </svg>
                  </button>
                </div>
                <h2 className="text-2xl font-bold mb-4">Complaint Preview</h2>
                <CompanyTextarea />
              </div>
            </div>
          )}
        </table>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(users.length / usersPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
