import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function OTP() {
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [cookies] = useCookies(["user"]);
  const navigate = useNavigate();

  const inputRefs = [
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
  ];

  const handleOtpChange = (index: number, value: string) => {
    if (/^\d$/.test(value)) {
      const updatedOtpValues = [...otpValues];
      updatedOtpValues[index] = value;
      setOtpValues(updatedOtpValues);

      // Move to the next input field or focus on the previous if backspace is pressed
      if (value !== "" && index < 5) {
        inputRefs[index + 1]?.current?.focus();
      } else if (index > 0 && value === "") {
        inputRefs[index - 1]?.current?.focus();
      }
    }
  };

  const handleSubmit = async () => {
    // Combine OTP values into a single string
    const completeOtp = otpValues.join("");

    // Read email from cookies
    const userEmail = cookies.user?.email;

    try {
      // Make a POST request to the Flask backend
      const response = await fetch("http://195.35.22.190:5000/otp/verify_otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          otp: completeOtp,
        }),
      });

      // Check the response from the backend
      if (response.ok) {
        const result = await response.json();
        console.log(result.message); // Display success message

        // Redirect to the desired page after successful OTP verification
        // You can replace '/log/sign-in' with the appropriate route
        navigate("/log/sign-in");
      } else {
        const error = await response.json();
        console.error(error.error); // Display error message
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div
      className="w-full overflow-y-auto"
      style={{
        backgroundImage: `url("http://195.35.22.190/virtual_directory/ui_images/components/assets/imgs/christmas.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col-reverse md:flex-row">
        <div
          className="w-full md:w-1/2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-gray-50  rounded-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 opacity-80">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl ">
                  Enter OTP
                </h1>

                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-6 gap-2">
                    {otpValues.map((value, index) => (
                      <input
                        key={index}
                        type="text"
                        value={value}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        maxLength={1}
                        ref={inputRefs[index]}
                        className="w-10 h-10 border border-gray-300 rounded text-center text-lg font-semibold"
                      />
                    ))}
                  </div>

                  <button
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    onClick={handleSubmit}
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full md:w-1/2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="pt-28">
            <h1 className="fables-second-text-color mt-3 font-30 font-weight-bold text-center text-white pt-[10%]">
              Provide you the great Services
            </h1>
          </div>
          <h3 className="fables-second-text-color mt-3 font-30 font-weight-bold text-center text-white pt-[10%]">
            Log-in to our website for limitless creativity.
          </h3>
        </div>
      </div>
    </div>
  );
}
