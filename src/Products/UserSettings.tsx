import React from "react";
import { useCookies } from "react-cookie";

export default function Dashboard() {
  const [cookies] = useCookies(["userinfo"]);
  const { email, firstname, lastname, password, username } =
    cookies.userinfo || {};

  // Retrieve picture separately from local storage
  const picture = localStorage.getItem("userPicture");

  console.log("Cookies in Dashboard:", cookies);

  return (
    <>
      <div className="bg-gray-50 lg:ml-64" id="main-content">
        <div className="mb-2 text-xl font-semibold dark:text-black pt-[7%] pl-[2%]">
          User Setting
        </div>

        <div>
          <h2>User Information Preview</h2>
          {username && <p>Username: {username}</p>}
          {email && <p>Email: {email}</p>}
          {firstname && <p>First Name: {firstname}</p>}
          {lastname && <p>Last Name: {lastname}</p>}
          {password && <p>Password: {password}</p>}
          {picture && (
            <img
              src={`data:image/png;base64,${picture}`}
              alt="User Picture"
              style={{ maxWidth: "100px" }}
            />
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
}
