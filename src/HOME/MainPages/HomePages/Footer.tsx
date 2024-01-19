import { Link } from "react-router-dom";

export default function OurServices() {
  return (
    <>
      <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
        <section className="has-bg-img py-0">
          <div className="container">
            <div className="footer">
              <div className="footer-lists">
                <ul className="list">
                  <li className="list-head">
                    <h6 className="font-weight-bold">ABOUT US</h6>
                  </li>
                  <li className="list-body">
                    <Link to="#" className="logo">
                      <img
                        src="https://www.aifats.com/virtual_directory/ui_images/components/fats-logo/svg/logo-no-background.svg"
                        alt=""
                      />
                      <h6>FATS</h6>
                    </Link>
                    <p>
                      We offer AI-driven solutions in text conversion, Virtual
                      Reality, and Augmented Reality, providing seamless,
                      intelligent experiences across multiple platforms for a
                      wide range of applications.
                    </p>
                    <p className="mt-3 font-italic">
                      Copyright{" "}
                      <script>document.write(new Date().getFullYear())</script>{" "}
                      &copy;{"2023"}
                      <Link
                        className="d-inline text-black font-italic font-bold"
                        to=""
                      >
                        {" "}
                        FATS
                      </Link>
                    </p>
                  </li>
                </ul>
                <ul className="list">
                  <li className="list-head">
                    <h6 className="font-weight-bold">USEFUL LINKS</h6>
                  </li>
                  <li className="list-body">
                    <div className="row">
                      <div className="col">
                        <Link to="/about">About</Link>
                        <Link to="/services">Service</Link>
                        <Link to="#portfolio">Portfolio</Link>
                        <Link to="#testmonail">Testimonial</Link>
                      </div>
                      <div className="col">
                        <Link to="#team">Team</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contactus">Faq</Link>
                        <Link to="#">Privacy Policy</Link>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="list">
                  <li className="list-head">
                    <h6 className="font-weight-bold">CONTACT INFO</h6>
                  </li>
                  <li className="list-body">
                    <p>Contact us and we'll get back to you within 24 hours.</p>
                    <p>
                      <i className="ti-location-pin"></i> 12345 Fake ST NoWhere
                      AB Country
                    </p>
                    <p>
                      <i className="ti-email"></i> info@aifats.com
                    </p>
                    <div className="social-links">
                      <Link to="" className="link">
                        <i className="ti-facebook"></i>
                      </Link>
                      <Link to="" className="link">
                        <i className="ti-twitter-alt"></i>
                      </Link>
                      <Link to="" className="link">
                        <i className="ti-google"></i>
                      </Link>
                      <Link to="" className="link">
                        <i className="ti-pinterest-alt"></i>
                      </Link>
                      <Link to="" className="link">
                        <i className="ti-instagram"></i>
                      </Link>
                      <Link to="" className="link">
                        <i className="ti-rss"></i>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
