// import { useEffect } from 'react';
// import WOW from 'wow.js'; 
import img from "../../custom/images/map-marker.png";
import logo from "../../components/fats-logo/svg/logo-no-background.svg";
import "../../vendor/animate.css-master/animate.min.css";
import "../../vendor/fontawesome/css/fontawesome-all.min.css";
import "../../vendor/bootstrap/css/bootstrap-4-navbar.css";
import "../../vendor/bootstrap/css/bootstrap.min.css";
import "../../vendor/portfolio-filter-gallery/portfolio-filter-gallery.css";
import "../../vendor/fancybox-master/jquery.fancybox.min.css";
import "../../vendor/range-slider/range-slider.css";
import "../../vendor/OffCanvasMenuEffects/css/menu_sideslide.css";
import "../../vendor/owlcarousel/owl.carousel.min.css";
import "../../vendor/owlcarousel/owl.theme.default.min.css";
import "../../custom/css/custom-responsive.css";
import "../../custom/css/custom.css";
import "../../custom/css/fables-icons.css";
import { Link } from "react-router-dom";

export default function ContactUs() {
  // useEffect(() => {
  //   const wow = new WOW(); // Initialize wow.js
  //   wow.init();
  // }, []); // Run this effect only once, when the component mounts
  return (
    <>
      {/* <!-- Start page content -->  */}
      <div className="container">
        <div className="row overflow-hidden">
          <div className="col-12 col-md-10 offset-md-1 mt-5">
            <div className="row">
              <div
                className="col-12 col-sm-6 col-md-4 text-center mb-5 mb-md-0 wow fadeInDown"
                data-wow-delay=".5s"
              >
                <span className="fables-iconmap-icon fa-3x fables-main-text-color fables-second-hover-color"></span>
                <h2 className="font-16 semi-font fables-main-text-color my-3">
                  Address Information
                </h2>
                <p className="font-14 fables-forth-text-color">
                  level13, 2Elizabeth St, Melbourne,Victor 2000
                </p>
              </div>
              <div
                className="col-12 col-sm-6 col-md-4 text-center mb-5 mb-md-0 wow fadeInDown"
                data-wow-delay=".8s"
              >
                <span className="fables-iconphone fa-3x fables-main-text-color fables-second-hover-color"></span>
                <h2 className="font-16 semi-font fables-main-text-color my-3">
                  Mail & Phone number
                </h2>
                <p className="font-14 fables-forth-text-color">
                  adminsupport@website.com
                </p>
                <p className="font-14 fables-forth-text-color">
                  +333 111 111 000
                </p>
              </div>
              <div
                className="col-12 col-sm-6 col-md-4 text-center mb-5 mb-md-0 wow fadeInDown"
                data-wow-delay="1.1s"
              >
                <span className="fables-iconshare-icon fa-3x fables-main-text-color fables-second-hover-color"></span>
                <h2 className="font-16 semi-font fables-main-text-color my-3">
                  Stay In Touch
                </h2>
                <ul className="nav fables-contact-social-links">
                  <li>
                    <Link to="#" target="_blank">
                      <i className="fab fa-facebook-f fables-forth-text-color fa-fw"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" target="_blank">
                      <i className="fab fa-instagram fables-forth-text-color  fa-fw"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" target="_blank">
                      <i className="fab fa-twitter fables-forth-text-color    fa-fw"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" target="_blank">
                      <i className="fab fa-linkedin fables-forth-text-color   fa-fw"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-0 mb-5 my-md-5">
              <h3 className="font-35 font-weight-bold fables-main-text-color text-center">
                Contact Us
              </h3>
              <p className="mt-3 fables-forth-text-color  text-center">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="row mb-4 mb-md-5 overflow-hidden">
          <div className="col-12 col-sm-6 wow fadeInLeft">
            <form className="fables-contact-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control rounded-0 p-3"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control rounded-0 p-3"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control rounded-0 p-3"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control rounded-0 p-3 row-"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn fables-second-background-color rounded-0 text-white btn-block p-3"
              >
                Send
              </button>
            </form>
          </div>
          <div className="col-12 col-sm-6 wow fadeInRight">
            <div
              id="map"
              data-lng="31.248848"
              data-lat="29.966324"
              data-icon={img}
              data-zom="12" // I assume this was meant to be "data-zoom"
              style={{ width: "100%", height: "420px" }}
            ></div>
          </div>
        </div>
      </div>
      {/* <!-- /End page content --> */}

      {/* <!-- Start Footer 2 Background Image  --> */}
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
                        src={logo}
                        alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
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
                        {" "}FATS
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
                        <Link to="#about">About</Link>
                        <Link to="#service">Service</Link>
                        <Link to="#portfolio">Portfolio</Link>
                        <Link to="#testmonail">Testimonial</Link>
                      </div>
                      <div className="col">
                        <Link to="#team">Team</Link>
                        <Link to="#blog">Blog</Link>
                        <Link to="#">Faq</Link>
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

      {/* <!-- /End Footer 2 Background Image --> */}
    </>
  );
}
