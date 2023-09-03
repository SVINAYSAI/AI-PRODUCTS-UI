import React from "react";
import { Link } from "react-router-dom";
import "../../frontend/Login Details/login.css";

function App() {
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
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <span>we will send you OTP</span>
              <Link
                to="/verify"
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
