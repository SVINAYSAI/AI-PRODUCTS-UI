import "animate.css"; // Import Animate.css
import { useEffect, useState } from "react";
import "wow.js/css/libs/animate.css"; // Import WOW.js CSS

export default function Awesome() {
  const [counters, setCounters] = useState({
    clients: 0,
    members: 0,
    awards: 0,
    experience: 0,
  });

  useEffect(() => {
    const updateCounters = () => {
      const elements = document.querySelectorAll(".fables-counter-value");

      elements.forEach((element, index) => {
        const countValue = element.getAttribute("data-count");

        // Add a null check
        if (countValue !== null) {
          const currentValue =
            counters[Object.keys(counters)[index] as keyof typeof counters];

          if (currentValue < parseInt(countValue)) {
            setCounters((prevCounters) => {
              const counterKey = Object.keys(prevCounters)[
                index
              ] as keyof typeof prevCounters;
              return {
                ...prevCounters,
                [counterKey]: currentValue + 1,
              };
            });
          }
        }
      });
    };

    // Set up a timer to update counters after 6 seconds
    const timer = setTimeout(() => {
      updateCounters();
    }, 50);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, [counters]); // Include counters in the dependency array
  
  return (
    <>
      <body
        data-spy="scroll"
        data-target=".navbar"
        data-offset="40"
        id="home"
        className="pt-[5%]"
      >
        <section className="has-bg-img bg-img-2">
          <div className="container text-center">
            <h6 className="section-subtitle">We Are Awesome</h6>
            <h6 className="section-title mb-6">Some Fun Fucts</h6>
            <div className="widget-2">
              <div className="widget-item fables-counter">
                <i className="ti-cup"></i>
                <h6 className="title fables-counter-value" data-count="100">
                {counters.clients}+
                  </h6>
                <div className="subtitle">Awards Won</div>
              </div>
              <div className="widget-item fables-counter">
                <i className="ti-face-smile"></i>
                <h6 className="title fables-counter-value" data-count="100">
                {counters.members}+
                  </h6>
                <div className="subtitle">Happy Clients</div>
              </div>
              <div className="widget-item fables-counter">
                <i className="ti-blackboard"></i>
                <h6 className="title fables-counter-value" data-count="200">
                {counters.awards}+
                  </h6>
                <div className="subtitle">Project Completed</div>
              </div>
              <div className="widget-item fables-counter">
                <i className="ti-comments-smiley"></i>
                <h6 className="title fables-counter-value" data-count="1s">
                {counters.experience}K+
                  </h6>
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
                      src="https://www.aifats.com/virtual_directory/ui_images/components/assets/imgs/avatar.jpg"
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
                      src="https://www.aifats.com/virtual_directory/ui_images/components/assets/imgs/avatar-3.jpg"
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
