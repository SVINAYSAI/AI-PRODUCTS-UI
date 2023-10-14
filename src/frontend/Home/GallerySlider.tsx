
import { Link } from "react-router-dom";
import img6 from "../../components/assets/imgs/team1-1.jpg";
import img7 from "../../components/assets/imgs/team1-2.jpg";
import img8 from "../../components/assets/imgs/team1-3.jpg";
import img9 from "../../components/assets/imgs/team1-4.jpg";



export default function GallerySlider(){

  return (
    <>
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
        </div></>
  );
};
