import React, { useState, FormEvent } from 'react';
import "./CSS/lodding.css"

export default function OurServices() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/submit_complaint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, complaint: message }),
      });

      const result = await response.json();
      console.log(result.message);

      setSuccess(true);

      // Reset success state and loading state after 2 seconds
      setTimeout(() => {
        setSuccess(false);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error('Error submitting complaint:', error);

      // Reset loading state in case of an error
      setLoading(false);
    }
  };

  return (
    <>
      <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
        <section id="contact">
          <div className="container">
            <div className="contact-card">
              <div className="infos">
                <h6 className="section-subtitle">Get Here</h6>
                <h6 className="section-title mb-4">Contact Us</h6>

                <div className="item">
                  <i className="ti-location-pin"></i>
                  <div className="">
                    <h5>Location</h5>
                    <p>1-5-460/2, OLD ALWAL, SECUNDERABAD,</p>
                    <p>TELANGANA, INDIA</p>
                  </div>
                </div>
                <div className="item">
                  <i className="ti-mobile"></i>
                  <div>
                    <h5>Phone Number</h5>
                    <a href="tel:+918106465916">+91 8106465916</a>
                  </div>
                </div>
                <div className="item">
                  <i className="ti-email"></i>
                  <div className="mb-0">
                    <h5>Email Address</h5>
                    <a href="mailto:info@aifats.com?subject=Feedback%20to%20Contact&body=Hello%20World!">info@aifats.com</a>
                  </div>
                </div>
                <div className="item">
                  <i className="ti-world"></i>
                  <div className="mb-0">
                    <h5>example.com</h5>
                    <a href="https://www.aifats.com" target="_https://www.aifats.com">www.aifats.com</a>
                  </div>
                </div>
              </div>
              <div className="form">
                <h6 className="section-subtitle">Available 24/7</h6>
                <h6 className="section-title mb-4">Get In Touch</h6>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="name"
                      className="form-control form-control-lg"
                      id="exampleInputname"
                      placeholder="name"
                      required
                      value={name}
              onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="contact-message"
                      id=""
                      className="form-control form-control-lg"
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className={`text-white bg-blue-400 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-full ${loading && 'disabled'}`}
                    disabled={loading}
                  >
                    {loading ? <div className="loading-spinner" /> : 'Send Message'}
                  </button>
                </form>
                {success && (
          <div className="success-message">
            Message sent successfully!
          </div>
        )}
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
