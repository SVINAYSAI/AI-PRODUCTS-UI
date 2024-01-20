import React, { useState } from "react";
import { useCookies } from "react-cookie";
import Usersetting1 from "./Usersetting1";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const [cookies, setCookies] = useCookies(["userinfo"]);
  const { email, firstname, lastname, password, username, isBase64 } =
    cookies.userinfo || {};

  const [newPicture, setNewPicture] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [userinfo, setUserinfo] = useState<any>(cookies.userinfo || {});

  const picture =
    newPicture ||
    cookies.userinfo?.picture ||
    localStorage.getItem("userPicture");

  console.log("Cookies in Dashboard:", cookies);

  const isHttpLink = picture && picture.startsWith("https");
  const isBase64Image = isBase64 === true;

  const handlePictureUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      try {
        const base64String = await convertImageToBase64(file);
        console.log("Base64 string:", base64String);

         // Remove the prefix "data:image/jpeg;base64," from the base64 string
      const cleanBase64String = base64String.split(",")[1];
      console.log("Clean Base64 string:", cleanBase64String);

        localStorage.setItem("userPicture", cleanBase64String);

        // Get the user's email from userinfo
        const userEmail: string | undefined = cookies.userinfo?.email;

        if (userEmail) {
          // Send the email and base64 string to the backend
          sendToBackend(userEmail, base64String);

          // Update the userinfo cookie with the new base64 string
          setCookies("userinfo", {
            ...userinfo,
            base64String: base64String,
          });
        } else {
          console.error("User email is undefined or null.");
        }
      } catch (error) {
        console.error("Error converting image to base64:", error);
      }
    }
  };

  const convertImageToBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          resolve(reader.result);
        } else {
          reject(new Error("Failed to convert image to base64."));
        }
      };

      reader.onerror = () => {
        reject(new Error("Error reading image file."));
      };

      reader.readAsDataURL(file);
    });
  };

  const sendToBackend = async (email: string, base64String: string) => {
    try {
      const payload = {
        email: email,
        base64String: base64String,
      };

      console.log("Sending to backend:", payload);
      const response = await fetch(
        "https://www.aifats.com/api/picture_update/update_profile_picture",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            base64String: base64String,
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
      } else {
        console.error("Error updating profile picture:", response.statusText);
      }
    } catch (error) {
      console.error(
        "Error updating profile picture:",
        error instanceof Error ? error.message : "Unknown error"
      );
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
          <Usersetting1 />
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
