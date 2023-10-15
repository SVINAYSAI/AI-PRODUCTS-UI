import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./HomePages/Footer";

import img from "../../components/assets/imgs/hp_innovacion2.jpg";
import img1 from "../../components/assets/imgs/IMG_8573-1078.jpg";
import img5 from "../../components/assets/imgs/testimonial-img.png";
import img6 from "../../components/assets/imgs/team1-1.jpg";
import img7 from "../../components/assets/imgs/team1-2.jpg";
import img8 from "../../components/assets/imgs/team1-3.jpg";
import img9 from "../../components/assets/imgs/team1-4.jpg";
import img10 from "../../components/assets/imgs/partner1.jpg";
import img11 from "../../components/assets/imgs/partner2-1.jpg";
import img13 from "../../components/assets/imgs/mission-img.jpg";
import img14 from "../../components/assets/imgs/vision-img.jpg";


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
                <i className="ti-vector"></i>
                <h6 className="box-title">AI development</h6>
                <p>
                  AI development involves creating algorithms that enable
                  machines to perform tasks requiring human-like intelligence,
                  such as learning and problem-solving.
                </p>
              </div>
            </div>
            <div
              className="col-12 col-md-4 mb-4 mb-md-0 wow fadeInDown"
              data-wow-delay=".6s"
            >
              <div className="fables-about-icon-style">
                <i className="ti-filter"></i>
                <h6 className="box-title">Web Development</h6>
                <p>
                  Web development encompasses designing, building, and
                  maintaining websites, involving various technologies like
                  HTML, CSS, JavaScript, and backend frameworks for
                  functionality .
                </p>
              </div>
            </div>
            <div
              className="col-12 col-md-4 mb-4 mb-md-0 wow fadeInDown"
              data-wow-delay=".9s"
            >
              <div className="fables-about-icon-style">
                <i className="ti-mobile"></i>
                <h6 className="box-title">App Design</h6>
                <p>
                  App design is crafting user interfaces for mobile or desktop
                  applications, focusing on aesthetics, usability, and user
                  experience to enhance engagement.
                </p>
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

          <div className="container flex pl-[13%]">
            <div className="col-6 col-md-3 items-center">
              <h2 className="font-weight-bold">{satisfiedClients}</h2>
              <span className="">SATISFIED CLIENTS</span>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="font-weight-bold">{companyMembers}</h2>
              <span className="">COMPANY MEMBERS</span>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="font-weight-bold ">{awwardsWin}</h2>
              <span className="">AWWARDS WIN</span>
            </div>
            <div className="col-6 col-md-3">
              <div className="fables-counter">
                <h2 className="font-weight-bold">{yearsExperience}</h2>
                <span className="">YEARS EXPIRIENCE</span>
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
 {/* team */}
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


        <div className="container flex">
          <div className="">
            <img
              src={img10}
              alt="Fables Template"
              className="fables-partner-carousel-img fables-third-border-color"
            />
          </div>
          <div className="">
            <img
              src={img11}
              alt="Fables Template"
              className="fables-partner-carousel-img fables-third-border-color"
            />
          </div>
          <div className="">
            <img
              src={img10}
              alt="Fables Template"
              className="fables-partner-carousel-img fables-third-border-color"
            />
          </div>
          <div className="">
            <img
              src={img10}
              alt="Fables Template"
              className="fables-partner-carousel-img fables-third-border-color"
            />
          </div>
          <div className="">
            <img
              src={img10}
              alt="Fables Template"
              className="fables-partner-carousel-img fables-third-border-color"
            />
          </div>
          <div className="">
            <img
              src={img10}
              alt="Fables Template"
              className="fables-partner-carousel-img fables-third-border-color"
            />
          </div>
          <div className="">
            <img
              src={img10}
              alt="Fables Template"
              className="fables-partner-carousel-img fables-third-border-color"
            />
          </div>
          <div className="">
            <img
              src={img10}
              alt="Fables Template"
              className="fables-partner-carousel-img fables-third-border-color"
            />
          </div>
          <div className="">
            <img
              src={img10}
              alt="Fables Template"
              className="fables-partner-carousel-img fables-third-border-color"
            />
          </div>
        </div>
      </div>

      {/* <!-- /End page content --> */}
      <Footer />
    </>
  );
}
