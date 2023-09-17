// import { useEffect } from 'react';
// import WOW from 'wow.js'; // Import the wow.js library
import { Link, Outlet } from "react-router-dom";
import img from "../../custom/images/cat-larg1.jpg";
import img1 from "../../custom/images/cat-larg2.jpg";
import img2 from "../../custom/images/cat-larg3.jpg";
import img3 from "../../custom/images/cat-larg4.jpg";
import img4 from "../../custom/images/cat-larg5.jpg";
import img5 from "../../custom/images/cat-larg6.jpg";
import img6 from "../../custom/images/cat-larg7.jpg";
import img7 from "../../custom/images/cat-larg8.jpg";
import img8 from "../../custom/images/blog-cat1.jpg";
import img9 from "../../custom/images/blog-cat2.jpg";
import img10 from "../../custom/images/blog-cat3.jpg";
import img11 from "../../custom/images/blog-cat4.jpg";
import img12 from "../../custom/images/fables-logo.png";
import "../../vendor/animate.css-master/animate.min.css";
import "../../vendor/fontawesome/css/fontawesome-all.min.css";
import "../../vendor/bootstrap/css/bootstrap-4-navbar.css";
import "../../vendor/bootstrap/css/bootstrap.min.css";
import "../../vendor/OffCanvasMenuEffects/css/menu_sideslide.css";
import "../../vendor/owlcarousel/owl.carousel.min.css";
import "../../vendor/owlcarousel/owl.theme.default.min.css";
import "../../custom/css/custom-responsive.css";
import "../../custom/css/custom.css";
import "../../custom/css/fables-icons.css";

