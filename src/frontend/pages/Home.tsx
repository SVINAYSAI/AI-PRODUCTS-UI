import "../../components/frontend/assets/css/creative-studio.css";
import "../../components/frontend/assets/vendors/themify-icons/css/themify-icons.css";
import img from "../../components/frontend/assets/imgs/about.jpg";
import img1 from "../../components/frontend/assets/imgs/folio-1.jpg";
import img2 from "../../components/frontend/assets/imgs/folio-2.jpg";
import img3 from "../../components/frontend/assets/imgs/folio-3.jpg";
import img4 from "../../components/frontend/assets/imgs/folio-4.jpg";
import img5 from "../../components/frontend/assets/imgs/folio-5.jpg";
import img6 from "../../components/frontend/assets/imgs/folio-6.jpg";
import img7 from "../../components/frontend/assets/imgs/avatar.jpg";
// import img8 from "../../components/frontend/assets/imgs/avatar-1.jpg"
// import img9 from "../../components/frontend/assets/imgs/avatar-2.jpg"
import img10 from "../../components/frontend/assets/imgs/avatar-3.jpg";
// import img11 from "../../components/frontend/assets/imgs/avatar-4.jpg"
// import img12 from "../../components/frontend/assets/imgs/avatar-5.jpg"
// import img13 from "../../components/frontend/assets/imgs/avatar-6.jpg"
// import img14 from "../../components/frontend/assets/imgs/avatar-7.jpg"
import img15 from "../../components/frontend/assets/imgs/artificial-intelligence-AI.jpg";
import img16 from "../../components/frontend/assets/imgs/vr.jpg";
import img17 from "../../components/frontend/assets/imgs/ar.jpg";
import logo from "../../components/fats-logo/svg/logo-no-background.svg";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
        <header className="header">
          <div className="overlay">
            <h1 className="title font-italic pt-[5%]">FATS</h1>
            <h1 className="subtitle font-italic pt-4">
              FUTURE AI TECHNOLOGY'S
            </h1>
            <div className="buttons text-center pt-4 pb-4">
              <Link
                to="#service"
                className="btn btn-primary rounded w-lg btn-lg my-1"
              >
                Our Service
              </Link>
              <Link
                to="#contact"
                className="btn btn-outline-light rounded w-lg btn-lg my-1"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </header>

        <div className="box text-center shadow-lg ">
          <div className="box-item">
            <i className="ti-vector"></i>
            <h6 className="box-title">AI development</h6>
            <p>
              AI development involves creating algorithms that enable machines
              to perform tasks requiring human-like intelligence, such as
              learning and problem-solving.
            </p>
          </div>
          <div className="box-item">
            <i className="ti-filter"></i>
            <h6 className="box-title">Web Development</h6>
            <p>
              Web development encompasses designing, building, and maintaining
              websites, involving various technologies like HTML, CSS,
              JavaScript, and backend frameworks for functionality .
            </p>
          </div>
          <div className="box-item">
            <i className="ti-mobile"></i>
            <h6 className="box-title">App Design</h6>
            <p>
              App design is crafting user interfaces for mobile or desktop
              applications, focusing on aesthetics, usability, and user
              experience to enhance engagement.
            </p>
          </div>
        </div>

        <section id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5 col-lg-4">
                <img
                  src={img}
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                  className="w-100 img-thumbnail mb-3"
                />
              </div>
              <div className="col-md-7 col-lg-8">
                <h6 className="section-subtitle mb-0">We Create</h6>
                <h6 className="section-title mb-3">Awesome Work</h6>
                <p>
                  We specialize in AI product development for automation,
                  spanning Virtual Reality (VR) and Augmented Reality (AR)
                  solutions. Our VR applications, enhanced by AI, cater to
                  diverse sectors such as gaming, education, and film.
                </p>
                <p>
                  Leveraging open-world AR applications through mobile apps, we
                  offer immersive experiences. In the realm of pharmacy, AI
                  drives automation, streamlining processes.{" "}
                </p>
                <p>
                  Moreover, our expertise extends to automating digital
                  marketing procedures. With a focus on innovation, efficiency,
                  and user experience, we're committed to revolutionizing
                  industries through the synergy of AI, VR, AR, and automation
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container w-[90%] text-center shadow-md">
          <div className="container w-[70%]">
            <h6 className="section-subtitle">We See</h6>
            <h6 className="section-title mb-6">What Other Don't See.</h6>
            <div className="widget mb-4">
              <div className="widget-item">
                <i className="ti-notepad"></i>
                <h4>Planning</h4>
              </div>
              <div className="widget-item">
                <i className="ti-layout"></i>
                <h4>Mockup</h4>
              </div>
              <div className="widget-item">
                <i className="ti-filter"></i>
                <h4>Develope</h4>
              </div>
              <div className="widget-item">
                <i className="ti-thumb-up"></i>
                <h4>Provide</h4>
              </div>
            </div>
          </div>
        </section>

        <section id="service">
          <div className="container">
            <h6 className="section-subtitle text-center">Makes Happen</h6>
            <h5 className="section-title text-center mb-6">Our Service</h5>
            <div className="row">
              <div className="col-sm-4 col-md-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <h2 className="mb-4">
                      <i className="ti-filter text-primary"></i>
                    </h2>
                    <h6 className="card-title">AI Products</h6>
                    <p>
                      We transform text into images, videos, charts, speech,
                      avatars, and music.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <h2 className="mb-4">
                      <i className="ti-paint-roller text-primary"></i>
                    </h2>
                    <h6 className="card-title">IOT Based on Chat-GPT</h6>
                    <p>
                      IoT integrated with Chat-GPT for smart, conversational
                      device control.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <h2 className="mb-4">
                      <i className="ti-ruler-pencil text-primary"></i>
                    </h2>
                    <h6 className="card-title">Virtual Reality</h6>
                    <p>
                      Developing VR-based app for 3D modeling on multiple
                      platforms.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <h2 className="mb-4">
                      <i className="ti-layers text-primary"></i>
                    </h2>
                    <h6 className="card-title">Augmented Reality</h6>
                    <p>
                      Leading in AR, creating AI-enhanced software for
                      interactive user experiences.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <h2 className="mb-4">
                      <i className="ti-bolt text-primary"></i>
                    </h2>
                    <h6 className="card-title">AI in Pharma</h6>
                    <p>
                      AI revolutionizes Pharma with drug discovery, personalized
                      treatment, and analytics.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <h2 className="mb-4">
                      <i className="ti-palette text-primary"></i>
                    </h2>
                    <h6 className="card-title">Education</h6>
                    <p>
                      Enhancing learning through technology, personalized
                      curricula, and innovative teaching methods.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <h2 className="mb-4">
                      <i className="ti-stats-up text-primary"></i>
                    </h2>
                    <h6 className="card-title">Telecommunication</h6>
                    <p>
                      Expanding global connectivity through advanced networks
                      and innovative telecom services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <h2 className="mb-4">
                      <i className="ti-location-arrow text-primary"></i>
                    </h2>
                    <h6 className="card-title">Movies</h6>
                    <p>
                      Crafting compelling stories through visual artistry and
                      innovative filmmaking techniques.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <h2 className="mb-4">
                      <i className="ti-location-arrow text-primary"></i>
                    </h2>
                    <h6 className="card-title">Marketing Chatbots</h6>
                    <p>
                      Automating customer engagement and sales through
                      intelligent marketing chatbots.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container text-center">
            <h6 className="section-subtitle">Our Awesome Works</h6>
            <h6 className="section-title mb-5">Our Portfolio</h6>
            <div className="row">
              <div className="col-sm-4">
                <div className="img-wrapper">
                  <img
                    src={img1}
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                  />
                  <div className="overlay">
                    <div className="overlay-infos">
                      <h5>Project Title</h5>

                      <Link to="">
                        <i className="ti-zoom-in"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-link"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="img-wrapper">
                  <img
                    src={img2}
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                  />
                  <div className="overlay">
                    <div className="overlay-infos">
                      <h5>Project Title</h5>
                      <Link to="">
                        <i className="ti-zoom-in"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-link"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="img-wrapper">
                  <img
                    src={img3}
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                  />
                  <div className="overlay">
                    <div className="overlay-infos">
                      <h5>Project Title</h5>
                      <Link to="">
                        <i className="ti-zoom-in"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-link"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="img-wrapper">
                  <img
                    src={img4}
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                  />
                  <div className="overlay">
                    <div className="overlay-infos">
                      <h5>Project Title</h5>
                      <Link to="">
                        <i className="ti-zoom-in"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-link"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="img-wrapper">
                  <img
                    src={img5}
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                  />
                  <div className="overlay">
                    <div className="overlay-infos">
                      <h5>Project Title</h5>
                      <Link to="">
                        <i className="ti-zoom-in"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-link"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="img-wrapper">
                  <img
                    src={img6}
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                  />
                  <div className="overlay">
                    <div className="overlay-infos">
                      <h5>Project Title</h5>
                      <Link to="">
                        <i className="ti-zoom-in"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-link"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team">
          <div className="container">
            <h6 className="section-subtitle text-center">Meet With</h6>
            <h6 className="section-title mb-5 text-center">Our Team</h6>
            {/* <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="card text-center mb-4">
                  <img
                    className="card-img-top inset"
                    src="/src/components/frontend/assets/imgs/avatar.jpg"
                  />
                  <div className="card-body">
                    <h6 className="small text-primary font-weight-bold">
                      FOUNDER & CEO
                    </h6>
                    <h5 className="card-title">MAHESH</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magni quos esse tenetur illo qui, nostrum.
                    </p>
                    <div className="socials">
                      <Link to="">
                        <i className="ti-facebook"></i>{" "}
                      </Link>
                      <Link to="">
                        <i className="ti-github"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-dropbox"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="card text-center mb-4">
                  <img
                    className="card-img-top inset"
                    src="/src/components/frontend/assets/imgs/avatar-5.jpg"
                  />
                  <div className="card-body">
                    <h6 className="small text-primary font-weight-bold">
                      DIRECTOR & CEO
                    </h6>
                    <h5 className="card-title">ABHISHEK</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magni quos esse tenetur illo qui, nostrum.
                    </p>
                    <div className="socials">
                      <Link to="">
                        <i className="ti-facebook"></i>{" "}
                      </Link>
                      <Link to="">
                        <i className="ti-github"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-dropbox"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="card text-center mb-4">
                  <img
                    className="card-img-top inset"
                    src="/src/components/frontend/assets/imgs/avatar-2.jpg"
                  />
                  <div className="card-body">
                    <h6 className="small text-primary font-weight-bold">
                      SOFTWARE TESTER
                    </h6>
                    <h5 className="card-title">JYOSHNA</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magni quos esse tenetur illo qui, nostrum.
                    </p>
                    <div className="socials">
                      <Link to="">
                        <i className="ti-facebook"></i>{" "}
                      </Link>
                      <Link to="">
                        <i className="ti-github"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-dropbox"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="card text-center mb-4">
                  <img
                    className="card-img-top inset"
                    src="/src/components/frontend/assets/imgs/avatar-6.jpg"
                  />
                  <div className="card-body">
                    <h6 className="small text-primary font-weight-bold">
                      DEVELOPER
                    </h6>
                    <h5 className="card-title">S.VINAY SAI</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magni quos esse tenetur illo qui, nostrum.
                    </p>
                    <div className="socials">
                      <Link to="">
                        <i className="ti-facebook"></i>{" "}
                      </Link>
                      <Link to="">
                        <i className="ti-github"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-dropbox"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="card text-center mb-4">
                  <img
                    className="card-img-top inset"
                    src="/src/components/frontend/assets/imgs/avatar-2.jpg"
                  />
                  <div className="card-body">
                    <h6 className="small text-primary font-weight-bold">
                      DEVELOPER
                    </h6>
                    <h5 className="card-title">SAI VANI</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magni quos esse tenetur illo qui, nostrum.
                    </p>
                    <div className="socials">
                      <Link to="">
                        <i className="ti-facebook"></i>{" "}
                      </Link>
                      <Link to="">
                        <i className="ti-github"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-dropbox"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="card text-center mb-4">
                  <img
                    className="card-img-top inset"
                    src="/src/components/frontend/assets/imgs/avatar-1.jpg"
                  />
                  <div className="card-body">
                    <h6 className="small text-primary font-weight-bold">
                      DEVELOPER
                    </h6>
                    <h5 className="card-title">ASHRITHA</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magni quos esse tenetur illo qui, nostrum.
                    </p>
                    <div className="socials">
                      <Link to="">
                        <i className="ti-facebook"></i>{" "}
                      </Link>
                      <Link to="">
                        <i className="ti-github"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-dropbox"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="card text-center mb-4">
                  <img
                    className="card-img-top inset"
                    src="/src/components/frontend/assets/imgs/avatar-4.jpg"
                  />
                  <div className="card-body">
                    <h6 className="small text-primary font-weight-bold">
                      DEVELOPER
                    </h6>
                    <h5 className="card-title">SRIPAL</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magni quos esse tenetur illo qui, nostrum.
                    </p>
                    <div className="socials">
                      <Link to="">
                        <i className="ti-facebook"></i>{" "}
                      </Link>
                      <Link to="">
                        <i className="ti-github"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-dropbox"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="card text-center mb-4">
                  <img
                    className="card-img-top inset"
                    src="/src/components/frontend/assets/imgs/avatar-4.jpg"
                  />
                  <div className="card-body">
                    <h6 className="small text-primary font-weight-bold">
                      DEVELOPER
                    </h6>
                    <h5 className="card-title">VAMSHI</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magni quos esse tenetur illo qui, nostrum.
                    </p>
                    <div className="socials">
                      <Link to="">
                        <i className="ti-facebook"></i>{" "}
                      </Link>
                      <Link to="">
                        <i className="ti-github"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-dropbox"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="card text-center mb-4">
                  <img
                    className="card-img-top inset"
                    src="/src/components/frontend/assets/imgs/avatar-6.jpg"
                  />
                  <div className="card-body">
                    <h6 className="small text-primary font-weight-bold">
                      DEVELOPER
                    </h6>
                    <h5 className="card-title">LAXMAN</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magni quos esse tenetur illo qui, nostrum.
                    </p>
                    <div className="socials">
                      <Link to="">
                        <i className="ti-facebook"></i>{" "}
                      </Link>
                      <Link to="">
                        <i className="ti-github"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-dropbox"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="card text-center mb-4">
                  <img
                    className="card-img-top inset"
                    src="/src/components/frontend/assets/imgs/avatar-7.jpg"
                  />
                  <div className="card-body">
                    <h6 className="small text-primary font-weight-bold">
                      DEVELOPER
                    </h6>
                    <h5 className="card-title">KAUSHIK</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magni quos esse tenetur illo qui, nostrum.
                    </p>
                    <div className="socials">
                      <Link to="">
                        <i className="ti-facebook"></i>{" "}
                      </Link>
                      <Link to="">
                        <i className="ti-github"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-dropbox"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="card text-center mb-4">
                  <img
                    className="card-img-top inset"
                    src="/src/components/frontend/assets/imgs/avatar-4.jpg"
                  />
                  <div className="card-body">
                    <h6 className="small text-primary font-weight-bold">
                      SERVER MANAGER
                    </h6>
                    <h5 className="card-title">PRASHANTH</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Magni quos esse tenetur illo qui, nostrum.
                    </p>
                    <div className="socials">
                      <Link to="">
                        <i className="ti-facebook"></i>{" "}
                      </Link>
                      <Link to="">
                        <i className="ti-github"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-dropbox"></i>
                      </Link>
                      <Link to="">
                        <i className="ti-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        <section className="has-bg-img bg-img-2">
          <div className="container text-center">
            <h6 className="section-subtitle">We Are Awesome</h6>
            <h6 className="section-title mb-6">Some Fun Fucts</h6>
            <div className="widget-2">
              <div className="widget-item">
                <i className="ti-cup"></i>
                <h6 className="title">100+</h6>
                <div className="subtitle">Awards Won</div>
              </div>
              <div className="widget-item">
                <i className="ti-face-smile"></i>
                <h6 className="title">100+</h6>
                <div className="subtitle">Happy Clients</div>
              </div>
              <div className="widget-item">
                <i className="ti-blackboard"></i>
                <h6 className="title">845+</h6>
                <div className="subtitle">Project Completed</div>
              </div>
              <div className="widget-item">
                <i className="ti-comments-smiley"></i>
                <h6 className="title">15K+</h6>
                <div className="subtitle">Comments</div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonial">
          <div className="container">
            <h6 className="section-subtitle text-center">Testimonial</h6>
            <h6 className="section-title text-center mb-6">
              What Our Clients Says
            </h6>
            <div className="row">
              <div className="col-md-6">
                <div className="testimonial-wrapper">
                  <div className="img-holder">
                    <img
                      src={img10}
                      alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                    />
                  </div>
                  <div className="body">
                    <p className="subtitle">
                      Outstanding AI solutions for text conversion, VR, and AR.
                      Exceptional cross-platform compatibility. Transforms user
                      experience with intelligent, interactive functionalities.
                      Highly recommend!
                    </p>
                    <h6 className="title">Richard Reb</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="testimonial-wrapper">
                  <div className="img-holder">
                    <img
                      src={img7}
                      alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                    />
                  </div>
                  <div className="body">
                    <p className="subtitle">
                      Impressed by the AI-driven services in text-to-media,
                      Virtual and Augmented Reality. The cross-platform
                      functionality is seamless. An innovative approach that
                      elevates user experience. Highly recommended.
                    </p>
                    <h6 className="title">John Doe</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="has-bg-img py-lg">
          <div className="container text-center">
            <button
              type="button"
              className="btn btn-outline-primary play-control"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              <i className="ti-control-play"></i>
            </button>
            <h6 className="section-title mt-4">See Our Intro Video</h6>
          </div>
        </section>

        <div
          className="modal fade"
          id="exampleModalCenter"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content">
              {/* <iframe
                width="100%"
                height="475"
                src="https://www.youtube.com/embed/TP4THzsAa3M"
                frameBorder="0"
                allowFullScreen
              ></iframe> */}
            </div>
          </div>
        </div>

        <section id="blog">
          <div className="container">
            <h6 className="section-subtitle text-center">News Feeds</h6>
            <h6 className="section-title mb-6 text-center">Our Blog</h6>

            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/3 px-4 mb-4">
                <div className="card blog-post my-4 my-sm-5 my-md-0">
                  <img
                    src={img15}
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                  />
                  <div className="card-body">
                    <div className="details mb-3">
                      <Link to="">
                        <i className="ti-comments"></i> 123
                      </Link>
                      <Link to="">
                        <i className="ti-eye"></i> 123
                      </Link>
                    </div>
                    <h5 className="card-title">Ai products</h5>
                    <p>
                      Leveraging AI, we offer innovative solutions like
                      converting text to images, videos, charts, and speech.
                      Additionally, we create personalized AI avatars and music
                      compositions, all generated directly from textual input.
                    </p>
                    <Link to="" className="d-block mt-3">
                      Read More...
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-4">
                <div className="card blog-post my-4 my-sm-5 my-md-0">
                  <img
                    src={img16}
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                  />
                  <div className="card-body">
                    <div className="details mb-3">
                      <Link to="">
                        <i className="ti-comments"></i> 434
                      </Link>
                      <Link to="">
                        <i className="ti-eye"></i> 987
                      </Link>
                    </div>
                    <h5 className="card-title">Virtual Reality</h5>
                    <p>
                      We are revolutionizing Virtual Reality by automating the
                      gaming process with AI. Our cross-platform app is
                      compatible with VR, Windows, Linux, and Mac, offering
                      seamless, intelligent experiences for gamers.
                    </p>
                    <Link to="" className="d-block mt-3">
                      Read More...
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-4">
                <div className="card blog-post my-4 my-sm-5 my-md-0">
                  <img
                    src={img17}
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                  />
                  <div className="card-body">
                    <div className="details mb-3">
                      <Link to="">
                        <i className="ti-comments"></i> 164
                      </Link>
                      <Link to="">
                        <i className="ti-eye"></i> 425
                      </Link>
                    </div>
                    <h5 className="card-title">Augmented Reality</h5>
                    <p>
                      We are at the forefront of Augmented Reality, developing
                      AI-powered software that enriches user experience. Our app
                      seamlessly integrates with AR platforms to deliver
                      intelligent, interactive functionalities.
                    </p>
                    <Link to="" className="d-block mt-3">
                      Read More...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                    <p className="mt-3">
                      Copyright{" "}
                      <script>document.write(new Date().getFullYear())</script>{" "}
                      &copy;{" "}
                      <Link
                        className="d-inline text-primary"
                        to="http://www.devcrud.com"
                      >
                        DevCRUD
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
      </body>
      <Outlet />
    </>
  );
}
