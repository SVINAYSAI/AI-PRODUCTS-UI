import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "animate.css"; // Import Animate.css
import WOW from "wow.js"; // Import WOW.js
import "wow.js/css/libs/animate.css"; // Import WOW.js CSS

import Light from "../../components/fats-logo/light.svg";
import Gear from "../../components/fats-logo/Gear.svg";
import Support from "../../components/fats-logo/support.svg";
import Mission1 from "../../components/assets/imgs/index1.jpg";
import Mission2 from "../../components/fats-logo/rocket.svg";
import Vision1 from "../../components/fats-logo/telescope.svg";
import Vision2 from "../../components/assets/imgs/vision-img.jpg";

import Footer from "./HomePages/Footer";
import AboutCounter from "./HomePages/AboutCounter";

export default function About() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      {/* <!-- Start page content -->   */}
      <div className="container">
        <div className="row mt-4 my-md-5 overflow-hidden">
          <div
            className="col-12 col-md-4 mb-4 mb-md-0 wow fadeInDown"
            data-wow-delay=".3s"
          >
            <div className="border p-4">
              <div className="row text-center text-lg-left">
                <div className="col-12 col-lg-3 mb-3 mb-md-0 mt-[1rem]">
                  <img src={Light} alt="we are Creative" />
                </div>
                <div className="col-12 col-lg-9">
                  <h2 className="fables-second-text-color font-20 semi-font my-2 mb-lg-3 about-block-heading">
                    We’re Creative
                  </h2>
                  <div className="font-15 fables-forth-text-color">
                    Lorem ipsum dolor sit amet adipiscing elit. Aenean ac lorem
                    pretium laoreet enim at.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-md-4 mb-4 mb-md-0 wow fadeInDown"
            data-wow-delay=".6s"
          >
            <div className="border p-4">
              <div className="row text-center text-lg-left">
                <div className="col-12 col-lg-3 mb-3 mb-md-0 mt-[1rem]">
                  <img src={Gear} alt="Highly Customizable" />
                </div>
                <div className="col-12 col-lg-9">
                  <h2 className="fables-second-text-color font-20 semi-font my-2 mb-lg-3 about-block-heading">
                    Highly Customizable
                  </h2>
                  <div className="font-15 fables-forth-text-color">
                    Lorem ipsum dolor sit amet adipiscing elit. Aenean ac lorem
                    pretium laoreet enim at.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-md-4 mb-4 mb-md-0 wow fadeInDown"
            data-wow-delay=".9s"
          >
            <div className="border p-4">
              <div className="row text-center text-lg-left">
                <div className="col-12 col-lg-3 mb-3 mb-md-0 mt-[1rem]">
                  <img src={Support} alt="Highly Customizable" />
                </div>
                <div className="col-12 col-lg-9">
                  <h2 className="fables-second-text-color font-20 semi-font my-2 mb-lg-3 about-block-heading">
                    Efficient 24/7 support
                  </h2>
                  <div className="font-15 fables-forth-text-color">
                    Lorem ipsum dolor sit amet adipiscing elit. Aenean ac lorem
                    pretium laoreet enim at.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row overflow-hidden">
          <div className="col-12 col-md-6">
            <div className="image-container translate-effect-right">
              <img
                src={Mission1}
                alt="Fables Template"
                className="img-fluid w-full"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 mt-4 mt-md-0">
            <img src={Mission2} alt="Highly Customizable" />
            <h2
              className="font-30 font-weight-bold fables-second-text-color my-4 d-inline-block d-lg-block wow fadeInRight"
              data-wow-duration="1.5s"
            >
              Our Mission
            </h2>
            <div
              className="fables-vision-detail fables-forth-text-color wow fadeInRight mt-7"
              data-wow-duration="1.5s"
            >
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here,
              </p>
            </div>
          </div>
        </div>
      </div>

      <AboutCounter />

      <div className="container">
        <div className="row overflow-hidden">
          <div className="col-12 col-md-6">
            <img src={Vision1} alt="Highly Customizable" />

            <h2
              className="font-30 font-weight-bold fables-second-text-color my-4 wow fadeInLeft d-inline d-lg-block"
              data-wow-duration="1.5s"
            >
              Our Vision
            </h2>
            <div
              className="fables-forth-text-color mt-4 wow fadeInLeft"
              data-wow-duration="1.5s"
            >
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here,
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-4 mt-md-0">
            <div className="image-container translate-effect-right">
              <img src={Vision2} alt="Fables Template" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-8">
        <div className="fables-team overflow-hidden">
          <h2 className="font-35 font-weight-bold fables-main-text-color mb-4 text-center">
            Team
          </h2>
          <div className="row my-4 my-lg-5">
            <div
              className="col-6 col-md-3 mb-3 wow bounceInDown"
              data-wow-delay=".3s"
            >
              <div className="card fables-team-block fables-second-hover-text-color">
                <div className="image-container shine-effect">
                  <Link to="#">
                    <img
                      className="w-100"
                      src={Mission1}
                      alt="Card image cap"
                    />
                  </Link>
                </div>

                <div className="card-body">
                  <h5>
                    <Link
                      to="#"
                      className="font-20 semi-font fables-forth-text-color fables-second-hover-color team-name"
                    >
                      JOHN MARTIN
                    </Link>
                  </h5>
                  <p className="font-13 fables-forth-text-color my-1 font-italic">
                    Programmer
                  </p>
                  <ul className="nav fables-team-social-links mt-3">
                    <li>
                      <Link to="#" target="_blank">
                        <span className="fables-icongoogle-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <span className="fables-iconwhatapp-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <span className="fables-icontwitter-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-md-3 mb-3 wow bounceInDown"
              data-wow-delay=".3s"
            >
              <div className="card fables-team-block fables-second-hover-text-color">
                <div className="image-container shine-effect">
                  <Link to="#">
                    <img
                      className="w-100"
                      src={Mission1}
                      alt="Card image cap"
                    />
                  </Link>
                </div>

                <div className="card-body">
                  <h5>
                    <Link
                      to="#"
                      className="font-20 semi-font fables-forth-text-color fables-second-hover-color team-name"
                    >
                      JOHN MARTIN
                    </Link>
                  </h5>
                  <p className="font-13 fables-forth-text-color my-1 font-italic">
                    Programmer
                  </p>
                  <ul className="nav fables-team-social-links mt-3">
                    <li>
                      <Link to="#" target="_blank">
                        <span className="fables-icongoogle-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <span className="fables-iconwhatapp-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <span className="fables-icontwitter-icon fables-forth-text-color fables-fifth-border-color fables-team-social-icon"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- /End page content --> */}
      <Footer />
    </>
  );
}
