import "../assets/vendor/animate.css/animate.min.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";

import b1 from "../assets/img/hero-carousel/1.jpg";
import b2 from "../assets/img/hero-carousel/2.jpg";
import b3 from "../assets/img/hero-carousel/3.jpg";

export default function Header() {
  return (
    <>
      <section id="hero">
        <div className="hero-container">
          <div
            id="heroCarousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <ol
              id="hero-carousel-indicators"
              className="carousel-indicators"
            ></ol>

            <div className="carousel-inner" role="listbox">
              <div
                className="carousel-item active"
                style={{
                  backgroundImage: `url(${b1})`,
                }}
              >
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      The Best Business Information{" "}
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      We're In The Business Of Helping You Start Your Business
                    </p>
                    <a
                      href="#about"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="carousel-item"
                style={{
                  backgroundImage: `url(${b2})`,
                }}
              >
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      At vero eos et accusamus
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Helping Business Security & Peace of Mind for Your Family
                    </p>
                    <a
                      href="#about"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="carousel-item"
                style={{
                  backgroundImage: `url(${b3})`,
                }}
              >
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      Temporibus autem quibusdam
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Beatae vitae dicta sunt explicabo. Nemo enim ipsam
                      voluptatem
                    </p>
                    <a
                      href="#about"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#heroCarousel"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bi bi-chevron-left"
                aria-hidden="true"
              ></span>
            </a>

            <a
              className="carousel-control-next"
              href="#heroCarousel"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bi bi-chevron-right"
                aria-hidden="true"
              ></span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
