import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "animate.css"; // Import Animate.css
import WOW from "wow.js"; // Import WOW.js
import "wow.js/css/libs/animate.css"; // Import WOW.js CSS

import Light from "../../components/fats-logo/light.svg";
import Gear from "../../components/fats-logo/Gear.svg";
import Support from "../../components/fats-logo/support.svg";
import Mission2 from "../../components/fats-logo/rocket.svg";
import Vision1 from "../../components/fats-logo/telescope.svg";

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
                <div className="grid grid-cols-4 gap-4">
                  <div className="mb-3 pt-1 mb-md-0">
                    <img src={Light} alt="we are Creative" />
                  </div>
                  <h2 className="col-span-3 pt-4 fables-second-text-color semi-font my-2 mb-lg-3 about-block-heading whitespace-nowrap">
                    We’re Creative
                  </h2>
                </div>

                <p className="mt-[39px] pl-8 text-start">
                  "We're Creative" echoes through our code, design, and
                  strategic planning, inspiring us to craft solutions that not
                  only meet the demands of the present but anticipate the
                  challenges of the future. In this fast-paced industry,
                  creativity is not just an asset—it is our competitive edge,
                  allowing us to sculpt the future of technology with each line
                  of code and every innovative concept.
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-md-4 mb-4 mb-md-0 wow fadeInDown"
            data-wow-delay=".6s"
          >
            <div className="border p-4">
              <div className="row text-center text-lg-left">
                <div className="grid grid-cols-4 gap-4 mt-2">
                  <div className="mb-3 mb-md-0">
                    <img src={Gear} alt="Highly Customizable" />
                  </div>
                  <h2 className="col-span-2 fables-second-text-color font-20 semi-font my-2 mb-lg-3 about-block-heading">
                    Highly Customizable
                  </h2>
                </div>

                <p className="pt-2 pl-8 text-start">
                  Organizations prioritize customizable solutions for agile
                  systems, seamlessly integrating with unique workflows.
                  Tailoring software and hardware enhances operational
                  efficiency, ensuring a responsive IT infrastructure. This
                  approach drives innovation in the ever-evolving digital
                  landscape. Emphasizing customization empowers businesses to
                  stay ahead in technology. It fosters a future-proof
                  environment.
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-md-4 mb-4 mb-md-0 wow fadeInDown"
            data-wow-delay=".9s"
          >
            <div className="border p-4">
              <div className="row text-center text-lg-left">
                <div className="grid grid-cols-4 gap-4">
                  <div className=" mb-3 mb-md-0">
                    <img src={Support} alt="Highly Customizable" />
                  </div>
                  <h2 className="col-span-3 fables-second-text-color font-20 semi-font my-2 mb-lg-3 about-block-heading">
                    Efficient 24/7 support
                  </h2>
                </div>
                <p className="mt-[17px] mb-[37px]  pl-8 text-start">
                  Establishing efficient 24/7 support involves integrating
                  advanced ticketing systems, AI-driven chatbots, and automated
                  monitoring tools. A team of skilled, organized strategically,
                  ensures prompt responses and resolutions. Continuous system
                  monitoring, proactive issue identification, and ongoing staff
                  training are crucial for a seamless support experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row overflow-hidden">
          <div className="col-12 col-md-6">
            <div className="image-container translate-effect-right">
              <img
                src="http://195.35.22.190/virtual_directory/ui_images/components/assets/imgs/index1.jpg"
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
              <img
                src="http://195.35.22.190/virtual_directory/ui_images/components/assets/imgs/vision-img.jpg"
                alt="Fables Template"
                className="img-fluid"
              />
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
                      src="http://195.35.22.190/virtual_directory/ui_images/components/assets/imgs/index1.jpg"
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
                      src="http://195.35.22.190/virtual_directory/ui_images/components/assets/imgs/index1.jpg"
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
