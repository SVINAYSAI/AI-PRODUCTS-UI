import Img1 from "../assets/img/team/1.jpg";
import Img2 from "../assets/img/team/2.jpg";
import Img3 from "../assets/img/team/3.jpg";
import Img4 from "../assets/img/team/4.jpg";

export default function Ourteam() {
  return (
    <>
      <div id="team1" className="our-team1-area area-padding">
        <div className="container mt-3 mb-6">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h2 className="mb-4">Our special team</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="single-team1-member1">
                <div className="team1-img">
                  <a href="#">
                    <img src={Img1} alt="" />
                  </a>
                  <div className="team1-social-icon text-center">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/abhisheksing.mandal?mibextid=hIlR13">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/Abhishek1Mandal">
                          <i className="bi bi-github"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/1abhishek_mandal/">
                          <i className="bi bi-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team1-content text-center">
                  <h4>Jhon Mickel</h4>
                  <p>Seo</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="single-team1-member1">
                <div className="team1-img">
                  <a href="#">
                    <img src={Img2} alt="" />
                  </a>
                  <div className="team1-social-icon text-center">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/abhisheksing.mandal?mibextid=hIlR13">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/Abhishek1Mandal">
                          <i className="bi bi-github"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/1abhishek_mandal/">
                          <i className="bi bi-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team1-content text-center">
                  <h4>Andrew Arnold</h4>
                  <p>Web Developer</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="single-team1-member1">
                <div className="team1-img">
                  <a href="#">
                    <img src={Img3} alt="" />
                  </a>
                  <div className="team1-social-icon text-center">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/abhisheksing.mandal?mibextid=hIlR13">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/Abhishek1Mandal">
                          <i className="bi bi-github"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/1abhishek_mandal/">
                          <i className="bi bi-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team1-content text-center">
                  <h4>Lellien Linda</h4>
                  <p>Web Design</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12">
              <div className="single-team1-member1">
                <div className="team1-img">
                  <a href="#">
                    <img src={Img4} alt="" />
                  </a>
                  <div className="team1-social-icon text-center">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/abhisheksing.mandal?mibextid=hIlR13">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/Abhishek1Mandal">
                          <i className="bi bi-github"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/1abhishek_mandal/">
                          <i className="bi bi-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team1-content text-center">
                  <h4>Jhon Powel</h4>
                  <p>Seo Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
