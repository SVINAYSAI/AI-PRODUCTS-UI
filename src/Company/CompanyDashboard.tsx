import { SetStateAction, useState } from 'react';

export default function CompanyDashboard() {
  // State to manage the user status (active or deactivated)
  const [userStatus, setUserStatus] = useState('Active'); // Default to 'Active'

  // Function to handle status change
  const handleStatusChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setUserStatus(event.target.value);
  };

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
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                    Maha
                  </th>
                  <td className="px-6 py-4 dark:text-black">maha@example.com</td>
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
