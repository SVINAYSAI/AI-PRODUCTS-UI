import { Link } from "react-router-dom";
import "animate.css"; // Import Animate.css
import { useEffect } from "react";
import WOW from "wow.js"; // Import WOW.js
import "wow.js/css/libs/animate.css"; // Import WOW.js CSS

export default function OurServices() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <>
      <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
        <section id="service">
          <div className="container">
            <h6 className="section-subtitle text-center wow fadeInLeft" data-wow-duration="1.5s">Makes Happen</h6>
            <h5 className="section-title text-center mb-6 wow fadeInLeft" data-wow-duration="1.5s">Our Service</h5>
            <div className="row">
              <div className="col-sm-4 col-md-3 wow fadeInDown"
            data-wow-delay="1.3s">
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
              <div className="col-sm-4 col-md-3 wow fadeInDown"
            data-wow-delay="1.5s">
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
              <div className="col-sm-4 col-md-3 wow fadeInDown"
            data-wow-delay="1.7s">
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
              <div className="col-sm-4 col-md-3 wow fadeInDown"
            data-wow-delay="1.9s">
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
              <div className="col-sm-4 col-md-3 wow fadeInDown"
            data-wow-delay="2.1s">
                <div className="card mb-4">
                  <div className="card-body">
                    <h2 className="mb-4">
                      <i className="ti-bolt text-primary"></i>
                    </h2>
                    <h6 className="card-title">AI in Pharma</h6>
                    <p>
                      AI streamlines Pharma: improving drug discovery,
                      diagnostics, and personalized therapiess
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-md-3 wow fadeInDown"
            data-wow-delay="2.3s">
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
              <div className="col-sm-4 col-md-3 wow fadeInDown"
            data-wow-delay="2.5s">
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
              <div className="col-sm-4 col-md-3 wow fadeInDown"
            data-wow-delay="2.7s">
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
              <div className="col-sm-4 col-md-3 wow fadeInDown"
            data-wow-delay="2.9s">
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
                    src="https://www.aifats.com/virtual_directory/ui_images/components/assets/imgs/folio-1.jpg"
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
                    src="https://www.aifats.com/virtual_directory/ui_images/components/assets/imgs/folio-2.jpg"
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
                    src="https://www.aifats.com/virtual_directory/ui_images/components/assets/imgs/folio-3.jpg"
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
                    src="https://www.aifats.com/virtual_directory/ui_images/components/assets/imgs/folio-4.jpg"
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
                    src="https://www.aifats.com/virtual_directory/ui_images/components/assets/imgs/folio-5.jpg"
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
                    src="https://www.aifats.com/virtual_directory/ui_images/components/assets/imgs/folio-6.jpg"
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
      </body>
    </>
  );
}
