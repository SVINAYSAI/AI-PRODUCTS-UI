// import { SetStateAction, useState } from 'react';
import { useState, useEffect } from 'react';

interface User {
  name?: string;
  username?: string;
  email: string;
  rows: string;
}

export default function CompanyDashboard() {
  // State to manage the user status (active or deactivated)
  const [userStatus, setUserStatus] = useState<string>('Active');
  const [users, setUsers] = useState<User[]>([]);

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUserStatus(event.target.value);
  };

  useEffect(() => {
    // Fetch user data from the Flask API
    fetch('http://localhost:5000/api/users')
      .then((response) => response.json())
      .then((data: User[]) => setUsers(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);


  return (
    <>
      <div className="bg-gray-50 lg:ml-64" id="main-content">
        <div className="mb-2 text-xl font-semibold dark:text-black pt-[7%] p-[2%]">
          <div className="relative overflow-x-auto">
            <table className="w-full rounded-md text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
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
                  <th scope="col" className="px-6 py-3">
                    send
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.username} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                    >
                      {(user.username || user.name)?.trim() || 'Name not available'}
                    </th>
                    <td className="px-6 py-4 dark:text-black">{user.email || "email not available"}</td>
                    <td className="px-6 py-4 dark:text-black">pricing</td>

                    <td className="px-6 py-4 dark:text-black">
                      <select
                        value={userStatus}
                        onChange={handleStatusChange}
                        className="bg-white rounded-md py-1"
                      >
                        <option value="Active">Active</option>
                        <option value="Deactivated">Deactivated</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 dark:text-black">
                      <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">preview complaint</button>
                    </td>
                    <td className="px-6 py-4 dark:text-black">
                      <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">feedback complaint</button>
                    </td>
                    <td className="px-6 py-4 dark:text-black">
                      <select
                        value={userStatus}
                        onChange={handleStatusChange}
                        className="bg-white rounded-md py-1"
                      >
                        <option value="Active">resolved</option>
                        <option value="Deactivated">not resolved</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 dark:text-black">
                      <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        send
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
