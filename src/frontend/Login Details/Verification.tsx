import { useState, useEffect } from "react";
import "../../frontend/Login Details/login.css";
import { Link } from "react-router-dom";

function App() {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [isVerifyDisabled, setVerifyDisabled] = useState(true);
  const [isResendDisabled, setResendDisabled] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      if (secondsLeft > 0) {
        setSecondsLeft((prev) => prev - 1);
      } else {
        setResendDisabled(false);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  const handleInputChange = (index: number, value: string) => {
    if (value.match(/^\d+$/) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      const isDisabled = newOtp.some((value) => value === "");
      setVerifyDisabled(isDisabled);

      // Automatically move to the next input field if a digit is entered
      if (index < 4 && value !== "") {
        document.getElementById(`otp-input-${index + 1}`)?.focus();
      }
    }
  };

  const handleResendClick = () => {
    setSecondsLeft(30);
    setResendDisabled(true);
    // Implement OTP resend logic here
  };

  const handleVerifyClick = () => {
    const enteredOtp = otp.join("");
    // Implement OTP verification logic here using the `enteredOtp` variable
  };

  return (
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col-md-6 text-center text-md-start d-flex flex-column justify-content-center">
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            The best offer <br />
            <span className="text-primary">for your business</span>
          </h1>

          <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque?
          </p>
        </div>

        <div className="col-md-6">
          <div className="card my-5">
            <div className="card-body p-5">
              <div className="d-flex justify-content-center">
                {otp.map((value, index) => (
                  <div className="mb-4 mx-2" key={index}>
                    <input
                      className="form-control text-center"
                      type="text"
                      maxLength={1}
                      value={value}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      id={`otp-input-${index}`}
                    />
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <button
                  onClick={handleResendClick}
                  disabled={isResendDisabled}
                  className={`btn btn-primary ${
                    isResendDisabled ? "disabled" : ""
                  }`}
                  style={{ width: "150px", height: "40px" }}
                >
                  Re-send {isResendDisabled ? `(${secondsLeft}s)` : ""}
                </button>
                {isVerifyDisabled ? (
                  <button
                    disabled
                    className="btn btn-primary"
                    style={{ width: "150px", height: "40px", pointerEvents: "none", opacity: 0.5 }}
                  >
                    Verify
                  </button>
                ) : (
                  <Link
                    to="/createpw"
                    onClick={handleVerifyClick}
                    className="btn btn-primary"
                    style={{ width: "150px", height: "40px" }}
                  >
                    Verify
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
