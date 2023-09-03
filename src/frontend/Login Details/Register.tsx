import axios from 'axios';
import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal } from "antd";
import "../../frontend/Login Details/login.css";

function App() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    phone_number: "",
    email: "",
  });

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000); // Close modal after 2 seconds
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/insert_user/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('User registration successful:', response.data);
      // You can add a success message or redirection logic here.
    } catch (error) {
      console.error('Error registering user:', error);
      // You can display an error message to the user.
    }
  };

  return (
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col-md-6 text-center text-md-start d-flex justify-content-center pt-10">
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            The best offer <br />
            <span className="text-primary">for your business</span>
          </h1>

          <p className="pt-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque?
          </p>
        </div>

        <div className="col-md-6">
          <div className="card my-5">
            <div className="card-body p-5">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-6">
                    <input
                      className="form-control"
                      name="first_name"
                      placeholder="First Name"
                      value={formData.first_name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-6">
                    <input
                      className="form-control"
                      name="last_name"
                      placeholder="Last Name"
                      value={formData.last_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <input
                      className="form-control"
                      name="username"
                      placeholder="Username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-6">
                    <input
                      className="form-control"
                      name="phone_number"
                      placeholder="Phone Number"
                      type="tel"
                      value={formData.phone_number}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <input
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <div className="mb-4">
                  <input
                    type="checkbox"
                    onClick={showModal}
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label htmlFor="flexCheckDefault">Check this box to continue</label>
                  <Modal
                    title="Terms & Conditions"
                    visible={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                  >
                    <p>{modalText}</p>
                  </Modal>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 mb-4"
                >
                  Register
                </button>
              </form>

              <div className="text-center">
                <p>or sign up with:</p>
                <div className="container">
                  <div className="row gap-4 pt-5 pl-34">
                    <Link to="">
                      <svg
                        className="w-6 h-6 text-blue-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 8 19"
                      >
                        {/* Add your SVG path here */}
                      </svg>
                    </Link>

                    <Link to="">
                      <svg
                        className="w-6 h-6 text-blue-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 17"
                      >
                        {/* Add your SVG path here */}
                      </svg>
                    </Link>

                    <Link to="">
                      <svg
                        className="w-6 h-6 text-blue-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 19"
                      >
                        {/* Add your SVG path here */}
                      </svg>
                    </Link>

                    <Link to=""></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
