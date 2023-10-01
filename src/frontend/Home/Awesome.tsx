import img1 from "../../components/assets/imgs/avatar.jpg";
import img2 from "../../components/assets/imgs/avatar-3.jpg";

export default function Awesome() {
  return (
    <>
      <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
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
                      src={img1}
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
                      src={img2}
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
              <iframe
                title="fats"
                width="100%"
                height="475"
                src="https://www.youtube.com/watch?v=FG5-O_fuNhE"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
