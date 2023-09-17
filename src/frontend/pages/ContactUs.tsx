// import { useEffect } from 'react';
// import WOW from 'wow.js'; 
import img from "../../custom/images/map-marker.png";
import img1 from "../../custom/images/fables-logo.png";
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
      <div className="fables-footer-image fables-after-overlay white-color py-4 py-lg-5 bg-rules">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-2 mb-5 text-center ">
              <h2 className="font-30 semi-font mb-5">Newsletter</h2>
              <form className="form-inline position-relative">
                <div className="form-group fables-subscribe-formgroup">
                  <input
                    type="email"
                    className="form-control fables-subscribe-input fables-btn-rouned"
                    placeholder="Your Email"
                  />
                </div>
                <button
                  type="submit"
                  className="btn fables-second-background-color fables-btn-rouned fables-subscribe-btn"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="col-12 col-lg-4 mb-4 mb-lg-0">
              <Link
                to="#"
                className="fables-second-border-color border-bottom pb-3 d-block mb-3 mt-minus-13"
              >
                <img
                  src={img1}
                  alt="fables template"
                />
              </Link>
              <p className="font-15 fables-third-text-color">
                {`
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.

    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    `}
              </p>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <h2 className="font-20 semi-font fables-second-border-color border-bottom pb-3">
                Contact us
              </h2>
              <div className="my-3">
                <h4 className="font-16 semi-font">
                  <span className="fables-iconmap-icon fables-second-text-color pr-2 font-20 mt-1 d-inline-block"></span>{" "}
                  Address Information
                </h4>
                <p className="font-14 fables-fifth-text-color mt-2 ml-4">
                  level13, 2Elizabeth St, Melbourne, Victor 2000
                </p>
              </div>
              <div className="my-3">
                <h4 className="font-16 semi-font">
                  <span className="fables-iconphone fables-second-text-color pr-2 font-20 mt-1 d-inline-block"></span>{" "}
                  Call Now{" "}
                </h4>
                <p className="font-14 fables-fifth-text-color mt-2 ml-4">
                  +333 111 111 000
                </p>
              </div>
              <div className="my-3">
                <h4 className="font-16 semi-font">
                  <span className="fables-iconemail fables-second-text-color pr-2 font-20 mt-1 d-inline-block"></span>{" "}
                  Mail{" "}
                </h4>
                <p className="font-14 fables-fifth-text-color mt-2 ml-4">
                  adminsupport@website.com
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <h2 className="font-20 semi-font fables-second-border-color border-bottom pb-3 mb-3">
                EXPLORE OUR SITE
              </h2>
              <ul className="nav fables-footer-links">
                <li>
                  <Link to="about1.html">About Us</Link>
                </li>
                <li>
                  <Link to="contactus1.html">Contact Us</Link>
                </li>
                <li>
                  <Link to="gallery.html">Gallery</Link>
                </li>
                <li>
                  <Link to="team.html">Team</Link>
                </li>
                <li>
                  <Link to="blog.html">Blog</Link>
                </li>
                <li>
                  <Link to="testimonials.html">Testimonials</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright fables-main-background-color mt-0 border-0 white-color">
        <ul className="nav fables-footer-social-links just-center fables-light-footer-links">
          <li>
            <Link to="#" target="_blank">
              <i className="fab fa-google-plus-square"></i>
            </Link>
          </li>
          <li>
            <Link to="#" target="_blank">
              <i className="fab fa-facebook"></i>
            </Link>
          </li>
          <li>
            <Link to="#" target="_blank">
              <i className="fab fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link to="#" target="_blank">
              <i className="fab fa-pinterest-square"></i>
            </Link>
          </li>
          <li>
            <Link to="#" target="_blank">
              <i className="fab fa-twitter-square"></i>
            </Link>
          </li>
          <li>
            <Link to="#" target="_blank">
              <i className="fab fa-linkedin"></i>
            </Link>
          </li>
        </ul>
        <p className="mb-0">Copyright © Fables 2018. All rights reserved.</p>
      </div>

      {/* <!-- /End Footer 2 Background Image --> */}
    </>
  );
}
