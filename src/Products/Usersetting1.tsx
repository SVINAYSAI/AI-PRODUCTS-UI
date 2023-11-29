import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

function Usersetting1() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [cookies] = useCookies(["userinfo"]);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isProgressBarVisible, setProgressBarVisible] = useState(false);

  useEffect(() => {
    const userEmailFromCookies = cookies.userinfo?.email || "";
    setUserEmail(userEmailFromCookies);
  }, [cookies.userinfo?.email]);

  const handlePasswordChange = (password: string) => {
    const strength = calculatePasswordStrength(password);
    setPasswordStrength(strength);

    // Show the progress bar only after entering one letter
    setProgressBarVisible(password.length > 0);
  };

  const calculatePasswordStrength = (password: string) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    const criteriaMet = [hasUppercase, hasLowercase, hasDigit, hasSpecialChar];
    const strength = criteriaMet.filter(Boolean).length / criteriaMet.length;

    return strength;
  };

  const getPasswordColor = () => {
    if (passwordStrength >= 0.75) {
      return "bg-green-500";
    } else if (passwordStrength >= 0.5) {
      return "bg-yellow-500";
    } else {
      return "bg-red-500";
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    try {
      const response = await fetch(
        "http://127.0.0.1:5000/password/change_password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail,
            current_password: currentPassword,
            new_password: newPassword,
          }),
        }
      );

      const data = await response.json();
      alert(data.message);

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      // Reset password strength indicator after successful password change
      setPasswordStrength(0);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-md shadow-sm 2xl:col-span-2">
          <h3 className="mb-4 text-xl font-semibold dark:text-black">
            Password information
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div className="">
                <label
                  htmlFor="current-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Current password
                </label>
                <input
                  type="password"
                  name="current-password"
                  id="current-password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="••••••••"
                />
              </div>
              <div className="">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  New password
                </label>
                <input
                  type="password"
                  id="password"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                    handlePasswordChange(e.target.value);
                  }}
                  className={`bg-gray-50 border shadow-sm border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="••••••••"
                />
                <div className="mt-2">
                  {isProgressBarVisible && (
                    <div
                      className={`w-full bg-gray-200 rounded-full dark:bg-gray-700`}
                    >
                      <div
                        className={`bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full ${getPasswordColor()}`}
                        style={{ width: `${passwordStrength * 100}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="••••••••"
                />
              </div>
              <div className="mt-[14%]">
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  type="submit"
                >
                  Change Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Usersetting1;