export default function Blog() {
  // useEffect(() => {
  //   const wow = new WOW(); // Initialize wow.js
  //   wow.init();
  // }, []); // Run this effect only once, when the component mounts

  return (
    <>
      {/* <!-- Start page content -->   */}
      <div className="container">
        <div className="row my-4 my-lg-5">
          <div className="col-12 col-lg-8">
            <div className="row">
              <div
                className="col-12 col-sm-6 mb-4 wow fadeIn"
                data-wow-delay=".3s"
              >
                <div className="image-container translate-effect-right">
                  <Link to="">
                    <img
                      src={img}
                      alt=""
                    />
                  </Link>
                </div>
                <h2 className="mt-3 mb-2 font-18 semi-font">
                  <Link 
                    to=""
                    className="fables-main-text-color fables-second-hover-color"
                  >
                    Getting to Another Level of Design
                  </Link>
                </h2>
                <div className="fables-forth-text-color font-14 mb-2">
                  <span className="fables-icondata fables-second-text-color mr-1"></span>
                  <span className="mr-3"> 09 November, 2018 </span>
                  <span className="fables-iconcomment fables-second-text-color mr-1"></span>
                  <Link 
                    to=""
                    className="fables-forth-text-color fables-second-hover-color position-relative z-index"
                  >
                    2
                  </Link>
                </div>
                <p className="fables-forth-text-color font-14 mb-2">
                  When you need your company to have a new website or if you
                  venture on updating your old webpage with a new look and
                  functionality. the choices are versatile Assuming that you
                  will goWhen you need your company to have a new website or if
                  you venture on updating your old webpage with a new look and
                  functionality.
                </p>
                <Link 
                  to=""
                  className="btn btn-link fables-main-text-color fables-second-hover-color fables-cat-blog-btn "
                >
                  Read More
                </Link>
              </div>
              <div
                className="col-12 col-sm-6 mb-4 wow fadeIn"
                data-wow-delay=".6s"
              >
                <div className="image-container translate-effect-right">
                  <Link to="">
                    <img
                      src={img1}
                      alt=""
                    />
                  </Link>
                </div>

                <h2 className="mt-3 mb-2 font-18 semi-font">
                  <Link 
                    to=""
                    className="fables-main-text-color fables-second-hover-color"
                  >
                    Getting to Another Level of Design
                  </Link>
                </h2>
                <div className="fables-forth-text-color font-14 mb-2">
                  <span className="fables-icondata fables-second-text-color mr-1"></span>
                  <span className="mr-3"> 09 November, 2018 </span>
                  <span className="fables-iconcomment fables-second-text-color mr-1"></span>
                  <Link 
                    to=""
                    className="fables-forth-text-color fables-second-hover-color position-relative z-index"
                  >
                    2
                  </Link>
                </div>
                <p className="fables-forth-text-color font-14 mb-2">
                  When you need your company to have a new website or if you
                  venture on updating your old webpage with a new look and
                  functionality. the choices are versatile Assuming that you
                  will goWhen you need your company to have a new website or if
                  you venture on updating your old webpage with a new look and
                  functionality.
                </p>
                <Link 
                  to=""
                  className="btn btn-link fables-main-text-color fables-second-hover-color fables-cat-blog-btn "
                >
                  Read More
                </Link>
              </div>
              <div
                className="col-12 col-sm-6 mb-4 wow fadeIn"
                data-wow-delay=".9s"
              >
                <div className="image-container translate-effect-right">
                  <Link to="">
                    <img
                      src={img2}
                      alt=""
                    />
                  </Link>
                </div>

                <h2 className="mt-3 mb-2 font-18 semi-font">
                  <Link 
                    to=""
                    className="fables-main-text-color fables-second-hover-color"
                  >
                    Getting to Another Level of Design
                  </Link>
                </h2>
                <div className="fables-forth-text-color font-14 mb-2">
                  <span className="fables-icondata fables-second-text-color mr-1"></span>
                  <span className="mr-3"> 09 November, 2018 </span>
                  <span className="fables-iconcomment fables-second-text-color mr-1"></span>
                  <Link 
                    to=""
                    className="fables-forth-text-color fables-second-hover-color position-relative z-index"
                  >
                    2
                  </Link>
                </div>
                <p className="fables-forth-text-color font-14 mb-2">
                  When you need your company to have a new website or if you
                  venture on updating your old webpage with a new look and
                  functionality. the choices are versatile Assuming that you
                  will goWhen you need your company to have a new website or if
                  you venture on updating your old webpage with a new look and
                  functionality.
                </p>
                <Link 
                  to=""
                  className="btn btn-link fables-main-text-color fables-second-hover-color fables-cat-blog-btn "
                >
                  Read More
                </Link>
              </div>
              <div
                className="col-12 col-sm-6 mb-4 wow fadeIn"
                data-wow-delay="1.2s"
              >
                <div className="image-container translate-effect-right">
                  <Link to="">
                    <img
                      src={img3}
                      alt=""
                    />
                  </Link>
                </div>

                <h2 className="mt-3 mb-2 font-18 semi-font">
                  <Link 
                    to=""
                    className="fables-main-text-color fables-second-hover-color"
                  >
                    Getting to Another Level of Design
                  </Link>
                </h2>
                <div className="fables-forth-text-color font-14 mb-2">
                  <span className="fables-icondata fables-second-text-color mr-1"></span>
                  <span className="mr-3"> 09 November, 2018 </span>
                  <span className="fables-iconcomment fables-second-text-color mr-1"></span>
                  <Link 
                    to=""
                    className="fables-forth-text-color fables-second-hover-color position-relative z-index"
                  >
                    2
                  </Link>
                </div>
                <p className="fables-forth-text-color font-14 mb-2">
                  When you need your company to have a new website or if you
                  venture on updating your old webpage with a new look and
                  functionality. the choices are versatile Assuming that you
                  will goWhen you need your company to have a new website or if
                  you venture on updating your old webpage with a new look and
                  functionality.
                </p>
                <Link 
                  to=""
                  className="btn btn-link fables-main-text-color fables-second-hover-color fables-cat-blog-btn "
                >
                  Read More
                </Link>
              </div>
              <div
                className="col-12 col-sm-6 mb-4 wow fadeIn"
                data-wow-delay="1.5s"
              >
                <div className="image-container translate-effect-right">
                  <Link to="">
                    <img
                      src={img4}
                      alt=""
                    />
                  </Link>
                </div>

                <h2 className="mt-3 mb-2 font-18 semi-font">
                  <Link 
                    to=""
                    className="fables-main-text-color fables-second-hover-color"
                  >
                    Getting to Another Level of Design
                  </Link>
                </h2>
                <div className="fables-forth-text-color font-14 mb-2">
                  <span className="fables-icondata fables-second-text-color mr-1"></span>
                  <span className="mr-3"> 09 November, 2018 </span>
                  <span className="fables-iconcomment fables-second-text-color mr-1"></span>
                  <Link 
                    to=""
                    className="fables-forth-text-color fables-second-hover-color position-relative z-index"
                  >
                    2
                  </Link>
                </div>
                <p className="fables-forth-text-color font-14 mb-2">
                  When you need your company to have a new website or if you
                  venture on updating your old webpage with a new look and
                  functionality. the choices are versatile Assuming that you
                  will goWhen you need your company to have a new website or if
                  you venture on updating your old webpage with a new look and
                  functionality.
                </p>
                <Link 
                  to=""
                  className="btn btn-link fables-main-text-color fables-second-hover-color fables-cat-blog-btn "
                >
                  Read More
                </Link>
              </div>
              <div
                className="col-12 col-sm-6 mb-4 wow fadeIn"
                data-wow-delay="1.8s"
              >
                <div className="image-container translate-effect-right">
                  <Link to="">
                    <img
                      src={img5}
                      alt=""
                    />
                  </Link>
                </div>

                <h2 className="mt-3 mb-2 font-18 semi-font">
                  <Link 
                    to=""
                    className="fables-main-text-color fables-second-hover-color"
                  >
                    Getting to Another Level of Design
                  </Link>
                </h2>
                <div className="fables-forth-text-color font-14 mb-2">
                  <span className="fables-icondata fables-second-text-color mr-1"></span>
                  <span className="mr-3"> 09 November, 2018 </span>
                  <span className="fables-iconcomment fables-second-text-color mr-1"></span>
                  <Link 
                    to=""
                    className="fables-forth-text-color fables-second-hover-color position-relative z-index"
                  >
                    2
                  </Link>
                </div>
                <p className="fables-forth-text-color font-14 mb-2">
                  When you need your company to have a new website or if you
                  venture on updating your old webpage with a new look and
                  functionality. the choices are versatile Assuming that you
                  will goWhen you need your company to have a new website or if
                  you venture on updating your old webpage with a new look and
                  functionality.
                </p>
                <Link 
                  to=""
                  className="btn btn-link fables-main-text-color fables-second-hover-color fables-cat-blog-btn "
                >
                  Read More
                </Link>
              </div>
              <div
                className="col-12 col-sm-6 mb-4 wow fadeIn"
                data-wow-delay="2.1s"
              >
                <div className="image-container translate-effect-right">
                  <Link to="">
                    <img
                      src={img6}
                      alt=""
                    />
                  </Link>
                </div>

                <h2 className="mt-3 mb-2 font-18 semi-font">
                  <Link 
                    to=""
                    className="fables-main-text-color fables-second-hover-color"
                  >
                    Getting to Another Level of Design
                  </Link>
                </h2>
                <div className="fables-forth-text-color font-14 mb-2">
                  <span className="fables-icondata fables-second-text-color mr-1"></span>
                  <span className="mr-3"> 09 November, 2018 </span>
                  <span className="fables-iconcomment fables-second-text-color mr-1"></span>
                  <Link 
                    to=""
                    className="fables-forth-text-color fables-second-hover-color position-relative z-index"
                  >
                    2
                  </Link>
                </div>
                <p className="fables-forth-text-color font-14 mb-2">
                  When you need your company to have a new website or if you
                  venture on updating your old webpage with a new look and
                  functionality. the choices are versatile Assuming that you
                  will goWhen you need your company to have a new website or if
                  you venture on updating your old webpage with a new look and
                  functionality.
                </p>
                <Link 
                  to=""
                  className="btn btn-link fables-main-text-color fables-second-hover-color fables-cat-blog-btn "
                >
                  Read More
                </Link>
              </div>
              <div
                className="col-12 col-sm-6 mb-4 wow fadeIn"
                data-wow-delay="2.4s"
              >
                <div className="image-container translate-effect-right">
                  <Link to="">
                    <img
                      src={img7}
                      alt=""
                    />
                  </Link>
                </div>

                <h2 className="mt-3 mb-2 font-18 semi-font">
                  <Link 
                    to=""
                    className="fables-main-text-color fables-second-hover-color"
                  >
                    Getting to Another Level of Design
                  </Link>
                </h2>
                <div className="fables-forth-text-color font-14 mb-2">
                  <span className="fables-icondata fables-second-text-color mr-1"></span>
                  <span className="mr-3"> 09 November, 2018 </span>
                  <span className="fables-iconcomment fables-second-text-color mr-1"></span>
                  <Link 
                    to=""
                    className="fables-forth-text-color fables-second-hover-color position-relative z-index"
                  >
                    2
                  </Link>
                </div>
                <p className="fables-forth-text-color font-14 mb-2">
                  When you need your company to have a new website or if you
                  venture on updating your old webpage with a new look and
                  functionality. the choices are versatile Assuming that you
                  will goWhen you need your company to have a new website or if
                  you venture on updating your old webpage with a new look and
                  functionality.
                </p>
                <Link 
                  to=""
                  className="btn btn-link fables-main-text-color fables-second-hover-color fables-cat-blog-btn "
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="fables-blog-search">
              <form>
                <div className="row">
                  <div className="col-12 col-sm-9 col-md-8 mb-3 mb-md-0">
                    <div className="input-icon">
                      <span className="fables-iconsearch-icon fables-input-icon font-14"></span>
                      <input
                        type="text"
                        className="form-control rounded-0 py-2 width-100"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-3 col-md-4 pl-md-0">
                    <button
                      type="submit"
                      className="btn fables-second-background-color rounded-0 text-white font-15 semi-font py-2 btn-block"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="mt-4">
              <h2 className="position-relative font-23 semi-font fables-blog-category-head fables-main-text-color fables-second-before pl-3 mb-4">
                Categories
              </h2>
              <ul className="nav fables-blog-cat-list fables-forth-text-color fables-second-hover-color-link">
                <li>
                  <Link to="">Economy</Link>
                </li>
                <li>
                  <Link to="">Insights</Link>
                </li>
                <li>
                  <Link to="">Investing Strategy</Link>
                </li>
                <li>
                  <Link to="">Market</Link>
                </li>
                <li>
                  <Link to="">Politics Money</Link>
                </li>
                <li>
                  <Link to="">Retirement</Link>
                </li>
              </ul>
              {/* <hr> */}
            </div>
            <div className="mt-4">
              <h2 className="position-relative font-23 semi-font fables-blog-category-head fables-main-text-color fables-second-before pl-3 mb-4">
                Recent Posts
              </h2>
              <div className="row mb-4">
                <div className="col-4">
                  <Link to="">
                    <img
                      src={img8}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="col-8 pl-0">
                  <Link 
                    to=""
                    className="fables-main-text-color bold-font fables-second-hover-color blog-smaller-head"
                  >
                    Getting to Another Level of Design
                  </Link>
                  <p className="fables-forth-text-color fables-blog-date-cat font-14 mt-1">
                    09 November, 2018
                  </p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-4">
                  <Link to="">
                    <img
                      src={img9}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="col-8 pl-0">
                  <Link 
                    to=""
                    className="fables-main-text-color bold-font fables-second-hover-color blog-smaller-head"
                  >
                    Getting to Another Level of Design
                  </Link>
                  <p className="fables-forth-text-color fables-blog-date-cat font-14 mt-1">
                    09 November, 2018
                  </p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-4">
                  <Link to="">
                    <img
                      src={img10}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="col-8 pl-0">
                  <Link 
                    to=""
                    className="fables-main-text-color bold-font fables-second-hover-color blog-smaller-head"
                  >
                    Getting to Another Level of Design
                  </Link>
                  <p className="fables-forth-text-color fables-blog-date-cat font-14 mt-1">
                    09 November, 2018
                  </p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-4">
                  <Link to="">
                    <img
                      src={img11}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="col-8 pl-0">
                  <Link 
                    to=""
                    className="fables-main-text-color bold-font fables-second-hover-color blog-smaller-head"
                  >
                    Getting to Another Level of Design
                  </Link>
                  <p className="fables-forth-text-color fables-blog-date-cat font-14 mt-1">
                    09 November, 2018
                  </p>
                </div>
              </div>
              <div className="text-right">
                <Link 
                  to=""
                  className="btn fables-second-text-color underline fables-main-text-color font-14"
                >
                  {" "}
                  More
                </Link>
              </div>
              {/* <hr> */}
            </div>
            <div className="mt-4">
              <h2 className="position-relative font-23 semi-font fables-blog-category-head fables-main-text-color fables-second-before pl-3 mb-4">
                Tages
              </h2>
              <ul className="nav fables-blog-cat-list fables-forth-text-color fables-second-hover-color-link fables-blog-cat-tags">
                <li>
                  <Link to="">Accountant</Link>
                </li>
                <li>
                  <Link to="">Online Services </Link>
                </li>
                <li>
                  <Link to="">Accountant</Link>
                </li>
                <li>
                  <Link to="">Accountant</Link>
                </li>
                <li>
                  <Link to="">Accountant</Link>
                </li>
                <li>
                  <Link to="">Online Services </Link>
                </li>
              </ul>
            </div>
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
                to=""
                className="fables-second-border-color border-bottom pb-3 d-block mb-3 mt-minus-13"
              >
                <img
                  src={img12}
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
            <Link to="" target="_blank">
              <i className="fab fa-google-plus-square"></i>
            </Link>
          </li>
          <li>
            <Link to="" target="_blank">
              <i className="fab fa-facebook"></i>
            </Link>
          </li>
          <li>
            <Link to="" target="_blank">
              <i className="fab fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link to="" target="_blank">
              <i className="fab fa-pinterest-square"></i>
            </Link>
          </li>
          <li>
            <Link to="" target="_blank">
              <i className="fab fa-twitter-square"></i>
            </Link>
          </li>
          <li>
            <Link to="" target="_blank">
              <i className="fab fa-linkedin"></i>
            </Link>
          </li>
        </ul>
        <p className="mb-0">Copyright © Fables 2018. All rights reserved.</p>
      </div>
      <Outlet />
    </>
  );
}
