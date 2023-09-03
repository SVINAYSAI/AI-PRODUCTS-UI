import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../frontend/Login Details/login.css";

function App() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
              <div className="mb-4">
                <label htmlFor="password" className="form-label"></label>
                <div className="input-group">
                  <input
                    className="form-control"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="form-label"></label>
                <div className="input-group">
                  <input
                    className="form-control"
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <Link
                to="/login"
                className="btn btn-primary w-100 mb-4 text-center"
              >
                Submit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
