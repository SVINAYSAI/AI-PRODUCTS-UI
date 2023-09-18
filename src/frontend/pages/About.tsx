import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import img from "../../custom/images/hp_innovacion2.jpg";
import img1 from "../../custom/images/IMG_8573-1078.jpg";
import img2 from "../../custom/images/img2.jpg";
import img3 from "../../custom/images/history-img.jpg";
import img4 from "../../custom/images/img3.jpg";
import img5 from "../../custom/images/testimonial-img.png";
import img6 from "../../custom/images/team1-1.jpg";
import img7 from "../../custom/images/team1-2.jpg";
import img8 from "../../custom/images/team1-3.jpg";
import img9 from "../../custom/images/team1-4.jpg";
import img10 from "../../custom/images/partner1.jpg";
import img11 from "../../custom/images/partner2-1.jpg";
import logo from "../../components/fats-logo/svg/logo-no-background.svg";
import img13 from "../../custom/images/mission-img.jpg";
import img14 from "../../custom/images/vision-img.jpg";
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
// import WOW from "wow.js";

export default function About() {
  const [satisfiedClients, setSatisfiedClients] = useState(0);
  const [companyMembers, setCompanyMembers] = useState(0);
  const [awwardsWin, setAwwardsWin] = useState(0);
  const [yearsExperience, setYearsExperience] = useState(0);
  useEffect(() => {
    const incrementCounter = (
      targetValue: number,
      setterFunction: (arg0: number) => void
    ) => {
      const step = Math.ceil(targetValue / 100); // Adjust the step size as needed
      let currentValue = 0;

      const interval = setInterval(() => {
        currentValue += step;
        if (currentValue >= targetValue) {
          setterFunction(targetValue);
          clearInterval(interval);
        } else {
          setterFunction(currentValue);
        }
      }, 50); // Adjust the interval as needed
    };

    incrementCounter(307, setSatisfiedClients);
    incrementCounter(95, setCompanyMembers);
    incrementCounter(55, setAwwardsWin);
    incrementCounter(16, setYearsExperience);
  }, []);

  // useEffect(() => {
  //   const wow = new WOW(); // Initialize wow.js
  //   wow.init();
  // }, []);

  return (
    <>
      {/* <!-- Start page content -->   */}
      <div className="container">
        <div className="my-4 my-md-5 overflow-hidden">
          <div className="text-center mb-5 wow fadeInDown" data-wow-delay="1s">
            <h3 className="fables-about-top-head fables-forth-text-color font-15 semi-font d-inline-block bg-white position-relative">
              <span className="mx-4">Services</span>
            </h3>
            <h2 className="fables-second-text-color mt-3 font-30 font-weight-bold text-center">
              Provide you the great Services
            </h2>
          </div>

          <div className="row">
            <div
              className="col-12 col-md-4 mb-4 mb-md-0 wow fadeInDown"
              data-wow-delay=".3s"
            >
              <div className="fables-about-icon-style">
                <span className="fables-iconmobileApp-icon fables-second-text-color fa-3x"></span>
                <h2 className="fables-second-text-color fables-about-icon-head mt-3 mb-2 font-18 semi-font">
                  Mobile Apps{" "}
                </h2>
                <span className="fables-title-border fables-second-background-color"></span>
                <div className="fables-forth-text-color mt-3 font-14">
                  We understand the importance of approaching each work
                  integrally and believe in the power of simple and easy
                  communication.
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-4 mb-4 mb-md-0 wow fadeInDown"
              data-wow-delay=".6s"
            >
              <div className="fables-about-icon-style">
                <span className="fables-icondevelopment-icon fables-second-text-color fa-3x"></span>
                <h2 className="fables-second-text-color fables-about-icon-head mt-3 mb-2 font-18 semi-font">
                  Development
                </h2>
                <span className="fables-title-border fables-second-background-color"></span>
                <div className="fables-forth-text-color mt-3 font-14">
                  We understand the importance of approaching each work
                  integrally and believe in the power of simple and easy
                  communication.
                </div>
              </div>
            </div>
            <div
              className="col-12 col-md-4 mb-4 mb-md-0 wow fadeInDown"
              data-wow-delay=".9s"
            >
              <div className="fables-about-icon-style">
                <span className="fables-iconwebDesign-icon fables-second-text-color fa-3x"></span>
                <h2 className="fables-second-text-color fables-about-icon-head mt-3 mb-2 font-18 semi-font">
                  Web Design{" "}
                </h2>
                <span className="fables-title-border fables-second-background-color"></span>
                <div className="fables-forth-text-color mt-3 font-14">
                  We understand the importance of approaching each work
                  integrally and believe in the power of simple and easy
                  communication.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row overflow-hidden">
          <div
            className="col-12 col-sm-6 p-sm-0 mb-3 mb-md-0 image-container translate-effect-right wow fadeInLeft"
            data-wow-durationn="2.5s"
          >
            <img src={img} alt="Fables Template" className="img-fluid" />
          </div>
          <div
            className="col-12 col-sm-6 p-sm-0 image-container translate-effect-right wow fadeInRight"
            data-wow-durationn="2.5s"
          >
            <img src={img1} alt="Fables Template" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="fables-counter-no-background my-4 my-md-5 overflow-hidden">
        <div className="container">
          <div className="fables-about-head-style">
            <div className="row wow fadeInDown" data-wow-delay=".5s">
              <div className="col-12 text-center">
                <h3 className="fables-about-top-head fables-forth-text-color font-15 semi-font d-inline-block bg-white position-relative">
                  <span className="mx-4">About us</span>
                </h3>
                <h2 className="fables-second-text-color mt-3 font-30 font-weight-bold text-center">
                  Our business experties Provide you the great value
                </h2>
              </div>
              <div className="col-12 col-md-10 offset-md-1 mt-3 mb-5">
                <p className="fables-forth-text-color text-center">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many.
                </p>
              </div>
            </div>
          </div>

          <div className="row wow fadeIn" data-wow-delay=".0s">
            <div className="col-6 col-md-3">
              <div className="fables-counter">
                <h2 className="fables-counter-value font-40 font-weight-bold mb-3 fables-forth-text-color">
                  {satisfiedClients}
                </h2>
                <h3 className="font-14 semi-font fables-forth-text-color">
                  SATISFIED CLIENTS
                </h3>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="fables-counter">
                <h2 className="fables-counter-value font-40 font-weight-bold mb-3 fables-forth-text-color">
                  {companyMembers}
                </h2>
                <h3 className="font-14 semi-font fables-forth-text-color">
                  COMPANY MEMBERS
                </h3>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="fables-counter">
                <h2 className="fables-counter-value font-40 font-weight-bold mb-3 fables-forth-text-color">
                  {awwardsWin}
                </h2>
                <h3 className="font-14 semi-font fables-forth-text-color">
                  AWWARDS WIN
                </h3>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="fables-counter">
                <h2 className="fables-counter-value font-40 font-weight-bold mb-3 fables-forth-text-color">
                  {yearsExperience}
                </h2>
                <h3 className="font-14 semi-font fables-forth-text-color">
                  YEARS EXPIRIENCE
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fables-history-section mb-4 mb-md-5">
        <div className="container">
          <div className="fables-about-head-style">
            <div className="row wow fadeInDown" data-wow-delay=".5s">
              <div className="col-12 text-center">
                <h3 className="fables-about-top-head fables-forth-text-color font-15 semi-font d-inline-block bg-white position-relative">
                  <span className="mx-4">About us</span>
                </h3>
                <h2 className="fables-second-text-color mt-3 font-30 font-weight-bold text-center">
                  Company History
                </h2>
                <div className="col-12 col-md-10 offset-md-1">
                  <p className="fables-forth-text-color mt-3 mb-4 mb-md-5">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="fables-history-carousel">
            <div id="sync2" className="owl-carousel owl-theme">
              <div className="item">
                <h1>2010</h1>
              </div>
              <div className="item">
                <h1>2012</h1>
              </div>
              <div className="item">
                <h1>2014</h1>
              </div>
              <div className="item">
                <h1>2016</h1>
              </div>
              <div className="item">
                <h1>2018</h1>
              </div>
              <div className="item">
                <h1>2020</h1>
              </div>
            </div>
            <div id="sync1" className="owl-carousel owl-theme">
              <div className="item">
                <div className="row">
                  <div className="col-12 col-sm-4 mb-4 mb-md-0">
                    <div className="card">
                      <img
                        className="card-img-top rounded-0 w-100"
                        src={img2}
                        alt="Fables Template"
                      />
                      <div className="card-body">
                        <h5 className="card-title fables-second-text-color">
                          2010
                        </h5>
                        <p className="card-text fables-forth-text-color d-sm-none d-md-block font-15">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4 mb-4 mb-md-0">
                    <div className="card">
                      <img
                        className="card-img-top rounded-0 w-100"
                        src={img3}
                        alt="Fables Template"
                      />
                      <div className="card-body">
                        <h5 className="card-title fables-second-text-color">
                          2010
                        </h5>
                        <p className="card-text fables-forth-text-color d-sm-none d-md-block font-15">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4 mb-4 mb-md-0">
                    <div className="card">
                      <img
                        className="card-img-top rounded-0 w-100"
                        src={img4}
                        alt="Fables Template"
                      />
                      <div className="card-body">
                        <h5 className="card-title fables-second-text-color">
                          2010
                        </h5>
                        <p className="card-text fables-forth-text-color d-sm-none d-md-block font-15">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-12 col-sm-4 mb-4 mb-md-0">
                    <div className="card">
                      <img
                        className="card-img-top rounded-0 w-100"
                        src={img3}
                        alt="Fables Template"
                      />
                      <div className="card-body">
                        <h5 className="card-title fables-second-text-color">
                          2012
                        </h5>
                        <p className="card-text fables-forth-text-color d-sm-none d-md-block font-15">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4 mb-4 mb-md-0">
                    <div className="card">
                      <img
                        className="card-img-top rounded-0 w-100"
                        src={img4}
                        alt="Fables Template"
                      />
                      <div className="card-body">
                        <h5 className="card-title fables-second-text-color">
                          2012
                        </h5>
                        <p className="card-text fables-forth-text-color d-sm-none d-md-block font-15">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4 mb-4 mb-md-0">
                    <div className="card">
                      <img
                        className="card-img-top rounded-0 w-100"
                        src={img4}
                        alt="Fables Template"
                      />
                      <div className="card-body">
                        <h5 className="card-title fables-second-text-color">
                          2012
                        </h5>
                        <p className="card-text fables-forth-text-color d-sm-none d-md-block font-15">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-12 col-sm-4 mb-4 mb-md-0">
                    <div className="card">
                      <img
                        className="card-img-top rounded-0 w-100"
                        src={img3}
                        alt="Fables Template"
                      />
                      <div className="card-body">
                        <h5 className="card-title fables-second-text-color">
                          2012
                        </h5>
                        <p className="card-text fables-forth-text-color d-sm-none d-md-block font-15">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4 mb-4 mb-md-0">
                    <div className="card">
                      <img
                        className="card-img-top rounded-0 w-100"
                        src={img4}
                        alt="Fables Template"
                      />
                      <div className="card-body">
                        <h5 className="card-title fables-second-text-color">
                          2012
                        </h5>
                        <p className="card-text fables-forth-text-color d-sm-none d-md-block font-15">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4 mb-4 mb-md-0">
                    <div className="card">
                      <img
                        className="card-img-top rounded-0 w-100"
                        src={img4}
                        alt="Fables Template"
                      />
                      <div className="card-body">
                        <h5 className="card-title fables-second-text-color">
                          2012
                        </h5>
                        <p className="card-text fables-forth-text-color d-sm-none d-md-block font-15">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-12 col-sm-4 mb-4 mb-md-0">
                    <div className="card">
                      <img
                        className="card-img-top rounded-0 w-100"
                        src={img3}
                        alt="Fables Template"
                      />
                      <div className="card-body">
                        <h5 className="card-title fables-second-text-color">
                          2012
                        </h5>
                        <p className="card-text fables-forth-text-color d-sm-none d-md-block font-15">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4 mb-4 mb-md-0">
                    <div className="card">
                      <img
                        className="card-img-top rounded-0 w-100"
                        src={img4}
                        alt="Fables Template"
                      />
                      <div className="card-body">
                        <h5 className="card-title fables-second-text-color">
                          2012
                        </h5>
                        <p className="card-text fables-forth-text-color d-sm-none d-md-block font-15">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4 mb-4 mb-md-0">
                    <div className="card">
                      <img
                        className="card-img-top rounded-0 w-100"
                        src={img4}
                        alt="Fables Template"
                      />
                      <div className="card-body">
                        <h5 className="card-title fables-second-text-color">
                          2012
                        </h5>
                        <p className="card-text fables-forth-text-color d-sm-none d-md-block font-15">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-12 col-sm-4 mb-4 mb-md-0">
                    <div className="card">
                      <img
                        className="card-img-top rounded-0 w-100"
                        src={img3}
                        alt="Fables Template"
                      />
                      <div className="card-body">
                        <h5 className="card-title fables-second-text-color">
                          2012
                        </h5>
                        <p className="card-text fables-forth-text-color d-sm-none d-md-block font-15">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4 mb-4 mb-md-0">
                    <div className="card">
                      <img
                        className="card-img-top rounded-0 w-100"
                        src={img4}
                        alt="Fables Template"
                      />
                      <div className="card-body">
                        <h5 className="card-title fables-second-text-color">
                          2012
                        </h5>
                        <p className="card-text fables-forth-text-color d-sm-none d-md-block font-15">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4 mb-4 mb-md-0">
                    <div className="card">
                      <img
                        className="card-img-top rounded-0 w-100"
                        src={img4}
                        alt="Fables Template"
                      />
                      <div className="card-body">
                        <h5 className="card-title fables-second-text-color">
                          2012
                        </h5>
                        <p className="card-text fables-forth-text-color d-sm-none d-md-block font-15">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                  <div className="col-12 col-sm-4 mb-4 mb-md-0">
                    <div className="card">
                      <img
                        className="card-img-top rounded-0 w-100"
                        src={img3}
                        alt="Fables Template"
                      />
                      <div className="card-body">
                        <h5 className="card-title fables-second-text-color">
                          2012
                        </h5>
                        <p className="card-text fables-forth-text-color d-sm-none d-md-block font-15">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4 mb-4 mb-md-0">
                    <div className="card">
                      <img
                        className="card-img-top rounded-0 w-100"
                        src={img4}
                        alt="Fables Template"
                      />
                      <div className="card-body">
                        <h5 className="card-title fables-second-text-color">
                          2012
                        </h5>
                        <p className="card-text fables-forth-text-color d-sm-none d-md-block font-15">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-4 mb-4 mb-md-0">
                    <div className="card">
                      <img
                        className="card-img-top rounded-0 w-100"
                        src={img4}
                        alt="Fables Template"
                      />
                      <div className="card-body">
                        <h5 className="card-title fables-second-text-color">
                          2012
                        </h5>
                        <p className="card-text fables-forth-text-color d-sm-none d-md-block font-15">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-rules mb-4 mb-lg-0 py-3 py-lg-0"
        style={{ backgroundImage: `url(${img13})` }}
      >
        <div className="container-fluid">
          <div className="row overflow-hidden">
            <div className="col-12 col-lg-6 offset-lg-6 p-lg-0">
              <div className="fables-vision-overlay fables-after-overlay bg-rules">
                <h2
                  className="fables-second-text-color my-0 font-30 font-weight-bold position-relative z-index wow fadeInRight"
                  data-wow-duration="2s"
                >
                  We love what we do <br /> &amp; we do it with passion!
                </h2>
                <p
                  className="fables-fifth-text-color position-relative z-index mt-4 mb-4 mb-md-5 wow fadeInRight"
                  data-wow-duration="2s"
                >
                  {`
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.
    
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. and a search for 'lorem ipsum' will uncover.
    `}
                </p>
                <Link
                  to=""
                  className="btn fables-second-border-color white-color fables-btn-rouned fables-hover-btn-color font-19 px-5 py-2 position-relative z-index wow fadeInRight"
                  data-wow-duration="2s"
                >
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-rules mb-4 py-3 py-lg-0"
        style={{ backgroundImage: `url(${img14})` }}
      >
        <div className="container-fluid">
          <div className="row overflow-hidden">
            <div className="col-12 col-lg-6 p-lg-0">
              <div className="fables-vision-overlay fables-after-overlay fables-light-overlay bg-rules">
                <h2
                  className="fables-second-text-color my-0 font-30 font-weight-bold position-relative z-index wow fadeInLeft"
                  data-wow-duration="2s"
                >
                  We gain the trust and loyalty of <br /> our Clients
                </h2>
                <p
                  className="fables-forth-text-color position-relative z-index mt-4 mb-4 mb-md-5 wow fadeInLeft"
                  data-wow-duration="2s"
                >
                  {`
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.
    
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. and a search for 'lorem ipsum' will uncover.
    `}
                </p>
                <Link
                  to=""
                  className="btn fables-second-border-color fables-second-text-color fables-btn-rouned fables-hover-btn-color font-19 px-5 py-2 position-relative z-index wow fadeInLeft"
                  data-wow-duration="2s"
                >
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-4 mt-md-5">
          <div className="col-12 text-center wow fadeInDown">
            <h3 className="fables-about-top-head fables-forth-text-color font-15 semi-font d-inline-block bg-white position-relative">
              <span className="mx-4">Testimonials</span>
            </h3>
            <h2 className="fables-second-text-color mt-3 font-30 font-weight-bold text-center">
              what people say
            </h2>
          </div>
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 wow fadeInDown">
            <p className="mt-4 mt-md-3 mb-4 mb-md-5 fables-forth-text-color text-center">
              We’ve been lucky enough to work with so many industrial Clients .
              Check out what they’re saying.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 wow fadeInDown" data-wow-delay=".3s">
            <div className="fables-testimonial-block border fables-third-text-color py-4 px-6 mb-4 rounded position-relative">
              <div className="row">
                <div className="col-12 col-sm-3 text-center image-container shine-effect">
                  <img
                    src={img5}
                    alt="Fables Template"
                    className="fables-testimonial-block-img rounded-circle"
                  />
                </div>
                <div className="col-12 col-sm-8">
                  <div className="fables-testimonial-block-info">
                    <h3 className="fables-forth-text-color mt-4 mb-2 font-15 semi-font">
                      Billy Richards
                    </h3>
                    <h3 className="fables-fifth-text-color font-italic font-14 mt-2">
                      Chief Manager, Simba Co
                    </h3>
                  </div>
                </div>
              </div>
              <div className="fables-forth-text-color font-italic font-14 semi-font mt-3">
                No matter what issue or questions pops up, you are always there
                to assist me. Thank you so much for your excellent assistance
                and great customer support through years.
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 wow fadeInDown" data-wow-delay=".6s">
            <div className="fables-testimonial-block border fables-third-text-color py-4 px-6 mb-4 rounded position-relative">
              <div className="row">
                <div className="col-12 col-sm-3 text-center image-container shine-effect">
                  <img
                    src={img5}
                    alt="Fables Template"
                    className="fables-testimonial-block-img rounded-circle"
                  />
                </div>
                <div className="col-12 col-sm-8">
                  <div className="fables-testimonial-block-info">
                    <h3 className="fables-forth-text-color mt-4 mb-2 font-15 semi-font">
                      Billy Richards
                    </h3>
                    <h3 className="fables-fifth-text-color font-italic font-14 mt-2">
                      Chief Manager, Simba Co
                    </h3>
                  </div>
                </div>
              </div>
              <div className="fables-forth-text-color font-italic font-14 semi-font mt-3">
                No matter what issue or questions pops up, you are always there
                to assist me. Thank you so much for your excellent assistance
                and great customer support through years.
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 wow fadeInDown" data-wow-delay=".9s">
            <div className="fables-testimonial-block border fables-third-text-color py-4 px-6 mb-4 rounded position-relative">
              <div className="row">
                <div className="col-12 col-sm-3 text-center image-container shine-effect">
                  <img
                    src={img5}
                    alt="Fables Template"
                    className="fables-testimonial-block-img rounded-circle"
                  />
                </div>
                <div className="col-12 col-sm-8">
                  <div className="fables-testimonial-block-info">
                    <h3 className="fables-forth-text-color mt-4 mb-2 font-15 semi-font">
                      Billy Richards
                    </h3>
                    <h3 className="fables-fifth-text-color font-italic font-14 mt-2">
                      Chief Manager, Simba Co
                    </h3>
                  </div>
                </div>
              </div>
              <div className="fables-forth-text-color font-italic font-14 semi-font mt-3">
                No matter what issue or questions pops up, you are always there
                to assist me. Thank you so much for your excellent assistance
                and great customer support through years.
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 wow fadeInDown" data-wow-delay="1.2s">
            <div className="fables-testimonial-block border fables-third-text-color py-4 px-6 mb-4 rounded position-relative">
              <div className="row">
                <div className="col-12 col-sm-3 text-center image-container shine-effect">
                  <img
                    src={img5}
                    alt="Fables Template"
                    className="fables-testimonial-block-img rounded-circle"
                  />
                </div>
                <div className="col-12 col-sm-8">
                  <div className="fables-testimonial-block-info">
                    <h3 className="fables-forth-text-color mt-4 mb-2 font-15 semi-font">
                      Billy Richards
                    </h3>
                    <h3 className="fables-fifth-text-color font-italic font-14 mt-2">
                      Chief Manager, Simba Co
                    </h3>
                  </div>
                </div>
              </div>
              <div className="fables-forth-text-color font-italic font-14 semi-font mt-3">
                No matter what issue or questions pops up, you are always there
                to assist me. Thank you so much for your excellent assistance
                and great customer support through years.
              </div>
            </div>
          </div>
        </div>

        <div className="fables-team">
          <div className="row wow fadeInDown">
            <div className="col-12 text-center mt- mt-md-5">
              <h3 className="fables-about-top-head fables-forth-text-color font-15 semi-font d-inline-block bg-white position-relative">
                <span className="mx-4">Team</span>
              </h3>
              <h2 className="fables-second-text-color mt-3 font-30 font-weight-bold text-center">
                Meet The Team
              </h2>
            </div>
            <div className="col-12 col-md-8 offset-md-2">
              <p className="mt-4 mt-md-3 mb-4 mb-md-5 fables-forth-text-color text-center">
                We love what we do and we do it with passion. We value the
                experimentation, the reformation of the message, and the smart
                incentives
              </p>
            </div>
          </div>

          <div className="row">
            <div
              className="col-6 col-md-3 mb-4 mb-lg-0 wow fadeInDown"
              data-wow-delay=".3s"
            >
              <div className="card fables-team-block fables-team-data-hover fables-second-border-color">
                <img className="img-fluid" src={img6} alt="" />
                <div className="card-body">
                  <h5>
                    <Link
                      to="#"
                      className="team-name white-color white-color-hover"
                    >
                      JOHN MARTIN
                    </Link>
                  </h5>
                  <p className="fables-team-pos mt-2 mb-3 italic">Programmer</p>
                  <ul className="nav fables-team-social-links">
                    <li>
                      <Link to="#" target="_blank">
                        <span className="fables-iconlinkedin-icon fables-second-text-color fables-fifth-border-color fables-team-social-icon"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <span className="fables-icontwitter-icon fables-second-text-color fables-fifth-border-color fables-team-social-icon"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <span className="fables-iconinstagram-icon fables-second-text-color fables-fifth-border-color fables-team-social-icon"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-md-3 mb-4 mb-lg-0 wow fadeInDown"
              data-wow-delay=".3s"
            >
              <div className="card fables-team-block fables-team-data-hover fables-second-border-color">
                <img className="img-fluid" src={img7} alt="" />
                <div className="card-body">
                  <h5>
                    <Link
                      to="#"
                      className="team-name white-color white-color-hover"
                    >
                      JOHN MARTIN
                    </Link>
                  </h5>
                  <p className="fables-team-pos mt-2 mb-3 italic">Programmer</p>
                  <ul className="nav fables-team-social-links">
                    <li>
                      <Link to="#" target="_blank">
                        <span className="fables-iconlinkedin-icon fables-second-text-color fables-fifth-border-color fables-team-social-icon"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <span className="fables-icontwitter-icon fables-second-text-color fables-fifth-border-color fables-team-social-icon"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <span className="fables-iconinstagram-icon fables-second-text-color fables-fifth-border-color fables-team-social-icon"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-md-3 mb-4 mb-lg-0 wow fadeInDown"
              data-wow-delay=".3s"
            >
              <div className="card fables-team-block fables-team-data-hover fables-second-border-color">
                <img className="img-fluid" src={img8} alt="" />
                <div className="card-body">
                  <h5>
                    <Link
                      to="#"
                      className="team-name white-color white-color-hover"
                    >
                      JOHN MARTIN
                    </Link>
                  </h5>
                  <p className="fables-team-pos mt-2 mb-3 italic">Programmer</p>
                  <ul className="nav fables-team-social-links">
                    <li>
                      <Link to="#" target="_blank">
                        <span className="fables-iconlinkedin-icon fables-second-text-color fables-fifth-border-color fables-team-social-icon"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <span className="fables-icontwitter-icon fables-second-text-color fables-fifth-border-color fables-team-social-icon"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <span className="fables-iconinstagram-icon fables-second-text-color fables-fifth-border-color fables-team-social-icon"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-md-3 mb-4 mb-lg-0 wow fadeInDown"
              data-wow-delay=".3s"
            >
              <div className="card fables-team-block fables-team-data-hover fables-second-border-color">
                <img className="img-fluid" src={img9} alt="" />
                <div className="card-body">
                  <h5>
                    <Link
                      to="#"
                      className="team-name white-color white-color-hover"
                    >
                      JOHN MARTIN
                    </Link>
                  </h5>
                  <p className="fables-team-pos mt-2 mb-3 italic">Programmer</p>
                  <ul className="nav fables-team-social-links">
                    <li>
                      <Link to="#" target="_blank">
                        <span className="fables-iconlinkedin-icon fables-second-text-color fables-fifth-border-color fables-team-social-icon"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <span className="fables-icontwitter-icon fables-second-text-color fables-fifth-border-color fables-team-social-icon"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank">
                        <span className="fables-iconinstagram-icon fables-second-text-color fables-fifth-border-color fables-team-social-icon"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fables-partner-carousel owl-carousel owl-theme fables-carousel-border mt-0 mb-4 my-md-5 carousel-items-6 dots-0">
          <div className="item wow fadeInUp" data-wow-delay="0.3s">
            <img
              src={img10}
              alt="Fables Template"
              className="fables-partner-carousel-img fables-third-border-color"
            />
          </div>
          <div className="item wow fadeInUp" data-wow-delay="0.6s">
            <img
              src={img11}
              alt="Fables Template"
              className="fables-partner-carousel-img fables-third-border-color"
            />
          </div>
          <div>
            <img
              src={img10}
              alt="Fables Template"
              className="fables-partner-carousel-img fables-third-border-color"
            />
          </div>
          <div>
            <img
              src={img10}
              alt="Fables Template"
              className="fables-partner-carousel-img fables-third-border-color"
            />
          </div>
          <div>
            <img
              src={img10}
              alt="Fables Template"
              className="fables-partner-carousel-img fables-third-border-color"
            />
          </div>
          <div>
            <img
              src={img10}
              alt="Fables Template"
              className="fables-partner-carousel-img fables-third-border-color"
            />
          </div>
          <div>
            <img
              src={img10}
              alt="Fables Template"
              className="fables-partner-carousel-img fables-third-border-color"
            />
          </div>
          <div>
            <img
              src={img10}
              alt="Fables Template"
              className="fables-partner-carousel-img fables-third-border-color"
            />
          </div>
          <div>
            <img
              src={img10}
              alt="Fables Template"
              className="fables-partner-carousel-img fables-third-border-color"
            />
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
                    intelligent experiences across multiple platforms for a wide
                    range of applications.
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
                    <i className="ti-location-pin"></i> 12345 Fake ST NoWhere AB
                    Country
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

      <Outlet />
    </>
  );
}
