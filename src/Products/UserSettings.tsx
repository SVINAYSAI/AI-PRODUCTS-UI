import React, { useState } from "react";
import { useCookies } from "react-cookie";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const [cookies, setCookie] = useCookies(["userinfo"]);
  const { email, firstname, lastname, password, username, isBase64 } =
    cookies.userinfo || {};

  const [newPicture, setNewPicture] = useState<string | null>(null);

  const picture =
    newPicture ||
    cookies.userinfo?.picture ||
    localStorage.getItem("userPicture");

  console.log("Cookies in Dashboard:", cookies);

  const isHttpLink = picture && picture.startsWith("http");
  const isBase64Image = isBase64 === true;

  const handlePictureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      // Read the new image as a data URL and convert it to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImageBase64 = reader.result as string;

        // Update the state with the new image
        setNewPicture(newImageBase64);

        // Update the cookies with the new image
        setCookie("userinfo", { ...cookies.userinfo, picture: newImageBase64 });
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="bg-gray-50 lg:ml-64" id="main-content">
        <div className="mb-2 text-xl font-semibold dark:text-black pt-[7%] pl-[2%]">
          User Setting
        </div>

        <div className="grid grid-cols-2 px-4 pt-6 xl:grid-cols-2 xl:gap-4">
          <div className="w-full">
            <div className="p-4 mb-4 bg-white border border-gray-200 rounded-md shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
              <div className=" justify-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                <div className="flex justify-center">
                  {picture && (
                    <div>
                      {isHttpLink ? (
                        <img
                          className="mb-4 mt-3 rounded-md justify-center w-[100%] sm:mb-0 xl:mb-4 2xl:mb-0"
                          src={picture}
                          alt="User Picture"
                        />
                      ) : isBase64Image ? (
                        <img
                          className="mb-4 mt-3 rounded-md justify-center w-[100%] sm:mb-0 xl:mb-4 2xl:mb-0"
                          src={`data:image/png;base64,${picture}`}
                          alt="User Picture"
                        />
                      ) : (
                        <p>Invalid picture format</p>
                      )}
                    </div>
                  )}
                </div>
                <div className="mt-[3%]">
                  <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-black">
                    Profile picture
                  </h3>
                  <div className="flex items-center space-x-4 mt-[2%]">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePictureUpload}
                      style={{ display: "none" }}
                      id="pictureInput"
                    />
                    <label
                      htmlFor="pictureInput"
                      className="inline-flex items-center border px-3 py-2 text-sm font-medium text-center text-black rounded-md bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer"
                    >
                      <svg
                        className="w-4 h-4 mr-2 -ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path>
                        <path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path>
                      </svg>
                      Upload picture
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="m-4 p-4  bg-white border border-gray-200 rounded-md shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <h2>User Information Preview</h2>
          {username && <p>Username: {username}</p>}
          {email && <p>Email: {email}</p>}
          {firstname && <p>First Name: {firstname}</p>}
          {lastname && <p>Last Name: {lastname}</p>}
          {password && <p>Password: {password}</p>}
          {picture && (
            <div>
              {isHttpLink ? (
                <img
                  src={picture}
                  alt="User Picture"
                  style={{ maxWidth: "100px" }}
                />
              ) : isBase64Image ? (
                <img
                  src={`data:image/png;base64,${picture}`}
                  alt="User Picture"
                  style={{ maxWidth: "100px" }}
                />
              ) : (
                <p>Invalid picture format</p>
              )}
            </div>
          )}
          {!username &&
            !email &&
            !firstname &&
            !lastname &&
            !password &&
            !picture && <p>No user information available</p>}
        </div>
      </div>
    </>
  );
};
export default Dashboard;
