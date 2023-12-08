import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Forgot() {
  const [email, setEmail] = useState<string>("");
  const [, setCookie] = useCookies(["email"]);
  const navigate = useNavigate();

  const [captcha, setCaptcha] = useState<string>("");
  const [enteredCaptcha, setEnteredCaptcha] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [captchaImage, setCaptchaImage] = useState<string | null>(null);
  const [remainingTime, setRemainingTime] = useState(0);
  const [showGenerateCaptcha, setShowGenerateCaptcha] = useState(true);

  // Function to generate a new captcha
  const generateCaptcha = () => {
    const alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    const first = alphabets[Math.floor(Math.random() * alphabets.length)];
    const second = Math.floor(Math.random() * 10);
    const third = Math.floor(Math.random() * 10);
    const fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
    const fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
    const sixth = Math.floor(Math.random() * 10);
    const newCaptcha = `${first}${second}${third}${fourth}${fifth}${sixth}`;

    // Convert captcha to base64 image
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d")!;
    context.font = "20px Arial";
    canvas.width = context.measureText(newCaptcha).width;
    canvas.height = 25;
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#000000";
    context.fillText(newCaptcha, 0, 20);
    const captchaDataURL = canvas.toDataURL();
    setCaptchaImage(captchaDataURL);

    // Update state values
    setCaptcha(newCaptcha);
    setEnteredCaptcha("");
    setStatus("");

    // Disable the generateCaptcha button
    setShowGenerateCaptcha(false);

    // Start the timer
    setRemainingTime(99);
  };

  useEffect(() => {
    generateCaptcha();
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;

    if (!showGenerateCaptcha && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (remainingTime === 0) {
      clearInterval(timer);
      setShowGenerateCaptcha(true);
    }

    // Cleanup the timer on component unmount
    return () => clearInterval(timer);
  }, [remainingTime, showGenerateCaptcha]);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSendClick = (e: FormEvent) => {
    e.preventDefault();

    // Check if the entered captcha is correct
    if (enteredCaptcha !== captcha) {
      setStatus("Incorrect Captcha. Please try again.!!");
      return;
    }

    // Set the email cookie
    setCookie("email", email, { path: "/" });
    navigate("/loading");
    setTimeout(() => {
      navigate("/log/otp_verify");
    }, 3000);
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
        {/* Right side login container */}
        <div
          className="w-full md:w-1/2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-gray-50  rounded-md dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 opacity-80">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl ">
                  Enter Your Mail
                </h1>

                <form
                  className="space-y-4 md:space-y-6"
                  action=""
                  onSubmit={handleSendClick}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                    >
                      Your Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 rounded-md flex items-center pl-3.5 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 16"
                        >
                          <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                          <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@aifact.com"
                      />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-[54%] border">
                      {captchaImage && (
                        <img
                          className="w-full h-11"
                          src={captchaImage}
                          alt="Captcha Image"
                        />
                      )}
                    </div>
                    {showGenerateCaptcha ? (
                      <div className="mt-1 ml-1" onClick={generateCaptcha}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                          width="30px"
                          height="18px"
                        >
                          <path d="M 25 2 A 1.0001 1.0001 0 1 0 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 18.307314 7.130711 12.364806 12 8.5195312 L 12 15 A 1.0001 1.0001 0 1 0 14 15 L 14 6.5507812 L 14 5 L 4 5 A 1.0001 1.0001 0 1 0 4 7 L 10.699219 7 C 5.4020866 11.214814 2 17.712204 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z" />
                        </svg>
                      </div>
                    ) : (
                      <div className="mt-1 ml-1">
                        {`Please wait ${remainingTime} seconds`}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      id="entered-captcha"
                      placeholder="Enter the captcha.."
                      value={enteredCaptcha}
                      onChange={(e) => setEnteredCaptcha(e.target.value)}
                      className="border-2 border-c5c7f7 font-mono outline-none rounded-md px-2 py-1"
                    />
                    <div className="grid grid-cols-1 gap-4">
                      <span style={{ color: "#ee7e6a" }}>{status}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Left side content */}
        <div
          className="w-full md:w-1/2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className=" pt-28">
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
