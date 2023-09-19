
export default function OurServices() {
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
                    <p> 12345 Fake ST NoWhere AB Country</p>
                  </div>
                </div>
                <div className="item">
                  <i className="ti-mobile"></i>
                  <div>
                    <h5>Phone Number</h5>
                    <p>(123) 456-7890</p>
                  </div>
                </div>
                <div className="item">
                  <i className="ti-email"></i>
                  <div className="mb-0">
                    <h5>Email Address</h5>
                    <p>info@website.com</p>
                  </div>
                </div>
                <div className="item">
                  <i className="ti-world"></i>
                  <div className="mb-0">
                    <h5>example.com</h5>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>
              <div className="form">
                <h6 className="section-subtitle">Available 24/7</h6>
                <h6 className="section-title mb-4">Get In Touch</h6>
                <form>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="contact-message"
                      id=""
                      className="form-control form-control-lg"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-blue-400 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
