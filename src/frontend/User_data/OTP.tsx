import { Link } from "react-router-dom";
import img from "../../Components/assets/imgs/christmas.jpg";
import { useState, useRef } from "react";

export default function OTP() {
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const completeOtp = otpValues.join("");
    console.log("Complete OTP:", completeOtp);
  };

  return (
    <div
      className="w-full overflow-y-auto"
      style={{
        backgroundImage: `url(${img})`,
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

                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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

                  <Link
                    to="/log/sign-in"
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Send
                  </Link>
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
